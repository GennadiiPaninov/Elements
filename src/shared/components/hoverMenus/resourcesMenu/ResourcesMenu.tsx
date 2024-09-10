import s from './resourcesMenu.module.scss'

import { ImageContainer } from '../../ImageContainer'
import { Button } from '../../buttons'
import { Typography } from '../../typography'
type Props = {
  rootMenu: string
}
export const ResourcesMenu = ({ rootMenu }: Props) => {
  return (
    <>
      {rootMenu == 'Resources & Help' && (
        <div className={s.menuContainerWithTitle}>
          <Typography className={s.menuItem} variant={'Semi-bold_middle-text'}>
            Contacts
          </Typography>
          <Typography as={'a'} href={'tel:+375445291344'} variant={'regular_text-16'}>
            +375(44)529-13-44
          </Typography>
          <Typography as={'a'} href={'suitshop@mail.ru'} variant={'regular_text-16'}>
            suitshop@mail.ru
          </Typography>
          <Typography variant={'regular_text-16'}>Our team typically</Typography>
          <Typography variant={'regular_text-16'}>answers within 24 hours.</Typography>
        </div>
      )}
      {rootMenu == 'Resources & Help' && (
        <ImageContainer
          classNameImg={s.image}
          classNameRoot={s.classNameRoot}
          image={
            'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2Fcontact-center.jpg?alt=media&token=9dc5c73d-1ff8-4af2-ba2d-541b485e97fb'
          }
        >
          <Button className={s.listButton} variant={'blank'}>
            <Typography className={s.menuItem} variant={'regular_text-14'}>
              Help Center
            </Typography>
          </Button>
        </ImageContainer>
      )}
    </>
  )
}
