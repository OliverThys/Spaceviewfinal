import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader, DoubleSide, Group, Mesh } from 'three'
import saturnTexture from '../assets/saturn-texture.jpg'
import ringTexture from '../assets/saturn-rings-texture.png'
import { scaleDistance } from '../utils/scale'
import { usePlanetContext } from '../core/PlanetContext'

export default function SaturnWithRings() {
  const planetRef = useRef<Mesh>(null!)
  const orbitRef = useRef<Group>(null!)
  const angle = useRef(0)

  const { hoveredPlanet, setHoveredPlanet, selectedPlanet, setSelectedPlanet } = usePlanetContext()

  const planetMap = useLoader(TextureLoader, saturnTexture)
  const ringMap = useLoader(TextureLoader, ringTexture)

  const distance = scaleDistance(9.58)
  const eccentricity = 0.056
  const inclination = 0.0434
  const ascendingNodeLongitude = 1.9834

  const a = distance
  const b = distance * (1 - eccentricity)

  useFrame(() => {
    angle.current += 0.0015
    const x = Math.cos(angle.current) * a
    const z = Math.sin(angle.current) * b
    orbitRef.current.position.set(x, 0, z)
    planetRef.current.rotation.y += 0.005
  })

  return (
    <group rotation={[inclination, 0, ascendingNodeLongitude]}>
      <group ref={orbitRef}>
        <mesh
          ref={planetRef}
          castShadow
          receiveShadow
          onPointerOver={() => setHoveredPlanet('Saturn')}
          onPointerOut={() => setHoveredPlanet(null)}
          onClick={() =>
            setSelectedPlanet({
              name: 'Saturn',
              description: 'Famous for its beautiful ring system.'
            })
          }
        >
          <sphereGeometry args={[1.1, 32, 32]} />
          <meshStandardMaterial
            map={planetMap}
            emissive={hoveredPlanet === 'Saturn' || selectedPlanet?.name === 'Saturn' ? 'white' : 'black'}
            emissiveIntensity={0.3}
          />
        </mesh>

        <mesh rotation={[-Math.PI / 2.5, 0, 0]} castShadow receiveShadow>
          <ringGeometry args={[1.3, 2.5, 64]} />
          <meshBasicMaterial
            map={ringMap}
            side={DoubleSide}
            transparent
            opacity={0.8}
          />
        </mesh>
      </group>
    </group>
  )
}
