import s from './categoryPage.module.scss'

import { rootActions } from '../../../../../entries/rootReducer/rootReducer'
import { Magnifier } from '../../../../../public'
import { Button, Container, ImageContainer, Typography } from '../../../../../shared'
import { useAppDispatch, useAppSelector } from '../../../../../shared/assets/api/store'
import { PathKeys, categoty } from '../../../../../shared/assets/constans'
import { MainPageFooter } from '../mainPage/footer/MainPageFooter'
export const CategoryPage = () => {
  const categoryState = useAppSelector(state => state.rootState.categoryState)
  const dispatch = useAppDispatch()

  if (!categoryState) {
    return
  }

  const handleChangeCategory = (categoryState: string) => {
    dispatch(rootActions.setCategory({ categoryState: categoryState }))
  }

  return (
    <>
      <Container classNameRoot={s.rootContainer} noWrap>
        <Container classNameRoot={s.mainContent} noWrap>
          <Container classNameRoot={s.titleContainer} noWrap>
            <Typography className={s.pageTitle} variant={'Large'}>
              {categoryState}
            </Typography>
            <Typography className={s.info} variant={'regular_text-16'}>
              Arrive in style with a suit or tuxedo. With a range of sizes and colors, these
              comfortable mens suits and tuxedos are your new favorites.
            </Typography>
          </Container>
          {categoty[categoryState as PathKeys].products.length > 0 ? (
            <>
              <Container classNameRoot={s.productsContainer} noWrap>
                {categoty[categoryState as PathKeys]?.products.map((product, index) => {
                  return (
                    <Button as={'a'} className={s.product} key={index} variant={'blank'}>
                      <ImageContainer
                        classNameRoot={s.image}
                        image={product.image}
                        withoutFigcaption
                      />
                      <Container classNameRoot={s.productInfo} noWrap>
                        <Typography className={s.productTitle} variant={'h2'}>
                          {product.title}
                        </Typography>
                        <Typography className={s.productCost} variant={'regular_text-16'}>
                          {product.cost},00$
                        </Typography>
                      </Container>
                    </Button>
                  )
                })}
              </Container>
            </>
          ) : (
            <>
              <Button className={s.noProductButton} variant={'blank'}>
                <Magnifier />
                <Typography className={s.info} variant={'regular_text-16'}>
                  There are no products right now. Sorry
                </Typography>
              </Button>
              <Container classNameRoot={s.titleContainer} noWrap>
                <Typography className={s.pageTitle} variant={'Large'}>
                  But there are products here:
                </Typography>
                {categoty &&
                  Object.entries(categoty)
                    .filter(([key, value]) => value.products.length > 1 && key)
                    .map(([key]) => (
                      <Button
                        as={'a'}
                        className={s.listButton}
                        key={key}
                        onClick={() => handleChangeCategory(key)}
                        variant={'blank'}
                      >
                        <Typography className={s.menuItem} variant={'regular_text-16'}>
                          {key}
                        </Typography>
                      </Button>
                    ))}
              </Container>
            </>
          )}
          {categoty[categoryState as PathKeys].products.length > 0 && (
            <Container classNameRoot={s.titleContainer} noWrap>
              <Typography className={s.pageTitle} variant={'Large'}>
                About this Collection
              </Typography>
              <Typography className={s.info} variant={'regular_text-16'}>
                {categoty[categoryState as PathKeys].description}
              </Typography>
            </Container>
          )}
        </Container>
        <MainPageFooter />
      </Container>
    </>
  )
}
