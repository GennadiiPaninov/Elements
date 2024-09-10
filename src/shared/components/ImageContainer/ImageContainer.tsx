import { ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './imageContainer.module.scss'

import { Container } from '../container'
type Props = {
  children?: ReactNode
  classNameImg?: string
  classNameRoot?: string
  image: string
}
export const ImageContainer = ({ children, classNameImg, classNameRoot, image }: Props) => {
  const style = {
    img: clsx(s.img, classNameImg),
  }

  return (
    <Container classNameRoot={classNameRoot && classNameRoot} noWrap>
      <figure className={s.ImageContainerFigure}>
        <img alt={''} className={style.img} src={image} />
        <figcaption className={s.ImageContainerFigcaption}> {children}</figcaption>
      </figure>
    </Container>
  )
}
