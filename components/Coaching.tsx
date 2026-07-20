import { consultationImage } from "@/lib/media";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    step: "STEP 01",
    title: "체형 분석",
    body: "선 자세, 걷는 자세, 관절 가동 범위를 함께 봅니다. 통증 이력과 하루 생활 패턴까지 기록합니다.",
  },
  {
    step: "STEP 02",
    title: "목표 설계",
    body: "'예뻐지기'가 아니라 측정 가능한 목표를 세웁니다. 골반 기울기, 어깨 높이 차이처럼 확인할 수 있는 기준입니다.",
  },
  {
    step: "STEP 03",
    title: "4주 재점검",
    body: "4주마다 처음과 같은 방식으로 다시 측정합니다. 변화가 없으면 운동이 아니라 설계를 바꿉니다.",
  },
];

const STANDARDS = [
  "국제 자격(Balanced Body·Polestar 등) 보유 강사만 채용",
  "해부학·재활 교육 연 40시간 이상 이수",
  "신규 강사는 3개월 내부 수련 후 단독 수업 배정",
];

export default function Coaching() {
  return (
    <section id="coaching" className="scroll-mt-20 bg-ivory">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Coaching"
              title={
                <>
                  같은 동작도,
                  <br />
                  몸에 따라 다르게
                </>
              }
              description="정해진 수업을 그대로 따라 하는 방식으로는 오래 가지 못합니다. 지금 몸이 어떤 상태인지부터 확인하고 시작합니다."
            />

            <ol className="mt-14 space-y-10">
              {STEPS.map((s, i) => (
                <Reveal key={s.step} delay={i * 90}>
                  <li className="grid gap-4 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
                    <span className="font-display text-[0.75rem] tracking-[0.22em] text-wood sm:pt-1.5">
                      {s.step}
                    </span>
                    <div>
                      <h3 className="kr text-[1.15rem] font-normal tracking-tight text-ink">
                        {s.title}
                      </h3>
                      <p className="kr mt-2.5 text-[0.92rem] leading-relaxed text-ink-soft">
                        {s.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={120}>
            <figure className="overflow-hidden rounded-2xl bg-sand">
              <img
                src={consultationImage.src}
                srcSet={`${consultationImage.srcMobile} 640w, ${consultationImage.src} 1100w`}
                sizes="(min-width: 1024px) 38vw, 92vw"
                width={consultationImage.width}
                height={consultationImage.height}
                alt={consultationImage.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
                style={{ aspectRatio: "3 / 2" }}
              />
            </figure>

            <div className="mt-8 rounded-2xl border border-sand bg-ivory-deep p-8">
              <h3 className="kr text-[0.95rem] font-medium tracking-tight text-ink">
                강사 채용 기준
              </h3>
              <ul className="mt-5 space-y-3">
                {STANDARDS.map((s) => (
                  <li
                    key={s}
                    className="kr flex items-start gap-3 text-[0.85rem] leading-relaxed text-ink-soft"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.6rem] h-[3px] w-[3px] shrink-0 rounded-full bg-sage"
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
