import { useState } from "react"

import { useCommentAddDialogStore, useCommentsStore } from "../model"
import { api as commentApi } from "@/entities/comment"
import { Dialog, Textarea, Button } from "@/shared/ui"

const CommentAddDialog = () => {
  const { showAddCommentDialog, setShowAddCommentDialog } = useCommentAddDialogStore()
  const { comments, setComments } = useCommentsStore()

  const [newComment, setNewComment] = useState<{ body: string; postId: null | number; userId: number }>({
    body: "",
    postId: null,
    userId: 1,
  })
  // 댓글 추가
  const addComment = async () => {
    try {
      if (!newComment.postId) {
        throw new Error("게시물 ID가 없습니다.")
      }

      const payload = newComment as unknown as Parameters<typeof commentApi.addComment>[0]

      const data = await commentApi.addComment(payload)
      setComments({
        ...comments,
        [data.postId]: [...(comments[data.postId] || []), data],
      })
      setShowAddCommentDialog(false)
      setNewComment({ body: "", postId: null, userId: 1 })
    } catch (error) {
      console.error("댓글 추가 오류:", error)
    }
  }

  return (
    <Dialog.Root open={showAddCommentDialog} onOpenChange={setShowAddCommentDialog}>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>새 댓글 추가</Dialog.Title>
        </Dialog.Header>
        <div className="space-y-4">
          <Textarea
            placeholder="댓글 내용"
            value={newComment.body}
            onChange={(e) => setNewComment({ ...newComment, body: e.target.value })}
          />
          <Button onClick={addComment}>댓글 추가</Button>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default CommentAddDialog
