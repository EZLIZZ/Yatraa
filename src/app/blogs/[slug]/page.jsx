"use client";

import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";
import { BlogsData } from "@/lib/BlogsData";
import Image from "next/image";
import RightSide from "../_components/RightSide";
import { Separator } from "@/components/ui/separator";
import ProtectedRoute from "@/auth/ProtectedRoute";
import Spinner from "@/components/ui/spinner"; 
import Comments from "../_components/Comments"
import Link from "next/link";

export default function BlogSlugPage() {
  const params = useParams();
  const slug = params.slug;

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundBlog = BlogsData.find((post) => post.slug === slug);
      if (!foundBlog) {
        notFound();
      } else {
        setBlog(foundBlog);
        setLoading(false);
      }
    }, 1500); 
  }, [slug]);

  if (loading || !blog) return <Spinner />;

  return (
    <ProtectedRoute>
      <div className="px-7 sm:px-12 py-10 w-full sm:w-[70%]">
      <div className="text-sm text-primary flex items-center gap-2 mb-4">
      <Link href="/blogs" className="hover:underline text-primary">
        Blogs
      </Link>
      <span className="text-gray-400">&gt;</span>
      <span className="text-primary  truncate underline max-w-[60%]">{blog.title}</span>
    </div>
        <h1 className="text-3xl font-bold text-primary mb-4">{blog.title}</h1>
        <p className="text-secondary mb-6">
          {blog.date} • {blog.readTime}
        </p>

        <Image
          src={blog.image}
          alt={blog.title}
          width={718}
          height={287}
          className="rounded-lg object-cover w-full h-[287px] mb-8 transition-all duration-300"
        />

        <div className="text-gray-500 font-light leading-relaxed space-y-12">
          <div>
            <p className="text-center text-primary text-xl mb-2">Introduction</p>
            <p>{blog.introduction}</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Separator className="!w-[30%] bg-secondary" />
          </div>

          <div className="grid grid-cols-2 gap-7">
            <div className="space-y-2">
              <h2 className="text-xl font-light text-primary">1. {blog.subtitle}</h2>
              <p>{blog.subtitleText}</p>
            </div>
            <img className="rounded-lg" src={blog.subtitlephoto} />
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-light text-primary text-center">2. {blog.subtitle2}</h2>
            <p>{blog.subtitle2Text}</p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {blog.subtitle2photos?.map((photo, idx) =>
                photo ? (
                  <Image
                    key={idx}
                    src={typeof photo === "string" ? photo : photo.src}
                    alt={
                      typeof photo === "string"
                        ? `Photo ${idx + 1}`
                        : photo.alt || `Photo ${idx + 1}`
                    }
                    width={400}
                    height={300}
                    className="rounded-md object-contain w-full h-auto"
                  />
                ) : null
              )}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <Separator className="!w-[30%] bg-secondary" />
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-light text-center text-primary">Conclusion</h2>
            <p>{blog.conclusion}</p>
          </div>
          <p className="text-left text-xl font-light text-primary">Comments</p>
            
<Comments />
        </div>

        <RightSide />
      </div>
    </ProtectedRoute>
  );
}
