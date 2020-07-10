export const useTheme = () => ({
  colors: {
    black: '#000000',
    grey: '#999999',
    greySemiLight: '#e4e4e4',
    greyLight: '#f4f4f4',
    link: '#316FEA',
    linkHover: 'rgba(49, 111, 234, 0.75)',
    primary: '#00a699',
    white: '#ffffff'
  },
  fontSizes: {
    extraSmall: '14px',
    small: '16px',
    base: '20px'
  },
  fontWeights: {
    regular: 400,
    semiBold: 600,
    bold: 700,
    extraBold: 800
  },
  radius: {
    small: '4px'
  },
  sizes: {
    extraSmall: '8px',
    small: '16px',
    medium: '24px',
    large: '32px',
    extraLarge: '40px',
    dubleExtraLarge: '80px'
  },
  viewport: {
    maxWidth: '970px'
  },
  mediaQueries: {
    medium: '768px',
    large: '940px'
  }
})
