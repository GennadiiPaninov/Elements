import s from './mainPage.module.scss'

import { Container } from '../../../../../shared'
import { AdditionalInformationSlider } from './additionalInformationSlider/AdditionalInformationSlider'
import { AdvantagesElements } from './advantagesElements/AdvantagesElements'
import { SuitsWithTuxedos } from './suitsWithTuxedos/SuitsWithTuxedos'
import { TitleImgContainer } from './titleImgContainer/TitleImgContainer'

export const MainPage = () => {
  return (
    <Container classNameRoot={s.rootContainer} noWrap>
      <TitleImgContainer />
      <AdvantagesElements />
      <SuitsWithTuxedos />
      <AdditionalInformationSlider />
    </Container>
  )
}
