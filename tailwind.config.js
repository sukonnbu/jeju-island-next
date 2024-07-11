/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      NanumGothic: ["나눔바른고딕"],
      NanumSquare: ["나눔스퀘어볼드"]
    },
    extend: {
      backgroundImage: {
        "jeju-banner": "url('./banner.jpg')"
      }
    },
  },
  plugins: [],
};
