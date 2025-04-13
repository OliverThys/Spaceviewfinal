import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Mesh, TextureLoader, Group } from 'three'
import earthTextureUrl from '../assets/earth-texture.jpg'
import moonTextureUrl from '../assets/moon-texture.jpg'
import { scaleDistance } from '../utils/scale'
import { usePlanetContext } from '../core/PlanetContext'

export default function EarthWithMoon() {
  const earthRef = useRef<Mesh>(null!)
  const moonRef = useRef<Mesh>(null!)
  const orbitRef = useRef<Group>(null!)
  const angle = useRef(0)
  const moonAngle = useRef(0)

  const { hoveredPlanet, setHoveredPlanet, selectedPlanet, setSelectedPlanet } = usePlanetContext()

  const earthTexture = useLoader(TextureLoader, earthTextureUrl)
  const moonTexture = useLoader(TextureLoader, moonTextureUrl)

  const distance = scaleDistance(1)
  const eccentricity = 0.017
  const inclination = 0
  const ascendingNodeLongitude = 0

  const a = distance
  const b = distance * (1 - eccentricity)

  useFrame(() => {
    angle.current += 0.004
    moonAngle.current += 0.03

    const x = Math.cos(angle.current) * a
    const z = Math.sin(angle.current) * b
    orbitRef.current.position.set(x, 0, z)

    earthRef.current.rotation.y += 0.01

    const moonX = Math.cos(moonAngle.current) * 0.8
    const moonZ = Math.sin(moonAngle.current) * 0.8
    moonRef.current.position.set(moonX, 0, moonZ)
  })

  return (
    <group rotation={[inclination, 0, ascendingNodeLongitude]}>
      <group ref={orbitRef}>
        <mesh
          ref={earthRef}
          castShadow
          receiveShadow
          onPointerOver={() => setHoveredPlanet('Earth')}
          onPointerOut={() => setHoveredPlanet(null)}
          onClick={() =>
            setSelectedPlanet({
              name: 'Earth',
              description: 'Our home planet. The only one known to support life.'
            })
          }
        >
          <sphereGeometry args={[0.65, 32, 32]} />
          <meshStandardMaterial
            map={earthTexture}
            emissive={hoveredPlanet === 'Earth' || selectedPlanet?.name === 'Earth' ? 'white' : 'black'}
            emissiveIntensity={0.3}
          />
        </mesh>

        <mesh ref={moonRef} castShadow receiveShadow>
          <sphereGeometry args={[0.15, 32, 32]} />
          <meshStandardMaterial map={moonTexture} />
        </mesh>
      </group>
    </group>
  )
}
