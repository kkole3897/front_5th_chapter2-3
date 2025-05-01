import { create } from "zustand"

interface AddPostDialogState {
  showAddDialog: boolean
}

interface AddPostDialogActions {
  setShowAddDialog: (showAddDialog: boolean) => void
}

type AddPostDialogStore = AddPostDialogState & AddPostDialogActions

export const useAddPostDialogStore = create<AddPostDialogStore>((set) => ({
  showAddDialog: false,
  setShowAddDialog: (showAddDialog) => set({ showAddDialog }),
}))
