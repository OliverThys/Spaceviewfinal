// src/models/SunGlow.tsx
import { Sprite, SpriteMaterial, TextureLoader, AdditiveBlending } from 'three'
import { useLoader, useThree } from '@react-three/fiber'
import { useEffect, useRef } from 'react'

export default function SunGlow() {
  const texture = useLoader(TextureLoader, 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/lensflare/lensflare0.png')
  const spriteRef = useRef<Sprite>(null)
  const { scene } = useThree()

  useEffect(() => {
    const sprite = new Sprite(
      new SpriteMaterial({
        map: texture,
        color: 0xffcc66,
        transparent: true,
        blending: AdditiveBlending,
        depthWrite: false
      })
    )
    sprite.scale.set(6, 6, 1)
    spriteRef.current = sprite
    scene.add(sprite)

    return () => {
      scene.remove(sprite)
    }
  }, [texture, scene])

  return null
}
