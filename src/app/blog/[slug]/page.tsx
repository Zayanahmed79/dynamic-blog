"use client";
import { useEffect, useState } from "react";
import { Blog } from "@/components/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

const BlogPage = ({ params }: BlogPageProps) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(blog?.comments || []); // Initialize with existing comments

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(`/api/blog/${params.slug}`);
        const data = await response.json();
        

        
        if (data) {
          setBlog(data); // Set blog data if response is valid
          setComments(data.comments); // Set the initial comments
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
      
    };
    

    if (params.slug) {
      fetchBlogPost();
    }
  }, [params.slug]);

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!newComment.trim()) return; // Prevent empty comments

    const comment = {
      name: "Anonymous", // You can add a user name feature if needed
      comment: newComment,
      postedAt: new Date().toISOString(),
    };

    // Send the new comment to the API (you need to handle this in your backend)
    const response = await fetch(`/api/blog/${params.slug}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });

    if (response.ok) {
      setComments((prevComments) => [...prevComments, comment]); // Add the new comment to the list
      setNewComment(""); // Clear the input field
    } else {
      console.error("Failed to submit comment");
    }
  };

  if (!blog) return <div>Loading...</div>;

  return (  
    <div className="container mx-auto p-6 md:px-44 sm:px-10 px-4">
      

      {/* Blog Title */}
      <h1 className="text-3xl font-semibold mb-4">{blog.title}</h1>

      {/* Author and Date with Author Image */}
      <div className="flex items-center mb-4">

        {blog.authorImage?.asset?.url && (
          <div className="h-[600px] w-full">
          <Image
            src={blog.authorImage.asset.url}
            alt={blog.authorName}
            width={100}
            height={100}
            className="w-full h-full object-cover rounded-full mr-3"
          />
          </div>

        )}
        <span className="text-sm text-gray-500">By {blog.authorName}</span>
        <span className="text-sm text-gray-500 ml-4">
          {new Date(blog.publishingDate).toDateString()}
        </span>
      </div>

      {/* Featured Image */}
      <div className="flex sm:h-[500px] w-full">
        {blog.featuredImage?.asset?.url && (
        <Image
          src={blog.featuredImage.asset.url}
          alt={blog.title}
          height={700}
          width={700}
          className="w-full h-full object-contain mb-4 overflow-hidden"
        />
      )}
      </div>
      
       
      {/* Tags */}
      <div className="mt-4 py-3">
        {blog.tags?.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-300 text-sm text-gray-700 px-3 py-1 rounded-sm mr-2"
          >
            {tag}
          </span>
        ))}
      </div>
        
      {/* Blog Content (Rich Text) */}
      <div className="prose">
        {blog.content && Array.isArray(blog.content) ?
         (
          <PortableText value={blog.content} />
          
        ) : (
          <p>No content available</p>
          
        )}
      </div>

      {/* Comment Section */}
      <div className="mt-8 sm:px-16 py-8">
        <h3 className="text-2xl font-semibold mb-4  leading-loose ">Comments</h3>
        <hr className="border-t border-gray-500 my-4"></hr>

        {/* Display Existing Comments */}
        <div>
          {comments.length === 0 ? (
            <p>No comments yet. Be the first to comment!</p>
          ) : (
            <div>
              {comments.map((comment, index) => (
                <div key={index} className="border-b border-gray-200 mb-4 pb-4">
                  <div className="flex flex-row justify-between items-center p-2 " >
                    <p className="font-semibold text-gray-600">{comment.name}</p>
                    <p className="text-gray-500 text-sm">
                    {new Date(comment.postedAt).toLocaleString()}
                    </p>
                  </div>
                  
                  <p className="text-gray-700 px-3">{comment.comment}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Comment Form */}
        <form onSubmit={handleCommentSubmit} className="mb-6">
          <input
            type="text"
            value={newComment}
            onChange={handleCommentChange}
            className="w-full p-3 pb-10 border border-gray-300 rounded-lg mb-3"
            placeholder="Add a comment..."
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 w-full sm:w-fit"
          >
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogPage;
