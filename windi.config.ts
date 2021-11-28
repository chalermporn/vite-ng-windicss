import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  theme: {
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
  },
  alias:{
    bird: 'py-2 px-4 font-semibold rounded-lg text-white bg-green-500 hover:bg-green-700'
  },
  attributify: {
    prefix: 'w:',
  },
  shortcuts: {
    'btn': {
      'color': 'white',
      '@apply': 'cursor-pointer py-2 px-4 font-semibold rounded-lg bg-gray-400',
      '&:hover': {
        '@apply': 'bg-green-700',
        'color': 'white',
      },
    },
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  },
  extract: {
    // accepts globs and file paths relative to project root
    include: [
      'index.html',
      'src/**/*.{html,js,ts}',
    ],
    exclude: [
      'node_modules/**/*',
      '.git/**/*',
    ],
  },
  plugins: [
    require('windicss/plugin/forms'),
  ],
})
