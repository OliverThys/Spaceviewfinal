import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'

import Sun from '../models/Sun'
import SunGlow from '../models/SunGlow'
import Planet from '../models/Planet'
import EarthWithMoon from '../models/EarthWithMoon'

import mercuryTexture from '../assets/mercury-texture.jpg'
import venusTexture from '../assets/venus-texture.jpg'
import marsTexture from '../assets/mars-texture.jpg'
import jupiterTexture from '../assets/jupiter-texture.jpg'
import SaturnWithRings from '../models/SaturnWithRings'
import uranusTexture from '../assets/uranus-texture.jpg'
import neptuneTexture from '../assets/neptune-texture.jpg'
import OrbitRing from '../models/OrbitRing'
import { Stars } from '@react-three/drei'








export default function SolarSystemCanvas() {
  return (
    <Canvas camera={{ position: [0, 5, 15], fov: 60 }}>
      <ambientLight intensity={0.3} />
      <pointLight intensity={1.5} position={[0, 0, 0]} color="#FFD700" />
      <Suspense fallback={null}>
      <Stars
            radius={200}        // rayon de la "sphère étoilée"
            depth={60}          // profondeur des étoiles
            count={10000}       // nombre d’étoiles
            factor={4}          // densité
            saturation={0}
            fade
            speed={1}
        />
        <Sun />
        <SunGlow />
        <Planet
          textureUrl={mercuryTexture}
          size={0.3}
          distance={4}
          speed={0.02}
        />
        <Planet
          textureUrl={venusTexture}
          size={0.6}
          distance={6}
          speed={0.007}
        />
        <EarthWithMoon />
        <Planet
        textureUrl={marsTexture}
        size={0.5}
        distance={10}
        speed={0.005}
        />
        <Planet
        textureUrl={jupiterTexture}
        size={1.5}
        distance={13}
        speed={0.002}
        />
        <SaturnWithRings/>
        <Planet
        textureUrl={uranusTexture}
        size={0.9}
        distance={19}
        speed={0.0012}
        />
        <Planet
        textureUrl={neptuneTexture}
        size={0.85}
        distance={22}
        speed={0.001}
        />
        <OrbitRing radius={4} />
        <OrbitRing radius={6} />
        <OrbitRing radius={8} />
        <OrbitRing radius={10} />
        <OrbitRing radius={13} />
        <OrbitRing radius={16} />
        <OrbitRing radius={19} />
        <OrbitRing radius={22} />






      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}
