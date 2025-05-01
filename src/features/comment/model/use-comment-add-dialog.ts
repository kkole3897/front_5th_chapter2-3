import { create } from "zustand"

interface CommentAddDialogState {
  showAddCommentDialog: boolean
}

interface CommentAddDialogActions {
  setShowAddCommentDialog: (showAddCommentDialog: boolean) => void
}

type CommentAddDialogStore = CommentAddDialogState & CommentAddDialogActions

export const useCommentAddDialogStore = create<CommentAddDialogStore>((set) => ({
  showAddCommentDialog: false,
  setShowAddCommentDialog: (showAddCommentDialog) => set({ showAddCommentDialog }),
}))
