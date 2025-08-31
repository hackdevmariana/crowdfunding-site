// Configuración global para los tests
import { beforeAll, afterAll } from 'vitest'

// Configuración global antes de ejecutar los tests
beforeAll(() => {
  // Configuración del entorno de testing
  process.env.NODE_ENV = 'test'
})

// Limpieza después de ejecutar los tests
afterAll(() => {
  // Limpieza del entorno de testing
})
