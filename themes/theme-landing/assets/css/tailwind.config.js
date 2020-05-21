module.exports = {
  theme: {
    extend: {
      spacing: {
        '28': '7rem'
      },
      minHeight: {
        screen80: '80vh'
      },
      colors: {
        brand: {
          blue: '#3e89eb',
          darkblue: '#3f4f68',
          gray: '#d1d8e0',
          green: '#38ac87',
          orange: '#f5ab35',
          red: '#ec6445',
          pink: '#ea929c',
          purple: '#404e9e',
          yellow: '#fbbd08'
        },
        gray: {
          default: '#d2d2d2',
          'light': '#f3f3f3',
          'dark': '#262626'
        },
        black: {
          default: '#000000',
          '200': '#cccccc',
          '400': '#999999',
          '600': '#666666',
          '800': '#333333'
        },
        twhite: {
          '100': 'rgba(255, 255, 255, 0.1)',
          '200': 'rgba(255, 255, 255, 0.2)',
          '300': 'rgba(255, 255, 255, 0.3)',
          '400': 'rgba(255, 255, 255, 0.4)',
          '500': 'rgba(255, 255, 255, 0.5)',
          '600': 'rgba(255, 255, 255, 0.6)',
          '700': 'rgba(255, 255, 255, 0.7)',
          '800': 'rgba(255, 255, 255, 0.8)',
          '900': 'rgba(255, 255, 255, 0.9)'
        }
      }
    }
  },
  variants: {
    backgroundOpacity: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: []
}
