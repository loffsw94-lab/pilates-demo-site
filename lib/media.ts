/**
 * 생성 미디어 에셋 정의.
 * public/media/generated/media-manifest.json 과 동일한 파일을 참조한다.
 * 모든 이미지는 사전 최적화된 WebP이며, 레이아웃 이동 방지를 위해
 * 실제 픽셀 크기를 함께 보관한다.
 */

const BASE = "/media/generated";

export type ImageAsset = {
  src: string;
  srcMobile: string;
  width: number;
  height: number;
  alt: string;
};

/**
 * 히어로 (nano-banana-pro, 원본 5504x3072).
 * 전면 배경으로 쓰이므로 1920/1280/640 3단계를 제공한다.
 */
export const heroImage = {
  src: `${BASE}/optimized/hero-studio-korean-women-02.webp`,
  src1280: `${BASE}/optimized/hero-studio-korean-women-02-1280.webp`,
  srcMobile: `${BASE}/optimized/hero-studio-korean-women-02-640.webp`,
  width: 1920,
  height: 1072,
  alt: "자연광이 드는 밝은 필라테스 스튜디오에서 두 여성 회원이 리포머 앞에 나란히 서 있는 모습",
};

/**
 * 모바일 세로 화면용 아트디렉션 크롭 (3:4).
 * 가로 원본을 그대로 쓰면 천장이 화면의 1/3을 차지해 비어 보이므로,
 * 인물 중심으로 다시 잘라낸 버전을 별도 제공한다.
 */
export const heroImagePortrait = {
  src: `${BASE}/optimized/hero-studio-korean-women-02-portrait.webp`,
  srcSmall: `${BASE}/optimized/hero-studio-korean-women-02-portrait-600.webp`,
  width: 900,
  height: 1200,
};

export const consultationImage: ImageAsset = {
  src: `${BASE}/optimized/consultation-korean-client-01.webp`,
  srcMobile: `${BASE}/optimized/consultation-korean-client-01-640.webp`,
  width: 1100,
  height: 738,
  alt: "강사와 회원이 창가 원목 테이블에 마주 앉아 수업 방향을 상담하고 있는 모습",
};

export const studioImage: ImageAsset = {
  src: `${BASE}/optimized/studio-interior-01.webp`,
  srcMobile: `${BASE}/optimized/studio-interior-01-640.webp`,
  width: 1024,
  height: 576,
  alt: "밝은 우드 바닥 위에 리포머 두 대가 나란히 놓인 정돈된 필라테스 스튜디오 내부와 통창으로 들어오는 자연광",
};

export const wellnessImage: ImageAsset = {
  src: `${BASE}/optimized/wellness-lifestyle-01.webp`,
  srcMobile: `${BASE}/optimized/wellness-lifestyle-01-640.webp`,
  width: 1024,
  height: 768,
  alt: "수업을 마친 회원이 창가 벤치에 앉아 따뜻한 차를 들고 편안하게 휴식하는 모습",
};

export const heroVideo = {
  src: `${BASE}/video/hero-ambient-studio-01.mp4`,
  poster: `${BASE}/posters/hero-ambient-studio-01-poster.webp`,
  width: 1920,
  height: 1080,
};

/**
 * 강사 포트레이트 (4:5) — 전원 AI 생성, 실존 인물 아님.
 * 체형이 드러나는 운동복 전신 컷으로, 세 컷 모두 머리~허벅지 위쪽 동일 프레이밍.
 */
export const instructorPhotos: Record<string, ImageAsset> = {
  kangSujin: {
    src: `${BASE}/optimized/instructor-kang-sujin-03.webp`,
    srcMobile: `${BASE}/optimized/instructor-kang-sujin-03-400.webp`,
    width: 640,
    height: 800,
    alt: "여백 필라테스 원장 강수진 강사가 세이지색 운동복 차림으로 한 손을 허리에 얹고 스튜디오에 서 있는 프로필 사진",
  },
  kimHyunji: {
    src: `${BASE}/optimized/instructor-kim-hyunji-03.webp`,
    srcMobile: `${BASE}/optimized/instructor-kim-hyunji-03-400.webp`,
    width: 640,
    height: 800,
    alt: "김현지 강사가 베이지색 운동복 차림으로 창가 자연광 아래에서 밝게 미소 지으며 서 있는 프로필 사진",
  },
  noJihye: {
    src: `${BASE}/optimized/instructor-no-jihye-03.webp`,
    srcMobile: `${BASE}/optimized/instructor-no-jihye-03-400.webp`,
    width: 640,
    height: 800,
    alt: "노지혜 강사가 차콜색 운동복 차림으로 바른 자세를 유지한 채 서 있는 프로필 사진",
  },
};
