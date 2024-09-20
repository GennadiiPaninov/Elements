import { ReactNode, useRef } from 'react'

import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

type Props = {
  AxesHelper?: boolean
  children?: ReactNode
  color?: number
  emissive?: number
  heightSegments?: number
  position?: [number, number, number]
  radius?: number
  scale?: [number, number, number]
  widthSegments?: number
}
export const SphereGeometry = ({
  AxesHelper,
  children,
  color,
  emissive,
  heightSegments,
  position,
  radius,
  scale,
  widthSegments,
}: Props) => {
  const ref = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (ref.current) {
      // ref.current.rotation.x += 0.01
      ref.current.rotation.y += 0.01
    }
  })
  // if (axesRef.current) {
  //   axesRef.current = new AxesHelper(5) // Размер осей
  // }

  return (
    <mesh position={position} ref={ref} scale={scale}>
      {AxesHelper && <axesHelper args={[(radius ? radius : 1) * 5]} />}
      <sphereGeometry args={[radius, widthSegments, heightSegments]} />
      <meshPhongMaterial color={color} emissive={emissive} />
      {children}
    </mesh>
  )
}
