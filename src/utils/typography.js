import Typography from "typography"

const typography = new Typography({
  baseFontSize: '16px',
  googleFonts: [
    {
      name: 'Lato',
      styles: ['400'],
    },
    {
      name: 'Muli',
      styles: ['400', '600', '700'],
    },
  ],
  headerWeight: '400',
  headerFontFamily: ['Lato', 'sans-serif'],
  bodyFontFamily: ['Muli', 'sans-serif'],
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    a: {
      textDecoration: 'none',
    }
  })
})

export default typography