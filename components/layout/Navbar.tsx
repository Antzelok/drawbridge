"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed h-20 top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-blue-900/40 shadow-lg shadow-blue-950/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-1">
            <span className="text-2xl font-black tracking-tight text-white uppercase">
              Draw
            </span>
            <span className="text-2xl font-black tracking-tight text-blue-500 uppercase">
              bridge
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Button
            render={<Link href="#contact" />}
            nativeButton={false}
            className="hidden md:flex rounded-full border border-blue-500/60 bg-transparent text-blue-400 text-sm font-medium hover:bg-blue-600 hover:border-blue-600 hover:text-white h-10 px-5 gap-2"
          >
            Start Project <ArrowRight size={14} />
          </Button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-blue-900/40 py-6 px-6">
          <ul className="flex flex-col items-center gap-4 mb-6">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-base text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            render={<Link href="#contact" onClick={() => setMenuOpen(false)} />}
            nativeButton={false}
            className="w-full rounded-full border border-blue-500/60 bg-transparent text-blue-400 text-sm font-medium hover:bg-blue-600 hover:border-blue-600 hover:text-white h-11 gap-2"
          >
            Start Project <ArrowRight size={14} />
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
