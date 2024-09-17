import { Outlet, Route, Routes } from 'react-router-dom'

import { Header } from './shared/components/header/Header'
import { TypographyContent } from './widgets'
import { Animation } from './widgets/animation/Animation'
import { ButtonsContent } from './widgets/buttonsContent/ButtonsContent'
import { AccountPage } from './widgets/landings/suitStore/pages/account/AccountPage'
import { MainPageSuitStore } from './widgets/landings/suitStore/pages/mainPage/MainPage'

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Outlet />}>
          <Route element={<TypographyContent />} path={'/*'} />
          <Route element={<MainPageSuitStore />} path={'/dapper-designs'} />
          <Route element={<AccountPage />} path={`/dapper-designs/account`} />
          <Route element={<ButtonsContent />} path={'/buttons-component'} />
          <Route element={<Animation />} path={'/animation'} />
        </Route>
      </Routes>
    </>
  )
}
