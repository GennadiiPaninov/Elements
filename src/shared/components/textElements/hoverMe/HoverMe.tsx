import s from './hoverMe.module.scss'

import { TextArea } from '../aTextArea'
export const HoverMe = () => {
  return (
    <TextArea classname={s.container}>
      <div className={s.textContainer}>
        <span className={s.actualText}>&nbsp;hover me&nbsp;</span>
        <span className={s.hoverText}>&nbsp;hover me&nbsp;</span>
      </div>
    </TextArea>
  )
}
