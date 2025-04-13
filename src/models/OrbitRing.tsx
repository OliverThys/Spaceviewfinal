// src/models/OrbitRing.tsx
import { Line } from '@react-three/drei'
import { Vector3 } from 'three'

type OrbitRingProps = {
  radius: number
  segments?: number
}

export default function OrbitRing({ radius, segments = 128 }: OrbitRingProps) {
    const points: Vector3[] = []
  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2
    const x = Math.cos(theta) * radius
    const z = Math.sin(theta) * radius
    points.push(new Vector3(x, 0, z))
  }

  return (
    <Line
      points={points}
      color="white"
      lineWidth={0.5}
      dashed
      dashSize={0.2}
      gapSize={0.2}
    />
  )
}
