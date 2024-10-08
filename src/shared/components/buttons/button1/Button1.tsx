import s from './button1.module.scss'

import { Typography } from '../../typography'
import { ButtonArea } from '../aButtonArea'
import { Button } from '../aCommonButton'
export const Button1 = () => {
  return (
    <>
      <ButtonArea fullWidth title={'Button with transform effect:'}>
        <div className={s.buttonsOneContainer}>
          <ButtonArea title={'Default:'} variant={'regular_text-16'}>
            <Button variant={'buttonOne'}>
              <Typography variant={'regular_text-14'}>Button</Typography>
            </Button>
          </ButtonArea>
          <ButtonArea title={'Active:'} variant={'regular_text-16'}>
            <Button className={s.buttonOneActive}>
              <Typography variant={'regular_text-14'}>Button</Typography>
            </Button>
          </ButtonArea>
          <ButtonArea title={'Hover:'} variant={'regular_text-16'}>
            <Button variant={'buttonOne'}>
              <Typography variant={'regular_text-14'}>Button</Typography>
            </Button>
          </ButtonArea>
          <ButtonArea title={'Disabled:'} variant={'regular_text-16'}>
            <Button disabled variant={'buttonOne'}>
              <Typography variant={'regular_text-14'}>Button</Typography>
            </Button>
          </ButtonArea>
        </div>
      </ButtonArea>
    </>
  )
}
