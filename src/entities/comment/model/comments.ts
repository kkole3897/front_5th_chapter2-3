interface CommentOwner {
  id: number
  username: string
  fullName: string
}

export interface Comment {
  id: number
  body: string
  postId: number
  likes: number
  user: CommentOwner
}

export interface CommentPayload extends Pick<Comment, "body" | "postId"> {
  userId: number
}
