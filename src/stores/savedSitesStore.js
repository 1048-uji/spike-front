import { create } from 'zustand'

const useSavedSitesStore = create((set) => ({
  sites: [],
  addSite: (site) => set((state) => ({ sites: [...state.sites, site] })),
  removeSite: (id) => set((state) => ({ sites: state.sites.filter(site => site.id !== id) }))
}))

export default useSavedSitesStore
