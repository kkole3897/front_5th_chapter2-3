import { Comment, CommentPayload } from "../model"

interface GetCommentsResponse {
  comments: Comment[]
  total: number
  skip: number
  limit: number
}

// 댓글 목록 조회
export const getComments = async (postId: number) => {
  const response = await fetch(`/api/comments/post/${postId}`)

  if (!response.ok) {
    throw new Error("Failed to fetch comments")
  }

  const data: GetCommentsResponse = await response.json()

  return data
}

// 댓글 추가
export const addComment = async (comment: CommentPayload) => {
  const response = await fetch("/api/comments/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  })

  if (!response.ok) {
    throw new Error("Failed to add comment")
  }

  const data: Comment = await response.json()

  return data
}

// 댓글 업데이트
export const updateComment = async (comment: Comment) => {
  const response = await fetch(`/api/comments/${comment.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ body: comment.body }),
  })

  if (!response.ok) {
    throw new Error("Failed to update comment")
  }

  const data: Comment = await response.json()

  return data
}

// 댓글 삭제
export const deleteComment = async (id: number) => {
  const response = await fetch(`/api/comments/${id}`, {
    method: "DELETE",
  })

  if (!response.ok) {
    throw new Error("Failed to delete comment")
  }
}

// 댓글 좋아요
export const updateCommentLikes = async (id: number, likes: number) => {
  const response = await fetch(`/api/comments/${id}/like`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ likes }),
  })

  if (!response.ok) {
    throw new Error("Failed to like comment")
  }

  const data: Comment = await response.json()

  return data
}
