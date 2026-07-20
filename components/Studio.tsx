import { studioImage } from "@/lib/media";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const FEATURES = [
  {
    title: "3면 통창의 자연광",
    body: "조명 대신 햇빛으로 운동합니다. 시간대에 따라 빛이 달라지는 것만으로도 수업의 인상이 바뀝니다.",
  },
  {
    title: "최대 4인이라는 기준",
    body: "수익보다 지도 밀도를 먼저 둔 숫자입니다. 강사가 모든 회원의 정렬을 확인할 수 있는 최소 단위를 지킵니다.",
  },
  {
    title: "매일 점검하는 기구",
    body: "리포머 스프링과 로프는 매일 개점 전 점검하고, 소모품은 사용 횟수 기준으로 교체합니다.",
  },
  {
    title: "수업 외 시간의 배려",
    body: "개인 락커, 샤워실, 파우더룸을 갖췄습니다. 출근 전이나 퇴근 후에도 부담 없이 들르실 수 있습니다.",
  },
];

export default function Studio() {
  return (
    <section id="studio" className="scroll-mt-20 bg-ivory-deep">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <figure className="overflow-hidden rounded-2xl bg-sand">
              <img
                src={studioImage.src}
                srcSet={`${studioImage.srcMobile} 640w, ${studioImage.src} 1024w`}
                sizes="(min-width: 1024px) 46vw, 92vw"
                width={studioImage.width}
                height={studioImage.height}
                alt={studioImage.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
                style={{ aspectRatio: "16 / 9" }}
              />
            </figure>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="The Studio"
              title={
                <>
                  비어 있어서
                  <br />
                  더 잘 보이는 공간
                </>
              }
              description="기구를 빽빽하게 채우지 않았습니다. 움직임에 필요한 여백을 남기는 것이 이 스튜디오의 기준입니다."
            />

            <dl className="mt-12 space-y-9">
              {FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={i * 80}>
                  <div className="border-l border-sand-deep pl-6">
                    <dt className="kr text-[1.02rem] font-medium tracking-tight text-ink">
                      {f.title}
                    </dt>
                    <dd className="kr mt-2.5 text-[0.9rem] leading-relaxed text-ink-soft">
                      {f.body}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
