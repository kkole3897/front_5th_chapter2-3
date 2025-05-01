import { Post, Tag, PostPayload } from "../model"

interface GetPostsParams {
  limit: number
  skip: number
}

interface GetPostsResponse {
  posts: Post[]
  limit: number
  skip: number
  total: number
}

// 게시물 목록 조회
export const getPosts = async (params: GetPostsParams) => {
  const response = await fetch(`/api/posts?limit=${params.limit}&skip=${params.skip}`)

  if (!response.ok) {
    throw new Error("Failed to fetch posts")
  }

  const data: GetPostsResponse = await response.json()

  return data
}

type GetPostTagsResponse = Tag[]

// 게시물 태그 목록 조회
export const getPostTags = async () => {
  const response = await fetch("/api/posts/tags")

  if (!response.ok) {
    throw new Error("Failed to fetch post tags")
  }

  const data: GetPostTagsResponse = await response.json()

  return data
}

// 게시물 검색
export const searchPosts = async (query: string) => {
  const response = await fetch(`/api/posts/search?q=${query}`)

  if (!response.ok) {
    throw new Error("Failed to search posts")
  }

  const data: GetPostsResponse = await response.json()

  return data
}

export const getPostsByTag = async (tag: string) => {
  const response = await fetch(`/api/posts/tag/${tag}`)

  if (!response.ok) {
    throw new Error("Failed to fetch posts by tag")
  }

  const data: GetPostsResponse = await response.json()

  return data
}

export const addPost = async (addPostRequest: PostPayload) => {
  const response = await fetch("/api/posts/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(addPostRequest),
  })

  if (!response.ok) {
    throw new Error("Failed to add post")
  }

  const data: Post = await response.json()

  return data
}

export const updatePost = async (id: Post["id"], updatePostRequest: Post) => {
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatePostRequest),
  })

  if (!response.ok) {
    throw new Error("Failed to update post")
  }

  const data: Post = await response.json()

  return data
}

export const deletePost = async (id: Post["id"]) => {
  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  })

  if (!response.ok) {
    throw new Error("Failed to delete post")
  }
}
