"use client";

import { useEffect, useState } from "react";

/**
 * 전환 유도 CTA.
 * - 모바일: 하단 고정 바 (전화 / 상담 신청) — 국내 지역 업종 사이트의 표준 패턴
 * - 데스크톱: 우측 하단 플로팅 버튼
 * 히어로를 지나간 뒤에만 노출해 첫인상을 가리지 않는다.
 */
export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* 모바일 하단 고정 바 */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-sand bg-ivory/95 backdrop-blur-md transition-transform duration-500 md:hidden ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="flex items-stretch gap-2.5 px-4 py-3">
          <a
            href="tel:0212345678"
            className="flex w-[38%] items-center justify-center gap-2 rounded-full border border-sand-deep py-3.5 text-[0.86rem] font-medium tracking-tight text-ink"
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3.2 2.5h2.4l1.2 3-1.5 1.1a9 9 0 0 0 4.1 4.1l1.1-1.5 3 1.2v2.4a1 1 0 0 1-1.1 1A11.6 11.6 0 0 1 2.2 3.6a1 1 0 0 1 1-1.1Z"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinejoin="round"
              />
            </svg>
            전화
          </a>
          <a
            href="#contact"
            className="flex flex-1 items-center justify-center rounded-full bg-sage-deep py-3.5 text-[0.9rem] font-medium tracking-tight text-ivory"
          >
            무료 체험 신청하기
          </a>
        </div>
      </div>

      {/* 데스크톱 플로팅 버튼 */}
      <a
        href="#contact"
        aria-label="카카오톡으로 상담 문의하기"
        className={`fixed bottom-8 right-8 z-40 hidden items-center gap-2.5 rounded-full bg-sage-deep px-6 py-4 text-sm font-medium tracking-tight text-ivory shadow-lg shadow-black/15 transition-all duration-500 hover:bg-ink md:flex ${
          show
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path
            d="M9 2.1c-3.9 0-7 2.5-7 5.5 0 1.95 1.3 3.65 3.25 4.6l-.8 2.95c-.07.26.22.47.45.32l3.5-2.3c.2.01.4.02.6.02 3.9 0 7-2.45 7-5.6S12.9 2.1 9 2.1Z"
            fill="currentColor"
          />
        </svg>
        카카오톡 상담
      </a>
    </>
  );
}
