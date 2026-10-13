/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        accent: '#00ff66',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'none' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        letterIn: {
          from: { opacity: '0', filter: 'blur(14px)', transform: 'translateY(30px)' },
          to: { opacity: '1', filter: 'blur(0)', transform: 'none' },
        },
        popIn: {
          from: { opacity: '0', transform: 'scale(0.92) translateY(12px)' },
          to: { opacity: '1', transform: 'none' },
        },
        sweep: {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(400%)' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '45%': { opacity: '0.45' },
          '50%': { opacity: '1' },
          '55%': { opacity: '0.2' },
          '60%': { opacity: '1' },
        },
        glitch: {
          '0%, 91%, 100%': { transform: 'none', textShadow: 'none' },
          '92%': { transform: 'translate(-3px, 0)', textShadow: '3px 0 #00ff66' },
          '94%': { transform: 'translate(3px, 1px)', textShadow: '-3px 0 #00ff66' },
          '96%': { transform: 'translate(-2px, -1px)', textShadow: '2px 0 #00ff66' },
        },
        grow: {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        'fade-in': 'fadeIn 0.35s ease both',
        'letter-in': 'letterIn 1s cubic-bezier(0.2, 0.7, 0.2, 1) both',
        'pop-in': 'popIn 0.45s cubic-bezier(0.2, 0.9, 0.3, 1.1) both',
        sweep: 'sweep 1.6s ease-in-out infinite',
        blink: 'blink 1s steps(1) infinite',
        flicker: 'flicker 4s linear infinite',
        glitch: 'glitch 3.2s steps(1) infinite',
        grow: 'grow 3.2s linear forwards',
      },
    },
  },
  plugins: [],
}
