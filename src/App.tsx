import s from './app.module.scss'

import { Button1, HoverMe, Image1 } from './shared'

export function App() {
  return (
    <div>
      <div className={s.ButtonPlace}>
        <Button1 />
      </div>
      <div className={s.TextPlace}>
        <HoverMe />
      </div>
      <div className={s.imagePlace}>
        <Image1 />
      </div>
    </div>
  )
}
