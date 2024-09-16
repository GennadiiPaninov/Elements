import s from './imagePicture.module.scss'
type Props = {
  image: string
  title: string
}
export const ImagePicture = ({ image, title }: Props) => {
  return (
    <picture className={s.pictureClass}>
      <source type={'image/webp'} />
      <img alt={title} className={s.image} loading={'lazy'} src={image} />
    </picture>
  )
}
