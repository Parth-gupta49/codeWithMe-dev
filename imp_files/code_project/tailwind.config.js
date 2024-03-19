/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#2c2b2b",
          "200": "#101a24",
          "300": "#181818",
          "400": "rgba(24, 24, 24, 0.27)",
          "500": "rgba(0, 0, 0, 0.8)",
        },
        goldenrod: "#f7b41a",
        white: "#fff",
        "neutral-04": "#adb39e",
        darkslategray: {
          "100": "#494949",
          "200": "#454545",
        },
        black: "#000",
        gainsboro: "rgba(217, 217, 217, 0.1)",
      },
      spacing: {},
      fontFamily: {
        acme: "Acme",
        poppins: "Poppins",
        "dm-sans": "'DM Sans'",
        "david-libre": "'David Libre'",
        "contrail-one": "'Contrail One'",
      },
      borderRadius: {
        "6xl": "25px",
        "81xl": "100px",
        "8xs": "5px",
        "31xl": "50px",
      },
    },
    fontSize: {
      "26xl": "2.813rem",
      "12xl": "1.938rem",
      "9xl": "1.75rem",
      "77xl": "6rem",
      "6xl": "1.563rem",
      lg: "1.125rem",
      "93xl": "7rem",
      "5xl": "1.5rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
