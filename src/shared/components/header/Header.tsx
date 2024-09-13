import { useLocation } from 'react-router-dom'

import s from './header.module.scss'

import { useIsMobile } from '../../assets'
import { DesktopMenu } from './desktopMenu/DesktopMenu'
import { DropDownMenu } from './dropDownMenu/DropDownMenu'
import { MenuFromSuitSite } from './menuFromSuitSite/MenuFromSuitSite'
export const Header = () => {
  const isMobile = useIsMobile(720)
  const urlPath = useLocation().pathname

  return (
    <header className={s.header}>
      {!urlPath.startsWith('/dapper-designs') &&
        (isMobile ? <DropDownMenu /> : <DesktopMenu urlPath={urlPath} />)}
      {urlPath.startsWith('/dapper-designs') && <MenuFromSuitSite />}
    </header>
  )
}
