/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        primaryLight: 'var(--color-primaryLight)',
        secondary: 'var(--color-secondary)',
        secondaryLight: 'var(--color-secondaryLight)',
        offWhite: 'var(--color-offWhite)',
        grayTheme: 'var(--color-grayTheme)',
        darkTheme: 'var(--color-darkTheme)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
      },
      spacing: {
        header: 'var(--height-header)' 
      },
      height: {
        header: 'var(--height-header)'
      },
      backgroundColor: {
        header: 'var(--color-bg-header)',
        footer: 'var(--color-bg-footer)',
      },
      textColor: {
        header: 'var(--color-text-header)',
        footer: 'var(--color-text-footer)',
      },
      fontFamily: {
        'theme': ['Audiowide'],
        'sans': ['Montserrat'],
      },
    },
    backgroundImage: {
      'whats': "url('/assets/images/bgWhats.jpg')"
    },
  },
  plugins: [],
}

