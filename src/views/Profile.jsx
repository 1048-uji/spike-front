import React, { useState } from 'react'
import { Input } from '../components/Input'

export default function Profile () {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [defaultVehicle, setDefaultVehicle] = useState('')
  const [defaultRouteType, setDefaultRouteType] = useState('')

  const handleEmailChange = (e) => setEmail(e.target.value)
  const handleUsernameChange = (e) => setUsername(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value)
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value)
  const handleDefaultVehicleChange = (e) => setDefaultVehicle(e.target.value)
  const handleDefaultRouteTypeChange = (e) => setDefaultRouteType(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleRemoveAcc = (e) => {
    e.preventDefault()
    console.log('Eliminando cuenta')
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-md w-96'>
        <h2 className='text-2xl font-bold mb-8 text-center'>Modificar cuenta</h2>
        <Input
          name='email'
          onChange={handleEmailChange}
          placeholder='Correo electrónico'
          required
          type='email'
        />
        <Input
          name='username'
          onChange={handleUsernameChange}
          placeholder='Nombre usuario'
          required
          type='text'
        />
        <Input
          name='password'
          onChange={handlePasswordChange}
          placeholder='Contraseña'
          required
          type='password'
        />
        <Input
          name='confirmPassword'
          onChange={handleConfirmPasswordChange}
          placeholder='Confirmar contraseña'
          required
          type='password'
        />
        {/* Replace with a select component if needed */}
        <Input
          name='defaultVehicle'
          onChange={handleDefaultVehicleChange}
          placeholder='Vehículo por defecto'
          required
          type='text'
        />
        {/* Replace with a select component if needed */}
        <Input
          name='defaultRouteType'
          onChange={handleDefaultRouteTypeChange}
          placeholder='Tipo de ruta por defecto'
          required
          type='text'
        />
        <button
          type='submit'
          className='w-full h-14 bg-blue-500 text-white rounded-lg mt-4 hover:bg-blue-600'
        >
          Actualizar Datos
        </button>
        <div className='text-center mt-4 text-sm text-blue-600 hover:underline'>
          <button onclick={handleRemoveAcc}>¿Desea Eliminar la cuenta? haz click sesión aquí.</button>
        </div>
      </form>
    </div>
  )
}
