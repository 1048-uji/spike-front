import React, { useState } from 'react'
import { EyeIcon, EyeOffIcon, HeartIcon, HeartFillIcon } from '../assets/icons/Icon'

export const Input = ({ name, onChange, placeholder, required = false, type = 'text', min, max, like }) => {
  const [show, setShow] = useState(false)
  const [newType, setNewType] = useState(type)
  const [likePlace, setLikePlace] = useState(false)

  const handleShowPassword = () => {
    setShow(!show)
    setNewType(show ? 'password' : 'text')
  }

  const handleLikePlace = () => {
    setLikePlace(prevState => !prevState)
  }

  return (
    <div className='relative'>

      <input
        name={name}
        onChange={onChange}
        type={newType}
        placeholder={placeholder}
        className='w-full h-14 p-2 bg-transparent text-colorText border-2 rounded-lg mb-5 border-opacity-60 focus:outline-none focus:border-opacity-100 placeholder-opacity-80'
        required={required}
        minLength={min}
        maxLength={max}
      />

      {type === 'password' && (
        <div
          onClick={handleShowPassword}
          className='absolute right-3 top-3 focus:outline-none cursor-pointer select-none'
        >
          {show
            ? (
              <EyeOffIcon className='h-7 w-7 text-gray-100 ' />
              )
            : (
              <EyeIcon className='h-7 w-7 text-gray-100' />
              )}
        </div>
      )}

      {like && (
        <div
          onClick={handleLikePlace}
          className='absolute right-3 top-3 focus:outline-none cursor-pointer select-none'
        >
          {likePlace
            ? (
              <HeartFillIcon className='h-7 w-7 text-gray-100' />
              )
            : (
              <HeartIcon className='h-7 w-7 text-gray-100 ' />
              )}
        </div>
      )}
    </div>

  )
}
