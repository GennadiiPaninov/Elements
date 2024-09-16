import { SuitStoreLayoutMenu } from '../../../../../shared'
import { Registration } from '../../../../../shared/components/registration/Registration'
import { MainPageFooter } from '../mainPage/footer/MainPageFooter'

export const AccountPage = () => {
  return (
    <>
      <SuitStoreLayoutMenu />
      <Registration />
      <MainPageFooter />
    </>
  )
}
