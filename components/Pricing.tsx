import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const PLANS = [
  {
    name: "그룹 리포머",
    detail: "최대 4인 · 50분",
    price: "19",
    unit: "만원 / 월 8회",
    note: "주 2회 기준. 가장 많이 선택하시는 구성입니다.",
    points: ["레벨별 반 편성", "수업 4시간 전까지 변경 가능", "운동복 대여 포함"],
    featured: true,
  },
  {
    name: "듀엣",
    detail: "2인 · 50분",
    price: "32",
    unit: "만원 / 월 8회",
    note: "친구·가족과 함께 등록하실 때.",
    points: ["2인 동시 등록", "1:1에 가까운 지도 밀도", "동일 시간대 고정"],
    featured: false,
  },
  {
    name: "프라이빗 1:1",
    detail: "1인 · 50분",
    price: "65",
    unit: "만원 / 10회",
    note: "통증이나 재활 목적이 뚜렷하실 때.",
    points: ["완전 맞춤 커리큘럼", "회차별 기록 관리", "4주 단위 재측정"],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 bg-ivory-deep">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32">
        <SectionHeading
          eyebrow="Membership"
          align="center"
          title={
            <>
              먼저 체험해 보시고
              <br />
              결정하셔도 됩니다
            </>
          }
          description="첫 방문은 무료입니다. 등록은 체형 분석 결과를 보신 다음에 정하시면 됩니다."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <article
                className={`flex h-full flex-col rounded-2xl border p-8 sm:p-9 ${
                  p.featured
                    ? "border-sage-deep bg-ivory shadow-sm"
                    : "border-sand bg-ivory"
                }`}
              >
                {p.featured ? (
                  <span className="mb-5 inline-flex w-fit rounded-full bg-sage-mist px-3 py-1 text-[0.7rem] font-medium tracking-tight text-sage-deep">
                    가장 많이 선택
                  </span>
                ) : (
                  <span className="mb-5 h-[26px]" aria-hidden="true" />
                )}

                <h3 className="kr text-xl font-normal tracking-tight text-ink">
                  {p.name}
                </h3>
                <p className="kr mt-1.5 text-[0.82rem] text-ink-mute">
                  {p.detail}
                </p>

                <p className="mt-7 flex items-baseline gap-1.5">
                  <span className="text-4xl font-light tracking-tight text-ink">
                    {p.price}
                  </span>
                  <span className="kr text-[0.84rem] text-ink-soft">
                    {p.unit}
                  </span>
                </p>
                <p className="kr mt-3 text-[0.82rem] leading-relaxed text-ink-soft">
                  {p.note}
                </p>

                <ul className="mt-7 flex-1 space-y-2.5 border-t border-sand pt-6">
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

                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-[0.86rem] font-medium tracking-tight transition ${
                    p.featured
                      ? "bg-sage-deep text-ivory hover:bg-ink"
                      : "border border-sand-deep text-ink hover:border-ink hover:bg-sand/40"
                  }`}
                >
                  이 수업으로 상담받기
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="kr mt-10 text-center text-[0.76rem] leading-relaxed text-ink-mute">
            * 데모용 예시 금액입니다. 실제 스튜디오 운영 정책에 맞춰 조정됩니다.
            <br className="hidden sm:block" />
            환불은 「방문판매 등에 관한 법률」에 따라 잔여 횟수 기준으로 처리됩니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
