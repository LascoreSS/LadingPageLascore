/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#007bff',      // El color principal de tu marca
        'secondary': '#6c757d',    // Un color complementario
        'accent': '#ffc107',       // Color para resaltar (Call to Action)

        'success': '#28a745',      // Verde para éxito
        'warning': '#ffc107',      // Amarillo para advertencias
        'danger': '#dc3545',       // Rojo para errores
        
        'mi-azul': {
          50: '#e3f2fd',
          100: '#bbdefb',
          500: '#2196f3', // Tono principal: bg-mi-azul-500
          900: '#0d47a1', // Tono oscuro: bg-mi-azul-900
        },
      },
    },
  },
  plugins: [],
}