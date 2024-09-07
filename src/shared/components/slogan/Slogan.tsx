import s from './slogan.module.scss'

import { Typography } from '../typography'

export const Slogan = () => {
  return (
    <div className={s.headerSlogan}>
      <Typography className={s.sloganTitle} variant={'Medium_text-14'}>
        Elevating Elegance - Crafting Confidence at Dapper Designsa
      </Typography>
    </div>
  )
}
