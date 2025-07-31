/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1B2A41',     // Deep navy (for nav, titles)
        secondary: '#F9FAFB',   // Very light gray (for background)
        accent: '#3B82F6',      // Blue (for buttons, links)
        text: '#111827',        // Dark gray (main text)
        muted: '#6B7280',       // Muted gray (subtext)
        border: '#E5E7EB',      // Light gray border
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 10px rgba(0, 0, 0, 0.05)',
      },
      spacing: {
        'section': '6rem',
      },
    },
  },
  plugins: [],
};
