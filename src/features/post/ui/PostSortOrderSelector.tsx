import { Select } from "@/shared/ui"

import { useSortStore } from "@/features/post"

const PostSortOrderSelector = () => {
  const { sortOrder, setSortOrder } = useSortStore()

  return (
    <Select.Root value={sortOrder} onValueChange={setSortOrder}>
      <Select.Trigger className="w-[180px]">
        <Select.Value placeholder="정렬 순서" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="asc">오름차순</Select.Item>
        <Select.Item value="desc">내림차순</Select.Item>
      </Select.Content>
    </Select.Root>
  )
}

export default PostSortOrderSelector
