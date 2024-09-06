import { useState } from 'react'
import { Link } from 'react-router-dom'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './desktopMenu.module.scss'

import { path, subPath } from '../../../assets/constans'
import { Button } from '../../buttons'
import { Typography } from '../../typography'
type Props = {
  urlPath: string
}
export const DesktopMenu = ({ urlPath }: Props) => {
  const [open, setOpen] = useState(false)
  const handleToggleMenu = () => {
    setOpen(prevOpen => !prevOpen)
  }
  const style = {
    activeButton: clsx(s.listButton, s.active),
    button: clsx(s.listButton),
  }

  return (
    <ul className={s.list}>
      <DropdownMenu.Root onOpenChange={setOpen} open={open}>
        <DropdownMenu.Trigger asChild className={s.trigger}>
          <li className={s.listLink}>
            <Button className={style.button} onClick={handleToggleMenu}>
              <Typography className={s.listTitle} variant={'Semi-bold_middle-text'}>
                Landings
              </Typography>
            </Button>
          </li>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className={open ? s.menuContent : s.closedMenu} sideOffset={2}>
          {open &&
            subPath.landings.map(path => {
              return (
                <DropdownMenu.Item className={s.menuItem} key={path.title}>
                  <Button
                    as={Link}
                    className={s.menuItemButton}
                    fullWidth
                    onClick={handleToggleMenu}
                    to={path.href}
                  >
                    <Typography variant={'h3'}>{path.title}</Typography>
                  </Button>
                </DropdownMenu.Item>
              )
            })}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      {path?.map(path => {
        return (
          <li className={s.listLink} key={path.title}>
            <Button
              as={Link}
              className={urlPath === path.href ? style.button : style.activeButton}
              to={path.href}
            >
              <Typography className={s.listTitle} variant={'Semi-bold_middle-text'}>
                {path.title}
              </Typography>
            </Button>
          </li>
        )
      })}
    </ul>
  )
}
