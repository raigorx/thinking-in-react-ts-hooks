import type { productType } from "../../model/types"

export function ProductCategoryRow(props: { category: productType["category"] }) {
  const { category } = props
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  )
}
