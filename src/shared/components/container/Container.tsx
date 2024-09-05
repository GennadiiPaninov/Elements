import { ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './container.module.scss'
type Props = {
  children?: ReactNode
  classNameContainer?: string
  classNameRoot?: string
}
export const Container = ({ children, classNameContainer, classNameRoot }: Props) => {
  const className = {
    classNameContainer: clsx(s.container, classNameContainer),
    classNameRoot: clsx(s.root, classNameRoot),
  }

  return (
    <div className={className.classNameRoot}>
      <div className={className.classNameContainer}>{children}</div>
    </div>
  )
}
