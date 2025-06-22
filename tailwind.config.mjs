/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sunshine: {
          DEFAULT: '#FACC15', // primary
          title: '#FDE047', // titleColor
          text: '#FFFFFF', // textColor
        },
        card: {
          ruby: '#EF4444', // cardColor1 - rojo
          emerald: '#22C55E', // cardColor2 - verde
          sapphire: '#3B82F6', // cardColor3 - azul
          amethyst: '#A855F7', // cardColor4 - púrpura
          amber: '#F97316', // cardColor5 - naranja
          rose: '#EC4899', // cardColor6 - rosa
        },
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.black'),
            p: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            strong: {
              color: theme('colors.black'),
              fontWeight: '700',
            },
            li: {
              marginTop: '0.25em',
              marginBottom: '0.25em',
            },
          },
        },
        sm: {
          css: {
            fontSize: '0.875rem',
            lineHeight: '1.5rem',
          },
        },
        lg: {
          css: {
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
          },
        },
      }),
      boxShadow: {
        brutal: '6px 6px 0 0 #000',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
