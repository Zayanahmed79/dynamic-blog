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
          <div key={blog.slug.current} className=" overflow-hidden group  ">
            <Link href={`/blog/${blog.slug.current}`}>
              {/* Main Image */}
              {blog.featuredImage?.asset?.url && (
                <div className="h-[400px] w-full object-cover transform transition-transform duration-500 group-hover:scale-110 ">
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
            </Link>
            {/* Blog Content */}
            <div className="px-2 py-4 ml-0">
              {/* Author and Date */}
              <div className="flex justify-between items-center space-x-5 mt-2 ">
                <div className="flex  flex-col ">
                  <span className="text-sm font-semibold hover:text-[#ccff00] text-[#f0f0f0] ">
                    {blog.authorName}
                  </span>
                  <span className="text-sm text-gray-300 ">
                    {new Date(blog.publishingDate).toDateString()}
                  </span>
                </div>
                {/* <span className="text-sm text-gray-500">{calculateReadTime(blog.content)} min read</span> */}
              </div>

              {/* Author Image */}
              {blog.authorImage?.asset?.url && (
                <div className="h-[24px] w-full ">
                  <Image
                    src={blog.authorImage.asset.url}
                    alt={blog.title}
                    height={100}
                    width={100}
                    quality={100}
                    className="w-full h-full rounded-full"
                  />
                </div>
              )}
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {blog.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 text-sm hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <Link href={`/blog/${blog.slug.current}`}>
                <h2 className="text-[#f0f0f0] pt-3 font-normal  text-[24px] hover:text-[#ccff00] tracking-wide text-lg ">
                  {blog.title}
                </h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
  );
};

export default AllBlogs;