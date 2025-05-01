import { create } from "zustand"

import { PostWithAuthor } from "../model"

interface SelectPostState {
  selectedPost: PostWithAuthor | null
}

interface SelectPostActions {
  setSelectedPost: (selectedPost: PostWithAuthor | null) => void
}

type SelectPostStore = SelectPostState & SelectPostActions

export const useSelectPostStore = create<SelectPostStore>((set) => ({
  selectedPost: null,
  setSelectedPost: (selectedPost) => set({ selectedPost }),
}))
