import { ReactNode } from 'react'

import { motion } from 'framer-motion'

import s from './suitStoreMenu.module.scss'

import { rootActions } from '../../../entries/rootReducer/rootReducer'
import { BackArrow, Calendar, ContactUs, Help, RightArrow } from '../../../public'
import { useIsMobile } from '../../assets'
import { useAppDispatch, useAppSelector } from '../../assets/api/store'
import { menuItems } from '../../assets/constans'
import { ImageContainer } from '../ImageContainer'
import { Button } from '../buttons'
import { Container } from '../container'
import { HorizontalLine } from '../horizontalLine/HorizontalLine'
import { Input } from '../input'
import { Typography } from '../typography'

export const SuitStoreMenu = () => {
  const rootMenu = useAppSelector(state => state.rootState.menuState)
  const menuShop = useAppSelector(state => state.rootState.menuShop)
  const additionalMenu = [
    { icon: <Calendar />, title: 'Book an Appointment' },
    { icon: <BackArrow />, title: 'Returns & Exchanges' },
    { icon: <Help />, title: 'Help' },
    { icon: <ContactUs />, title: 'Contact Us' },
  ] as {
    icon: ReactNode
    title: string
  }[]
  const isMobile = useIsMobile(1050)
  const dispatch = useAppDispatch()
  const handleChangeRootMenuState = (item: string) => {
    if (menuShop) {
      dispatch(rootActions.setMenuState({ menuState: 'Shop' }))
      dispatch(rootActions.setMenuShop({ menuState: '' }))
    } else {
      dispatch(rootActions.setMenuState({ menuState: item }))
    }
  }
  const handleChangeMenuShop = (item: string) => {
    dispatch(rootActions.setMenuShop({ menuState: item }))
  }

  if (!rootMenu || !isMobile) {
    return
  }

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }} // Конечные значения при появлении
      className={s.motionMenu}
      exit={{ opacity: 0, y: -20 }} // Значения при исчезновении
      initial={{ opacity: 0, y: -20 }} // Начальные значения
      transition={{ duration: 0.3 }} // Длительность анимации
    >
      <ul className={s.menu}>
        <li className={s.menuListItem}>
          {' '}
          <Input placeholder={'Search'} type={'search'} />
        </li>
        {rootMenu === 'RootMenu' && (
          <>
            {menuItems.map(item => {
              return (
                <li className={s.menuListItem} key={item.title}>
                  <Button
                    className={s.listButton}
                    onClick={() => handleChangeRootMenuState(item.title)}
                    variant={'blank'}
                  >
                    <Typography className={s.menuItem} variant={'regular_text-16'}>
                      {item.title}
                    </Typography>
                    {item.subItems.length > 0 && <RightArrow />}
                  </Button>
                </li>
              )
            })}
            <HorizontalLine />
            <ImageContainer image={'https://smartcasuals.ru/wp-content/uploads/2021/06/1.jpg'}>
              <Button className={s.listButton} variant={'blank'}>
                <Typography className={s.menuItemSuitGroup} variant={'regular_text-16'}>
                  Suit a Group
                </Typography>
              </Button>
            </ImageContainer>
            <HorizontalLine />
            {additionalMenu.map(item => {
              return (
                <li className={s.menuListItem} key={item.title}>
                  <Button variant={'blank'}>
                    {item.icon}
                    <Typography className={s.menuItem} variant={'regular_text-16'}>
                      {item.title}
                    </Typography>
                  </Button>
                </li>
              )
            })}
          </>
        )}
        {rootMenu !== 'RootMenu' && (
          <Container classNameRoot={s.classNameRootBack} noWrap>
            <Button
              className={s.backMenuButton}
              fullWidth
              onClick={() => handleChangeRootMenuState('RootMenu')}
              variant={'blank'}
            >
              <BackArrow />
              <Typography className={s.menuItem} variant={'regular_text-16'}>
                {menuShop ? menuShop : rootMenu}
              </Typography>
            </Button>
            <HorizontalLine />
          </Container>
        )}
        {rootMenu !== 'RootMenu' &&
          !menuShop &&
          menuItems
            ?.find(item => item.title === rootMenu)
            ?.subItems?.map(item => {
              return (
                <li className={s.menuListItem} key={item.title}>
                  <Button
                    className={s.listButton}
                    onClick={() => handleChangeMenuShop(item.title)}
                    variant={'blank'}
                  >
                    <Typography className={s.menuItem} variant={'regular_text-16'}>
                      {item.title}
                    </Typography>
                    {item.subItems && item.subItems.length > 0 && <RightArrow />}
                  </Button>
                </li>
              )
            })}
        {menuShop &&
          menuItems
            ?.find(item => item.title === rootMenu)
            ?.subItems?.find(item => item.title === menuShop)
            ?.subItems?.map(item => {
              return (
                <li className={s.menuListItem} key={item.title}>
                  <Button
                    className={s.listButton}
                    onClick={() => handleChangeMenuShop(item.title)}
                    variant={'blank'}
                  >
                    <Typography className={s.menuItem} variant={'regular_text-16'}>
                      {item.title}
                    </Typography>
                  </Button>
                </li>
              )
            })}
      </ul>
    </motion.div>
  )
}
