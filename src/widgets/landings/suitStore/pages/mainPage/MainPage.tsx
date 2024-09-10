import { ReactNode } from 'react'

import s from './mainPage.module.scss'

import { Box, Centimetre, DeliveryTruck, Glasses } from '../../../../../public'
import { Button, Container, ImageContainer, Typography, useIsMobile } from '../../../../../shared'

export const MainPage = () => {
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
  const panel = [
    { title: 'SHOP MEN' },
    { title: 'SHOP WOMEN' },
    { title: 'SHOP MADE-TO-ORDER' },
  ] as { title: string }[]
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
    <Container classNameRoot={s.rootContainer} noWrap>
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
      <Container classNameRoot={s.advantagesContainer} noWrap>
        {advantagesElements}
      </Container>
    </Container>
  )
}
