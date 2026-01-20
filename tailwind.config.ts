import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Soft, warm neutrals - 2025 trend
        'cream': '#FFF8F0',
        'cream-dark': '#F5EBE0',
        'sand': '#E8DDD0',
        
        // Pantone 2025 inspired
        'mocha': '#94452ed9',
        'mocha-light': '#C9A896',
        'mocha-dark': '#8B6352',
        
        // Accent colors - soft and sophisticated
        'peach': '#FFB5A7',
        'coral': '#ea8532',
        'terracotta': '#E07A5F',
        'sage': '#9BB89F',
        
        // Neutrals for depth
        'charcoal': '#3D405B',
        'slate': '#81848F',
        'fog': '#D4D6DD',
        
        // Pure tones
        'off-white': '#FEFEFE',
        'off-black': '#1A1A1A',

        //greens
        'green-light': '#9bb89f',
        'green-dark': '#376147',

        'accent-green': '#376147d9',
        'accent-gold': '#ce605f',
      },
      fontFamily: {
        'display': ['Zodiak', 'Fraunces', 'serif'], // Editorial display font
        'sans': ['General Sans', 'Inter', 'sans-serif'], // Modern geometric sans
        'mono': ['JetBrains Mono', 'monospace'], // Keep for code
        'body': ['Sentient', 'Georgia', 'serif'], // Elegant body font
      },
      animation: {
        'fadeIn': 'fadeIn 0.8s ease-in-out',
        'slideUp': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slideDown': 'slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'scaleIn': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(60px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { 
            backgroundPosition: '200% 0',
          },
          '50%': { 
            backgroundPosition: '-200% 0',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(5deg)' },
          '66%': { transform: 'translateY(-10px) rotate(-5deg)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
