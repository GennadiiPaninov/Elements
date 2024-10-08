import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ElementRef,
  KeyboardEvent,
  ReactNode,
  forwardRef,
  useState,
} from 'react'

import { Typography } from '@/shared/components'
import { clsx } from 'clsx'

import s from './input.module.scss'

import { Close, Eye, EyeOff, LocationPointer, Search_outline } from '../../../public'
import { Button } from '../buttons'

type InputTypes = 'email' | 'location' | 'password' | 'search' | 'text'

export type InputProps = {
  errorMessage?: null | string
  fullWidth?: boolean
  inputClassName?: string
  isShowButton?: boolean
  label?: ReactNode
  onButtonClick?: () => void // for datePicker type only
  onClearClick?: (value: string) => void
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  required?: boolean
  type: InputTypes
  value?: string
} & ComponentPropsWithoutRef<'input'>

const InputType = (
  type: InputTypes & Omit<ComponentPropsWithoutRef<'input'>, keyof InputProps>,
  showPassword: boolean
) => {
  if (type === 'password') {
    return showPassword ? 'text' : 'password'
  } else if (type === 'search') {
    return 'search'
  } else if (type === 'email') {
    return 'email'
  } else {
    return 'text'
  }
}

export const Input = forwardRef<ElementRef<'input'>, InputProps>(
  (
    {
      className,
      disabled,
      errorMessage,
      fullWidth,
      inputClassName,
      label,
      onButtonClick,
      onChange,
      onClearClick,
      onEnter,
      required,
      type,
      value,
      ...rest
    },
    ref
  ) => {
    const showError = !!errorMessage && errorMessage.length > 0
    const [showPassword, setShowPassword] = useState(false)

    const classNames = {
      clearButton: s.clearButton,
      input: clsx(s.input, showError && s.error, disabled && s.disabled, inputClassName),
      input_wrapper: clsx(
        s.input_wrapper,
        disabled && s.disabled,
        showError && s.error,
        `${s[type]}`,
        fullWidth && s.fullWidth
      ),
      inputWithStart: clsx(s.inputWithStart, showError && s.error, disabled && s.disabled),
      label: clsx(disabled ? s.labelDisable : s.label),
      root: clsx(s.box, disabled && s.disabled, errorMessage && s.errorBox, className),
    }
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (onEnter && e.key === 'Enter') {
        onEnter(e)
      }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e)
      }
    }

    const onClearClickHandler = () => {
      if (onClearClick) {
        onClearClick('')
      }
    }

    const showPasswordHandler = () => {
      setShowPassword(!showPassword)
    }

    const isShowButton = type === 'search' && !!value

    return (
      <div className={classNames.root}>
        <Typography className={classNames.label} variant={'regular_text-14'}>
          {label}
          {required && <span className={s.required}>*</span>}
        </Typography>
        <div className={classNames.input_wrapper}>
          {type === 'search' && (
            <span className={s.iconStart}>
              <Search_outline color={'var(--color-dark-100)'} size={20} />
            </span>
          )}
          <input
            className={classNames.input}
            disabled={disabled}
            onChange={onChangeHandler}
            onKeyDown={handleKeyDown}
            ref={ref}
            type={InputType(type, showPassword)}
            value={value || ''}
            {...rest}
          />
          {type === 'location' && (
            <button className={s.iconStart} type={'button'}>
              <LocationPointer />
            </button>
          )}
          {type === 'password' && (
            <Button
              aria-label={`${showPassword ? 'hide' : 'show'} password`}
              className={s.iconStart}
              onClick={showPasswordHandler}
              type={'button'}
              variant={'blank'}
            >
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </Button>
          )}
          {isShowButton && (
            <button className={s.iconEnd} onClick={onClearClickHandler} type={'button'}>
              {<Close color={'var(--color-light-100)'} size={20} />}
            </button>
          )}
        </div>
        {errorMessage && (
          <Typography className={s.errorMessage} variant={'error_regular'}>
            {errorMessage}
          </Typography>
        )}
      </div>
    )
  }
)
