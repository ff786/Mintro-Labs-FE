import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RECIPIENT = 'connect@mintrolabs.com';

function escapeHtml(value: string) {
    return value.replace(/[&<>'"]/g, (character) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;',
    })[character] ?? character);
}

export async function POST(request: Request) {
    let body: { email?: unknown; website?: unknown };

    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }

    // Hidden honeypot field: bots receive a success response but no email is sent.
    if (typeof body.website === 'string' && body.website.trim()) {
        return NextResponse.json({ ok: true });
    }

    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    if (!EMAIL_PATTERN.test(email) || email.length > 254) {
        return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    if (!apiKey || !from) {
        console.error('Newsletter email is not configured: missing RESEND_API_KEY or RESEND_FROM_EMAIL.');
        return NextResponse.json({ error: 'Newsletter is temporarily unavailable.' }, { status: 503 });
    }

    try {
        const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from,
                to: [RECIPIENT],
                reply_to: email,
                subject: `New Mintro Labs newsletter signup: ${email}`,
                html: `
          <h2>New newsletter signup</h2>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p>This message was sent from the Mintro Labs website footer.</p>
        `,
            }),
            cache: 'no-store',
        });

        if (!resendResponse.ok) {
            console.error('Resend newsletter delivery failed:', await resendResponse.text());
            return NextResponse.json({ error: 'Unable to submit your email right now.' }, { status: 502 });
        }

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error('Newsletter request failed:', error);
        return NextResponse.json({ error: 'Unable to submit your email right now.' }, { status: 502 });
    }
}
