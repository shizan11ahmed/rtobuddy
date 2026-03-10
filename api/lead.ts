import crypto from 'crypto';
import { Request, Response } from 'express';

const hashData = (data: string | undefined) => {
  if (!data) return undefined;
  return crypto.createHash('sha256').update(data.trim().toLowerCase()).digest('hex');
};

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

    const { name, email, phone, fbc, fbp } = body;

    if (!phone) {
      return res.status(400).json({ error: 'Phone number is required' });
    }

    // Process Phone
    let cleanPhone = String(phone).replace(/\D/g, '');
    if (cleanPhone.length === 10) {
      cleanPhone = '91' + cleanPhone;
    }
    const hashedPhone = hashData(cleanPhone);

    // Process Email
    const hashedEmail = hashData(email);

    // Process Name
    let fn, ln;
    if (name) {
      const parts = String(name).trim().split(/\s+/);
      fn = parts[0];
      ln = parts.length > 1 ? parts.slice(1).join(' ') : undefined;
    }
    const hashedFn = hashData(fn);
    const hashedLn = hashData(ln);

    // Client info
    const client_ip_address = req.headers['x-forwarded-for'] || req.socket?.remoteAddress;
    const client_user_agent = req.headers['user-agent'];

    // External ID (Use hashed email, or hash of phone if email is missing)
    const external_id = hashedEmail || (hashedPhone ? hashData(cleanPhone + 'ext') : undefined);

    const userData: any = {
      client_ip_address,
      client_user_agent,
      fbc,
      fbp,
      external_id
    };

    if (hashedPhone) userData.ph = [hashedPhone];
    if (hashedEmail) userData.em = [hashedEmail];
    if (hashedFn) userData.fn = [hashedFn];
    if (hashedLn) userData.ln = [hashedLn];

    // Clean up undefined values
    Object.keys(userData).forEach(key => userData[key] === undefined && delete userData[key]);

    const metaPayload = {
      data: [
        {
          event_name: 'Lead',
          event_time: Math.floor(Date.now() / 1000),
          action_source: 'website',
          event_source_url: 'https://rtobuddy.in',
          user_data: userData
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
