import { ReactNode } from 'react'
import Slider from 'react-slick'

import s from './advantagesElements.module.scss'

import { Box, Centimetre, DeliveryTruck, Glasses } from '../../../../../../public'
import { Container, Typography, useIsMobile } from '../../../../../../shared'
export const AdvantagesElements = () => {
  const isMobile = useIsMobile(720)
  const advantages = [
    {
      icon: <DeliveryTruck />,
      text: 'Fast + free shipping, returns, + exchanges made easy',
      title: 'Ready to Ship, Free',
    },
    {
      icon: <Box />,
      text: 'Starting at just $199, get brand new, quality suits to keep',
      title: 'Ownership at Rental Prices',
    },
    {
      icon: <Glasses />,
      text: 'Weddings + event groups get organization + attention',
      title: 'Well-Suited for Groups',
    },
    {
      icon: <Centimetre />,
      text: 'Broad size range, easy fit tools, no measurements required',
      title: 'Sizing Made Simple',
    },
  ] as { icon: ReactNode; text: string; title: string }[]
  const settings = {
    adaptiveHeight: true,
    arrows: false,
    className: s.slick,

    dots: true,
    dotsClass: `slick-dots slick-thumb ${s.slickDotsClass}`,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
  }
  const advantagesElements = advantages.map(item => {
    return (
      <Container classNameRoot={s.advantagesItem} key={item.title} noWrap>
        {item.icon}
        <div className={s.advantagesItemText}>
          <Typography variant={'Semi-bold_middle-text'}>{item.title}</Typography>
          <Typography variant={'regular_text-14'}>{item.text}</Typography>
        </div>
      </Container>
    )
  })

  return (
    <>
      {isMobile ? (
        <Container classNameRoot={s.advantagesContainer} noWrap>
          <Slider {...settings}>{advantagesElements}</Slider>
        </Container>
      ) : (
        <Container classNameRoot={s.advantagesContainer} noWrap>
          {advantagesElements}
        </Container>
      )}
    </>
  )
}
