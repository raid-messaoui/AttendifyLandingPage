import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { 50: "#EAF6FC", 100: "#CFE9F7", 400: "#23A6DE", 500: "#248DCE", 600: "#1279BE" },
        ink: { 900: "#0B2F4F", 600: "#3F5F7A", 400: "#7A95AB" },
        surface: { DEFAULT: "#F8F8F8", 2: "#EBEBEB" },
        line: "#DCE7EF",
        success: "#1FA971",
        warning: "#F5A524",
        danger: "#E5484D",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "var(--font-cairo)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "var(--font-cairo)", "system-ui", "sans-serif"],
      },
      borderRadius: { lg2: "24px", md2: "14px" },
      boxShadow: { card: "0 10px 30px rgba(18,121,190,.12)", lift: "0 18px 44px rgba(18,121,190,.22)" },
      backgroundImage: {
        brand: "linear-gradient(90deg,#23A6DE 0%,#248DCE 50%,#1279BE 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
