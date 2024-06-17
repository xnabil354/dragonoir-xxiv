import { NextRequest, NextResponse } from 'next/server';

const RECAPTCHA_SECRET_KEY = "6LcyLvopAAAAADIFCeDJ_rnj2_z4Dz_IR0XDaMi7";
const BOT_TOKEN = "7190175151:AAHaGL4M2Q71UB93NPUJ0sOAy29WSUjp1w4";
const CHAT_ID = "1365766425";
const TELEGRAM_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

export async function POST(req: NextRequest) {
  const { recaptchaToken, message } = await req.json();

  // Verify reCAPTCHA token
  const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
  });

  const recaptchaData = await recaptchaResponse.json();

  if (!recaptchaData.success) {
    return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
  }

  // Send message to Telegram
  await fetch(TELEGRAM_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: 'Markdown',
    }),
  });

  return NextResponse.json({ success: 'Message sent successfully' }, { status: 200 });
};
