import type { NextApiRequest, NextApiResponse } from 'next';

const RECAPTCHA_SECRET_KEY = '6LcyLvopAAAAALZbkPi9RKYUBKFbxH1mOgWfMSXS';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { recaptchaToken } = req.body;

  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
  });

  const data = await response.json();

  if (data.success) {
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ success: false, error: data['error-codes'] });
  }
}
