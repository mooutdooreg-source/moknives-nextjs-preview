import { NextRequest } from 'next/server';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const mimeTypes: Record<string, string> = {
  '.avif': 'image/avif',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
};

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  const params = await context.params;
  const safeSegments = params.path.filter(Boolean);
  const relativePath = safeSegments.join('/');
  const assetsRoot = path.join(process.cwd(), 'assets');
  const filePath = path.normalize(path.join(assetsRoot, relativePath));

  if (!filePath.startsWith(assetsRoot)) {
    return new Response('Forbidden', { status: 403 });
  }

  try {
    const file = await readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    return new Response(file, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch {
    return new Response('Not Found', { status: 404 });
  }
}
