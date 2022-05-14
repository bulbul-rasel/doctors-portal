module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#19D3AE",
          "secondary": "#0FCFEC",
          "accent": "#3A4256",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
          "info": "#98A8DD",
          "success": "#1BBB70",
          "warning": "#DF7E07",
          "error": "#FA5C5C",
        },
      },
      {
        dark: {
          "primary": "#96B2E3",
          "secondary": "#75EACF",
          "accent": "#4B5563",
          "neutral": "#F3F4F6",
          "base-100": "#1F2937",
          "info": "#98A8DD",
          "success": "#1BBB70",
          "warning": "#F59E0B",
          "error": "#FB7185",
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
