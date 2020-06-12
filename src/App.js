import React, { Suspense } from 'react'
import CanvasBase from './CanvasBase'
import Environment from './Environment'
import OrbitBase from './OrbitBase'
import Ball from './Ball'
console.log('App')

export default function App() {
  return (
    <CanvasBase>
      <OrbitBase />
      <Suspense fallback={null}>
        <Environment background />
        <Ball />
      </Suspense>
    </CanvasBase>
  )
}
