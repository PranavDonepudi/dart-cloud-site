export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#3C2AB5",
          yellow: "#F9B223",
          light: "#ECEAFF",
        },
      },
    },
  },
  plugins: [],
}
