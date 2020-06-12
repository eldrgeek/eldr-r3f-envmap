import * as THREE from 'three'
import React from 'react'
import { Canvas } from 'react-three-fiber'
console.log('Base')
export default function CanvasBase({ children }) {
  return (
    <Canvas
      pixelRatio={window.devicePixelRatio}
      camera={{ position: [2, 1, 6.5] }}
      onCreated={({ gl }) => {
        gl.setClearColor('#070709')
        gl.toneMapping = THREE.ACESFilmicToneMapping
        gl.outputEncoding = THREE.sRGBEncoding
      }}>
      {children}
    </Canvas>
  )
}
