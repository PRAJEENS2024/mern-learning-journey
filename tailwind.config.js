/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
// it is not used in this folder right now, but it is used in the main project folder, because it is using cdn(online tailwind), so it is not necessary to use it in this folder, but it is good to have it here for future use if needed.