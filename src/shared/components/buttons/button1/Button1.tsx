import s from './button1.module.scss'

import { ButtonArea } from '../aButtonArea'
import { Button } from '../aCommonButton'
export const Button1 = () => {
  return (
    <ButtonArea>
      <Button className={s.button}>Button1</Button>
    </ButtonArea>
  )
}
