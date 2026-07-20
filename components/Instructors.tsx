import { instructorPhotos } from "@/lib/media";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const INSTRUCTORS = [
  {
    key: "kangSujin",
    name: "강수진",
    role: "원장 · 총괄 강사",
    years: "경력 12년",
    certs: ["Balanced Body 리포머 국제 자격", "재활 필라테스 지도자 과정 수료"],
    focus: "산전·산후 회복, 만성 통증 관리",
    quote: "몸이 버티는 방식부터 바꿔야 오래 갑니다.",
  },
  {
    key: "noJihye",
    name: "노지혜",
    role: "프라이빗 · 체형 분석 담당",
    years: "경력 9년",
    certs: ["BASI Pilates 국제 자격", "체형교정 운동 전문가"],
    focus: "거북목·라운드숄더, 골반 비대칭",
    quote: "숫자로 확인되지 않으면 좋아졌다고 말하지 않습니다.",
  },
  {
    key: "kimHyunji",
    name: "김현지",
    role: "그룹 · 듀엣 담당",
    years: "경력 7년",
    certs: ["Polestar Pilates 국제 자격", "스포츠 재활 트레이너 2급"],
    focus: "코어 강화, 운동 초보자 적응",
    quote: "처음 오신 분이 다음 주에 또 오시는 게 제일 좋습니다.",
  },
] as const;

export default function Instructors() {
  return (
    <section id="instructors" className="scroll-mt-20 bg-ivory-deep">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32">
        <SectionHeading
          eyebrow="Instructors"
          title={
            <>
              누가 봐주는지가
              <br />
              가장 중요합니다
            </>
          }
          description="세 명의 강사가 각자의 전문 분야를 맡습니다. 상담 결과에 따라 어떤 강사와 수업할지 함께 정합니다."
        />

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {INSTRUCTORS.map((p, i) => {
            const photo = instructorPhotos[p.key];
            return (
              <Reveal key={p.name} delay={i * 90}>
                <article className="group flex h-full flex-col">
                  <figure className="overflow-hidden rounded-2xl bg-sand">
                    <img
                      src={photo.src}
                      srcSet={`${photo.srcMobile} 400w, ${photo.src} 640w`}
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 88vw"
                      width={photo.width}
                      height={photo.height}
                      alt={photo.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      style={{ aspectRatio: "4 / 5" }}
                    />
                  </figure>

                  <div className="mt-6 flex flex-1 flex-col">
                    <div className="flex items-baseline gap-2.5">
                      <h3 className="text-xl font-normal tracking-tight text-ink">
                        {p.name}
                      </h3>
                      <span className="text-[0.76rem] tracking-tight text-ink-mute">
                        {p.years}
                      </span>
                    </div>
                    <p className="kr mt-1.5 text-[0.84rem] font-medium tracking-tight text-sage-deep">
                      {p.role}
                    </p>

                    {/* 인용문 길이가 달라도 아래 항목 행이 어긋나지 않도록 최소 높이 고정 */}
                    <p className="kr mt-5 flex min-h-[3.6rem] items-start border-l border-sand-deep pl-4 text-[0.88rem] italic leading-relaxed text-ink-soft">
                      &ldquo;{p.quote}&rdquo;
                    </p>

                    <dl className="mt-6 space-y-3 border-t border-sand pt-5 text-[0.82rem]">
                      <div>
                        <dt className="kr text-ink-mute">전문 분야</dt>
                        <dd className="kr mt-1 min-h-[2.6rem] text-ink-soft">
                          {p.focus}
                        </dd>
                      </div>
                      <div>
                        <dt className="kr text-ink-mute">보유 자격</dt>
                        <dd className="mt-1.5">
                          <ul className="space-y-1.5">
                            {p.certs.map((c) => (
                              <li
                                key={c}
                                className="kr flex items-start gap-2.5 text-ink-soft"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-[0.5rem] h-[3px] w-[3px] shrink-0 rounded-full bg-sage"
                                />
                                {c}
                              </li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="kr mt-12 text-[0.76rem] leading-relaxed text-ink-mute">
            * 데모용 가상 프로필입니다. 강사 이름, 경력, 자격 사항은 예시이며 사진은
            AI로 생성한 이미지로 실존 인물이 아닙니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
