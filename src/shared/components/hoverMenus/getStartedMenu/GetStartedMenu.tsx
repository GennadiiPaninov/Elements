import s from './getStartedMenu.module.scss'

import { ImageContainer } from '../../ImageContainer'
import { Button } from '../../buttons'
import { Typography } from '../../typography'
type Props = {
  rootMenu: string
}
export const GetStartedMenu = ({ rootMenu }: Props) => {
  return (
    <>
      {rootMenu == 'Get Started' && (
        <ImageContainer
          classNameRoot={s.classNameRoot}
          image={
            'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/PeopleInSuit.jpg?alt=media&token=557d1dc7-d5a1-4db9-b689-d6ddc743640c'
          }
        >
          <Button className={s.listButton} variant={'blank'}>
            <Typography className={s.menuItem} variant={'regular_text-14'}>
              Size & Fit
            </Typography>
          </Button>
        </ImageContainer>
      )}
      {rootMenu == 'Get Started' && (
        <ImageContainer
          classNameImg={s.image}
          classNameRoot={s.classNameRoot}
          image={
            'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2Fquestion.jpg?alt=media&token=9308b383-25bd-433a-a80b-541ce023e61a'
          }
        >
          <Button className={s.listButton} variant={'blank'}>
            <Typography className={s.menuItem} variant={'regular_text-14'}>
              Order & Shipping FAQs
            </Typography>
          </Button>
        </ImageContainer>
      )}
    </>
  )
}
