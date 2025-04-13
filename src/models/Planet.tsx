// src/models/Planet.tsx
import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Group, Mesh, TextureLoader } from 'three'
import { usePlanetContext } from '../core/PlanetContext'

type PlanetProps = {
  textureUrl: string
  size: number
  distance: number
  speed: number
  name: string
  description: string
  inclination?: number
  ascendingNodeLongitude?: number
  eccentricity?: number
}

export default function Planet({
  textureUrl,
  size,
  distance,
  speed,
  name,
  description,
  inclination = 0,
  ascendingNodeLongitude = 0,
  eccentricity = 0.02,
}: PlanetProps) {
  const planetRef = useRef<Mesh>(null!)
  const orbitRef = useRef<Group>(null!)
  const texture = useLoader(TextureLoader, textureUrl)
  const angle = useRef(0)

  const { hoveredPlanet, setHoveredPlanet, selectedPlanet, setSelectedPlanet } = usePlanetContext()

  const a = distance
  const b = distance * (1 - eccentricity)

  useFrame(() => {
    angle.current += speed
    const x = Math.cos(angle.current) * a
    const z = Math.sin(angle.current) * b
    orbitRef.current.position.set(x, 0, z)
    planetRef.current.rotation.y += 0.01
  })

  const handlePointerOver = () => setHoveredPlanet(name)
  const handlePointerOut = () => setHoveredPlanet(null)
  const handleClick = () => setSelectedPlanet({ name, description })

  const isHovered = hoveredPlanet === name
  const isSelected = selectedPlanet?.name === name

  return (
    <group rotation={[inclination, 0, ascendingNodeLongitude]}>
      <group ref={orbitRef}>
        <mesh
          ref={planetRef}
          castShadow
          receiveShadow
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          onClick={handleClick}
        >
          <sphereGeometry args={[size, 32, 32]} />
          <meshStandardMaterial
            map={texture}
            roughness={1}
            metalness={0}
            emissive={isHovered || isSelected ? 'white' : 'black'}
            emissiveIntensity={isHovered ? 0.4 : isSelected ? 0.2 : 0}
          />
        </mesh>
      </group>
    </group>
  )
}
