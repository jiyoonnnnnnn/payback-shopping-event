/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gangwon': ['GangwonEduPower', 'sans-serif'],
        'pretendard': ['Pretendard', 'sans-serif'],
        'noto': ['Noto Sans KR', 'sans-serif'],
        'black-han': ['Black Han Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
