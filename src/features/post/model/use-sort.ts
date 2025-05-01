import { create } from "zustand"

interface SortState {
  sortBy: string
  sortOrder: string
}

interface SortActions {
  setSortBy: (sortBy: string) => void
  setSortOrder: (sortOrder: string) => void
}

type SortStore = SortState & SortActions

const initiaState = (() => {
  const queryParams = new URLSearchParams(window.location.search)
  return {
    sortBy: queryParams.get("sortBy") || "",
    sortOrder: queryParams.get("sortOrder") || "",
  }
})()

export const useSortStore = create<SortStore>((set) => ({
  ...initiaState,
  setSortBy: (sortBy) => set({ sortBy }),
  setSortOrder: (sortOrder) => set({ sortOrder }),
}))
