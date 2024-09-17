import s from './animation.module.scss'

import { AnimationSvgComponent } from '../../public/icon/AnimationSVG/AnimationSvg'
import { OrderFoodSvgAnimationComponent } from '../../public/icon/AnimationSVG/OrderFoodSvgAnimation'
import { Container } from '../../shared'
import { CubeAnimation } from '../../shared/components/cubeAnimation/CubeAnimation'
export const Animation = () => {
  return (
    <Container classNameRoot={s.rootAnimationContainer} noWrap>
      <Container classNameRoot={s.wrapper} noWrap>
        {' '}
        <AnimationSvgComponent />
        <OrderFoodSvgAnimationComponent />
      </Container>
      <Container classNameRoot={s.canvasWrapper} noWrap>
        <CubeAnimation />
      </Container>
    </Container>
  )
}
