import s from './image.module.scss'

import adidas from '../../../../assets/images/6765347546.jpg'
import jordan from '../../../../assets/images/Jordan.webp'
import asics from '../../../../assets/images/asics.jpg'
import nike from '../../../../assets/images/nike.jpg'
export const Image1 = () => {
  return (
    <div>
      <img alt={''} className={s.img} src={nike} />
      <img alt={''} className={s.img} src={adidas} />
      <img alt={''} className={s.img} src={asics} />
      <img alt={''} className={s.img} src={jordan} />
    </div>
  )
}
