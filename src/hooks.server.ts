// hooks.server.ts
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { withClerkHandler } from 'svelte-clerk/server';
import { PUBLIC_CLERK_SIGN_IN_URL, PUBLIC_CLERK_SIGN_UP_URL } from '$env/static/public';

export const handle: Handle = sequence(
  withClerkHandler({
    debug: false,
    signInUrl: PUBLIC_CLERK_SIGN_IN_URL,
    signUpUrl: PUBLIC_CLERK_SIGN_UP_URL
  })
);
