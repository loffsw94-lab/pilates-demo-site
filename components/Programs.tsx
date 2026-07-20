import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const STATS = [
  { value: "2,400+", label: "누적 회원" },
  { value: "92%", label: "재등록률" },
  { value: "4명", label: "수업당 최대 인원" },
  { value: "7년", label: "강사 평균 경력" },
];

const PROGRAMS = [
  {
    tag: "01",
    name: "프라이빗 1:1",
    time: "50분 · 주 1~3회",
    body: "체형 분석 결과를 그대로 반영해 회차마다 다시 설계합니다. 통증이나 수술 이력이 있는 분도 강도를 조절해 함께 진행합니다.",
    points: ["완전 맞춤 커리큘럼", "재활·통증 관리 병행", "회차별 기록 관리"],
  },
  {
    tag: "02",
    name: "듀엣",
    time: "50분 · 2인",
    body: "가까운 사람과 둘이서 진행합니다. 서로의 속도를 지키면서도 1:1에 가까운 밀도를 유지할 수 있습니다.",
    points: ["2인 전용 구성", "친구·가족·부부 동반", "합리적인 회당 비용"],
  },
  {
    tag: "03",
    name: "그룹 리포머",
    time: "50분 · 최대 4인",
    body: "인원을 4명으로 제한합니다. 강사가 모든 회원의 정렬을 눈으로 확인하고 손으로 교정할 수 있는 최소 단위입니다.",
    points: ["최대 4인 소수정예", "레벨별 반 편성", "주 2회 이상 권장"],
  },
  {
    tag: "04",
    name: "체형 분석 & 재활",
    time: "60분 · 단독 진행",
    body: "정적·동적 자세를 함께 평가하고 생활 습관까지 확인합니다. 4주마다 다시 측정해 방향이 맞는지 점검합니다.",
    points: ["정적·동적 자세 평가", "4주 단위 재측정", "생활 습관 코칭"],
  },
];

export default function Programs() {
  return (
    <>
      {/* 신뢰 지표 */}
      <section className="border-b border-sand/70 bg-ivory-deep">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
          <dl className="grid grid-cols-2 gap-y-9 sm:gap-y-0 md:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <div className="md:border-l md:border-sand md:pl-7 md:first:border-l-0 md:first:pl-0">
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block text-[1.85rem] font-light tracking-tight text-ink sm:text-4xl">
                      {s.value}
                    </span>
                    <span className="mt-1.5 block text-[0.78rem] tracking-tight text-ink-mute">
                      {s.label}
                    </span>
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* 프로그램 */}
      <section id="programs" className="scroll-mt-20 bg-ivory">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32">
          <SectionHeading
            eyebrow="Programs"
            title={
              <>
                네 가지 방식으로,
                <br />
                같은 목표에 접근합니다
              </>
            }
            description="운동 경험과 체형, 목표에 따라 시작점이 다릅니다. 처음 오시면 상담을 통해 어떤 방식이 맞는지 함께 정합니다."
          />

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-sand/70 sm:grid-cols-2">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <article className="flex h-full flex-col bg-ivory p-8 transition-colors duration-500 hover:bg-ivory-deep sm:p-10">
                  <div className="flex items-baseline justify-between">
                    <span className="font-display text-sm tracking-[0.2em] text-wood">
                      {p.tag}
                    </span>
                    <span className="text-[0.74rem] tracking-tight text-ink-mute">
                      {p.time}
                    </span>
                  </div>

                  <h3 className="kr mt-5 text-xl font-normal tracking-tight text-ink sm:text-2xl">
                    {p.name}
                  </h3>
                  <p className="kr mt-4 text-[0.93rem] leading-relaxed text-ink-soft">
                    {p.body}
                  </p>

                  <ul className="mt-7 space-y-2.5 border-t border-sand/80 pt-6">
                    {p.points.map((pt) => (
                      <li
                        key={pt}
                        className="kr flex items-start gap-2.5 text-[0.85rem] text-ink-soft"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.55rem] h-[3px] w-[3px] shrink-0 rounded-full bg-sage"
                        />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
