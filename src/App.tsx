import s from './app.module.scss'

import { Button1 } from './shared/components/buttons'

export function App() {
  return (
    <div>
      <div className={s.ButtonPlace}>
        <Button1 />
      </div>
    </div>
  )
}
