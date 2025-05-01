import { type TagSlug } from "./tags"

export interface Post {
  id: number
  title: string
  body: string
  tags: TagSlug[]
  reactions: {
    likes: number
    dislikes: number
  }
  views: number
  userId: number
}

export type PostPayload = Pick<Post, "title" | "body" | "userId">
