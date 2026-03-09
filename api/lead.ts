import crypto from 'crypto';
import { Request, Response } from 'express';

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({ error: 'Phone number is required' });
    }

    // Clean and hash the phone number using SHA-256
    // Meta requires the phone number to be hashed in SHA-256, lowercase, and include the country code.
    let cleanPhone = phone.replace(/\D/g, ''); // Remove non-digits
    
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

    const metaResult = await metaResponse.json();

    if (!metaResponse.ok) {
      console.error('Meta API Error:', metaResult);
      return res.status(500).json({ error: 'Failed to send event to Meta', details: metaResult });
    }

    return res.status(200).json({ success: true, metaResult });
  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
