"use client"
// import { X } from "lucide-react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

function SidebarBlogItem({ image, category, title }) {
  return (
    <div className="flex gap-3">
      <img
        src={image || "/mount.jpg"}
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
  )
}

// Sidebar component
export default function RightSide() {
//   const [isOpen, setIsOpen] = useState(false)

  const recentBlogs = [
    { category: "Adventures", title: "5 adventures to experience in Nepal" },
    { category: "Trekking", title: "ABC Trekking" },
    { category: "Spiritual", title: "Namobudhha: A Fresh Start to Spiritual Journey" },
    { category: "Biking", title: "Walking in the Sands of Sukute Beach" },
  ]

  const popularBlogs = [
    { category: "Adventures", title: "5 Adventures to Experience in Nepal" },
    { category: "Trekking", title: "ABC Trekking" },
  ]

//   if (!isOpen) {
//     return (
//       <div className="fixed top-36 right-9 z-50">
//         <Button variant="outline" size="icon" onClick={() => setIsOpen(true)}>
//           <SlidersHorizontal className="text-secondary" size={20} />
//         </Button>
//       </div>
//     )
//   }

  return (
<aside className="hidden lg:fixed right-0 top-0 pt-24 w-80 border-l px-7 z-40 py-4 min-h-screen bg-white lg:block" data-aos="fade-left">
<div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-light text-primary/90">More</h2>
        {/* <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}> */}
          {/* <X className="h-7 w-7 text-primary/90" /> */}
        {/* </Button> */}
      </div>

      {/* Recently Added */}
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

      {/* Popular Blogs */}
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
  )
}
