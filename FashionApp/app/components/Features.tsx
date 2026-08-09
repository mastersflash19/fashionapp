"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Camera,
  Sparkles,
  ShoppingBag,
  PiggyBank,
  Bell,
} from "lucide-react";

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      num: "01",
      Icon: Camera,
      title: "Scan your wardrobe",
      desc: "Photograph each item once. Our AI catalogues colours, styles, and occasions automatically.",
      accent: "#D4A574",
    },
    {
      num: "02",
      Icon: Sparkles,
      title: "AI plans your week",
      desc: "Every Sunday, FIT. generates a 7-day outfit plan based on your calendar, weather, and taste.",
      accent: "#E8C49A",
    },
    {
      num: "03",
      Icon: Bell,
      title: "Real-time sale alerts",
      desc: "We monitor 380+ shops you follow and notify you the moment something you love goes on sale.",
      accent: "#C4874A",
    },
    {
      num: "04",
      Icon: PiggyBank,
      title: "Fit Fund savings",
      desc: "Set a savings goal for any item. FIT. tracks your progress and tells you exactly when you can afford it.",
      accent: "#D4A574",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-3 font-dm-mono">
            How it works
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground max-w-md leading-tight font-bodoni">
            Four ways FIT. works for you.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, index) => (
            <Link
              key={f.num}
              href="/wardrobe"
              className={`block rounded-2xl p-6 border transition-all duration-700 hover:translate-y-[-3px] hover:border-[#D4A574]/30 group bg-[rgba(244,237,228,0.02)] border-[rgba(244,237,228,0.07)]`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors group-hover:scale-110"
                  style={{ background: `${f.accent}15` }}
                >
                  <f.Icon className="w-4.5 h-4.5 transition-transform group-hover:scale-110" style={{ color: f.accent }} />
                </div>
                <span className="text-xs text-muted-foreground font-dm-mono">{f.num}</span>
              </div>
              <h3 className="text-base font-bold text-foreground mb-2 font-bodoni">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}