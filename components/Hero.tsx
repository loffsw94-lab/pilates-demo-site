"use client";

import { useEffect, useState } from "react";
import { heroImage, heroImagePortrait, heroVideo } from "@/lib/media";

/**
 * 히어로 배경 정책
 * - 데스크톱(≥768px): 무음 앰비언트 영상 자동재생 + 루프
 * - 모바일: 정적 이미지. 16:9 영상이 세로 화면에서 과도하게 잘리고,
 *   데이터 사용량 이점이 없어 포스터 대신 인물이 담긴 히어로 이미지를 사용한다.
 * - prefers-reduced-motion / 데이터 절약 모드: 항상 정적 이미지
 */
export default function Hero() {
  const [useVideo, setUseVideo] = useState(false);

  useEffect(() => {
    const wideEnough = window.matchMedia("(min-width: 768px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const conn = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const saveData = conn?.saveData === true;

    const decide = () =>
      setUseVideo(wideEnough.matches && !reduced.matches && !saveData);

    decide();
    wideEnough.addEventListener("change", decide);
    reduced.addEventListener("change", decide);
    return () => {
      wideEnough.removeEventListener("change", decide);
      reduced.removeEventListener("change", decide);
    };
  }, []);

  return (
    <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden">
      {/* 배경 레이어 — aspect 고정 없이 absolute로 채우므로 레이아웃 이동 없음 */}
      <div className="absolute inset-0 -z-10 bg-sand">
        {useVideo ? (
          <video
            className="h-full w-full object-cover"
            src={heroVideo.src}
            poster={heroVideo.poster}
            width={heroVideo.width}
            height={heroVideo.height}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
        ) : (
          <picture>
            {/* 모바일은 세로 크롭본으로 아트디렉션 교체 */}
            <source
              media="(max-width: 767px)"
              srcSet={`${heroImagePortrait.srcSmall} 600w, ${heroImagePortrait.src} 900w`}
              sizes="100vw"
            />
            <img
              src={heroImage.src}
              srcSet={`${heroImage.srcMobile} 640w, ${heroImage.src1280} 1280w, ${heroImage.src} 1920w`}
              sizes="100vw"
              width={heroImage.width}
              height={heroImage.height}
              alt={heroImage.alt}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover object-center"
            />
          </picture>
        )}
        <div className="hero-scrim absolute inset-0" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 pb-20 pt-32 sm:px-8 md:pb-28">
        <p className="mb-6 text-[0.7rem] font-medium uppercase tracking-[0.34em] text-ivory/75">
          Seoul · Premium Pilates Studio
        </p>

        <h1 className="kr max-w-3xl text-[2.6rem] font-light leading-[1.22] tracking-[-0.02em] text-ivory sm:text-6xl md:text-[4.1rem]">
          하루 한 시간,
          <br />
          <span className="font-normal">나를 위한 여백</span>
        </h1>

        <p className="kr mt-7 max-w-xl text-base leading-relaxed text-ivory/85 sm:text-lg">
          몸을 몰아붙이지 않습니다. 지금의 체형과 컨디션을 먼저 읽고, 오래
          지속할 수 있는 방식으로 설계합니다.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-ivory px-8 py-4 text-sm font-medium tracking-tight text-ink transition hover:bg-white hover:shadow-lg hover:shadow-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-ivory"
          >
            체형 분석 무료로 받아보기
          </a>
          <a
            href="#instructors"
            className="inline-flex items-center justify-center rounded-full border border-ivory/45 px-8 py-4 text-sm font-medium tracking-tight text-ivory backdrop-blur-[2px] transition hover:border-ivory/80 hover:bg-ivory/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-ivory"
          >
            강사 먼저 보기
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs tracking-tight text-ivory/70">
          {["첫 방문 무료", "등록 권유 없음", "신청 30초"].map((t) => (
            <li key={t} className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M2.5 6.2l2.3 2.3 4.7-5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
