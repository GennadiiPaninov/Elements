import s from './buttonArea.module.scss'

export const ButtonArea = ({ children }: any) => {
  return <div className={s.container}>{children}</div>
}
