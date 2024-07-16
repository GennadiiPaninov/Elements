import s from './app.module.scss'

import { Button1, HoverMe } from './shared'

export function App() {
  return (
    <div>
      <div className={s.ButtonPlace}>
        <Button1 />
      </div>
      <div className={s.TextPlace}>
        <HoverMe />
      </div>
    </div>
  )
}
