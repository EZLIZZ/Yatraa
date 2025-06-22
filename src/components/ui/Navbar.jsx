"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Bell,
  MessageSquareText,
  Search,
  Menu,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/store/slices/authSlice";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Navbar() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  const NavbarItems = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Activities", href: "/" },
    { id: 3, name: "Stories", href: "/" },
    { id: 4, name: "Latest", href: "/" },
    // { id: 5, name: "Browse By", href: "/" },
    // { id: 6, name: "Trekking", href: "/" },
  ];

  const NavIcons = [
    { id: 1, icon: Search, badgeCount: 0 },
    { id: 2, icon: MessageSquareText, badgeCount: 6 },
    { id: 3, icon: Bell, badgeCount: 1 },
  ];

  return (
    <div className="fixed w-full h-[70px] bg-[#4b416b] flex items-center justify-between px-5 sm:px-12 py-2 z-50">
      <div className="flex items-center gap-5 sm:gap-10">
        {/* Logo */}
        <Link href="/">
          <img
            src="/nextW.png"
            className="h-9 w-32 sm:w-40 object-contain"
            alt="Logo"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden sm:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex pl-10 gap-7">
              {NavbarItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <Link
                    href={item.href}
                    className={`text-xl tracking-wide text-white cursor-pointer font-light ${
                      item.id === 6 ? "font-semibold" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4 pr-2 sm:gap-5 sm:pr-5">
        {!user ? (
          <Link
            href="/blogs"
            className="bg-white text-[#4b416b] text-sm font-medium px-4 py-1.5 rounded-md"
          >
            Explore
          </Link>
        ) : (
          <>
            <Search className="text-xl text-white cursor-pointer" />

            {/* Mobile Menu Icon */}
            <div className="relative sm:hidden">
              <Menu
                className="text-xl text-white cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
              />
              {menuOpen && (
                <div className="absolute right-0 top-10 bg-white rounded-md shadow-md w-44 z-50">
                  {NavbarItems.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="border-t my-1" />
                  {/* <button
                    onClick={() => {
                      toggleSidebar();
                      setMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-indigo-600 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <SlidersHorizontal size={16} />
                    Slides Panel
                  </button> */}
                </div>
              )}
            </div>

            {/* Desktop Icons */}
            <div className="hidden sm:flex items-center gap-5">
              {NavIcons.slice(1).map((item) => (
                <div key={item.id} className="relative cursor-pointer">
                  <item.icon className="text-xl text-white" />
                  {item.badgeCount > 0 && (
                    <div className="absolute -top-2 -right-2 bg-secondary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {item.badgeCount}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Profile Avatar */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover cursor-pointer"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-white text-primary text-xl flex items-center justify-center font-semibold cursor-pointer uppercase">
                    {user?.displayName?.charAt(0) || "?"}
                  </div>
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40 mt-2">
                <DropdownMenuItem onClick={handleLogout}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        )}
      </div>
    </div>
  );
}
