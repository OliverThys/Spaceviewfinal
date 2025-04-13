// src/models/SaturnWithRings.tsx
import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader, DoubleSide, Group, Mesh } from 'three'

import saturnTexture from '../assets/saturn-texture.jpg'
import ringTexture from '../assets/saturn-rings-texture.png'

export default function SaturnWithRings() {
  const planetRef = useRef<Mesh>(null!)
  const groupRef = useRef<Group>(null!)
  const angle = useRef(0)

  const planetMap = useLoader(TextureLoader, saturnTexture)
  const ringMap = useLoader(TextureLoader, ringTexture)

  useFrame(() => {
    angle.current += 0.0015
    const x = Math.cos(angle.current) * 16
    const z = Math.sin(angle.current) * 16
    groupRef.current!.position.set(x, 0, z)
    planetRef.current!.rotation.y += 0.005
  })

  return (
    <group ref={groupRef}>
      <mesh ref={planetRef}>
        <sphereGeometry args={[1.1, 32, 32]} />
        <meshStandardMaterial map={planetMap} />
      </mesh>

      {/* Anneaux avec texture */}
      <mesh rotation={[-Math.PI / 2.5, 0, 0]}>
        <ringGeometry args={[1.3, 2.5, 64]} />
        <meshBasicMaterial
          map={ringMap}
          side={DoubleSide}
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  )
}
