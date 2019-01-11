import Typography from "typography"

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.45,
  googleFonts: [
    {
      name: 'Lato',
      styles: ['400'],
    },
    {
      name: 'Noto Sans',
      styles: ['400', '600', '700'],
    },
  ],
  headerWeight: '400',
  headerFontFamily: ['Lato', 'sans-serif'],
  bodyFontFamily: ['Noto Sans', 'sans-serif'],
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    a: {
      textDecoration: 'none',
    }
  })
})

export default typography