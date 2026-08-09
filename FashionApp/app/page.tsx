"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Camera,
  Sparkles,
  ShoppingBag,
  PiggyBank,
  Bell,
  ArrowRight,
  Menu,
} from "lucide-react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Features />
      <CTA />
    </div>
  );
}