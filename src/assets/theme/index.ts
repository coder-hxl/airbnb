const theme = {
  color: {
    primaryColor: '#ff385c',
    secondaryColor: '#00848A',
  },
  text: {
    primaryColor: '#484848',
    secondaryColor: '#222222',
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 0.5s ease;
      &:hover {
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
      }
    `,
  },
}

type ThemeType = typeof theme

export default theme
export type { ThemeType }
