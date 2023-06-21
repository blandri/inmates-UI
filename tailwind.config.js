module.exports = {
    content: ['./src/**/*.{js,jsx}'],
    theme: {
      screens: {
        xs: '200px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        white: '#FFFFFF',
      },
      fontFamily: {},
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      },
      animation: {},
      keyframes: {},
    },
    plugins: [],
  }