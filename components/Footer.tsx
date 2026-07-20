const NAV = [
  { href: "#programs", label: "프로그램" },
  { href: "#studio", label: "스튜디오" },
  { href: "#coaching", label: "맞춤 지도" },
  { href: "#instructors", label: "강사 소개" },
  { href: "#reviews", label: "회원 후기" },
  { href: "#pricing", label: "이용권 안내" },
  { href: "#facility", label: "시설 안내" },
  { href: "#faq", label: "자주 묻는 질문" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="flex items-baseline gap-3">
              <span className="font-display text-2xl tracking-[0.14em]">
                YEOBAEK
              </span>
              <span className="text-[0.7rem] tracking-[0.24em] text-ivory/60">
                여백 필라테스
              </span>
            </div>
            <p className="kr mt-6 max-w-md text-[0.88rem] leading-relaxed text-ivory/65">
              하루 한 시간, 나를 위한 여백.
              <br />
              서울 ○○구에서 소수정예로 운영하는 프리미엄 필라테스 스튜디오입니다.
            </p>

            <dl className="mt-8 space-y-2 text-[0.82rem] text-ivory/55">
              <div className="flex gap-3">
                <dt className="w-16 shrink-0">주소</dt>
                <dd className="kr">서울시 ○○구 ○○로 00, 3층</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-16 shrink-0">전화</dt>
                <dd>02-1234-5678</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-16 shrink-0">운영시간</dt>
                <dd className="kr">평일 07:00–22:00 · 토 09:00–17:00</dd>
              </div>
            </dl>
          </div>

          <nav aria-label="바닥글 메뉴">
            <h2 className="text-[0.68rem] font-medium uppercase tracking-[0.28em] text-ivory/45">
              Menu
            </h2>
            <ul className="mt-6 grid grid-cols-2 gap-y-3.5">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="kr text-[0.86rem] text-ivory/70 transition-colors hover:text-ivory"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 border-t border-ivory/15 pt-8">
          <p className="kr text-[0.76rem] leading-relaxed text-ivory/45">
            <strong className="font-medium text-ivory/60">
              데모 사이트 안내
            </strong>
            <br />
            &lsquo;여백 필라테스(YEOBAEK)&rsquo;는 홈페이지 제작 예시를 보여드리기
            위해 만든 가상의 브랜드입니다. 실존하는 업체·상호·로고와 관련이 없으며,
            지면에 표시된 주소, 연락처, 이용 금액, 회원 수, 재등록률 등의 수치는 모두
            예시용입니다. 강사 프로필(강수진·노지혜·김현지)과 회원 후기 역시 가상으로
            작성한 것입니다. 사이트에 사용된 사진과 영상은 AI로 생성한 이미지로 실제
            인물이나 장소를 촬영한 것이 아닙니다.
          </p>
          <p className="mt-6 text-[0.74rem] text-ivory/35">
            © {new Date().getFullYear()} YEOBAEK Pilates — Demo. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
