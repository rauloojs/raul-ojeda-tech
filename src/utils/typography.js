import Typography from "typography"
import fairyGatesTheme from 'typography-theme-fairy-gates'

fairyGatesTheme.headerWeight = '400';
fairyGatesTheme.googleFonts = [
  {
    name: 'Work Sans',
    styles: ['200', '400', '600'],
  },
  {
    name: 'Lato',
    styles: ['400'],
  },
  {
    name: 'Cabin',
    styles: ['600'],
  },
  {
    name: 'Quattrocento Sans',
    styles: ['400', '400i', '700'],
  },
]

const typography = new Typography(fairyGatesTheme)

export default typography