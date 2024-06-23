import { sha256 } from '../lib/hash.js';

export async function onRequestPost({ request, env }) {
  let input;
  try {
    input = await request.formData();
  } catch (err) {
    return new Response('Error parsing form data', { status: 400 });
  }

  let hash, pass;
  try {
    hash = await sha256(env.PASSWORD);
    pass = await sha256(input.get('password'));
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }

  if (hash === pass) {
    // valid password
    return new Response('', {
      status: 302,
      headers: {
        'Set-Cookie': `cfp-auth=${hash}; Max-Age=3600; Path=/; HttpOnly; Secure`,
        Location: input.get('redirect') || '/',
      },
    });
  }

  // invalid password
  return new Response('', {
    status: 302,
    headers: {
      Location: (input.get('redirectPath') || '/') + '?error=true',
    },
  });
}
