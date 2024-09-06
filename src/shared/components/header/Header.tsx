import { useLocation } from 'react-router-dom'

import s from './header.module.scss'

import { useIsMobile } from '../../assets'
import { DesktopMenu } from './desktopMenu/DesktopMenu'
import { DropDownMenu } from './dropDownMenu/DropDownMenu'
import { MenuFromSuitSite } from './menuFromSuitSite/MenuFromSuitSite'
export const Header = () => {
  const isMobile = useIsMobile(720)
  const urlPath = useLocation().pathname

  console.log(urlPath)

  return (
    <header className={s.header}>
      {urlPath !== '/dapper-designs' &&
        (isMobile ? <DropDownMenu /> : <DesktopMenu urlPath={urlPath} />)}
      {urlPath === '/dapper-designs' && <MenuFromSuitSite />}
    </header>
  )
}
