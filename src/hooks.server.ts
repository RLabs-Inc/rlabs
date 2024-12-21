import { type Handle } from '@sveltejs/kit';
import { withClerkHandler } from 'svelte-clerk/server';
import { PUBLIC_CLERK_SIGN_IN_URL, PUBLIC_CLERK_SIGN_UP_URL } from '$env/static/public';
import { sequence } from '@sveltejs/kit/hooks';

export const handle: Handle = sequence(
  withClerkHandler({
    debug: false,
    signInUrl: PUBLIC_CLERK_SIGN_IN_URL,
    signUpUrl: PUBLIC_CLERK_SIGN_UP_URL
  }),
  async ({ event, resolve }) => {
    return await resolve(event);
  }
);
