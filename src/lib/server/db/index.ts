import { drizzle } from 'drizzle-orm/neon-http';
import { POSTGRES_URL } from '$env/static/private';

export const db = drizzle(POSTGRES_URL);
