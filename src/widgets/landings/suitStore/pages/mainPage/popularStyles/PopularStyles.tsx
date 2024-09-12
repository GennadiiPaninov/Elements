import Slider from 'react-slick'

import s from './popularStyles.module.scss'

import { Container, ImageContainer, Typography, useIsMobile } from '../../../../../../shared'
import {
  SampleNextArrow,
  SamplePrevArrow,
} from '../../../../../../shared/components/arrowsFromTheSlider/ArrowsFromTheSlider'
export const PopularStyles = () => {
  const isMobile = useIsMobile(720)
  const popularCostumesItems = [
    {
      cost: '224',
      image:
        'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2FBlackSuit.jpg?alt=media&token=4ad8896f-5192-40a1-b847-10a9f662ea12',
      title: "Men's Dark Green Suit",
    },
    {
      cost: '199',
      image:
        'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2FgreySuit.jpg?alt=media&token=e3f87e10-3b70-4df4-ac57-bec703c49298',
      title: "Men's Brilliant Grey Suit",
    },
    {
      cost: '188',
      image:
        'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2ForangeSuit.jpg?alt=media&token=3ae84ff6-a5f8-470e-8201-bea7dd2946f0',
      title: "Men's Brilliant Orange Suit",
    },
    {
      cost: '283',
      image:
        'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2FBlueSuitGirl.jpg?alt=media&token=f4acefe0-b947-482c-9803-477e587097ad',
      title: "Women's Textured Blue Suit",
    },
    {
      cost: '318',
      image:
        'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2FGreyWomenSuit.jpg?alt=media&token=96a2d1e2-be5b-4d9f-a5f4-65bdc24836a6',
      title: "Women's Textured Grey Suit",
    },
    {
      cost: '1200',
      image:
        'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2FPink.jpg?alt=media&token=05c6ad8f-0756-4ee8-96ec-86e705db259b',
      title: "Women's Textured Pink Suit",
    },
  ] as { cost: string; image: string; title: string }[]
  const popularCostumes = popularCostumesItems.map(item => {
    return (
      <Container classNameRoot={s.itemWrapper} key={item.title} noWrap>
        <ImageContainer classNameRoot={s.image} image={item.image} />
        <Typography className={s.text} variant={'regular_text-16'}>
          {item.title} {item.cost}$
        </Typography>
      </Container>
    )
  })
  const settings = {
    adaptiveHeight: true,
    arrows: !isMobile,
    className: s.slick,
    dots: isMobile,
    dotsClass: `slick-dots slick-thumb ${s.slickDotsClass}`,
    infinite: true,
    nextArrow: <SampleNextArrow color={'#3d3838'} />,
    pauseOnHover: true,
    prevArrow: <SamplePrevArrow color={'#3d3838'} />,
    slidesToScroll: 1,
    slidesToShow: 2,
  }

  return (
    <Container classNameRoot={s.rootContainer} noWrap>
      <Container classNameRoot={s.titleContainer} noWrap>
        <Typography className={s.title} variant={'Large'}>
          Popular styles right now
        </Typography>
        <Typography className={s.text} variant={'regular_text-16'}>
          Make our most beloved looks your own.
        </Typography>
      </Container>
      <Container classNameRoot={s.sliderContainer} noWrap>
        <Slider {...settings}>{popularCostumes}</Slider>
      </Container>
    </Container>
  )
}
