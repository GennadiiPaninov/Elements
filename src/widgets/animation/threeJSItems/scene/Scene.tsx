// import { useRef, useState } from 'react'
//
// import { useFrame } from '@react-three/fiber'
// import * as THREE from 'three'

import { useRef } from 'react'

import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

import { SphereGeometry } from '../theSolarSystem/sphereGeometry/SphereGeometry'

export const Scene = () => {
  // const lightRef = useRef<THREE.AmbientLight>(null)
  // const [intensity, setIntensity] = useState(0.5)
  // const [direction, setDirection] = useState(1)
  //
  // useFrame(() => {
  //   if (intensity >= 1) {
  //     setDirection(prev => prev - 0.1)
  //   } else if (intensity <= 0.5) {
  //     setDirection(prev => prev + 0.1) //1.1
  //   }
  //   setIntensity(prev => Math.min(Math.max(prev + 0.01 * direction, 0.5), 1))
  // })
  const group = useRef<THREE.Group>(null)
  const group2 = useRef<THREE.Group>(null)

  useFrame(() => {
    if (group.current && group2.current) {
      group.current.rotation.y += 0.01
      group2.current.rotation.y += 0.01
    }
  })

  return (
    <>
      {/* Освещение */}
      <pointLight color={0xffffff} intensity={1500} />
      <group ref={group}>
        <SphereGeometry
          AxesHelper
          emissive={0xffff00}
          heightSegments={6}
          radius={1}
          scale={[5, 5, 5]}
          widthSegments={6}
        />
        <group position={[-15, 0, 0]} ref={group2}>
          <SphereGeometry
            AxesHelper
            color={0x2233ff}
            emissive={0x112244}
            heightSegments={6}
            widthSegments={6}
          />
          <SphereGeometry
            AxesHelper
            color={0x888888}
            emissive={0x222222}
            heightSegments={6}
            position={[-2, 0, 0]}
            scale={[0.3, 0.3, 0.3]}
            widthSegments={6}
          />
        </group>
      </group>
      <mesh position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[500, 500]} />
        <meshPhongMaterial color={'black'} />
      </mesh>
    </>
  )
}
