import { wellnessImage } from "@/lib/media";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const TIMELINE = [
  {
    period: "4주",
    title: "몸의 방향을 잡습니다",
    body: "호흡과 코어를 쓰는 감각이 생깁니다. 아직 겉모습의 변화보다, 서 있는 자세가 편해졌다는 이야기를 많이 듣습니다.",
  },
  {
    period: "8주",
    title: "일상에서 차이가 납니다",
    body: "오래 앉아 있어도 허리가 덜 뻐근하고, 어깨와 목의 긴장이 줄어듭니다. 체형 사진에서 좌우 균형이 눈에 띄게 달라집니다.",
  },
  {
    period: "12주",
    title: "유지할 수 있게 됩니다",
    body: "운동 강도를 올려도 몸이 버텨냅니다. 스스로 자세를 점검하고 되돌릴 수 있는 단계입니다.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="scroll-mt-20 bg-sage-deep">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:gap-20">
          <Reveal>
            <figure className="overflow-hidden rounded-2xl bg-sage">
              <img
                src={wellnessImage.src}
                srcSet={`${wellnessImage.srcMobile} 640w, ${wellnessImage.src} 1024w`}
                sizes="(min-width: 1024px) 42vw, 92vw"
                width={wellnessImage.width}
                height={wellnessImage.height}
                alt={wellnessImage.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
                style={{ aspectRatio: "4 / 3" }}
              />
            </figure>
          </Reveal>

          <div>
            <SectionHeading
              tone="light"
              eyebrow="Your Progress"
              title={
                <>
                  3개월 뒤에
                  <br />
                  달라져 있는 것들
                </>
              }
              description="개인차가 있지만, 주 2회 이상 꾸준히 오신 회원들이 공통적으로 이야기하는 흐름입니다."
            />

            <ol className="mt-14 space-y-0">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.period} delay={i * 90}>
                  <li className="grid gap-3 border-t border-ivory/20 py-8 sm:grid-cols-[6rem_1fr] sm:gap-8">
                    <span className="text-2xl font-light tracking-tight text-ivory/90">
                      {t.period}
                    </span>
                    <div>
                      <h3 className="kr text-[1.05rem] font-normal tracking-tight text-ivory">
                        {t.title}
                      </h3>
                      <p className="kr mt-2.5 text-[0.9rem] leading-relaxed text-ivory/70">
                        {t.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>

            <Reveal>
              <p className="kr mt-8 text-[0.78rem] leading-relaxed text-ivory/50">
                * 위 내용은 일반적인 경험을 정리한 것으로, 효과는 개인의 체형과
                생활 습관에 따라 달라질 수 있습니다.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
