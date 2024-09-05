import { useState } from 'react'
import { Link } from 'react-router-dom'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropDownMenu.module.scss'

import { BurgerMenu } from '../../../../public'
import { path, subPath } from '../../../assets/constans'
import { Button } from '../../buttons'
import { Typography } from '../../typography'

export const DropDownMenu = () => {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(prev => !prev)
  }

  return (
    <DropdownMenu.Root onOpenChange={setOpen} open={open}>
      <DropdownMenu.Trigger asChild>
        <Button
          className={s.triggerButton}
          icon={<BurgerMenu />}
          onClick={toggleMenu}
          variant={'icon'}
        />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className={s.menuContent} sideOffset={5}>
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger className={s.menuItem}>
            <Button className={s.menuItemButton} variant={'link'}>
              <Typography variant={'h3'}>Lendings</Typography>
            </Button>
          </DropdownMenu.SubTrigger>
          <DropdownMenu.Portal>
            <DropdownMenu.SubContent alignOffset={-5} className={s.menuContent} sideOffset={2}>
              {subPath.landings.map(path => {
                return (
                  <DropdownMenu.Item className={s.menuItem} key={path.title}>
                    <Button as={Link} className={s.menuItemButton} to={path.href} variant={'link'}>
                      <Typography variant={'h3'}>{path.title}</Typography>
                    </Button>
                  </DropdownMenu.Item>
                )
              })}
            </DropdownMenu.SubContent>
          </DropdownMenu.Portal>
        </DropdownMenu.Sub>
        {path.map(path => {
          return (
            <DropdownMenu.Item className={s.menuItem} key={path.title}>
              <Button as={Link} className={s.menuItemButton} to={path.href} variant={'link'}>
                <Typography variant={'h3'}>{path.title}</Typography>
              </Button>
            </DropdownMenu.Item>
          )
        })}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
