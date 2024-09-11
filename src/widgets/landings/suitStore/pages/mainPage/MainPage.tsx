import s from './mainPage.module.scss'

import { Container } from '../../../../../shared'
import { AdvantagesElements } from './advantagesElements/AdvantagesElements'
import { SuitsWithTuxedos } from './suitsWithTuxedos/SuitsWithTuxedos'
import { TitleImgContainer } from './titleImgContainer/TitleImgContainer'

export const MainPage = () => {
  return (
    <Container classNameRoot={s.rootContainer} noWrap>
      <TitleImgContainer />
      <AdvantagesElements />
      <SuitsWithTuxedos />
    </Container>
  )
}
