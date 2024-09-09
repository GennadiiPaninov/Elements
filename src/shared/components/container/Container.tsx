import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  LegacyRef,
  ReactNode,
  Ref,
  forwardRef,
} from 'react'

import { clsx } from 'clsx'

import s from './container.module.scss'
type Props<T extends ElementType> = {
  as?: T
  children?: ReactNode
  classNameContainer?: string
  classNameRoot?: string
  noWrap?: boolean
  ref?: LegacyRef<HTMLElement>
} & ComponentPropsWithoutRef<T>
export const Container = forwardRef(
  <T extends ElementType = 'div'>(props: Props<T>, ref: Ref<ElementRef<T>>) => {
    const {
      as: Component = 'div',
      children,
      classNameContainer,
      classNameRoot,
      noWrap,
      ...rest
    } = props
    const className = {
      classNameContainer: clsx(s.container, classNameContainer),
      classNameRoot: clsx(s.root, classNameRoot),
    }

    return (
      <div className={className.classNameRoot} {...rest} ref={ref}>
        {!noWrap && <div className={className.classNameContainer}>{children}</div>}
        {noWrap && children}
      </div>
    )
  }
)
