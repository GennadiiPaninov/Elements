import { Outlet, Route, Routes } from 'react-router-dom'

import { Header } from './shared/components/header/Header'
import { TypographyContent } from './widgets'
import { ButtonsContent } from './widgets/buttonsContent/ButtonsContent'
import { CategoryPage } from './widgets/landings/suitStore/pages/category/CategoryPage'
import { MainPageSuitStore } from './widgets/landings/suitStore/pages/mainPage/MainPage'

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Outlet />}>
          <Route element={<TypographyContent />} path={'/*'} />
          <Route element={<MainPageSuitStore />} path={'/dapper-designs'} />
          <Route element={<CategoryPage />} path={`/dapper-designs/collections/:category`} />
          <Route element={<ButtonsContent />} path={'/buttons-component'} />
          <Route element={<div></div>} path={'/animation'} />
        </Route>
      </Routes>
    </>
  )
}
