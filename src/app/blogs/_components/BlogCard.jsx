"use client";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BlogCard({ data }) {
  const [liked, setLiked] = useState(false);

  return (
    <Link href={`/blogs/${data.slug}`} className="group">
      <div className="relative rounded-md shadow-lg shadow-gray-300 group-hover:opacity-60">
        <Image
          src={data.image}
          alt={data.title}
          width={254}
          height={143}
          className="h-[143px] w-full object-cover rounded-md"
        />
        <div className="absolute top-2 left-2 bg-gray-700/60 text-white text-xs px-2 py-1 rounded-lg font-extralight">
          {data.category}
        </div>
        <div
          onClick={() => setLiked(!liked)}
          className="absolute top-2 right-2 flex items-center justify-center text-white rounded-full cursor-pointer p-0 bg-gray-700/50 h-6 w-6"
        >
          <Heart
            className="h-4 w-4"
            fill={liked ? "#fff" : "none"} 
            stroke={liked ? "#fff" : "currentColor"} 
          />
        </div>
      </div>

      <div className="py-3">
        <h3 className=" text-primary text-lg">{data.title}</h3>
        <div className="flex justify-start items-center text-sm text-secondary/90">
          <span className="font-extralight">{data.date}</span>
          <span className="mx-1">.</span>
          <span className="font-extralight">{data.readTime}</span>
        </div>
      </div>
    </Link>
  );
}
