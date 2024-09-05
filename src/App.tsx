import { Outlet, Route, Routes } from 'react-router-dom'

import { Header } from './shared/components/header/Header'
import { TypographyContent } from './widgets'
import { ButtonsContent } from './widgets/buttonsContent/ButtonsContent'

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Outlet />}>
          <Route element={<TypographyContent />} path={'/'} />
          <Route element={<ButtonsContent />} path={'/buttons-component'} />
          <Route element={<div></div>} path={'/landings'} />
          <Route element={<div></div>} path={'/animation'} />
        </Route>
      </Routes>
    </>
  )
}
