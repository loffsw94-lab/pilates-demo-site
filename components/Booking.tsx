import { heroVideo } from "@/lib/media";
import Reveal from "./Reveal";

export default function Booking() {
  return (
    <section id="booking" className="relative isolate scroll-mt-20 overflow-hidden">
      <img
        src={heroVideo.poster}
        alt=""
        aria-hidden="true"
        width={heroVideo.width}
        height={heroVideo.height}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "rgba(30, 27, 22, 0.68)" }}
      />

      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-28">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.3em] text-ivory/60">
              Free Trial
            </p>
            <h2 className="kr mt-5 text-3xl font-light leading-[1.32] tracking-[-0.02em] text-ivory sm:text-[2.5rem]">
              먼저 한 번,
              <br />
              몸으로 확인해 보세요
            </h2>
            <p className="kr mx-auto mt-6 max-w-lg text-[0.95rem] leading-relaxed text-ivory/75">
              첫 방문에는 체형 분석과 1:1 상담, 리포머 체험 수업을 무료로
              진행합니다. 등록 권유 없이 진행하니 편하게 오셔도 됩니다.
            </p>

            {/* 첫 방문 흐름을 미리 보여줘 방문 전 불안을 줄인다 */}
            <ol className="mx-auto mt-12 grid max-w-2xl gap-6 text-left sm:grid-cols-3">
              {[
                { step: "1", t: "신청", d: "이름과 연락처만 남기면 끝. 30초면 됩니다." },
                { step: "2", t: "방문", d: "편한 옷차림이면 충분합니다. 운동복은 빌려드려요." },
                { step: "3", t: "체험", d: "체형 분석 후 리포머 수업을 직접 해보십니다." },
              ].map((s) => (
                <li key={s.step} className="border-t border-ivory/25 pt-5">
                  <span className="font-display text-[0.72rem] tracking-[0.2em] text-ivory/50">
                    STEP {s.step}
                  </span>
                  <p className="kr mt-2 text-[0.95rem] text-ivory">{s.t}</p>
                  <p className="kr mt-1.5 text-[0.82rem] leading-relaxed text-ivory/65">
                    {s.d}
                  </p>
                </li>
              ))}
            </ol>

            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-ivory px-8 py-4 text-sm font-medium tracking-tight text-ink transition hover:bg-white sm:w-auto"
              >
                무료 체험 신청하기
              </a>
              <a
                href="tel:0212345678"
                className="inline-flex w-full items-center justify-center rounded-full border border-ivory/45 px-8 py-4 text-sm font-medium tracking-tight text-ivory transition hover:border-ivory/80 hover:bg-ivory/10 sm:w-auto"
              >
                전화로 물어보기
              </a>
            </div>

            <p className="mt-8 text-xs tracking-tight text-ivory/55">
              예약제 운영 · 당일 방문은 전화로 확인해 주세요
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
