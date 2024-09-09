import { ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './imageContainer.module.scss'

import { Container } from '../container'
type Props = {
  children?: ReactNode
  classNameImg?: string
  image: string
}
export const ImageContainer = ({ children, classNameImg, image }: Props) => {
  const style = {
    img: clsx(s.img, classNameImg),
  }

  return (
    <Container noWrap>
      <figure className={s.ImageContainerFigure}>
        <img alt={''} className={style.img} src={image} />
        <figcaption className={s.ImageContainerFigcaption}> {children}</figcaption>
      </figure>
    </Container>
  )
}
