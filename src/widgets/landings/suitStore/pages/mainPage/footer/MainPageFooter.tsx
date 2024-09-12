import s from './mainPageFooter.module.scss'

import { Container, Typography } from '../../../../../../shared'
export const MainPageFooter = () => {
  return (
    <Container classNameContainer={s.wrapper}>
      <Typography className={s.text} variant={'regular_text-16'}>
        © Copyright 2024 G_Lobotskij
      </Typography>
    </Container>
  )
}
