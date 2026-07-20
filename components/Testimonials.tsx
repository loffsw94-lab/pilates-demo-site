import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const REVIEWS = [
  {
    who: "20대 후반 · 사무직",
    period: "6개월째 이용",
    title: "목이랑 어깨가 늘 뭉쳐 있었어요",
    body: "하루 종일 앉아 일하다 보니 저녁만 되면 어깨가 돌덩이 같았는데, 두 달쯤 지나니 그 느낌이 확실히 줄었어요. 무리하게 시키지 않고 그날 컨디션 물어보고 강도를 바꿔주시는 게 좋았습니다.",
    program: "그룹 리포머 · 주 2회",
  },
  {
    who: "30대 초반 · 출산 후 복귀",
    period: "4개월째 이용",
    title: "다시 운동해도 되는지부터 봐주셨어요",
    body: "출산하고 복직 준비하면서 시작했는데, 첫날에 바로 운동시키지 않고 지금 몸 상태부터 한참 확인하시더라고요. 복부에 힘이 안 들어가던 게 지금은 자연스럽게 됩니다.",
    program: "프라이빗 1:1 · 주 2회",
  },
  {
    who: "20대 중반 · 운동 경험 없음",
    period: "3개월째 이용",
    title: "운동을 처음 해봤습니다",
    body: "헬스는 뭘 해야 할지 몰라서 늘 며칠 만에 그만뒀는데, 여기는 그날 할 걸 정해주시니까 그냥 가기만 하면 됐어요. 계단 오를 때 덜 힘든 게 제일 체감됩니다.",
    program: "그룹 리포머 · 주 2회",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-ivory">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32">
        <SectionHeading
          eyebrow="Reviews"
          title={
            <>
              먼저 다녀간 분들의
              <br />
              이야기
            </>
          }
          description="극적인 변화보다, 일상에서 체감한 것들을 그대로 옮겼습니다."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-sand/70 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <figure className="flex h-full flex-col bg-ivory p-8 sm:p-9">
                <div
                  aria-hidden="true"
                  className="font-display text-3xl leading-none text-sand-deep"
                >
                  &ldquo;
                </div>

                <blockquote className="mt-4 flex-1">
                  <p className="kr text-[1rem] font-medium leading-relaxed tracking-tight text-ink">
                    {r.title}
                  </p>
                  <p className="kr mt-4 text-[0.88rem] leading-relaxed text-ink-soft">
                    {r.body}
                  </p>
                </blockquote>

                <figcaption className="mt-7 border-t border-sand pt-5">
                  <p className="kr text-[0.84rem] tracking-tight text-ink">
                    {r.who}
                  </p>
                  <p className="kr mt-1 text-[0.76rem] text-ink-mute">
                    {r.program} · {r.period}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="kr mt-10 text-[0.76rem] leading-relaxed text-ink-mute">
            * 데모용 예시 후기입니다. 실제 회원의 후기가 아니며, 효과는 개인의 체형과
            생활 습관에 따라 달라질 수 있습니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
