import { clsx } from 'clsx'
import { motion } from 'framer-motion'

import s from './suitStoreDesktopMenu.module.scss'

import { rootActions } from '../../../entries/rootReducer/rootReducer'
import { useIsMobile } from '../../assets'
import { useAppDispatch, useAppSelector } from '../../assets/api/store'
import { menuItems } from '../../assets/constans'
import { Button } from '../buttons'
import { Container } from '../container'
import { GetStartedMenu } from '../hoverMenus/getStartedMenu/GetStartedMenu'
import { ResourcesMenu } from '../hoverMenus/resourcesMenu/ResourcesMenu'
import { WeddingsEventsMenu } from '../hoverMenus/weddingsEventsMenu/WeddingsEventsMenu'
import { Typography } from '../typography'
export const SuitStoreDesktopMenu = () => {
  const isOneThousand = useIsMobile(1050)
  const rootMenu = useAppSelector(state => state.rootState.menuState)
  const dispatch = useAppDispatch()

  if (!rootMenu || isOneThousand || rootMenu === 'Fit Guide') {
    return
  }
  const handleMouseLeave = () => {
    dispatch(rootActions.setMenuState({ menuState: '' }))
  }
  const style = {
    root: clsx(rootMenu && rootMenu == 'Shop' ? s.root : s.rootOther),
  }

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className={style.root}
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
                        <Button
                          as={'a'}
                          className={s.listButton}
                          href={`/dapper-designs/collections/${subItem.path}`}
                          variant={'blank'}
                        >
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
      <div className={s.menuContainerWithTitle}>
        {rootMenu && rootMenu !== 'Shop' && (
          <Typography className={s.menuItem} variant={'Semi-bold_middle-text'}>
            {rootMenu}
          </Typography>
        )}
        {rootMenu &&
          rootMenu !== 'Shop' &&
          menuItems
            ?.find(el => el.title === rootMenu)
            ?.subItems?.map(item => {
              return (
                <div className={s.iItemContainer} key={item.title}>
                  <ul className={s.menu}>
                    <li className={s.menuListItem}>
                      <Button className={s.listButton} variant={'blank'}>
                        <Typography className={s.menuItem} variant={'regular_text-16'}>
                          {item.title}
                        </Typography>
                      </Button>
                    </li>
                  </ul>
                </div>
              )
            })}
      </div>
      <GetStartedMenu rootMenu={rootMenu} />
      <WeddingsEventsMenu rootMenu={rootMenu} />
      <ResourcesMenu rootMenu={rootMenu} />
    </motion.div>
  )
}
