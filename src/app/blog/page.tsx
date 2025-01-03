"use client";
import React, { useEffect, useState } from "react";
import { Blog } from "@/components/types";  // Import the Blog type
import Link from "next/link";
import Image from "next/image";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs"); // Replace with your API route
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {blogs.map((blog) => (
        <div
          key={blog.slug.current}
          className="bg-white border  shadow-lg overflow-hidden  "
        >
          {/* Main Image */}
          {blog.featuredImage?.asset?.url && (
            <div className="h-[800px] w-full ">
            <Image
              src={blog.featuredImage.asset.url}
              alt={blog.title}
              height={600}
              width={600}
              quality={100}
              className="w-full h-full object-cover"
            />
            </div>
          )}

          {/* Blog Content */}
          <div className="p-4">
            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-900">
              {blog.title}
            </h2>

            {/* Author and Date */}
            <div className="flex justify-between items-center mt-3">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">
                  {blog.authorName}
                </span>
                <span className="text-sm text-gray-500">
                  {new Date(blog.publishingDate).toDateString()}
                </span>
              </div>
              {/* <span className="text-sm text-gray-500">{calculateReadTime(blog.content)} min read</span> */}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              {blog.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 text-sm text-gray-700 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Link to Full Blog */}
          <Link
            href={`/blog/${blog.slug.current}`}
            className="block mt-4 text-center py-2 bg-blue-600 text-white font-semibold rounded-b-lg hover:bg-blue-700"
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllBlogs;