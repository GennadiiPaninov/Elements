import { ChangeEvent, useState } from 'react'

import s from './registration.module.scss'

import { Button } from '../buttons'
import { Input } from '../input'
export const Registration = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <div className={s.container}>
      <div className={s.registrationForm}>
        <h2>Registration</h2>
        <form>
          <Input
            inputClassName={s.inputClass}
            label={'Name'}
            name={'name'}
            onChange={handleChange}
            required
            type={'text'}
            value={formData.name}
          />
          <Input
            inputClassName={s.inputClass}
            label={'Email'}
            name={'email'}
            onChange={handleChange}
            required
            type={'email'}
            value={formData.email}
          />
          <Input
            inputClassName={s.inputClass}
            label={'Password'}
            name={'password'}
            onChange={handleChange}
            required
            type={'password'}
            value={formData.password}
          />
          <Button className={s.sendButton} variant={'blank'}>
            Send
          </Button>
        </form>
      </div>
    </div>
  )
}
