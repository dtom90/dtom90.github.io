import { create } from 'zustand'

export const useActiveSectionStore = create((set) => ({
  activeSection: 'about',
  setActiveSection: (section) => set({ activeSection: section }),
}))

