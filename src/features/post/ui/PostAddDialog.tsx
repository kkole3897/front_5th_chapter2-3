import { useState } from "react"

import { useAddPostDialogStore, usePostsStore } from "../model"
import { api } from "@/entities/post"
import { Dialog, Input, Textarea, Button } from "@/shared/ui"

export default function PostAddDialog() {
  const { showAddDialog, setShowAddDialog } = useAddPostDialogStore()
  const { posts, setPosts } = usePostsStore()

  const [newPost, setNewPost] = useState({ title: "", body: "", userId: 1 })

  // 게시물 추가
  const addPost = async () => {
    try {
      const data = await api.addPost(newPost)
      // TODO: author fetch 후 추가
      setPosts([data, ...posts])
      setShowAddDialog(false)
      setNewPost({ title: "", body: "", userId: 1 })
    } catch (error) {
      console.error("게시물 추가 오류:", error)
    }
  }

  return (
    <Dialog.Root open={showAddDialog} onOpenChange={setShowAddDialog}>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>새 게시물 추가</Dialog.Title>
        </Dialog.Header>
        <div className="space-y-4">
          <Input
            placeholder="제목"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <Textarea
            rows={30}
            placeholder="내용"
            value={newPost.body}
            onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          />
          <Input
            type="number"
            placeholder="사용자 ID"
            value={newPost.userId}
            onChange={(e) => setNewPost({ ...newPost, userId: Number(e.target.value) })}
          />
          <Button onClick={addPost}>게시물 추가</Button>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  )
}
