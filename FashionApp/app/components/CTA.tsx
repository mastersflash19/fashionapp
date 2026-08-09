"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
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

  const handleDownload = () => {
    // Detect device
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    
    if (isIOS) {
      window.open('https://apps.apple.com/app/fit', '_blank');
    } else if (isAndroid) {
      window.open('https://play.google.com/store/apps/details?id=com.fit.app', '_blank');
    } else {
      alert('📱 Download FIT. App\n\n📲 iOS: App Store\n📲 Android: Google Play\n\nVisit our website for more options.');
    }
  };

  return (
    <section ref={ref} className="py-24 px-6 bg-[#0A0806]">
      <div className="max-w-3xl mx-auto text-center">
        <div
          className={`rounded-3xl p-12 relative overflow-hidden transition-all duration-700 bg-gradient-to-br from-[rgba(212,165,116,0.12)] to-[rgba(212,165,116,0.04)] border border-[rgba(212,165,116,0.18)]`}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.95)',
          }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 pointer-events-none bg-[radial-gradient(ellipse_at_50%_0%,rgba(212,165,116,0.15),transparent_70%)]" />
          <h2 className="relative text-4xl sm:text-5xl font-bold text-foreground mb-4 font-bodoni">
            Dress well,{" "}
            <em className="text-[#D4A574] not-italic">every</em> day.
          </h2>
          <p className="relative text-base text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
            Join thousands of people who've stopped stressing about what to wear and started spending smarter on fashion.
          </p>
          <div className="relative flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold transition-all hover:opacity-90 active:scale-95 group bg-[#D4A574] text-[#0E0B09]"
            >
              Download FIT. Free
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="text-xs text-muted-foreground">iOS & Android · Free to start</p>
          </div>
        </div>
      </div>
    </section>
  );
}