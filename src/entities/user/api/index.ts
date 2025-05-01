import { User } from "../model"

interface GetUsersParams {
  limit: number
}

interface GetUsersResponse {
  total: number
  skip: number
  limit: number
  users: Pick<User, "id" | "username" | "image">[]
}

// 사용자 목록 조회
export const getUsers = async (params: GetUsersParams) => {
  // TODO: 다른 필드 필요하면 select params 추가
  const response = await fetch(`/api/users?limit=${params.limit}&select=username,image`)

  if (!response.ok) {
    throw new Error("Failed to fetch users")
  }

  const data: GetUsersResponse = await response.json()

  return data
}

// 사용자 상세 조회
export const getUser = async (id: User["id"]) => {
  const response = await fetch(`/api/users/${id}`)

  if (!response.ok) {
    throw new Error("Failed to fetch user")
  }

  const data: User = await response.json()

  return data
}
