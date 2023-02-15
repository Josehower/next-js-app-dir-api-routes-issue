import { headers } from 'next/headers';

export async function POST() {
  headers();

  return new Response(JSON.stringify({ url: 'https://www.example.com' }));
}
