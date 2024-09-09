import s from '../../../shared/components/suitStoreMenu/suitStoreMenu.module.scss'

import { Button, Container, ImageContainer, Typography } from '../../../shared'
import { SuitStoreMenu } from '../../../shared/components/suitStoreMenu/SuitStoreMenu'

export const SuitStore = () => {
  return (
    <Container noWrap>
      {' '}
      <SuitStoreMenu />
      <ImageContainer image={'https://smartcasuals.ru/wp-content/uploads/2021/06/1.jpg'}>
        <Button className={s.listButton} variant={'blank'}>
          <Typography className={s.menuItemSuitGroup} variant={'regular_text-16'}>
            Suit a Group
          </Typography>
        </Button>
      </ImageContainer>
    </Container>
  )
}
