import s from './titleImgContainer.module.scss'

import {
  Button,
  Container,
  ImageContainer,
  Typography,
  useIsMobile,
} from '../../../../../../shared'

export const TitleImgContainer = () => {
  const isMobile = useIsMobile(720)
  const panel = [
    { title: 'SHOP MEN' },
    { title: 'SHOP WOMEN' },
    { title: 'SHOP MADE-TO-ORDER' },
  ] as { title: string }[]

  const panelItems = panel.map(item => {
    return (
      <Button className={s.listButton} key={item.title} variant={'blank'}>
        <Typography className={s.buttonTitle} variant={'regular_text-16'}>
          {item.title}
        </Typography>
      </Button>
    )
  })
  const titleContainer = (
    <Container classNameRoot={s.titleContainer} noWrap>
      <Typography className={s.titleStyle} variant={'h1'}>
        Style that suits you
      </Typography>
      <Typography className={s.titleCostStyle} variant={'regular_text-16'}>
        Yours to own, from your wedding day to everyday. Starting under $200.
      </Typography>
      <Container classNameRoot={s.panelContainer} noWrap>
        {panelItems}
      </Container>
    </Container>
  )
  const imagesContainer = (
    <ImageContainer
      image={'https://smartcasuals.ru/wp-content/uploads/2021/06/1.jpg'}
      withoutFigcaption
    />
  )

  return (
    <Container classNameRoot={s.titleImgContainer} noWrap>
      <Container classNameRoot={s.imgContainer} noWrap>
        {isMobile ? (
          <>
            {imagesContainer}
            {titleContainer}
          </>
        ) : (
          <>
            {titleContainer}
            {imagesContainer}{' '}
          </>
        )}
      </Container>
    </Container>
  )
}
