import { defineconfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineconfig({
    base: "/spain-saffron/",
    plugins: [react()],
})