import s from './menuFromSuitSite.module.scss'

import { rootActions } from '../../../../entries/rootReducer/rootReducer'
import { Account, BurgerMenuSuitStore, Busket, Cross } from '../../../../public'
import { useIsMobile } from '../../../assets'
import { useAppDispatch, useAppSelector } from '../../../assets/api/store'
import { menuItems } from '../../../assets/constans'
import { Button } from '../../buttons'
import { Slogan } from '../../slogan/Slogan'
import { Typography } from '../../typography'

export const MenuFromSuitSite = () => {
  const isOneThousand = useIsMobile(1050)
  const isMobile = useIsMobile(720)
  const dispatch = useAppDispatch()
  const rootMenu = useAppSelector(state => state.rootState.menuState)
  const handleChangeRootMenuState = (item: string) => {
    item
      ? dispatch(rootActions.setMenuState({ menuState: item }))
      : dispatch(rootActions.setMenuState({ menuState: rootMenu == '' ? 'RootMenu' : '' }))
  }
  const handleChangeCategory = () => {
    dispatch(rootActions.setCategory({ categoryState: '' }))
    dispatch(rootActions.setMenuShop({ menuState: '' }))
    dispatch(rootActions.setMenuState({ menuState: '' }))
  }

  return (
    <>
      <div className={s.headerGrid}>
        <Slogan />
        <div className={s.headerMenu}>
          <div className={s.h1Container}>
            <Button
              as={'a'}
              className={s.titleApp}
              onClick={handleChangeCategory}
              variant={'blank'}
            >
              <Typography variant={'h1'}>
                Dapper{' '}
                <Typography className={s.designs} variant={'h1'}>
                  {' '}
                  Designs
                </Typography>
              </Typography>
            </Button>
          </div>
          {!isOneThousand && (
            <ul className={s.menuList}>
              {menuItems.map(item => {
                return (
                  <li className={s.menuListItem} key={item.title}>
                    <Button
                      onMouseEnter={() => handleChangeRootMenuState(item.title)}
                      variant={'blank'}
                    >
                      <Typography variant={'regular_text-14'}>{item.title}</Typography>
                    </Button>
                  </li>
                )
              })}
            </ul>
          )}

          <ul className={s.menuList}>
            {!isMobile && (
              <li className={s.menuListItem}>
                <Button variant={'blank'}>
                  <Typography variant={'regular_text-14'}>Suit a group</Typography>
                </Button>
              </li>
            )}
            {!isMobile && (
              <li className={s.menuListItem}>
                <Button as={'a'} className={s.accountRsc} variant={'blank'}>
                  <Account />
                  <Typography variant={'regular_text-14'}>Account</Typography>
                </Button>
              </li>
            )}
            {!isMobile && (
              <li className={s.menuListItem}>
                <Button icon={<Busket />} variant={'blank'} />
              </li>
            )}
            {isOneThousand && (
              <li className={s.menuListItem}>
                <Button
                  icon={rootMenu ? <Cross /> : <BurgerMenuSuitStore />}
                  onClick={() => handleChangeRootMenuState('')}
                  variant={'blank'}
                />
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  )
}
