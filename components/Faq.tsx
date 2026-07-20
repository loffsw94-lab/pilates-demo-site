import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const FAQS = [
  {
    q: "운동을 해본 적이 없어도 괜찮을까요?",
    a: "네, 오시는 분의 절반 정도가 필라테스가 처음입니다. 첫 수업은 동작을 배우기보다 지금 몸이 어떤 상태인지 확인하는 데 씁니다. 강도는 그 결과에 맞춰 조절합니다.",
  },
  {
    q: "준비물이 있나요?",
    a: "몸에 너무 붙지 않는 편한 운동복과 미끄럼 방지 양말이면 충분합니다. 양말은 스튜디오에서 구매하실 수 있고, 운동복은 첫 방문 시 무료로 대여해 드립니다.",
  },
  {
    q: "허리 디스크가 있는데 수업이 가능한가요?",
    a: "가능한 경우가 많지만, 상태에 따라 다릅니다. 상담 때 진단명과 현재 통증 정도를 알려주시면 피해야 할 동작을 먼저 정리하고 시작합니다. 급성기이거나 의사 소견상 운동 제한이 있다면 회복 후 진행을 권해 드립니다.",
  },
  {
    q: "생리 기간에도 수업을 받을 수 있나요?",
    a: "네, 대부분 문제없이 진행합니다. 컨디션이 좋지 않다면 복부에 힘이 많이 들어가는 동작을 빼고 스트레칭과 호흡 위주로 조정해 드리니 편하게 말씀해 주세요.",
  },
  {
    q: "예약 변경이나 취소는 어떻게 하나요?",
    a: "수업 시작 4시간 전까지는 앱이나 카카오톡으로 자유롭게 변경하실 수 있습니다. 그 이후 취소는 1회 차감되며, 병원 진료나 경조사 등 사정이 있으실 때는 미리 알려주시면 조정해 드립니다.",
  },
  {
    q: "환불 규정이 궁금합니다.",
    a: "「방문판매 등에 관한 법률」에 따라 잔여 횟수 기준으로 환불해 드립니다. 이미 사용한 회차는 정가 기준으로 계산되며, 위약금은 잔여 대금의 10% 이내로 적용합니다.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-ivory-deep">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                자주 묻는
                <br />
                질문들
              </>
            }
            description="더 궁금한 점은 카카오톡으로 편하게 물어보세요. 상담 시간에는 보통 10분 안에 답변드립니다."
          />

          <div>
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
                <details className="faq group border-b border-sand">
                  <summary className="flex items-start justify-between gap-6 py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage">
                    <h3 className="kr text-[0.98rem] font-normal leading-relaxed tracking-tight text-ink">
                      {f.q}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="faq-icon mt-1 shrink-0 transition-transform duration-300 text-wood"
                    >
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path
                          d="M7.5 1v13M1 7.5h13"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </summary>
                  <p className="kr pb-7 pr-10 text-[0.9rem] leading-relaxed text-ink-soft">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
