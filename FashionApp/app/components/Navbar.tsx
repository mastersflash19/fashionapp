"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl border-b border-[rgba(244,237,228,0.06)] bg-[rgba(14,11,9,0.92)] h-14 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-foreground hover:text-[#D4A574] transition-colors font-bodoni"
        >
          FIT<span className="text-[#D4A574]">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-xs text-muted-foreground hover:text-[#D4A574] transition-colors">
            Explore
          </button>
          <button className="text-xs text-muted-foreground hover:text-[#D4A574] transition-colors">
            Trends
          </button>
          <button className="text-xs text-muted-foreground hover:text-[#D4A574] transition-colors">
            Community
          </button>
          <Link
            href="/wardrobe"
            className="text-xs font-semibold px-4 py-2 rounded-xl transition-all hover:opacity-90 active:scale-95 bg-[#D4A574] text-[#0E0B09]"
          >
            My Wardrobe
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground hover:text-[#D4A574] transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-[#0E0B09] px-6 py-4 border-t border-[rgba(244,237,228,0.06)]">
          <div className="flex flex-col gap-4">
            <button className="text-sm text-muted-foreground hover:text-[#D4A574] transition-colors text-left">
              Explore
            </button>
            <button className="text-sm text-muted-foreground hover:text-[#D4A574] transition-colors text-left">
              Trends
            </button>
            <button className="text-sm text-muted-foreground hover:text-[#D4A574] transition-colors text-left">
              Community
            </button>
            <Link
              href="/wardrobe"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-semibold px-4 py-2 rounded-xl transition-all hover:opacity-90 active:scale-95 text-center bg-[#D4A574] text-[#0E0B09]"
            >
              My Wardrobe
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}