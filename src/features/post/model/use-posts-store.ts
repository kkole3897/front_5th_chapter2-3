import { create } from "zustand"

import { PostWithAuthor } from "./post-with-author"

interface PostsState {
  posts: PostWithAuthor[]
}

interface PostsActions {
  setPosts: (posts: PostWithAuthor[]) => void
}

type PostsStore = PostsState & PostsActions

export const usePostsStore = create<PostsStore>((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
}))
