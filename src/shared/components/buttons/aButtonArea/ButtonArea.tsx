import { ReactNode } from 'react'

import s from './buttonArea.module.scss'

import { Typography, TypographyVariantTypes } from '../../typography'
type Props = {
  children: ReactNode
  fullWidth?: boolean
  title: string
  variant?: TypographyVariantTypes
}
export const ButtonArea = ({ children, fullWidth, title, variant }: Props) => {
  return (
    <div className={fullWidth ? s.container : s.containerWithWidth}>
      <Typography variant={variant ? variant : 'h3'}> {title}</Typography>
      {children}
    </div>
  )
}
