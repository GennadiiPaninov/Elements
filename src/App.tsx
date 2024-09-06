import { Outlet, Route, Routes } from 'react-router-dom'

import { Header } from './shared/components/header/Header'
import { TypographyContent } from './widgets'
import { ButtonsContent } from './widgets/buttonsContent/ButtonsContent'
import { SuitStore } from './widgets/landings/suitStore/SuitStore'

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Outlet />}>
          <Route element={<TypographyContent />} path={'/*'} />
          <Route element={<SuitStore />} path={'/dapper-designs'} />
          <Route element={<ButtonsContent />} path={'/buttons-component'} />
          <Route element={<div></div>} path={'/animation'} />
        </Route>
      </Routes>
    </>
  )
}
