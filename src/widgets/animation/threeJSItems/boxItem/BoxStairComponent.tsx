import { ReactNode, useRef } from 'react'

import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'

import WhiteBoard from './../../../../assets/images/WhiteBord.png'
type Props = {
  args?: [number, number, number]
  children?: ReactNode
  color: string
  position?: [number, number, number]
  rotation?: [number, number, number]
}
export const BoxStairComponent = ({ args, color, ...props }: Props) => {
  const ref = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (ref.current) {
      // ref.current.rotation.x += 0.01
      // ref.current.rotation.y += 0.01
    }
  })

  const texture2 = useLoader(THREE.TextureLoader, WhiteBoard)
  const fallbackMaterial = new THREE.MeshBasicMaterial({ color: 'red' })

  const materials = [
    texture2
      ? new THREE.MeshPhongMaterial({
          color: color,
          map: texture2,
        })
      : fallbackMaterial, // Front
    texture2
      ? new THREE.MeshPhongMaterial({
          aoMapIntensity: 1,
          color: color,
          map: texture2,
        })
      : fallbackMaterial, // Back
    texture2
      ? new THREE.MeshPhongMaterial({
          aoMapIntensity: 1,
          color: color,
          map: texture2,
        })
      : fallbackMaterial, // Top
    texture2
      ? new THREE.MeshPhongMaterial({
          aoMapIntensity: 1,
          color: color,
          map: texture2,
        })
      : fallbackMaterial, // Bottom
    texture2
      ? new THREE.MeshPhongMaterial({
          aoMapIntensity: 1,
          color: color,
          map: texture2,
        })
      : fallbackMaterial, // Left
    texture2
      ? new THREE.MeshPhongMaterial({
          aoMapIntensity: 1,
          color: 'grey',
          map: texture2,
        })
      : fallbackMaterial, // Right
  ]

  return (
    <mesh material={materials} {...props} ref={ref}>
      <boxGeometry args={args} />
    </mesh>
  )
}
