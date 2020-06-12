import * as THREE from 'three'
import React from 'react'
import { useLoader } from 'react-three-fiber'
console.log('Ball')
export default function Ball(props) {
  const texture = useLoader(THREE.TextureLoader, '/flakes.png')
  return (
    <mesh {...props}>
      <sphereBufferGeometry attach="geometry" args={[2, 64, 64]} />
      <meshPhysicalMaterial
        attach="material"
        clearcoat={1.0}
        clearcoatRoughness={0}
        metalness={0.9}
        roughness={0}
        color="blue"
        normalMap={texture}
        normalScale={[0.3, 0.3]}
        normalMap-wrapS={THREE.RepeatWrapping}
        normalMap-wrapT={THREE.RepeatWrapping}
        normalMap-repeat={[30, 30]}
        normalMap-anisotropy={16}
      />
    </mesh>
  )
}
