"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const CHANNELS = [
  {
    name: "카카오톡 상담",
    desc: "가장 빠른 문의 방법입니다.\n평일 09:00–21:00 · 평균 10분 내 답변",
    action: "채널 추가하고 문의하기",
    href: "#contact-form",
  },
  {
    name: "전화 문의",
    desc: "수업 중에는 받지 못할 수 있습니다.\n부재 시 남겨주시면 다시 연락드립니다.",
    action: "02-1234-5678",
    href: "tel:0212345678",
  },
  {
    name: "방문 상담",
    desc: "공간을 직접 보고 결정하고 싶으실 때.\n예약 후 방문해 주세요.",
    action: "방문 예약하기",
    href: "#contact-form",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="scroll-mt-20 bg-ivory">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32">
        <SectionHeading
          eyebrow="Contact"
          align="center"
          title={
            <>
              편한 방법으로
              <br />
              연락 주세요
            </>
          }
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-sand/70 md:grid-cols-3">
          {CHANNELS.map((c, i) => (
            <Reveal key={c.name} delay={i * 80}>
              <div className="flex h-full flex-col bg-ivory p-8 sm:p-9">
                <h3 className="kr text-[1.05rem] font-normal tracking-tight text-ink">
                  {c.name}
                </h3>
                <p className="kr mt-3.5 whitespace-pre-line text-[0.86rem] leading-relaxed text-ink-soft">
                  {c.desc}
                </p>
                <a
                  href={c.href}
                  className="mt-auto pt-7 text-[0.86rem] font-medium tracking-tight text-sage-deep underline-offset-4 hover:underline"
                >
                  {c.action} →
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 상담 신청 폼 — 데모용으로 실제 전송되지 않습니다 */}
        <Reveal delay={120}>
          <form
            id="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="mx-auto mt-16 max-w-2xl scroll-mt-24 rounded-2xl border border-sand bg-ivory-deep p-8 sm:p-10"
          >
            <h3 className="kr text-[1.1rem] font-normal tracking-tight text-ink">
              상담 신청
            </h3>
            <p className="kr mt-2.5 text-[0.86rem] text-ink-soft">
              남겨주시면 영업시간 내에 순서대로 연락드립니다.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="kr text-[0.8rem] font-medium text-ink-soft">
                  성함
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="김여백"
                  className="mt-2 w-full rounded-lg border border-sand-deep bg-ivory px-4 py-3 text-[0.9rem] text-ink outline-none transition placeholder:text-ink-mute/70 focus:border-sage"
                />
              </label>

              <label className="block">
                <span className="kr text-[0.8rem] font-medium text-ink-soft">
                  연락처
                </span>
                <input
                  type="tel"
                  name="phone"
                  required
                  autoComplete="tel"
                  placeholder="010-0000-0000"
                  className="mt-2 w-full rounded-lg border border-sand-deep bg-ivory px-4 py-3 text-[0.9rem] text-ink outline-none transition placeholder:text-ink-mute/70 focus:border-sage"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="kr text-[0.8rem] font-medium text-ink-soft">
                관심 프로그램 · 문의 내용
              </span>
              <textarea
                name="message"
                rows={4}
                placeholder="예) 앉아서 일하는 시간이 길어 목과 어깨가 자주 뭉칩니다. 1:1 수업이 궁금해요."
                className="mt-2 w-full resize-none rounded-lg border border-sand-deep bg-ivory px-4 py-3 text-[0.9rem] leading-relaxed text-ink outline-none transition placeholder:text-ink-mute/70 focus:border-sage"
              />
            </label>

            <button
              type="submit"
              className="mt-7 w-full rounded-full bg-sage-deep px-8 py-4 text-sm font-medium tracking-tight text-ivory transition hover:bg-ink"
            >
              상담 신청하기
            </button>

            {sent && (
              <p
                role="status"
                className="kr mt-5 rounded-lg bg-sage-mist px-5 py-4 text-[0.85rem] leading-relaxed text-sage-deep"
              >
                데모 사이트입니다. 실제로 전송되지 않으며, 실제 운영 시에는 이
                자리에서 문자·카카오 알림톡이 발송되도록 연동합니다.
              </p>
            )}

            <p className="kr mt-5 text-[0.75rem] leading-relaxed text-ink-mute">
              개인정보는 상담 목적으로만 이용되며, 상담 종료 후 3개월 내
              파기합니다.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
