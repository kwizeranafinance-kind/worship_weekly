import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Royal purples
        royal: {
          50: '#F5F1FB',
          100: '#EDE5F8',
          500: '#6D28D9',
          600: '#4C1D95',
          700: '#3B0764',
        },
        // Violets
        violet: {
          400: '#A78BFA',
          500: '#7C3AED',
        },
        // Lavenders
        lavender: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          300: '#C4B5FD',
          400: '#E0E7FF',
        },
        // Gold
        gold: {
          300: '#FCD34D',
          400: '#F59E0B',
          50: '#FEF3C7',
        },
        // Dark theme
        ink: {
          900: '#1E0A35',
          800: '#2D1052',
          700: '#4C1D95',
          600: '#0D0120',
          500: '#07020F',
        },
        // Text
        'text-dim': '#A78BFA',
        'text-soft': '#C4B5FD',
        'text-light': '#EDE9FE',
      },
      fontSize: {
        xs: ['0.7rem', { lineHeight: '1rem' }],
        sm: ['0.81rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.1rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
      },
      fontFamily: {
        cinzel: ["'Cinzel'", 'serif'],
        'cinzel-decorative': ["'Cinzel Decorative'", 'serif'],
        garamond: ["'EB Garamond'", 'serif'],
        inter: ["'Inter'", 'sans-serif'],
      },
      animation: {
        'rec-spin': 'rec-spin 10s linear infinite',
        'hero-rec-glow': 'hero-rec-glow 3.5s ease-in-out infinite',
        'pulse-red': 'pulse-red 1.5s infinite',
        'pulse-dot': 'pulse-dot 1.8s infinite',
        'halo-pulse': 'halo-pulse 3.5s ease-in-out infinite',
        'spin-slow': 'spin-slow 10s linear infinite',
        'bounce-slow': 'bounce 2.8s ease-in-out infinite',
      },
      keyframes: {
        'rec-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'hero-rec-glow': {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 24px rgba(109,40,217,0.6)) drop-shadow(0 0 12px rgba(245,158,11,0.4))',
            transform: 'scale(1) translateY(0)',
          },
          '50%': {
            filter: 'drop-shadow(0 0 44px rgba(167,139,250,0.9)) drop-shadow(0 0 20px rgba(245,158,11,0.6))',
            transform: 'scale(1.06) translateY(-3px)',
          },
        },
        'pulse-red': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.3)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        'halo-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.12)', opacity: '1' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      backgroundImage: {
        'gradient-royal': 'linear-gradient(135deg, var(--color-royal-500) 0%, var(--color-royal-600) 50%, var(--color-violet-400) 100%)',
        'gradient-gold': 'linear-gradient(135deg, var(--color-gold-400) 0%, var(--color-gold-300) 100%)',
        'gradient-hero': 'radial-gradient(ellipse 70% 55% at 50% 35%, rgba(109,40,217,0.28) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 15% 70%, rgba(76,29,149,0.35) 0%, transparent 60%), radial-gradient(ellipse 55% 35% at 85% 25%, rgba(245,158,11,0.1) 0%, transparent 60%), radial-gradient(ellipse 40% 60% at 50% 100%, rgba(59,7,100,0.5) 0%, transparent 70%)',
      },
      boxShadow: {
        'glass': '0 24px 70px rgba(0,0,0,0.6), 0 0 0 1px rgba(167,139,250,0.06), inset 0 1px 0 rgba(167,139,250,0.1)',
        'glow-purple': '0 4px 28px rgba(109,40,217,0.5)',
        'glow-gold': '0 4px 24px rgba(245,158,11,0.45)',
      },
      borderRadius: {
        'base': '14px',
        'lg': '24px',
      },
    },
  },
  plugins: [],
};

export default config;
