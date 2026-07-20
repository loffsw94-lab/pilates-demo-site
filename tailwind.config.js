/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 브랜드 팔레트 — 아이보리 / 베이지 / 밝은 우드 / 세이지
        ivory: {
          DEFAULT: "#faf8f4",
          deep: "#f3eee5",
        },
        sand: {
          DEFAULT: "#e9e0d2",
          deep: "#d8cab4",
        },
        wood: "#b8946c",
        sage: {
          DEFAULT: "#7d8f7a",
          deep: "#566a54",
          mist: "#dfe5db",
        },
        ink: {
          DEFAULT: "#2a2723",
          soft: "#5d564e",
          mute: "#8b8177",
        },
      },
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "Apple SD Gothic Neo",
          "Malgun Gothic",
          "맑은 고딕",
          "system-ui",
          "sans-serif",
        ],
        display: ["Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
