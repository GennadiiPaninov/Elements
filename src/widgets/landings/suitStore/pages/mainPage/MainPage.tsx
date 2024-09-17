import s from './mainPage.module.scss'

import { Container, SuitStoreLayoutMenu } from '../../../../../shared'
import { useAppSelector } from '../../../../../shared/assets/api/store'
import { CategoryPage } from '../category/CategoryPage'
import { AdditionalInformationSlider } from './additionalInformationSlider/AdditionalInformationSlider'
import { AdvantagesElements } from './advantagesElements/AdvantagesElements'
import { MainPageFooter } from './footer/MainPageFooter'
import { PopularStyles } from './popularStyles/PopularStyles'
import { SuitsWithTuxedos } from './suitsWithTuxedos/SuitsWithTuxedos'
import { TitleImgContainer } from './titleImgContainer/TitleImgContainer'

export const MainPageSuitStore = () => {
  const categoryState = useAppSelector(state => state.rootState.categoryState)

  return (
    <Container noWrap>
      <SuitStoreLayoutMenu />
      {!categoryState && (
        <Container classNameRoot={s.rootContainer} noWrap>
          <TitleImgContainer />
          <AdvantagesElements />
          <SuitsWithTuxedos />
          <AdditionalInformationSlider />
          <PopularStyles />
          <MainPageFooter />
        </Container>
      )}
      {categoryState && <CategoryPage />}
    </Container>
  )
}
