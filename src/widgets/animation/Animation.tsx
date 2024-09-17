import s from './animation.module.scss'

import AnimationSvg from '../../public/icon/AnimationSVG/AnimationSvg'
import OrderFoodSvgAnimation from '../../public/icon/AnimationSVG/OrderFoodSvgAnimation'
import { Container } from '../../shared'
export const Animation = () => {
  return (
    <Container noWrap>
      <Container classNameRoot={s.wrapper} noWrap>
        {' '}
        <AnimationSvg />
      </Container>
      <Container classNameRoot={s.wrapper} noWrap>
        {' '}
        <OrderFoodSvgAnimation />
      </Container>
    </Container>
  )
}
