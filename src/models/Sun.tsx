import { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Mesh, TextureLoader, RepeatWrapping } from 'three'
import sunTextureURL from '../assets/sun-texture.jpg'

export default function Sun() {
  const sunRef = useRef<Mesh>(null!)
  const texture = useLoader(TextureLoader, sunTextureURL)

  // Autoriser le déplacement infini de la texture
  texture.wrapS = texture.wrapT = RepeatWrapping

  // Animation : rotation + mouvement interne
  useFrame(() => {
    sunRef.current.rotation.y += 0.0015
    texture.offset.x += 0.0005
    texture.offset.y += 0.0002
  })

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        emissive={'#ffaa00'}
        emissiveIntensity={1.5}
        emissiveMap={texture}
      />
    </mesh>
  )
}
