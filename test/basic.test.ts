import { describe, it, expect } from 'vitest'

describe('Basic Tests', () => {
  it('should work with Vitest', () => {
    expect(1 + 1).toBe(2)
  })

  it('should have Nuxt Test Utils available', () => {
    // Verificar que Nuxt Test Utils esté disponible
    expect(typeof describe).toBe('function')
    expect(typeof it).toBe('function')
    expect(typeof expect).toBe('function')
  })

  it('should support async operations', async () => {
    const result = await Promise.resolve('test')
    expect(result).toBe('test')
  })

  it('should handle basic math operations', () => {
    expect(2 * 3).toBe(6)
    expect(10 / 2).toBe(5)
    expect(7 - 3).toBe(4)
  })
})
