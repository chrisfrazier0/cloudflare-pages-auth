import { sha256 } from '../lib/hash';
import { getTemplate } from '../lib/template';

export async function onRequest({ request, next, env }) {
  const { pathname, searchParams } = new URL(request.url);

  // allow form submission to /auth
  if (pathname === '/auth' && request.method === 'POST') {
    return next();
  }

  // allow access if valid cfp-auth cookie is present
  let hash;
  try {
    hash = await sha256(env.PASSWORD);
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }

  if (request.headers.get('cookie')?.includes(`cfp-auth=${hash}`)) {
    return next();
  }

  // show the auth page
  const withError = !!searchParams.get('error');
  return new Response(getTemplate({ redirectPath: pathname, withError }), {
    headers: {
      'content-type': 'text/html',
    },
  });
}
