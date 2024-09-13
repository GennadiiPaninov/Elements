import { useParams } from 'react-router-dom'

import s from './categoryPage.module.scss'

import { Container, SuitStoreLayoutMenu, Typography } from '../../../../../shared'
import { PathKeys, categoty } from '../../../../../shared/assets/constans'
import { MainPageFooter } from '../mainPage/footer/MainPageFooter'
export const CategoryPage = () => {
  const { category } = useParams()

  console.log(category)
  if (!category) {
    return
  }
  console.log(categoty[category as PathKeys].length)

  return (
    <Container classNameRoot={s.rootContainer} noWrap>
      <Container classNameRoot={s.mainContent} noWrap>
        <SuitStoreLayoutMenu />

        {categoty[category as PathKeys].length > 0 ? (
          <>
            <Container classNameRoot={s.titleContainer} noWrap>
              <Typography variant={'Large'}>{category.replace(/-/g, ' ')}</Typography>
              <Typography className={s.info} variant={'regular_text-16'}>
                Arrive in style with a suit or tuxedo. With a range of sizes and colors, these
                comfortable mens suits and tuxedos are your new favorites.
              </Typography>
            </Container>
          </>
        ) : (
          'Меньше'
        )}
      </Container>
      <MainPageFooter />
    </Container>
  )
}
