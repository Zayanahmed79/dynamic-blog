import { client } from '@/sanity/lib/client';
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const query = `*[_type == "blog"]{
      title,
      content,
      slug,
      authorName,
      publishingDate,
      featuredImage {
        asset -> {
          url
        }
      },
      tags,
      comments[] {
        name,
        comment,
        postedAt
      }
    }`;

    const blogs = await client.fetch(query); 
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs.' }, { status: 500 });
  }
}

export async function POST() {
  return NextResponse.json({ error: 'Method POST is not allowed.' }, { status: 405 });
}
