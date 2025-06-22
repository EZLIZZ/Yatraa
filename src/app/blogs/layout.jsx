"use client"
import ProtectedRoute from "@/auth/ProtectedRoute";
import LeftSidebar from "@/components/ui/LeftSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
// import RightSidebar from "@/components/ui/RightSidebar";
export default function BlogsLayout({ children }) {
    return (
      <ProtectedRoute>
      <div className="flex min-h-screen pt-16">
        <SidebarProvider><LeftSidebar /></SidebarProvider>
        
  
        <main className="flex-1 sm:pl-16 px-0 overflow-y-auto">
          {children}
        </main>
  
        {/* <RightSidebar /> */}
      </div>
      </ProtectedRoute>
    );
  }
  