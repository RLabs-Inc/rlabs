// hooks.server.ts
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { withClerkHandler } from 'svelte-clerk/server';
import { PUBLIC_CLERK_SIGN_IN_URL, PUBLIC_CLERK_SIGN_UP_URL } from '$env/static/public';
import { building } from '$app/environment';

const handleCaching: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);
  
  // Skip caching during build
  if (building) return response;
  
  const path = event.url.pathname;
  
  // Cache static assets aggressively
  if (path.startsWith('/static/') || path.includes('._app/immutable/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  // Cache API responses with stale-while-revalidate
  else if (path.startsWith('/api/')) {
    response.headers.set('Cache-Control', 'public, max-age=60, stale-while-revalidate=600');
  }
  // Default caching for other routes
  else {
    response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
  }
  
  // Enable Brotli/Gzip compression
  if (!response.headers.has('Content-Encoding')) {
    response.headers.set('Content-Encoding', 'br, gzip');
  }
  
  return response;
};

export const handle: Handle = sequence(
  handleCaching,
  withClerkHandler({
    debug: false,
    signInUrl: PUBLIC_CLERK_SIGN_IN_URL,
    signUpUrl: PUBLIC_CLERK_SIGN_UP_URL
  })
);
