import { create } from 'zustand'

const useVehiclesStore = create((set) => ({
  vehicles: [],
  addVehicle: (vehicle) => set((state) => ({ vehicles: [...state.vehicles, vehicle] })),
  removeVehicle: (id) => set((state) => ({ vehicles: state.vehicles.filter(vehicle => vehicle.id !== id) }))
}))

export default useVehiclesStore
