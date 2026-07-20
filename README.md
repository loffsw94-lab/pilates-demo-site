# 여백 필라테스 (YEOBAEK) — 프리미엄 필라테스 스튜디오 데모 사이트

필라테스 스튜디오 원장에게 콜드 DM으로 보여주기 위한 **마스터 데모 홈페이지**입니다.
가상의 프리미엄 브랜드 '여백 필라테스'를 기준으로 제작했으며, 실존 업체·상호·로고와 무관합니다.

이 폴더는 상위 디렉터리의 Python 네이버 쇼핑 모니터링 프로젝트와 **완전히 분리**되어
독립적으로 실행됩니다. (자체 `package.json`, 자체 git 저장소)

---

## 로컬 실행 방법

### 요구 사항

- Node.js 18 이상 (개발 환경 검증: v24.18.0)

### 개발 서버

```bash
cd pilates-demo-site
npm install          # 최초 1회
npm run dev          # http://localhost:3000
```

`npm run dev` 는 `predev` 훅을 통해 Tailwind CSS를 먼저 빌드한 뒤 Next.js 개발 서버를 띄웁니다.

### 프로덕션 빌드

```bash
npm run build
npm start            # http://localhost:3000
```

### CSS만 다시 빌드할 때

컴포넌트에서 Tailwind 클래스를 추가·수정하면 CSS를 다시 만들어야 합니다.

```bash
npm run css          # 1회 빌드
npm run css:watch    # 파일 변경 감시 (개발 중 별도 터미널에서 실행)
```

---

## 기술 스택

| 항목 | 선택 | 비고 |
| --- | --- | --- |
| 프레임워크 | Next.js 16.2 (App Router) | Turbopack 기본 |
| 언어 | TypeScript + React 19 | |
| 스타일 | **Tailwind CSS v3** (CLI 사전 빌드) | v4 미사용 — 아래 참고 |
| 이미지 | 사전 최적화 WebP + 수동 `srcSet` | `next/image`·`sharp` 미사용 |
| 폰트 | 시스템 폰트 스택 | 네트워크 의존 없음 |

### Tailwind v4 대신 v3를 쓰는 이유

이 저장소의 절대 경로에 `#` 문자가 포함되어 있습니다.

```
C:\Users\WIN\Desktop\이 성 우\#0 콘텐츠 파일\2 작업중\#0 대림공조 모니터링\
```

Tailwind v4 의 `@tailwindcss/node` 는 경로를 URL로 해석하기 때문에 `#` 를 프래그먼트
구분자로 오인하고, 경로에 널바이트(`\x00`)를 삽입한 뒤 파일 읽기에 실패합니다.

```
ERR_INVALID_ARG_VALUE: The argument 'path' must be ... without null bytes.
Received 'C:\...\이 성 우\\x00#0 콘텐츠 파일\...'
```

폴더명은 기존 작업 규칙이라 변경하지 않고, PostCSS 기반으로 경로를 처리하는 v3를 사용합니다.
또한 Tailwind를 Next의 PostCSS 파이프라인에 넣으면 Turbopack이 Tailwind 컴파일러를
클라이언트 번들로 끌어와 `Can't resolve 'fs'` 오류가 발생하므로,
**Tailwind CLI로 CSS를 미리 빌드**하고 Next는 완성된 정적 CSS만 로드하도록 분리했습니다.

- CSS 소스: `styles/tailwind.css`
- 빌드 산출물: `app/globals.css` (직접 수정하지 말 것 — `npm run css` 로 재생성)
- 색상·서체 토큰: `tailwind.config.js`

---

## 폴더 구조

```
pilates-demo-site/
├─ app/
│  ├─ layout.tsx           # 메타데이터, html lang="ko", js 클래스 주입
│  ├─ page.tsx             # 섹션 조립
│  └─ globals.css          # ⚠ Tailwind CLI 생성물 (수정 금지)
├─ components/
│  ├─ Header.tsx           # 스크롤 반응형 고정 헤더 + 모바일 메뉴
│  ├─ Hero.tsx             # 영상/이미지 분기 히어로
│  ├─ Programs.tsx         # 신뢰 지표 + 프로그램 4종
│  ├─ Studio.tsx           # 스튜디오 특징
│  ├─ Coaching.tsx         # 맞춤 지도 3단계 + 강사 기준
│  ├─ Journey.tsx          # 4/8/12주 변화 타임라인
│  ├─ Facility.tsx         # 편의시설 · 운영시간 · 위치
│  ├─ Booking.tsx          # 무료 체험 CTA 밴드
│  ├─ Faq.tsx              # FAQ 아코디언 (details/summary)
│  ├─ Contact.tsx          # 문의 채널 + 상담 신청 폼
│  ├─ Footer.tsx           # 가상 브랜드·AI 이미지 고지
│  ├─ FloatingCta.tsx      # 카카오톡 상담 플로팅 버튼
│  ├─ SectionHeading.tsx   # 섹션 제목 공통 컴포넌트
│  └─ Reveal.tsx           # 스크롤 등장 연출
├─ lib/media.ts            # 에셋 경로·크기·alt 정의
├─ styles/tailwind.css     # CSS 소스
├─ tailwind.config.js      # 브랜드 토큰
└─ public/media/generated/
   ├─ originals/           # AI 생성 원본 PNG
   ├─ optimized/           # WebP (1024w / 640w)
   ├─ video/               # 무음 히어로 영상 MP4
   ├─ posters/             # 영상 포스터 WebP
   └─ media-manifest.json  # 프롬프트·모델·품질평가·저작권 확인 필요 여부
```

---

## 미디어 적용 정책

- **히어로**: 데스크톱(≥768px)은 무음 앰비언트 영상(`muted` `autoplay` `loop` `playsInline`),
  모바일은 정적 이미지. 16:9 영상이 세로 화면에서 과도하게 잘리고 데이터 이점도 없기 때문입니다.
- **모션 최소화**: `prefers-reduced-motion: reduce` 이거나 데이터 절약 모드면 항상 정적 이미지,
  스크롤 등장 연출도 비활성화됩니다.
- **지연 로딩**: 히어로를 제외한 모든 이미지에 `loading="lazy"` 적용.
- **레이아웃 이동 방지**: 모든 이미지에 `width`/`height` + `aspect-ratio` 지정.
- **JS 비활성 대응**: 등장 연출의 숨김 상태는 `html.js` 가 있을 때만 적용되므로,
  스크립트가 실패해도 콘텐츠가 사라지지 않습니다.

---

## 데모용 가상 정보 안내

아래 항목은 모두 **예시값**이며 실제 정보가 아닙니다. 실제 스튜디오에 납품할 때 교체해야 합니다.

- 브랜드명 '여백 필라테스 / YEOBAEK'
- 주소(서울시 ○○구 ○○로 00), 전화번호(02-1234-5678)
- 누적 회원 2,400명 / 재등록률 92% / 강사 평균 경력 7년
- 운영시간, 편의시설 관련 서술
- 상담 신청 폼은 **전송되지 않습니다**. 실제 운영 시 알림톡·메일 연동이 필요합니다.

사이트에 쓰인 사진과 영상은 전부 AI로 생성한 것으로 실제 인물·장소가 아닙니다.
상업적 사용 전 Genspark 및 각 모델(fal-ai/flux-2-pro, gemini/veo3.1)의 라이선스 조건을
확인하시기 바랍니다. 자세한 내용은 `public/media/generated/media-manifest.json` 참고.
