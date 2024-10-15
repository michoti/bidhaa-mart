import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
  	container: {
  		center: 'true',
  		padding: {
  			DEFAULT: '0',
  			sm: '0',
  			md: '0',
  			lg: '0',
  			xl: '0',
  			'2xl': '2rem',
  			'3xl': '2rem',
  			'4xl': '2rem'
  		},
  		screens: {
  			xs: '360px',
  			sm: '575px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1280px',
  			'2xl': '1440px',
  			'3xl': '1680px',
  			'4xl': '1920px'
  		}
  	},
  	colors: {
  		primary: {
  			'50': '#fcf3f6',
  			'100': '#fbe8f0',
  			'200': '#f8d2e1',
  			'300': '#f4adc8',
  			'400': '#ef94b4',
  			'500': '#e15381',
  			'600': '#cf335d',
  			'700': '#b32346',
  			'800': '#94203b',
  			'900': '#7c1f34'
  		},
  		secondary: {
  			'50': '#f0f8ff',
  			'100': '#e0f0fe',
  			'200': '#bae2fd',
  			'300': '#7ccbfd',
  			'400': '#37b1f9',
  			'500': '#0d97ea',
  			'600': '#016fb9',
  			'700': '#025fa2',
  			'800': '#065186',
  			'900': '#0c446e'
  		},
  		white: '#FFFFFF',
  		black: '#1f1f1f',
  		slate: 'colors.slate',
  		gray: 'colors.gray',
  		neutral: 'colors.neutral',
  		red: 'colors.red',
  		green: 'colors.green',
  		transparent: 'transparent',
  		heading: 'colors.black',
  		paragraphe: 'colors.gray[600],
  		label: 'colors.black',
  		placeholder: 'colors.gray[400],
  		body: 'colors.slate[700],
  		table: 'colors.gray[900],
  		background: 'colors.gray[100],
  		border: 'colors.gray[200],
  		'inputs-border': 'colors.gray[300],
  		icon: 'colors.gray[500]
  	},
  	fontWeight: {
  		thin: '100',
  		hairline: '100',
  		extralight: '200',
  		light: '300',
  		normal: '400',
  		medium: '500',
  		semibold: '600',
  		bold: '700',
  		extrabold: '800',
  		black: '900'
  	},
  	fontSize: {
  		sm: '0.8rem',
  		base: '1rem',
  		xl: '1.25rem',
  		'2xl': '1.563rem',
  		'3xl': '1.953rem',
  		'4xl': '2.441rem',
  		'5xl': '3.052rem',
  		h1: [\n        "4rem",\n        {\n          lineHeight: "5rem",\n          letterSpacing: "0.0375em",\n          fontWeight: "700",\n        },\n      ],
  		h2: [\n        "3rem",\n        {\n          lineHeight: "2rem",\n          letterSpacing: "0.035em",\n          fontWeight: "700",\n        },\n      ],
  		h3: [\n        "2.5rem",\n        {\n          lineHeight: "3.5rem",\n          letterSpacing: "0.05em",\n          fontWeight: "700",\n        },\n      ],
  		h4: [\n        "2rem",\n        {\n          lineHeight: "2.75rem",\n          letterSpacing: "0em",\n          fontWeight: "700",\n        },\n      ],
  		h5: [\n        "1.5rem",\n        {\n          lineHeight: "2.5rem",\n          letterSpacing: "0em",\n          fontWeight: "600",\n        },\n      ],
  		h6: [\n        "1.25rem",\n        {\n          lineHeight: "2rem",\n          letterSpacing: "0rem",\n          fontWeight: "500",\n        },\n      ],
  		p: [\n        "0.875rem",\n        {\n          lineHeight: "1.5rem",\n          letterSpacing: "0rem",\n          fontWeight: "400",\n        },\n      ],
  		body: [\n        "1rem",\n        {\n          lineHeight: "1.5rem",\n          letterSpacing: "0rem",\n          fontWeight: "400",\n        },\n      ],
  		span: [\n        "0.75rem",\n        {\n          lineHeight: "1.5rem",\n          letterSpacing: "0rem",\n          fontWeight: "400",\n        },\n      ]
  	},
  	extend: {
  		boxShadow: {
  			button: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'heart-beating': {
  				'0%, 10%': {
  					transform: 'scale(1)'
  				},
  				'10%, 100%': {
  					transform: 'scale(1.01)'
  				},
  				'100%, 0%': {
  					transform: 'scale(1)'
  				}
  			},
  			radius: {
  				'0%': {
  					borderRadius: '0px'
  				},
  				'10%, 30': {
  					borderRadius: '10px',
  					transition: '1s ease'
  				},
  				'30%, 100%': {
  					borderRadius: '40px',
  					boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
  				},
  				'100%, 70%': {
  					borderRadius: '20px'
  				},
  				'70%, 30%': {
  					borderRadius: '0px',
  					boxShadow: ' rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
  				},
  				'30%, 0%': {
  					borderRadius: '100px',
  					background: '#e15381',
  					transition: '1s ease',
  					boxShadow: ' rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'heart-beating': 'heart-beating 2s infinite ease-out',
  			radius: 'radius 3s infinite ease-out',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
