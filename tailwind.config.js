/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary - Forest Green
        'primary':                  '#006c40',
        'primary-container':        '#0b8852',
        'primary-fixed':            '#8ef8b7',
        'primary-fixed-dim':        '#72db9d',
        'on-primary':               '#ffffff',
        'on-primary-container':     '#ffffff',
        'on-primary-fixed':         '#002110',
        'on-primary-fixed-variant': '#00522f',
        'inverse-primary':          '#72db9d',

        // Secondary
        'secondary':                '#575e70',
        'secondary-container':      '#d9dff5',
        'secondary-fixed':          '#dce2f7',
        'secondary-fixed-dim':      '#c0c6db',
        'on-secondary':             '#ffffff',
        'on-secondary-container':   '#5c6274',
        'on-secondary-fixed':       '#141b2b',
        'on-secondary-fixed-variant': '#404758',

        // Tertiary
        'tertiary':                 '#006c3e',
        'tertiary-container':       '#00884f',
        'tertiary-fixed':           '#72fcab',
        'tertiary-fixed-dim':       '#52df91',
        'on-tertiary':              '#ffffff',
        'on-tertiary-container':    '#ffffff',
        'on-tertiary-fixed':        '#00210f',
        'on-tertiary-fixed-variant': '#00522e',

        // Surface & Background
        'background':               '#f7f9fb',
        'background-surface':       '#ffffff',
        'surface':                  '#f7f9fb',
        'surface-dim':              '#d8dadc',
        'surface-bright':           '#f7f9fb',
        'surface-variant':          '#e0e3e5',
        'surface-container-lowest': '#ffffff',
        'surface-container-low':    '#f2f4f6',
        'surface-container':        '#eceef0',
        'surface-container-high':   '#e6e8ea',
        'surface-container-highest':'#e0e3e5',
        'surface-tint':             '#006d40',
        'inverse-surface':          '#2d3133',
        'inverse-on-surface':       '#eff1f3',

        // On Surface
        'on-background':            '#191c1e',
        'on-surface':               '#191c1e',
        'on-surface-variant':       '#3e4a41',

        // Outline
        'outline':                  '#6e7a70',
        'outline-variant':          '#bdcabe',

        // Error
        'error':                    '#ba1a1a',
        'error-container':          '#ffdad6',
        'on-error':                 '#ffffff',
        'on-error-container':       '#93000a',

        // Brand Specific
        'deep-navy':                '#081C3A',
        'accent-cyan':              '#00D4FF',
        'text-primary':             '#111827',
        'text-secondary':           '#4B5563',
        'border-subtle':            '#E2E8F0',
      },
      fontFamily: {
        sans:         ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'headline-md':['Poppins'],
        'headline-lg':['Poppins'],
        'body-md':    ['Poppins'],
        'body-lg':    ['Poppins'],
        'title-lg':   ['Poppins'],
        'display-lg': ['Poppins'],
        'label-md':   ['Poppins'],
        caption:      ['Poppins'],
      },
      fontSize: {
        'display-lg':  ['48px', { lineHeight: '1.1',  letterSpacing: '-0.02em', fontWeight: '700' }],
        'headline-lg': ['32px', { lineHeight: '1.2',  letterSpacing: '-0.01em', fontWeight: '600' }],
        'headline-md': ['24px', { lineHeight: '1.3',  fontWeight: '600' }],
        'title-lg':    ['20px', { lineHeight: '1.4',  fontWeight: '500' }],
        'body-lg':     ['16px', { lineHeight: '1.6',  fontWeight: '400' }],
        'body-md':     ['14px', { lineHeight: '1.5',  fontWeight: '400' }],
        'label-md':    ['13px', { lineHeight: '1.2',  letterSpacing: '0.05em', fontWeight: '600' }],
        caption:       ['12px', { lineHeight: '1.4',  fontWeight: '400' }],
      },
      spacing: {
        gutter:           '24px',
        'section-gap':    '80px',
        'margin-desktop': '48px',
        'container-max':  '1440px',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg:      '0.5rem',
        xl:      '0.75rem',
        '2xl':   '1rem',
        '3xl':   '1.5rem',
        premium: '18px',
        full:    '9999px',
      },
      maxWidth: {
        'container-max': '1440px',
      },
      backdropBlur: {
        md: '12px',
      },
      animation: {
        float:      'float 6s ease-in-out infinite',
        'live-pulse': 'live-pulse 2s ease-in-out infinite',
        'scroll-banner': 'scroll-banner 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        'live-pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.5', transform: 'scale(1.2)' },
        },
        'scroll-banner': {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
