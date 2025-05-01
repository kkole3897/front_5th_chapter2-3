import { Post } from "@/entities/post"
import { User } from "@/entities/user"

type Author = Pick<User, "id" | "username" | "image">

export interface PostWithAuthor extends Post {
  author?: Author
}
