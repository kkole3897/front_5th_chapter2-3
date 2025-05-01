import { Plus } from "lucide-react"

import { useAddPostDialogStore } from "../model"
import { Button } from "@/shared/ui"

const PostAddButton = () => {
  const { setShowAddDialog } = useAddPostDialogStore()

  const handleClick = () => {
    setShowAddDialog(true)
  }

  return (
    <Button onClick={handleClick}>
      <Plus className="w-4 h-4 mr-2" />
      게시물 추가
    </Button>
  )
}

export default PostAddButton
