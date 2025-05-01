import { create } from "zustand"

interface CommentsState {
  comments: Record<string, Comment[]>
}

interface CommentsActions {
  setComments: (comments: Record<string, Comment[]>) => void
}

type CommentsStore = CommentsState & CommentsActions

export const useCommentsStore = create<CommentsStore>((set) => ({
  comments: {},
  setComments: (comments) => set({ comments }),
}))
