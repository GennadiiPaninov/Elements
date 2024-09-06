import { ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './container.module.scss'
type Props = {
  children?: ReactNode
  classNameContainer?: string
  classNameRoot?: string
  noWrap?: boolean
}
export const Container = ({ children, classNameContainer, classNameRoot, noWrap }: Props) => {
  const className = {
    classNameContainer: clsx(s.container, classNameContainer),
    classNameRoot: clsx(s.root, classNameRoot),
  }

  return (
    <div className={className.classNameRoot}>
      {!noWrap && <div className={className.classNameContainer}>{children}</div>}
      {noWrap && children}
    </div>
  )
}
