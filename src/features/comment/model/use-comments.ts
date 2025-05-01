import { create } from "zustand"

import { Comment } from "@/entities/comment"

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

interface NewCommentState {
  newComment: {
    body: string
    postId: Comment["postId"] | null
    userId: Comment["user"]["id"]
  }
}

interface NewCommentActions {
  setNewComment: (newComment: NewCommentState["newComment"]) => void
}

type NewCommentStore = NewCommentState & NewCommentActions

export const useNewCommentStore = create<NewCommentStore>((set) => ({
  newComment: {
    body: "",
    postId: null,
    userId: 1,
  },
  setNewComment: (newComment) => set({ newComment }),
}))
