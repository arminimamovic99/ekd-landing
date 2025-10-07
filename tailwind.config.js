// tailwind.config.js
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html', './src/app/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        animation: {
          'float1': 'float1 24s ease-in-out infinite',
          float2: 'float2 28s ease-in-out infinite',
          float3: 'float3 32s ease-in-out infinite',
          float4: 'float4 36s ease-in-out infinite',
        },
        keyframes: {
          'float1': {
            '0%, 100%': { transform: 'translateY(0) scale(1)' },
            '50%': { transform: 'translateY(-20px) scale(1.2)' },
          },
          float2: {
            '0%, 100%': { transform: 'translateX(0) scale(1)' },
            '50%': { transform: 'translateX(30px) scale(1.1)' },
          },
          float3: {
            '0%, 100%': { transform: 'translate(-10px, 0) scale(1)' },
            '50%': { transform: 'translate(10px, 10px) scale(1.07)' },
          },
          float4: {
            '0%, 100%': { transform: 'translate(0, -20px) scale(1)' },
            '50%': { transform: 'translate(-20px, 10px) scale(1.1)' },
          },
        },
      },
    },
    plugins: [],
  }
  