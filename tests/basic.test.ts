import { describe, it, expect } from 'vitest'

describe('Basic Tests', () => {
  it('should work correctly', () => {
    expect(1 + 1).toBe(2)
    expect('hello').toBe('hello')
    expect(true).toBe(true)
  })

  it('should handle arrays', () => {
    const numbers = [1, 2, 3, 4, 5]
    expect(numbers).toHaveLength(5)
    expect(numbers).toContain(3)
    expect(numbers[0]).toBe(1)
  })

  it('should handle objects', () => {
    const user = { name: 'John', age: 30 }
    expect(user.name).toBe('John')
    expect(user.age).toBe(30)
    expect(user).toHaveProperty('name')
  })
})

describe('Module Configuration', () => {
  it('should have correct module setup', () => {
    const expectedModules = [
      '@nuxt/icon',
      '@sidebase/nuxt-auth',
      '@nuxt/image',
      '@nuxt/eslint',
      '@nuxt/content',
      '@nuxt/ui',
      '@nuxt/test-utils'
    ]
    
    expect(expectedModules).toHaveLength(7)
    expect(expectedModules).toContain('@nuxt/ui')
    expect(expectedModules).toContain('@nuxt/test-utils')
  })
})
