import crypto from 'crypto';
import { Request, Response } from 'express';

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    let body = req.body;
    
    // Safely parse the body if it comes in as a string
    if (typeof body === 'string') {
      try {
        body = body ? JSON.parse(body) : {};
      } catch (e) {
        console.error('Failed to parse JSON body:', e);
        return res.status(400).json({ error: 'Invalid JSON body' });
      }
    }

    const phone = body?.phone;

    if (!phone) {
      return res.status(400).json({ error: 'Phone number is required' });
    }

    // Clean and hash the phone number using SHA-256
    // Meta requires the phone number to be hashed in SHA-256, lowercase, and include the country code.
    let cleanPhone = String(phone).replace(/\D/g, ''); // Remove non-digits
    
    // If it's a 10-digit number, assume it's an Indian number and prepend '91'
    if (cleanPhone.length === 10) {
      cleanPhone = '91' + cleanPhone;
    }

    const hashedPhone = crypto.createHash('sha256').update(cleanPhone).digest('hex');

    const metaPayload = {
      data: [
        {
          event_name: 'Lead',
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          event_source_url: 'https://rtobuddy.in',
          user_data: {
            ph: [hashedPhone]
          }
        }
      ]
    };

    const metaResponse = await fetch(`https://graph.facebook.com/v19.0/797628746135833/events?access_token=${process.env.META_ACCESS_TOKEN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(metaPayload)
    });

    // Safely parse the Meta API response
    const metaResponseText = await metaResponse.text();
    let metaResult;
    try {
      metaResult = metaResponseText ? JSON.parse(metaResponseText) : {};
    } catch (e) {
      metaResult = { rawText: metaResponseText };
    }

    if (!metaResponse.ok) {
      console.error('Meta API Error:', metaResult);
      return res.status(500).json({ error: 'Failed to send event to Meta', details: metaResult });
    }

    return res.status(200).json({ success: true, metaResult });
  } catch (error) {
    console.error('Server Error handling lead:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
