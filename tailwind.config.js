/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-desktop":
          "url('/public/images/home/background-home-desktop.jpg')",
        "home-tablet": "url('/public/images/home/background-home-tablet.jpg')",
        "home-mobile": "url('/public/images/home/background-home-mobile.jpg')",
        "destination-desktop":
          "url('/public/images/destination/background-destination-desktop.jpg')",
        "destination-tablet":
          "url('/public/images/destination/background-destination-tablet.jpg')",
        "destination-mobile":
          "url('/public/images/destination/background-destination-mobile.jpg')",
        "crew-desktop":
          "url('/public/images/crew/background-crew-desktop.jpg')",
        "crew-tablet":
          "url('/public/images/crew/background-crew-tablet.jpg')",
        "crew-mobile":
          "url('/public/images/crew/background-crew-mobile.jpg')",
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "third-color": "var(--third-color)",
        "gray-color": "var(--gray-color)",
      },
      fontFamily: {
        "main-font": "Bellefair, serif",
        "sub-font": "Barlow Condensed, serif",
        "sub-font-2": "Barlow, serif",
      },
    },
  },
  plugins: [],
};
