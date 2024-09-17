import { ReactNode, useRef, useState } from 'react'

import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
type Props = {
  children?: ReactNode
  position?: [number, number, number]
  rotation?: [number, number, number]
}
const Box = (props: Props) => {
  const ref = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01
    }
  })
  console.log(props)

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial color={'yellow'} opacity={0.3} />
    </mesh>
  )
}
const Scene = () => {
  const lightRef = useRef<THREE.AmbientLight>(null)
  const [intensity, setIntensity] = useState(0.5)
  const [direction, setDirection] = useState(1)

  useFrame(() => {
    if (intensity >= 1) {
      setDirection(prev => prev - 0.1)
    } else if (intensity <= 0.5) {
      setDirection(prev => prev + 0.1)
    }
    setIntensity(prev => Math.min(Math.max(prev + 0.01 * direction, 0.5), 1))
  })

  return (
    <>
      {/* Освещение */}
      <ambientLight intensity={intensity} ref={lightRef} />
      <pointLight position={[10, 10, 10]} />

      {/* Куб */}
      <Box position={[0, 0, -2]} />
      <Box position={[0, 5, -5]} rotation={[Math.PI / 4, Math.PI / 4, 0]} />
      <Box position={[4, 0, -3]} />
      <Box position={[-4, 0, -3]} />
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial
          color={'linear-gradient(270deg, rgb(206, 211, 210) 2%, rgb(16, 37, 39))'}
        />
      </mesh>
    </>
  )
}

export const CubeAnimation = () => {
  return (
    <Canvas
      camera={{ fov: 75, position: [0, 0, 10] }}
      style={{ background: 'linear-gradient(45deg, #30cfd0, #330867)' }}
    >
      <Scene />
    </Canvas>
  )
}
