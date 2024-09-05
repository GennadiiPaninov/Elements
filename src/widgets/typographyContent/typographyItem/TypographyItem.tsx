import s from './typographyItem.module.scss'

import { Typography } from '../../../shared'
type Props = {
  item?: string
}
export const TypographyItem = ({ item }: Props) => {
  return (
    <div className={s.itemContainer}>
      <Typography variant={'Semi-bold_middle-text'}>{item}</Typography>
    </div>
  )
}
