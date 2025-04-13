import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib'

import { scaleDistance } from '../utils/scale'

import Sun from '../models/Sun'
import SunGlow from '../models/SunGlow'
import Planet from '../models/Planet'
import EarthWithMoon from '../models/EarthWithMoon'
import SaturnWithRings from '../models/SaturnWithRings'
import OrbitRing from '../models/OrbitRing'

import mercuryTexture from '../assets/mercury-texture.jpg'
import venusTexture from '../assets/venus-texture.jpg'
import marsTexture from '../assets/mars-texture.jpg'
import jupiterTexture from '../assets/jupiter-texture.jpg'
import uranusTexture from '../assets/uranus-texture.jpg'
import neptuneTexture from '../assets/neptune-texture.jpg'

export default function SolarSystemCanvas() {
  const controlsRef = useRef<OrbitControlsImpl>(null!)

  return (
    <>
      <Canvas camera={{ position: [10, 20, 54], fov: 60 }} shadows>
        <ambientLight intensity={0.8} />
        <pointLight
          intensity={1.5}
          position={[0, 0, 0]}
          color="#FFD700"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <Suspense fallback={null}>
          <Stars
            radius={200}
            depth={60}
            count={10000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />

          <Sun />
          <SunGlow />

          {/* MERCURE */}
          <Planet
            name="Mercury"
            description="Mercury is the closest planet to the Sun and has a rocky surface."
            textureUrl={mercuryTexture}
            size={0.3}
            distance={scaleDistance(0.39)}
            speed={0.02}
            inclination={0.1223}
            eccentricity={0.206}
            ascendingNodeLongitude={0.8435}
          />
          <OrbitRing
            radius={scaleDistance(0.39)}
            inclination={0.1223}
            eccentricity={0.206}
            ascendingNodeLongitude={0.8435}
          />

          {/* VÉNUS */}
          <Planet
            name="Venus"
            description="Venus is covered with thick clouds and has a scorching surface."
            textureUrl={venusTexture}
            size={0.6}
            distance={scaleDistance(0.72)}
            speed={0.007}
            inclination={0.0592}
            eccentricity={0.007}
            ascendingNodeLongitude={1.3383}
          />
          <OrbitRing
            radius={scaleDistance(0.72)}
            inclination={0.0592}
            eccentricity={0.007}
            ascendingNodeLongitude={1.3383}
          />

          {/* TERRE */}
          <EarthWithMoon />
          <OrbitRing
            radius={scaleDistance(1)}
            inclination={0}
            eccentricity={0.017}
            ascendingNodeLongitude={0}
          />

          {/* MARS */}
          <Planet
            name="Mars"
            description="Mars is known as the Red Planet and may have once harbored water."
            textureUrl={marsTexture}
            size={0.5}
            distance={scaleDistance(1.52)}
            speed={0.005}
            inclination={0.0323}
            eccentricity={0.093}
            ascendingNodeLongitude={0.8653}
          />
          <OrbitRing
            radius={scaleDistance(1.52)}
            inclination={0.0323}
            eccentricity={0.093}
            ascendingNodeLongitude={0.8653}
          />

          {/* JUPITER */}
          <Planet
            name="Jupiter"
            description="Jupiter is the largest planet with a giant red storm and many moons."
            textureUrl={jupiterTexture}
            size={1.5}
            distance={scaleDistance(5.2)}
            speed={0.002}
            inclination={0.0228}
            eccentricity={0.049}
            ascendingNodeLongitude={1.7539}
          />
          <OrbitRing
            radius={scaleDistance(5.2)}
            inclination={0.0228}
            eccentricity={0.049}
            ascendingNodeLongitude={1.7539}
          />

          {/* SATURNE */}
          <SaturnWithRings />
          <OrbitRing
            radius={scaleDistance(9.58)}
            inclination={0.0434}
            eccentricity={0.056}
            ascendingNodeLongitude={1.9834}
          />

          {/* URANUS */}
          <Planet
            name="Uranus"
            description="Uranus rotates on its side and has a faint ring system."
            textureUrl={uranusTexture}
            size={0.9}
            distance={scaleDistance(19.2)}
            speed={0.0012}
            inclination={0.0135}
            eccentricity={0.046}
            ascendingNodeLongitude={1.2915}
          />
          <OrbitRing
            radius={scaleDistance(19.2)}
            inclination={0.0135}
            eccentricity={0.046}
            ascendingNodeLongitude={1.2915}
          />

          {/* NEPTUNE */}
          <Planet
            name="Neptune"
            description="Neptune is a distant blue gas giant with strong winds and storms."
            textureUrl={neptuneTexture}
            size={0.85}
            distance={scaleDistance(30.1)}
            speed={0.001}
            inclination={0.0309}
            eccentricity={0.009}
            ascendingNodeLongitude={2.3000}
          />
          <OrbitRing
            radius={scaleDistance(30.1)}
            inclination={0.0309}
            eccentricity={0.009}
            ascendingNodeLongitude={2.3000}
          />
        </Suspense>

        <OrbitControls ref={controlsRef} />
      </Canvas>

      {/* 🔄 Bouton Reset Camera */}
      <button
        onClick={() => controlsRef.current?.reset()}
        style={{
          position: 'absolute',
          top: '490px',
          right: '80px',
          zIndex: 1000,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid white',
          color: 'white',
          padding: '8px 12px',
          borderRadius: '6px',
          fontWeight: 'bold',
          cursor: 'pointer',
          backdropFilter: 'blur(4px)',
          transition: 'background 0.2s',
        }}
      >
        🔄 Reset Camera
      </button>
    </>
  )
}
