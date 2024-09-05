import s from './typographyContent.module.scss'

import { Container, Typography } from '../../shared'
import { englishAlphabet, russianAlphabet } from '../../shared/assets/constans/alphabet'
import { TypographyItem } from './typographyItem'
export const TypographyContent = () => {
  return (
    <Container>
      <Typography variant={'h2'}>English Alphabet</Typography>
      <div className={s.container}>
        {englishAlphabet.map(item => {
          return <TypographyItem item={item} key={item} />
        })}
      </div>
      <Typography variant={'h2'}>Russian Alphabet</Typography>
      <div className={s.container}>
        {russianAlphabet.map(item => {
          return <TypographyItem item={item} key={item} />
        })}
      </div>
    </Container>
  )
}
