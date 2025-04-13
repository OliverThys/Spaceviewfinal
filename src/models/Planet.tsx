import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Mesh, TextureLoader } from 'three'

type PlanetProps = {
  textureUrl: string
  size: number
  distance: number
  speed: number
}

export default function Planet({ textureUrl, size, distance, speed }: PlanetProps) {
  const planetRef = useRef<Mesh>(null!)
  const texture = useLoader(TextureLoader, textureUrl)
  const angle = useRef(0)

  useFrame(() => {
    angle.current += speed
    const x = Math.cos(angle.current) * distance
    const z = Math.sin(angle.current) * distance
    planetRef.current.position.set(x, 0, z)
    planetRef.current.rotation.y += 0.01
  })

  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}
