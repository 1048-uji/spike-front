import { useQuery } from 'react-query'
import { MenuIcon } from '../assets/icons/Icon'
import { Input } from '../components/Input'
import { apiCall } from '../services/apiCall'

import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function Home () {
  const { data, isLoading, isError } = useQuery(
    ['routeData'],
    async () => await apiCall.get('/spike/ruta')
  )

  const position = [39.9945, -0.0711]

  return (
    <div className='flex'>
      <aside className='w-1/3  h-screen p-10 flex flex-col gap-10'>
        <header className='h-10 flex '>
          <MenuIcon className='h-10 w-10 cursor-pointer' />
          <h1 className='flex-1 text-center text-3xl'>Nombre/Logo</h1>
        </header>

        <Input
          placeholder='Lugar o coordenadas'
          type='text'
          like
        />
      </aside>
      <main className='flex-1 bg-gray-100 h-screen'>
        {isLoading
          ? (
            <p>Cargando datos...</p>
            )
          : isError
            ? (
              <p>Error al cargar datos.</p>
              )
            : (
              <div style={{ height: '100%' }}>
                <MapContainer center={position} zoom={13} style={{ height: '100%' }}>
                  <TileLayer
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                </MapContainer>
              </div>
              )}
      </main>
    </div>
  )
}

export default Home
