import { create } from "zustand"

import { Tag } from "@/entities/post"

interface TagsState {
  tags: Tag[]
}

interface TagsActions {
  setTags: (tags: Tag[]) => void
}

type TagsStore = TagsState & TagsActions

export const useTagsStore = create<TagsStore>((set) => ({
  tags: [],
  setTags: (tags) => set({ tags }),
}))

interface SelectTagState {
  selectedTag: string
}

interface SelectTagActions {
  setSelectedTag: (tag: string) => void
}

type SelectTagStore = SelectTagState & SelectTagActions

export const useSelectTagStore = create<SelectTagStore>((set) => ({
  selectedTag: new URLSearchParams(window.location.search).get("tag") || "",
  setSelectedTag: (tag) => set({ selectedTag: tag }),
}))
