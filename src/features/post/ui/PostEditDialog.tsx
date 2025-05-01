import { useEditPostDialogStore, useSelectPostStore, usePostsStore } from "../model"
import { api as postApi } from "@/entities/post"
import { Dialog, Input, Textarea, Button } from "@/shared/ui"

const PostEditDialog = () => {
  const { showEditDialog, setShowEditDialog } = useEditPostDialogStore()
  const { selectedPost, setSelectedPost } = useSelectPostStore()
  const { posts, setPosts } = usePostsStore()
  // 게시물 업데이트
  const updatePost = async () => {
    try {
      const data = await postApi.updatePost(selectedPost!.id, selectedPost!)
      setPosts(posts.map((post) => (post.id === data.id ? data : post)))
      setShowEditDialog(false)
    } catch (error) {
      console.error("게시물 업데이트 오류:", error)
    }
  }

  return (
    <Dialog.Root open={showEditDialog} onOpenChange={setShowEditDialog}>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>게시물 수정</Dialog.Title>
        </Dialog.Header>
        <div className="space-y-4">
          <Input
            placeholder="제목"
            value={selectedPost?.title || ""}
            onChange={(e) => setSelectedPost({ ...selectedPost!, title: e.target.value })}
          />
          <Textarea
            rows={15}
            placeholder="내용"
            value={selectedPost?.body || ""}
            onChange={(e) => setSelectedPost({ ...selectedPost!, body: e.target.value })}
          />
          <Button onClick={updatePost}>게시물 업데이트</Button>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default PostEditDialog
