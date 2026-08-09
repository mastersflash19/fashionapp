"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

const img = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format`;

export default function Hero() {
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

  return (
    <section ref={ref} className="pt-14 min-h-screen flex flex-col lg:flex-row overflow-hidden">
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 py-20 lg:py-0 relative">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 pointer-events-none bg-[radial-gradient(ellipse_at_0%_50%,rgba(212,165,116,0.08),transparent_60%)]" />

        <div className={`relative max-w-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 border border-[rgba(212,165,116,0.2)] bg-[rgba(212,165,116,0.06)]">
            <Sparkles className="w-3 h-3 animate-pulse text-[#D4A574]" />
            <span className="text-xs font-medium text-[#D4A574]">AI-Powered Fashion Assistant</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.0] font-bodoni">
            Your style,<br />
            <em className="text-[#D4A574] not-italic">perfected</em><br />
            daily.
          </h1>

          <p className="text-base text-muted-foreground mb-10 max-w-sm leading-relaxed">
            Upload your wardrobe, get AI-matched outfit combinations, discover sales from your favourite shops, and save smart for what you want next.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-14">
            <Link
              href="/wardrobe"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90 active:scale-95 group bg-[#D4A574] text-[#0E0B09]"
            >
              Build Your Wardrobe
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <button className="text-sm font-medium transition-colors hover:text-[#D4A574] flex items-center gap-1 text-[#8A7A6E]">
              Watch demo →
            </button>
          </div>

          <div className="flex flex-wrap gap-8">
            {[
              { value: "24K+", label: "outfits generated" },
              { value: "380+", label: "shops tracked" },
              { value: "R8.4M", label: "saved by users" },
            ].map((s, index) => (
              <div
                key={s.label}
                className="transition-all duration-700 delay-200"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                  transitionDelay: `${index * 150}ms`
                }}
              >
                <p className="text-2xl font-bold text-foreground font-bodoni">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full lg:w-[48%] relative flex-shrink-0 min-h-[60vh] lg:min-h-screen overflow-hidden bg-[#0A0806]">
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 hidden lg:block bg-gradient-to-r from-[#0E0B09] to-transparent" />
        <img
          src={img("1539109136881-3be0616acf4b", 900, 1200)}
          alt="Editorial fashion — woman in street style"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(14,11,9,0.3)] via-transparent to-[rgba(14,11,9,0.7)]" />
      </div>
    </section>
  );
}