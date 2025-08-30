/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Prism Brand Colors
        brand: {
          50: 'hsl(var(--color-brand-50))',
          100: 'hsl(var(--color-brand-100))',
          200: 'hsl(var(--color-brand-200))',
          300: 'hsl(var(--color-brand-300))',
          400: 'hsl(var(--color-brand-400))',
          500: 'hsl(var(--color-brand-500))',
          600: 'hsl(var(--color-brand-600))',
          700: 'hsl(var(--color-brand-700))',
          800: 'hsl(var(--color-brand-800))',
          900: 'hsl(var(--color-brand-900))',
          950: 'hsl(var(--color-brand-950))',
        },
        // Prism Neutral Colors
        neutral: {
          50: 'hsl(var(--color-neutral-50))',
          100: 'hsl(var(--color-neutral-100))',
          200: 'hsl(var(--color-neutral-200))',
          300: 'hsl(var(--color-neutral-300))',
          400: 'hsl(var(--color-neutral-400))',
          500: 'hsl(var(--color-neutral-500))',
          600: 'hsl(var(--color-neutral-600))',
          700: 'hsl(var(--color-neutral-700))',
          800: 'hsl(var(--color-neutral-800))',
          900: 'hsl(var(--color-neutral-900))',
          950: 'hsl(var(--color-neutral-950))',
        },
        // Prism Accent Colors
        accent: {
          1: {
            100: 'hsl(var(--color-accent-1-100))',
            500: 'hsl(var(--color-accent-1-500))',
            900: 'hsl(var(--color-accent-1-900))',
          },
          2: {
            100: 'hsl(var(--color-accent-2-100))',
            500: 'hsl(var(--color-accent-2-500))',
            900: 'hsl(var(--color-accent-2-900))',
          },
        },
        // Prism Content Colors
        content: {
          primary: 'hsl(var(--color-content-primary))',
          secondary: 'hsl(var(--color-content-secondary))',
          tertiary: 'hsl(var(--color-content-tertiary))',
          'primary-inverse': 'hsl(var(--color-content-primary-inverse))',
          'secondary-inverse': 'hsl(var(--color-content-secondary-inverse))',
          'tertiary-inverse': 'hsl(var(--color-content-tertiary-inverse))',
          disabled: 'hsl(var(--color-content-disabled))',
          brand: 'hsl(var(--color-content-brand))',
          link: 'hsl(var(--color-content-link))',
          'link-hover': 'hsl(var(--color-content-link-hover))',
          'link-pressed': 'hsl(var(--color-content-link-pressed))',
        },
        // Prism Background Colors
        background: {
          primary: 'hsl(var(--color-background-primary))',
          hover: 'hsl(var(--color-background-hover))',
          pressed: 'hsl(var(--color-background-pressed))',
          selected: 'hsl(var(--color-background-selected))',
          disabled: 'hsl(var(--color-background-disabled))',
          inverse: 'hsl(var(--color-background-inverse))',
          brand: 'hsl(var(--color-background-brand))',
          'brand-hover': 'hsl(var(--color-background-brand-hover))',
          'brand-pressed': 'hsl(var(--color-background-brand-pressed))',
        },
        // Prism Border Colors
        border: {
          primary: 'hsl(var(--color-border-primary))',
          secondary: 'hsl(var(--color-border-secondary))',
          tertiary: 'hsl(var(--color-border-tertiary))',
          disabled: 'hsl(var(--color-border-disabled))',
          brand: 'hsl(var(--color-border-brand))',
          inverse: 'hsl(var(--color-border-inverse))',
          focus: 'hsl(var(--color-border-focus))',
        },
        // Tailwind CSS compatibility colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      spacing: {
        // Prism spacing scale
        'xs': 'var(--spacing-xs)',
        's': 'var(--spacing-s)',
        'm': 'var(--spacing-m)',
        'l': 'var(--spacing-l)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
      },
      borderRadius: {
        // Prism border radius values
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'full': 'var(--radius-full)',
      },
      fontFamily: {
        // Prism typography
        'sans': ['var(--font-family-primary)', 'system-ui', 'sans-serif'],
        'system': ['var(--font-family-system)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Prism font sizes
        'xs': 'var(--font-size-xs)',
        's': 'var(--font-size-s)',
        'm': 'var(--font-size-m)',
        'l': 'var(--font-size-l)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
      },
      fontWeight: {
        // Prism font weights
        'regular': 'var(--font-weight-regular)',
        'medium': 'var(--font-weight-medium)',
        'semibold': 'var(--font-weight-semibold)',
      },
      boxShadow: {
        // Prism shadow values (none for clean design)
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
      },
      transitionDuration: {
        // Prism motion
        'DEFAULT': 'var(--motion-duration)',
      },
      transitionTimingFunction: {
        // Prism easing
        'DEFAULT': 'var(--motion-easing)',
      },
    },
  },
  plugins: [],
};
