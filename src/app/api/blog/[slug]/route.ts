import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client'; // Make sure this client is configured correctly

// Define GET method to fetch a single blog post based on slug
export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    // Sanity query to fetch the blog post based on slug
    const query = `*[_type == "blog" && slug.current == $slug][0]{
      title,
      content,
      slug,
      authorName,
      authorImage,
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

    // Fetch the blog data using the slug parameter
    const blog = await client.fetch(query, { slug: params.slug });

    // If the blog doesn't exist, return a 404 response
    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    // Return the fetched blog as JSON with a 200 status
    return NextResponse.json(blog, { status: 200 });

  } catch (error) {
    console.error('Error fetching blog post:', error);
    // If there’s an error, return a 500 status with an error message
    return NextResponse.json({ error: 'Failed to fetch blog post' }, { status: 500 });
  }
}

