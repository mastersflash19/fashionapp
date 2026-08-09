import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 border-t border-[rgba(244,237,228,0.06)] bg-[#0E0B09]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/"
          className="text-xl font-bold text-foreground hover:text-[#D4A574] transition-colors font-bodoni"
        >
          FIT<span className="text-[#D4A574]">.</span>
        </Link>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <button className="text-xs text-muted-foreground hover:text-[#D4A574] transition-colors">Privacy</button>
          <button className="text-xs text-muted-foreground hover:text-[#D4A574] transition-colors">Terms</button>
          <button className="text-xs text-muted-foreground hover:text-[#D4A574] transition-colors">About</button>
          <button className="text-xs text-muted-foreground hover:text-[#D4A574] transition-colors">Blog</button>
          <button className="text-xs text-muted-foreground hover:text-[#D4A574] transition-colors">Contact</button>
        </div>
        <p className="text-xs text-[rgba(138,122,110,0.5)]">© {currentYear} FIT. All rights reserved.</p>
      </div>
    </footer>
  );
}