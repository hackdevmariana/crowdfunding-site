import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import App from '~/app.vue'

describe('App Component', () => {
  it('renders correctly', async () => {
    const wrapper = await mountSuspended(App)
    
    // Verificar que el componente se renderice
    expect(wrapper.exists()).toBe(true)
    
    // Verificar que contenga el título principal
    expect(wrapper.text()).toContain('Nuxt UI Configurado Correctamente')
    
    // Verificar que contenga botones
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('displays all module statuses', async () => {
    const wrapper = await mountSuspended(App)
    
    // Verificar que se muestren todos los módulos
    const expectedModules = [
      '@nuxt/icon',
      '@sidebase/nuxt-auth',
      '@nuxt/image',
      '@nuxt/eslint',
      '@nuxt/content',
      '@nuxt/ui'
    ]
    
    expectedModules.forEach(module => {
      expect(wrapper.text()).toContain(module)
    })
  })
})
