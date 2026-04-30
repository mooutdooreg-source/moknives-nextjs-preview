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
  _request: Request,
  context: { params: Promise<{ path: string[] }> }
) {
  const { path: routePath } = await context.params;
  const relativePath = routePath.filter(Boolean).join('/');
  const assetsRoot = path.resolve(process.cwd(), 'assets');
  const filePath = path.resolve(assetsRoot, relativePath);

  if (!filePath.startsWith(`${assetsRoot}${path.sep}`)) {
    return new Response('Forbidden', { status: 403 });
  }

  try {
    const file = await readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    return new Response(new Uint8Array(file), {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'no-store',
      },
    });
  } catch {
    return new Response('Not Found', { status: 404 });
  }
}
