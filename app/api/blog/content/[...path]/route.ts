import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path: pathArray } = await params;
    
    // Security: Prevent directory traversal attacks
    const safePath = pathArray.join('/');
    if (safePath.includes('..') || safePath.includes('~')) {
      return new NextResponse('Invalid path', { status: 400 });
    }
    
    // Construct full file path
    const filePath = path.join(process.cwd(), 'app/blog/content', ...pathArray);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return new NextResponse('File not found', { status: 404 });
    }
    
    // Check if it's actually a file (not a directory)
    const stats = fs.statSync(filePath);
    if (!stats.isFile()) {
      return new NextResponse('Not a file', { status: 400 });
    }
    
    // Read file
    const fileBuffer = fs.readFileSync(filePath);
    
    // Determine content type based on file extension
    const ext = path.extname(filePath).toLowerCase();
    const contentType = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg', 
      '.png': 'image/png',
      '.webp': 'image/webp',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
      '.bmp': 'image/bmp',
      '.tiff': 'image/tiff',
      '.ico': 'image/x-icon'
    }[ext] || 'application/octet-stream';
    
    // Set cache headers for better performance
    const headers = new Headers({
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=31536000, immutable', // 1 year cache
      'Content-Length': fileBuffer.length.toString()
    });
    
    return new NextResponse(fileBuffer, { headers });
    
  } catch (error) {
    console.error('Error serving static file:', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}

