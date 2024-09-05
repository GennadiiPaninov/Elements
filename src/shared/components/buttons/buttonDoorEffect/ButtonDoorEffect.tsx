import s from './buttonDoorEffect.module.scss'

import { Typography } from '../../typography'
import { ButtonArea } from '../aButtonArea'
import { Button } from '../aCommonButton'
export const ButtonDoorEffect = () => {
  return (
    <>
      <ButtonArea fullWidth title={'Door effect:'}>
        <div className={s.Container}>
          <ButtonArea title={'Default:'} variant={'regular_text-16'}>
            <Button variant={'doorEffect'}>
              <Typography variant={'regular_text-14'}>Button</Typography>
            </Button>
          </ButtonArea>
          <ButtonArea title={'Active:'} variant={'regular_text-16'}>
            <Button className={s.active}>
              <Typography variant={'regular_text-14'}>Button</Typography>
            </Button>
          </ButtonArea>
          <ButtonArea title={'Hover:'} variant={'regular_text-16'}>
            <Button variant={'doorEffect'}>
              <Typography variant={'regular_text-14'}>Button</Typography>
            </Button>
          </ButtonArea>
          <ButtonArea title={'Disabled:'} variant={'regular_text-16'}>
            <Button disabled variant={'doorEffect'}>
              <Typography variant={'regular_text-14'}>Button</Typography>
            </Button>
          </ButtonArea>
        </div>
      </ButtonArea>
    </>
  )
}
