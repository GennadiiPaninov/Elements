import { CSSProperties, MouseEventHandler } from 'react'

import { RightArrowFromSlider } from '../../../public'
import { LeftArrowFromSlider } from '../../../public/icon/LeftArrowFromSlider'
import { Button } from '../buttons'

interface CustomArrowProps {
  className?: string | undefined
  color?: string
  currentSlide?: number | undefined
  onClick?: MouseEventHandler<any> | undefined
  slideCount?: number | undefined
  style?: CSSProperties | undefined
}
export const SampleNextArrow = (props: CustomArrowProps) => {
  const { color, onClick } = props

  return (
    <Button onClick={onClick} variant={'blank'}>
      <RightArrowFromSlider color={color} />
    </Button>
  )
}

export const SamplePrevArrow = (props: CustomArrowProps) => {
  const { color, onClick } = props

  return (
    <Button onClick={onClick} variant={'blank'}>
      <LeftArrowFromSlider color={color} />
    </Button>
  )
}
