import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'nuxt-green': '#00DC82',
        'neon-green': '#00FF94',
        'accent-green': '#34F5C5'
      }
    }
  }
}
