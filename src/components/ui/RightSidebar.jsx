"use client";
import { X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "./separator";

function SidebarBlogItem({ image, category, title }) {
  return (
    <div className="flex gap-3">
      <img
        src={image || "/img3.avif"}
        alt={title}
        className="h-[70px] w-[80px] rounded-md object-cover shrink-0"
      />
      <div className="flex flex-col">
        <span className="w-fit bg-primary/5 px-2 py-1 font-light rounded-full text-xs text-primary">
          {category}
        </span>
        <h4 className="text-sm font-light text-primary line-clamp-2">{title}</h4>
      </div>
    </div>
  );
}

export default function RightSidebar({ isOpen, onClose }) {
  // if (!isOpen) return null;

  const recentBlogs = [
    { category: "Adventures", title: "5 adventures to experience in Nepal" },
    { category: "Trekking", title: "ABC Trekking" },
    { category: "Spiritual", title: "Namobudhha: A Fresh Start to Spiritual Journey" },
    { category: "Biking", title: "Walking in the Sands of Sukute Beach" },
  ];

  const popularBlogs = [
    { category: "Adventures", title: "5 Adventures to Experience in Nepal" },
    { category: "Trekking", title: "ABC Trekking" },
  ];

  return (
<aside
  className={`
    fixed right-0 top-0 pt-24 sm:w-80 w-full border-l sm:px-7 px-10 z-40 py-4 min-h-screen bg-white
    transform transition-transform duration-600 ease-in-out
    ${isOpen ? "translate-x-0" : "translate-x-full"}
  `}
>      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-light text-primary/90">More</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-7 w-7 text-primary/90" />
        </Button>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-light text-xl text-primary/90">Recently Added</h3>
          <Link href="#" className="text-lg font-light text-gray-500 hover:underline">See All</Link>
        </div>
        <div className="space-y-6">
          {recentBlogs.map((blog, i) => (
            <SidebarBlogItem key={i} {...blog} />
          ))}
        </div>
      </div>

      <Separator className="mb-4" />

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-light text-xl text-primary/90">Popular Blogs</h3>
          <Link href="#" className="text-lg font-light text-gray-500 hover:underline">See All</Link>
        </div>
        <div className="space-y-4">
          {popularBlogs.map((blog, i) => (
            <SidebarBlogItem key={i} {...blog} />
          ))}
        </div>
      </div>
    </aside>
  );
}
