import { motion } from 'framer-motion'

import s from './suitStoreMenu.module.scss'

import { RightArrow } from '../../../public/icon/rightArrow'
import { useAppSelector } from '../../assets/api/store'
import { menuItems } from '../../assets/constans'
import { Button } from '../buttons'
import { HorizontalLine } from '../horizontalLine/HorizontalLine'
import { Input } from '../input'
import { Typography } from '../typography'
export const SuitStoreMenu = () => {
  const rootMenu = useAppSelector(state => state.rootState.menuState)

  return (
    <>
      {rootMenu && (
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
            {menuItems.map(item => {
              return (
                <li className={s.menuListItem} key={item.title}>
                  <Button className={s.listButton} variant={'blank'}>
                    <Typography className={s.menuItem} variant={'regular_text-16'}>
                      {item.title}
                    </Typography>
                    <RightArrow />
                  </Button>
                </li>
              )
            })}
            <li className={s.menuListItem}>
              <HorizontalLine />
            </li>
          </ul>
        </motion.div>
      )}
    </>
  )
}
