import React, { useState } from 'react'
import { Input } from '../components/Input'
import backgroundImage from '../assets/img/login.webp'
import { Link } from 'react-router-dom'

export default function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div
      className='flex items-center justify-center h-screen'
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-md w-96'>
        <h2 className='text-2xl font-bold mb-8 text-center'>Inicio sesión</h2>
        <Input
          name='email'
          onChange={handleEmailChange}
          placeholder='Correo electrónico'
          required
          type='email'
        />
        <Input
          name='password'
          onChange={handlePasswordChange}
          placeholder='Contraseña'
          required
          type='password'
          like={false}
        />
        <button
          type='submit'
          className='w-full h-14 bg-blue-500 text-white rounded-lg mt-4 hover:bg-blue-600'
        >
          Iniciar
        </button>
        <div className='text-center mt-4'>
          <Link to='/register' className='text-sm text-blue-600 hover:underline'>
            ¿Aún no estás registrado? Regístrate aquí.
          </Link>
        </div>
      </form>
    </div>
  )
}
