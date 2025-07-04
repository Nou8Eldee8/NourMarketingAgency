"use client";

import { useState } from "react";
import { Facebook, FileText, Menu } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] md:w-2/3 z-50 rounded-xl backdrop-blur-md bg-white/30 border border-white/40 shadow-md"
      style={{
        WebkitBackdropFilter: "blur(12px)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-10 md:py-5">
        {/* Logo */}
        <Link
          href="/"
          className="text-4xl md:text-6xl font-bold transition hover:text-black text-[#45364B] duration-300"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          N
        </Link>

        {/* Hamburger toggle on mobile */}
        <button
          className="md:hidden text-[#45364B]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          <Menu size={28} />
        </button>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center gap-6">
            {/* Contact us */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-medium px-4 py-2 rounded-md transition duration-300 hover:bg-[#62466B]" style={{ color: "#FFFFFF" }}>
                Contact us
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-4 rounded-xl shadow-md space-y-2 bg-white">
                <NavigationMenuLink
                  href="https://www.facebook.com/nourmarketingagencyeg"
                  className="flex items-center gap-2 transition duration-200 hover:text-[#45364B] text-[#2D2327]"
                >
                  <Facebook size={16} />
                  Facebook
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="#form"
                  className="flex items-center gap-2 transition duration-200 hover:text-[#45364B] text-[#2D2327]"
                >
                  <FileText size={16} />
                  Fill our form
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* About us */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-medium px-4 py-2 rounded-md transition duration-300 hover:bg-[#62466B]" style={{ color: "#FFFFFF" }}>
                About us
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-4 rounded-xl shadow-md space-y-2 bg-white">
                <NavigationMenuLink
                  href="#portfolio"
                  className="transition duration-200 hover:text-[#45364B] text-[#2D2327]"
                >
                  Our portfolio
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="#our-story"
                  className="transition duration-200 hover:text-[#45364B] text-[#2D2327]"
                >
                  Our Story
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Documentation */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="font-medium px-4 py-2 rounded-md transition duration-300 hover:bg-[#62466B] bg-[#CFD8F5] text-[#2D2327]"
              >
                <Link href="/docs">Let’s talk</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>

          <NavigationMenuViewport className="absolute top-full left-0 w-full z-50" />
        </NavigationMenu>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 space-y-3">
          <Link
            href="https://www.facebook.com/nourmarketingagencyeg"
            className="block text-[#2D2327] hover:text-[#45364B] transition"
          >
            📘 Facebook
          </Link>
          <Link
            href="#form"
            className="block text-[#2D2327] hover:text-[#45364B] transition"
          >
            📝 Fill our form
          </Link>
          <Link
            href="#portfolio"
            className="block text-[#2D2327] hover:text-[#45364B] transition"
          >
            📁 Our portfolio
          </Link>
          <Link
            href="#our-story"
            className="block text-[#2D2327] hover:text-[#45364B] transition"
          >
            📖 Our Story
          </Link>
          <Link
            href="/docs"
            className="block text-[#2D2327] hover:text-[#45364B] transition"
          >
            💬 Let’s talk
          </Link>
        </div>
      )}
    </header>
  );
}
