import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // proxy isliye use kiye jisse ki frontend ko lage backend joo alag port pe run hoo rha h, woh iske ghar ka hee h. aisa isliye kiya jisse ki CORS error na aaye, kyuki browser same-origin policy follow karta h, aur agar frontend aur backend alag ports pe honge toh woh different origins honge, toh proxy use karne se frontend ke requests ko backend ke server pe forward kar diya jayega, jisse CORS error nahi aayega.
        changeOrigin: true,
      }
    }
  }
})