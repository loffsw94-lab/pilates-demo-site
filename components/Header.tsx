"use client";

import { useEffect, useState } from "react";

const NAV = [
  { href: "#programs", label: "프로그램" },
  { href: "#studio", label: "스튜디오" },
  { href: "#instructors", label: "강사 소개" },
  { href: "#reviews", label: "후기" },
  { href: "#pricing", label: "이용권" },
  { href: "#faq", label: "이용 안내" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "border-b border-sand/70 bg-ivory/90 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      {/* 히어로 위에 떠 있을 때만 스크림을 깔아 흰 글자 가독성을 확보 */}
      {!scrolled && !open && (
        <div
          aria-hidden="true"
          className="header-scrim pointer-events-none absolute inset-x-0 top-0 h-[180%]"
        />
      )}

      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a
          href="#top"
          className={`flex items-baseline gap-2.5 transition-colors ${
            scrolled || open ? "text-ink" : "text-ivory"
          }`}
        >
          <span className="font-display text-xl tracking-[0.14em]">YEOBAEK</span>
          <span className="text-[0.68rem] tracking-[0.24em] opacity-70">
            여백 필라테스
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[0.82rem] tracking-tight transition-opacity hover:opacity-100 ${
                scrolled ? "text-ink-soft opacity-80" : "text-ivory opacity-85"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#booking"
            className={`rounded-full px-5 py-2.5 text-[0.82rem] font-medium tracking-tight transition ${
              scrolled
                ? "bg-sage-deep text-ivory hover:bg-ink"
                : "bg-ivory/95 text-ink hover:bg-white"
            }`}
          >
            체험 예약
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="메뉴 열기"
          className={`lg:hidden ${scrolled || open ? "text-ink" : "text-ivory"}`}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
            <path
              d={open ? "M7 7l12 12M19 7L7 19" : "M4 9h18M4 17h18"}
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-sand/60 bg-ivory/95 px-6 pb-6 pt-2 backdrop-blur-md lg:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-sand/50 py-3.5 text-sm text-ink-soft"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-full bg-sage-deep px-5 py-3.5 text-center text-sm font-medium text-ivory"
          >
            무료 체험 예약하기
          </a>
        </nav>
      )}
    </header>
  );
}
