import { join } from 'path'
const tailwindJS = join(__dirname, 'tailwind.config.js')

export const plugins = [require('tailwindcss')(tailwindJS), require('autoprefixer')]
