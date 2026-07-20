import type { Metadata, Viewport } from "next";
import "../styles/pretendard.css";
import "./globals.css";

/**
 * 히어로 헤드라인(H1) 글자가 속한 서브셋만 미리 받아 FOUT 을 막는다.
 * 나머지 한글 서브셋은 브라우저가 unicode-range 를 보고 필요한 것만 가져간다.
 */
const CRITICAL_FONTS = [
  "/fonts/pretendard/PretendardVariable.subset.88.woff2",
  "/fonts/pretendard/PretendardVariable.subset.90.woff2",
  "/fonts/pretendard/PretendardVariable.subset.91.woff2",
];

export const metadata: Metadata = {
  title: "여백 필라테스 | 서울 프리미엄 소수정예 필라테스 스튜디오",
  description:
    "하루 한 시간, 나를 위한 여백. 자연광이 드는 공간에서 1:1 맞춤 지도와 최대 4인 소수정예 리포머 수업으로 체형과 컨디션을 함께 관리합니다.",
  keywords: [
    "필라테스",
    "프리미엄 필라테스",
    "리포머 필라테스",
    "체형교정",
    "소수정예 필라테스",
    "서울 필라테스",
  ],
  openGraph: {
    title: "여백 필라테스 | 서울 프리미엄 소수정예 필라테스 스튜디오",
    description:
      "하루 한 시간, 나를 위한 여백. 1:1 맞춤 지도와 소수정예 리포머 수업.",
    type: "website",
    locale: "ko_KR",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf8f4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        {CRITICAL_FONTS.map((href) => (
          <link
            key={href}
            rel="preload"
            as="font"
            type="font/woff2"
            href={href}
            crossOrigin="anonymous"
          />
        ))}
        {/*
          JS가 동작할 때만 스크롤 등장 연출의 '숨김' 상태를 켠다.
          스크립트가 실패하면 .reveal 요소가 그대로 보이므로 백지 화면이 되지 않는다.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-ivory text-ink">
        {children}
      </body>
    </html>
  );
}
