import { useRef } from 'react'

import { useFrame } from '@react-three/fiber'
// import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

import { BoxStairComponent } from '../boxItem/BoxStairComponent'
type Props = {
  position: [number, number, number]
}
export const Stairs = ({ position }: Props) => {
  const stairsRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (stairsRef.current) {
      // stairsRef.current.rotation.y += 0.01 // Вращение всей группы по оси Y
    }
  })

  return (
    <group position={position} ref={stairsRef}>
      {/*<BoxComponent position={[0, 0, -2]} */}
      <BoxStairComponent args={[8, 1, 2]} color={'#686e68'} position={[0, -2, 0]} />
      <BoxStairComponent args={[10, 0.5, 2.5]} color={'#424542'} position={[0, -1.5, 0]} />
    </group>
  )
}
