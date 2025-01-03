import { PortableTextBlock } from "next-sanity";

export interface Comment {
    name: string;
    comment: string;
    postedAt: string;
  }
  
  export interface FeaturedImage {
    asset: {
      url: string;
    };
  }
  export interface AuthorImage {
    asset: {
      url: string;
    };
  }

  
  
  export interface Blog {
    title: string;
    content: PortableTextBlock[];
    slug: { current: string };
    authorName: string;
    authorImage?: AuthorImage;
    publishingDate: string;
    featuredImage?: FeaturedImage;
    tags: string[];
    comments: Comment[];
  }
  