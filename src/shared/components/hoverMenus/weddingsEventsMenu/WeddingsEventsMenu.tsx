import s from './weddingsEventsMenu.module.scss'

import { ImageContainer } from '../../ImageContainer'
import { Button } from '../../buttons'
import { Typography } from '../../typography'
type Props = {
  rootMenu: string
}
export const WeddingsEventsMenu = ({ rootMenu }: Props) => {
  return (
    <>
      {rootMenu == 'Weddings & Events' && (
        <ImageContainer
          classNameImg={s.image}
          classNameRoot={s.classNameRoot}
          image={
            'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2Fmaterials.jpg?alt=media&token=6a93b918-910f-47b0-879a-6c3a4e8bbfb2'
          }
        >
          <Button className={s.listButton} variant={'blank'}>
            <Typography className={s.menuItem} variant={'regular_text-14'}>
              Fabric Swatches
            </Typography>
          </Button>
        </ImageContainer>
      )}
      {rootMenu == 'Weddings & Events' && (
        <ImageContainer
          classNameImg={s.image}
          classNameRoot={s.classNameRoot}
          image={
            'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2Fwedding.jpg?alt=media&token=bcb7c68b-f894-4712-858d-7fd6706c09af'
          }
        >
          <Button className={s.listButton} variant={'blank'}>
            <Typography className={s.menuItem} variant={'regular_text-14'}>
              Real Weddings{' '}
            </Typography>
          </Button>
        </ImageContainer>
      )}
    </>
  )
}
