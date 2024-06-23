import { Buffer } from 'node:buffer';

export async function sha256(str) {
  const buffer = new TextEncoder().encode(str);
  const digest = await crypto.subtle.digest(
    {
      name: 'SHA-256',
    },
    buffer
  );
  return Buffer.from(digest).toString('base64');
}
