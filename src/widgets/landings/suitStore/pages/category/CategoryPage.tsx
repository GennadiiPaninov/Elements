import { useParams } from 'react-router-dom'

import s from './categoryPage.module.scss'

import { rootActions } from '../../../../../entries/rootReducer/rootReducer'
import { Magnifier } from '../../../../../public'
import {
  Button,
  Container,
  ImageContainer,
  SuitStoreLayoutMenu,
  Typography,
} from '../../../../../shared'
import { useAppDispatch } from '../../../../../shared/assets/api/store'
import { PathKeys, categoty } from '../../../../../shared/assets/constans'
import { MainPageFooter } from '../mainPage/footer/MainPageFooter'
export const CategoryPage = () => {
  const { category } = useParams()

  const dispatch = useAppDispatch()

  if (!category) {
    return
  }
  const handleChangeMenuShop = (item: string) => {
    dispatch(rootActions.setMenuShop({ menuState: item }))
  }

  return (
    <>
      <SuitStoreLayoutMenu />
      <Container classNameRoot={s.rootContainer} noWrap>
        <Container classNameRoot={s.mainContent} noWrap>
          <Container classNameRoot={s.titleContainer} noWrap>
            <Typography className={s.pageTitle} variant={'Large'}>
              {category.replace(/-/g, ' ')}
            </Typography>
            <Typography className={s.info} variant={'regular_text-16'}>
              Arrive in style with a suit or tuxedo. With a range of sizes and colors, these
              comfortable mens suits and tuxedos are your new favorites.
            </Typography>
          </Container>
          {categoty[category as PathKeys].products.length > 0 ? (
            <>
              <Container classNameRoot={s.productsContainer} noWrap>
                {categoty[category as PathKeys]?.products.map((product, index) => {
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
                        href={`/dapper-designs/collections/${key}`}
                        onClick={() => handleChangeMenuShop(key)}
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
          {categoty[category as PathKeys].products.length > 0 && (
            <Container classNameRoot={s.titleContainer} noWrap>
              <Typography className={s.pageTitle} variant={'Large'}>
                About this Collection
              </Typography>

              <Typography className={s.info} variant={'regular_text-16'}>
                {categoty[category as PathKeys].description}
              </Typography>
            </Container>
          )}
        </Container>

        <MainPageFooter />
      </Container>
    </>
  )
}
