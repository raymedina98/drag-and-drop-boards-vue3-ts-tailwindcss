import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.blue[600],
        danger: colors.red[600],
        'primary-light': colors.blue[100],
        'danger-light': colors.red[100]
      }
    }
  },
  safelist: ['text-primary', 'text-danger', 'bg-primary-light', 'bg-danger-light'],
  plugins: []
} satisfies Config
