import s from './suitsWithTuxedos.module.scss'

import { Button, Container, ImageContainer, Typography } from '../../../../../../shared'

export const SuitsWithTuxedos = () => {
  const suitsWithTuxedosItems = [
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2FwhiteManSuit.jpg?alt=media&token=1bf98735-c125-49bc-9c41-4640e8880b67',
      title: "Men's Suits & Tuxedos",
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2FWomanInAWhiteSuit.jpg?alt=media&token=290b6b72-f695-4a8d-886b-8c1dc7b31b9c',
      title: "Women's Suits & Tuxedos",
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2FNessesaryItems.jpg?alt=media&token=e95cc0bc-cff8-4205-acba-b10f36da81c8',
      title: 'Suiting Essentials',
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2FguyInSuit.jpg?alt=media&token=124c38c2-1444-42cb-8753-908030f33944',
      title: 'Prom & Homecoming',
    },
  ] as {
    image: string
    title: string
  }[]

  return (
    <Container classNameRoot={s.root} noWrap>
      {suitsWithTuxedosItems.map(item => {
        return (
          <Container classNameRoot={s.itemContainer} key={item.title} noWrap>
            <ImageContainer image={item.image} withoutFigcaption />
            <Container classNameRoot={s.item} noWrap>
              <Typography variant={'h2'}>{item.title}</Typography>
              <Button className={s.listButton} variant={'blank'}>
                <Typography className={s.buttonTitle} variant={'regular_text-16'}>
                  SHOP NOW
                </Typography>
              </Button>
            </Container>
          </Container>
        )
      })}
    </Container>
  )
}
