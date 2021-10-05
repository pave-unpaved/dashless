module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      mono: ['Roboto Mono', 'Monospace']
    },
    colors: {
      transparent: 'transparent',
      light: '#e0c0ff',
      dark: {
        800: '#381f54',
        900: '#170e2d'
      },
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      padding: {
        '20p': '20%',
        '15p': '15%',
        '10p': '10%',
      },
      scale: {
        'x-n1': '-1',
      }
    },
    container: {
      center: true,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
