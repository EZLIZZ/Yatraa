"use client";
import { useState } from "react";
import BlogList from "./_components/BlogList";
import ProtectedRoute from "@/auth/ProtectedRoute";
import RightSidebar from "@/components/ui/RightSidebar";
import { SlidersHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { destinationPages } from "@/lib/DestinationPages";
import RecentlyAdded from "./_components/RecentlyAdded"

const BlogNav = [
  { id: 1, name: "All" },
  { id: 2, name: "Trekking" },
  { id: 3, name: "Mountain Biking" },
  { id: 4, name: "Adventures" },
  { id: 5, name: "Recently Added" },
];

export default function Blog() {
  const [active, setActive] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [madeForYouPage, setMadeForYouPage] = useState(0);
  const [popularPage, setPopularPage] = useState(0);

  return (
    <ProtectedRoute>
      <div className="sm:pl-10 pl-7 pr-9 mt-8">
        <p className="text-2xl text-primary pb-5">Blogs</p>
        <div className="flex justify-between">
          <div className="flex pb-7">
            {BlogNav.map((nav) => (
              <p
                onClick={() => setActive(nav.name)}
                className={`cursor-pointer sm:px-6 px-1 py-0.5 rounded-sm font-extralight text-md transition-all ${
                  active === nav.name ? "bg-primary text-white" : "text-primary"
                }`}
                key={nav.id}
              >
                {nav.name}
              </p>
            ))}
          </div>
          <button
            onClick={() => setSidebarOpen((prev) => !prev)}
            className="mb-4 bg-white text-primary px-4 py-1.5 rounded-md text-sm"
          >
            <SlidersHorizontal />
          </button>
        </div>

        {/* Made for You Section  */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <p className="text-primary text-xl font-light">Made for You</p>
            <div className="flex space-x-2">
              {destinationPages.map((_, index) => (
                <button
                  key={`made-for-you-${index}`}
                  onClick={() => setMadeForYouPage(index)}
                  className={cn(
                    "w-8 h-1 rounded-full transition-colors duration-300",
                    index === madeForYouPage ? "bg-primary" : "bg-gray-200 hover:bg-gray-300"
                  )}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <BlogList data={destinationPages[madeForYouPage]} />
        </div>

        {/* Popular in Tavoris Section  */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <p className="text-primary text-xl font-light">Popular in Tavoris</p>
            <div className="flex space-x-2">
              {destinationPages.map((_, index) => (
                <button
                  key={`popular-${index}`}
                  onClick={() => setPopularPage(index)}
                  className={cn(
                    "w-8 h-1 rounded-full transition-colors duration-300",
                    index === popularPage ? "bg-primary" : "bg-gray-200 hover:bg-gray-300"
                  )}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <BlogList data={destinationPages[popularPage]} />
        </div>
        
        {/* Recently Added Section*/}
        <p className="text-primary text-xl font-light py-4">Recently Added</p>
        <RecentlyAdded data={destinationPages[0]} />
      </div>

      <RightSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </ProtectedRoute>
  );
}