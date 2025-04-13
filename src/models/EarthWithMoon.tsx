// src/models/EarthWithMoon.tsx
import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Mesh, TextureLoader, Group } from 'three'

import earthTextureUrl from '../assets/earth-texture.jpg'
import moonTextureUrl from '../assets/moon-texture.jpg'

export default function EarthWithMoon() {
  const earthRef = useRef<Mesh>(null!)
  const moonRef = useRef<Mesh>(null!)
  const groupRef = useRef<Group>(null!)

  const earthTexture = useLoader(TextureLoader, earthTextureUrl)
  const moonTexture = useLoader(TextureLoader, moonTextureUrl)

  const angle = useRef(0)
  const moonAngle = useRef(0)

  useFrame(() => {
    angle.current += 0.004
    moonAngle.current += 0.03

    const x = Math.cos(angle.current) * 8
    const z = Math.sin(angle.current) * 8
    groupRef.current!.position.set(x, 0, z)

    earthRef.current!.rotation.y += 0.01

    const moonX = Math.cos(moonAngle.current) * 0.8
    const moonZ = Math.sin(moonAngle.current) * 0.8
    moonRef.current!.position.set(moonX, 0, moonZ)
  })

  return (
    <group ref={groupRef}>
      <mesh ref={earthRef}>
        <sphereGeometry args={[0.65, 32, 32]} />
        <meshStandardMaterial map={earthTexture} />
      </mesh>
      <mesh ref={moonRef}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial map={moonTexture} />
      </mesh>
    </group>
  )
}
