// npm create vite@latest vietoj paprasto react nes yra daug patogesnis nei npx create-react-app app , kuris sulauke daug kritikos. vite jau turi routinima nuo install pradzios.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
