import { CSSProperties, MouseEventHandler, useState } from 'react'
import Slider from 'react-slick'

import s from './additionalInformationSlider.module.scss'

import { Button, Container, ImageContainer, Typography } from '../../../../../../shared'
export interface CustomArrowProps {
  className?: string | undefined
  currentSlide?: number | undefined
  onClick?: MouseEventHandler<any> | undefined
  slideCount?: number | undefined
  style?: CSSProperties | undefined
}
function SampleNextArrow(props: CustomArrowProps) {
  const { className, onClick, style } = props

  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, background: 'red', display: 'block' }}
    />
  )
}

function SamplePrevArrow(props: CustomArrowProps) {
  const { className, onClick, style } = props

  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, background: 'green', display: 'block' }}
    />
  )
}
export const AdditionalInformationSlider = () => {
  // const isMobile = useIsMobile(720)
  const [value, setValue] = useState<number>(0)
  const additionInformation = [
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2FPeopleWithSuit.jpg?alt=media&token=d6074078-f1f2-465a-84c0-535f99fb1b6d',
      info:
        'Looking your best starts with the right fit. As the most size-inclusive online suiting\n' +
        "          retailer across both our men's and women's collections, we've got something perfectly\n" +
        '          suited for you.',
      title: 'Find your perfect fit.',
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2FBPeopleSuit.jpg?alt=media&token=c7c3f077-f83b-4d49-8b1e-3411527a582b',
      info: 'Manage your wedding party 100% online. Get perfectly matching wedding attire and simple organization from home. Planning your wedding just got so much easier.',
      title: 'Suit the whole group.',
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2Fmaterial.jpg?alt=media&token=50952f22-d7a0-44b8-9d6c-32456332c050',
      info: 'Take the guesswork out of matching your look to your vision. Order fabric swatches to ensure color-matching and coordination throughout your event. Sign up to get 3 for free.',
      title: 'Make it a match.',
    },
  ] as {
    image: string
    info: string
    title: string
  }[]
  const settings = {
    beforeChange: (_, newIndex: number) => setValue(newIndex),
    className: s.slick,
    dots: true,
    dotsClass: `slick-dots slick-thumb ${s.slickDotsClass}`,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToScroll: 1,
    slidesToShow: 1,
  }

  return (
    <Container classNameRoot={s.rootContainer} noWrap>
      <Container noWrap>
        <Slider {...settings}>
          {additionInformation.map(item => {
            return (
              <ImageContainer
                classNameRoot={s.image}
                image={item.image}
                key={item.title}
                withoutFigcaption
              />
            )
          })}
        </Slider>
      </Container>
      <Container classNameRoot={s.informationContainer} noWrap>
        <Typography variant={'Large'}>{additionInformation[value].title}</Typography>
        <Typography className={s.info} variant={'regular_text-16'}>
          {additionInformation[value].info}
        </Typography>
        <Button className={s.listButton} variant={'blank'}>
          <Typography className={s.buttonTitle} variant={'regular_text-16'}>
            Start the Fit Finder
          </Typography>
        </Button>
      </Container>
    </Container>
  )
}
