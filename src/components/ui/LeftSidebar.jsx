"use client";

import { useSidebar } from "@/components/ui/sidebar";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Book, Calendar, FileText, Menu, Search } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

// Sidebar Toggle Button
function SidebarToggle() {
  const { toggleSidebar, state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <div className={`flex transition-all duration-600 ease-in-out ${isCollapsed ? "justify-center w-full" : ""}`}>
      <button onClick={toggleSidebar} className="h-10 z-20 transition-transform duration-600">
        <Menu size={28} className="text-primary" />
      </button>
    </div>
  );
}

// Header
function SidebarHeaderContent() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <SidebarHeader className="flex flex-col gap-2">
      <div className="flex items-center justify-between mt-20 px-7">
        <div
          className={`transition-all duration-200 ${
            isCollapsed ? "opacity-0 w-0" : "opacity-100"
          }`}
        >
          <p className="text-2xl text-primary">Stories</p>
        </div>
        <SidebarToggle />
      </div>
    </SidebarHeader>
  );
}

// Card
function SidebarCard({ img, alt, title, subtitle, hideText }) {
  return (
    <div
      className={`flex items-center gap-3 ${
        hideText ? "justify-center" : ""
      }`}
    >
      <div className="relative h-[50px] w-[60px] rounded-md overflow-hidden">
        <Image src={img} alt={alt} fill className="object-cover" />
      </div>
      {!hideText && (
        <div>
          <h3 className="font-light text-primary">{title}</h3>
          <p className="text-sm font-light text-gray-500">{subtitle}</p>
        </div>
      )}
    </div>
  );
}

// Search
function SidebarSearch({ placeholder, isCollapsed }) {
  return isCollapsed ? (
    <Search className="h-7 w-7 text-gray-500 mx-auto mb-6" />
  ) : (
    <div className="relative mb-6">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
      <Input placeholder={placeholder} className="pl-8" />
    </div>
  );
}

// Main Content
function SidebarMainContent() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <SidebarContent>
      <div className="px-8 py-2">
        <SidebarMenu>
          <Tabs defaultValue="blogs" className="w-full">
            {!isCollapsed && (
              <TabsList className="w-full flex mb-4 px-0">
                <TabsTrigger
                  value="blogs"
                  className="text-base text-gray-500 font-light px-2 py-1 rounded-none transition border-0 border-b-transparent shadow-none data-[state=active]:border-b-2 data-[state=active]:border-secondary data-[state=active]:text-secondary data-[state=active]:font-medium"
                >
                  Blogs
                </TabsTrigger>
                <TabsTrigger
                  value="journal"
                  className="text-base text-gray-500 font-light px-2 py-1 rounded-none transition border-0 border-b-transparent data-[state=active]:border-b-2 data-[state=active]:border-secondary data-[state=active]:text-secondary data-[state=active]:font-medium"
                >
                  Journal
                </TabsTrigger>
                <TabsTrigger
                  value="planner"
                  className="text-base text-gray-500 font-light px-2 py-1 rounded-none transition border-0 border-b-transparent data-[state=active]:border-b-2 data-[state=active]:border-secondary data-[state=active]:text-secondary data-[state=active]:font-medium"
                >
                  Planner
                </TabsTrigger>
              </TabsList>
            )}

            <TabsContent value="blogs" className="space-y-6">
              <SidebarSearch
                placeholder="Search Here"
                isCollapsed={isCollapsed}
              />
              <SidebarCard
                img="/img2.avif"
                alt="Liked Blogs"
                title="Liked Blogs"
                subtitle="12 Blogs"
                hideText={isCollapsed}
              />
              <SidebarCard
                img="/img2.avif"
                alt="Viewed Blogs"
                title="Viewed Blogs"
                subtitle="10 Blogs"
                hideText={isCollapsed}
              />
            </TabsContent>

            <TabsContent value="journal" className="space-y-6">
              <SidebarSearch
                placeholder="Search Journals"
                isCollapsed={isCollapsed}
              />
              <SidebarCard
                img="/img2.avif"
                alt="Recent Journals"
                title="Recent Journals"
                subtitle="8 Entries"
                hideText={isCollapsed}
              />
              <SidebarCard
                img="/img2.avif"
                alt="Saved Journals"
                title="Saved Journals"
                subtitle="5 Entries"
                hideText={isCollapsed}
              />
            </TabsContent>

            <TabsContent value="planner" className="space-y-6">
              <SidebarSearch
                placeholder="Search Plans"
                isCollapsed={isCollapsed}
              />
              <SidebarCard
                img="/img2.avif"
                alt="Upcoming Trips"
                title="Upcoming Trips"
                subtitle="3 Trips"
                hideText={isCollapsed}
              />
              <SidebarCard
                img="/img2.avif"
                alt="Past Trips"
                title="Past Trips"
                subtitle="7 Trips"
                hideText={isCollapsed}
              />
            </TabsContent>
          </Tabs>
        </SidebarMenu>
      </div>
    </SidebarContent>
  );
}

// Final Sidebar Component
export default function LeftSidebar() {
  return (
    <Sidebar
    data-aos="fade-right"
      collapsible="icon"
      className="bg-white shadow-md transition-[width] duration-700 ease-in-out"
      style={{
        "--sidebar-width": "20rem",
        "--sidebar-width-icon": "8rem",
      }}
    >
      <SidebarHeaderContent />
      <SidebarMainContent />
      <SidebarRail />
    </Sidebar>
  );
}
