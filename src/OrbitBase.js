import React, { Suspense, useEffect } from 'react'
import { OrbitControls } from 'drei'

export default function OrbitBase() {
  return (
    <OrbitControls
      enableDamping
      enableZoom={false}
      enablePan={false}
      dampingFactor={0.05}
      rotateSpeed={1.1}
      minPolarAngle={Math.PI / 3.5}
      maxPolarAngle={Math.PI / 1.9}
    />
  )
}
