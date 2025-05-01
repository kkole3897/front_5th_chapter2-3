import { create } from "zustand"

interface EditPostDialogState {
  showEditDialog: boolean
}

interface EditPostDialogActions {
  setShowEditDialog: (showEditDialog: boolean) => void
}

type EditPostDialogStore = EditPostDialogState & EditPostDialogActions

export const useEditPostDialogStore = create<EditPostDialogStore>((set) => ({
  showEditDialog: false,
  setShowEditDialog: (showEditDialog) => set({ showEditDialog }),
}))
