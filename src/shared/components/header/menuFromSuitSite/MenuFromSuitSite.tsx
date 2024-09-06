import s from './menuFromSuitSite.module.scss'

import { Account } from '../../../../public/icon/account'
import { BurgerMenuSuitStore } from '../../../../public/icon/burgerMenuSuitStore'
import { Busket } from '../../../../public/icon/busket'
import { useIsMobile } from '../../../assets'
import { menuItems } from '../../../assets/constans'
import { Button } from '../../buttons'
import { Slogan } from '../../slogan/Slogan'
import { Typography } from '../../typography'

export const MenuFromSuitSite = () => {
  const isOneThousand = useIsMobile(1050)
  const isMobile = useIsMobile(720)

  return (
    <>
      <div className={s.headerGrid}>
        <Slogan />
        <div className={s.headerMenu}>
          <div className={s.h1Container}>
            <Typography variant={'h1'}>
              Dapper{' '}
              <Typography className={s.designs} variant={'h1'}>
                {' '}
                Designs
              </Typography>
            </Typography>
          </div>
          {!isOneThousand && (
            <ul className={s.menuList}>
              {menuItems.map(item => {
                return (
                  <li className={s.menuListItem} key={item.title}>
                    <Button variant={'blank'}>
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
                <Button variant={'blank'}>
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
                <Button icon={<BurgerMenuSuitStore />} variant={'blank'}></Button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  )
}
