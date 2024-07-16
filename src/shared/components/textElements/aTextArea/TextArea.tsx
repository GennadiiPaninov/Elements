import s from './textArea.module.scss'

export const TextArea = ({ children, classname }: any) => {
  return <div className={`${s.container} ${classname ? classname : ''}`}>{children}</div>
}
