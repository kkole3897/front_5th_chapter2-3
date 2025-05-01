import { useEffect } from "react"

import { useTagsStore, useSelectTagStore } from "@/features/post/model"
import { api as postApi } from "@/entities/post"
import { Select } from "@/shared/ui"

const PostTagSelector = () => {
  const { selectedTag, setSelectedTag } = useSelectTagStore()
  const { tags, setTags } = useTagsStore()

  // 태그 가져오기
  const fetchTags = async () => {
    try {
      const data = await postApi.getPostTags()
      setTags(data)
    } catch (error) {
      console.error("태그 가져오기 오류:", error)
    }
  }

  useEffect(() => {
    fetchTags()
  }, [])

  const handleValueChange = (value: string) => {
    setSelectedTag(value)
  }

  return (
    <Select.Root value={selectedTag} onValueChange={handleValueChange}>
      <Select.Trigger className="w-[180px]">
        <Select.Value placeholder="태그 선택" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="all">모든 태그</Select.Item>
        {tags.map((tag) => (
          <Select.Item key={tag.url} value={tag.slug}>
            {tag.slug}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  )
}

export default PostTagSelector
