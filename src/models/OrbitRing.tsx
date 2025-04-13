// src/models/OrbitRing.tsx
import { Line } from '@react-three/drei'
import { Vector3 } from 'three'

type OrbitRingProps = {
  radius: number
  eccentricity?: number
  inclination?: number            // inclinaison (i)
  ascendingNodeLongitude?: number // longitude du nœud ascendant (Ω)
  segments?: number
}

export default function OrbitRing({
  radius,
  eccentricity = 0.02,
  inclination = 0,
  ascendingNodeLongitude = 0,
  segments = 128,
}: OrbitRingProps) {
  const points: Vector3[] = []

  const a = radius
  const b = radius * (1 - eccentricity)

  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2
    const x = Math.cos(theta) * a
    const z = Math.sin(theta) * b
    points.push(new Vector3(x, 0, z))
  }

  return (
    <group rotation={[inclination, 0, ascendingNodeLongitude]}>
      <Line
        points={points}
        color="white"
        lineWidth={0.5}
        gapSize={0.2}
      />
    </group>
  )
}
