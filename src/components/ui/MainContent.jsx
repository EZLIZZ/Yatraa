"use client"
import { useSidebar } from "@/components/ui/sidebar"

export default function MainWrapper({ children }) {
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <main
      className={`flex-1 transition-all duration-300 overflow-y-auto ${
        isCollapsed ? "ml-[5rem]" : "ml-[6rem]"
      }`}
    >
      {children}
    </main>
  )
}
