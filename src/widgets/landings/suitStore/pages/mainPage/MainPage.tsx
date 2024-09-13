import s from './mainPage.module.scss'

import { Container, SuitStoreLayoutMenu } from '../../../../../shared'
import { AdditionalInformationSlider } from './additionalInformationSlider/AdditionalInformationSlider'
import { AdvantagesElements } from './advantagesElements/AdvantagesElements'
import { MainPageFooter } from './footer/MainPageFooter'
import { PopularStyles } from './popularStyles/PopularStyles'
import { SuitsWithTuxedos } from './suitsWithTuxedos/SuitsWithTuxedos'
import { TitleImgContainer } from './titleImgContainer/TitleImgContainer'

export const MainPageSuitStore = () => {
  return (
    <Container noWrap>
      <SuitStoreLayoutMenu />
      <Container classNameRoot={s.rootContainer} noWrap>
        <TitleImgContainer />
        <AdvantagesElements />
        <SuitsWithTuxedos />
        <AdditionalInformationSlider />
        <PopularStyles />
        <MainPageFooter />
      </Container>
    </Container>
  )
}
