/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "noise-pattern": "url(../assets/noise.png)",
      },
      fontFamily: {
        mont: "Mont-regular",
        "mont-semi-bold": "Mont-Semi-Bold",
        "mont-bold": "Mont-bold",
        "mont-heavy": "Mont-Heavy"
      },
      animation: {
        'bounce-slow': "arrow-bounce 1s ease infinite"
      },
      keyframes: {
        "arrow-bounce": {
          '0%, 100%': {transform: 'translateY(0)'},
          '50%': {transform: 'translateY(-5px)'}
        }
      }
    },
  },
  plugins: [],
};

