export const runtime = 'nodejs';

export function GET(request: Request) {
  return new Response(`Hello world`);
}