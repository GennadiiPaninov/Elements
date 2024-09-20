import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { Scene } from '../../../widgets/animation/threeJSItems/scene/Scene'

// import imageNike from './../../../assets/images/nike.jpg'
// import Horse from './../../../assets/images/week5_1100.jpg'
// import Water from './../../../assets/images/water.jpg'

export const CubeAnimation = () => {
  return (
    <Canvas
      camera={{ aspect: 2, far: 1000, fov: 45, near: 0.1, position: [0, 90, 50] }}
      style={{ background: 'black' }}
    >
      <Scene />
      <OrbitControls enablePan enableZoom />
    </Canvas>
  )
}
