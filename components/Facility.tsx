import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const AMENITIES = [
  { name: "개인 락커", note: "회원별 전용 · 비밀번호 방식" },
  { name: "샤워실 2실", note: "타월·드라이어 상시 비치" },
  { name: "파우더룸", note: "기초 화장품 · 고데기 구비" },
  { name: "운동복 대여", note: "1회 무료 · 매일 세탁" },
  { name: "정수기 & 티바", note: "허브티 · 보리차 무료" },
  { name: "건물 주차", note: "수업 시간 기준 2시간 무료" },
];

const HOURS = [
  { day: "평일", time: "07:00 – 22:00" },
  { day: "토요일", time: "09:00 – 17:00" },
  { day: "일요일 · 공휴일", time: "휴무" },
];

export default function Facility() {
  return (
    <section id="facility" className="scroll-mt-20 bg-ivory">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32">
        <SectionHeading
          eyebrow="Facility"
          title={
            <>
              운동 전후의 시간까지
              <br />
              편안하도록
            </>
          }
          description="수업은 50분이지만, 스튜디오에 머무는 시간은 그보다 깁니다. 그 시간이 번거롭지 않아야 계속 오게 됩니다."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
          <div className="grid gap-px overflow-hidden rounded-2xl bg-sand/70 sm:grid-cols-2">
            {AMENITIES.map((a, i) => (
              <Reveal key={a.name} delay={i * 60}>
                <div className="h-full bg-ivory px-7 py-7">
                  <h3 className="kr text-[0.98rem] font-medium tracking-tight text-ink">
                    {a.name}
                  </h3>
                  <p className="kr mt-1.5 text-[0.83rem] text-ink-mute">
                    {a.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-sand bg-ivory-deep p-8 sm:p-10">
              <h3 className="kr text-[0.7rem] font-medium uppercase tracking-[0.28em] text-wood">
                Hours
              </h3>
              <dl className="mt-7 space-y-4">
                {HOURS.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-baseline justify-between border-b border-sand/80 pb-4 last:border-b-0"
                  >
                    <dt className="kr text-[0.9rem] text-ink-soft">{h.day}</dt>
                    <dd className="text-[0.92rem] tracking-tight text-ink">
                      {h.time}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-9 border-t border-sand pt-7">
                <h3 className="kr text-[0.7rem] font-medium uppercase tracking-[0.28em] text-wood">
                  Location
                </h3>
                <p className="kr mt-5 text-[0.92rem] leading-relaxed text-ink-soft">
                  서울시 ○○구 ○○로 00, 3층
                  <br />
                  지하철 0호선 ○○역 2번 출구 도보 4분
                </p>
                <p className="kr mt-4 text-[0.78rem] text-ink-mute">
                  * 데모 사이트로 실제 주소가 아닙니다.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
