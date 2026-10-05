import type { APIRoute } from 'astro';

export const GET: APIRoute = () => new Response(
  '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=/"><meta name="robots" content="noindex"><title>Haoyu Zhu — Page moved</title></head><body><a href="/">Continue to Haoyu Zhu’s website</a></body></html>',
  { headers: { 'Content-Type': 'text/html; charset=utf-8' } },
);
