import { motion } from 'framer-motion'

import s from './suitStoreDesktopMenu.module.scss'

import { rootActions } from '../../../entries/rootReducer/rootReducer'
import { useIsMobile } from '../../assets'
import { useAppDispatch, useAppSelector } from '../../assets/api/store'
import { menuItems } from '../../assets/constans'
import { Button } from '../buttons'
import { Container } from '../container'
import { Typography } from '../typography'
export const SuitStoreDesktopMenu = () => {
  const isOneThousand = useIsMobile(1050)
  const rootMenu = useAppSelector(state => state.rootState.menuState)
  const dispatch = useAppDispatch()

  if (!rootMenu || isOneThousand) {
    return
  }
  const handleMouseLeave = () => {
    dispatch(rootActions.setMenuState({ menuState: '' }))
  }

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className={s.root}
      exit={{ opacity: 0, y: -20 }}
      initial={{ opacity: 0, y: -20 }}
      onMouseLeave={handleMouseLeave}
      transition={{ duration: 0.3 }}
    >
      {rootMenu === 'Shop' && (
        <Container classNameRoot={s.container} noWrap>
          {menuItems
            .find(el => el.title === 'Shop')
            ?.subItems?.map(item => (
              <div className={s.iItemContainer} key={item.title}>
                <Typography className={s.menuItem} variant={'Semi-bold_middle-text'}>
                  {item.title}
                </Typography>
                {item.subItems && item.subItems.length > 0 && (
                  <ul className={s.menu}>
                    {item.subItems.map(subItem => (
                      <li className={s.menuListItem} key={subItem.title}>
                        <Button className={s.listButton} variant={'blank'}>
                          <Typography className={s.menuItem} variant={'regular_text-16'}>
                            {subItem.title}
                          </Typography>
                        </Button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
        </Container>
      )}
    </motion.div>
  )
}
