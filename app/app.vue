<template>
  <div class="min-h-screen bg-gray-50">
    <NuxtRouteAnnouncer />
    
    <!-- Header con Nuxt UI -->
    <UContainer class="py-8">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          🎉 Nuxt UI Configurado Correctamente
        </h1>
        <p class="text-lg text-gray-600 mb-8">
          Tu proyecto Nuxt está funcionando con todos los módulos configurados
        </p>
        
        <!-- Botones de Nuxt UI -->
        <div class="flex gap-4 justify-center mb-8">
          <UButton color="primary" size="lg">
            Botón Primario
          </UButton>
          <UButton color="secondary" size="lg">
            Botón Secundario
          </UButton>
          <UButton color="red" size="lg">
            Botón Rojo
          </UButton>
        </div>
        
        <!-- Card de información -->
        <UCard class="max-w-2xl mx-auto">
          <template #header>
            <h3 class="text-xl font-semibold">Estado de los Módulos</h3>
          </template>
          
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-green-500 w-5 h-5" />
              <span>@nuxt/icon - Configurado y funcionando</span>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-green-500 w-5 h-5" />
              <span>@sidebase/nuxt-auth - Configurado y funcionando</span>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-green-500 w-5 h-5" />
              <span>@nuxt/image - Configurado y funcionando</span>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-green-500 w-5 h-5" />
              <span>@nuxt/eslint - Configurado y funcionando</span>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-green-500 w-5 h-5" />
              <span>@nuxt/content - Configurado y funcionando</span>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-green-500 w-5 h-5" />
              <span>@nuxt/ui - Configurado y funcionando</span>
            </div>
          </div>
          
          <template #footer>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-500">Proyecto Crowdfunding Site</span>
              <UButton color="primary" variant="ghost" size="sm">
                Ver Detalles
              </UButton>
            </div>
          </template>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>
