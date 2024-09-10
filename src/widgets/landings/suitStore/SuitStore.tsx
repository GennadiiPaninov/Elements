import { Container } from '../../../shared'
import { SuitStoreDesktopMenu } from '../../../shared/components/suitStoreDesktopMenu/SuitStoreDecktopMenu'
import { SuitStoreMenu } from '../../../shared/components/suitStoreMenu/SuitStoreMenu'
import { MainPage } from './pages/mainPage/MainPage'

export const SuitStore = () => {
  return (
    <Container noWrap>
      {' '}
      <SuitStoreMenu />
      <SuitStoreDesktopMenu />
      <MainPage />
    </Container>
  )
}
