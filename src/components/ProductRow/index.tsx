import type { productType } from "../../model/types"

export function ProductRow({ product }: { product: productType }): JSX.Element {
  const { name, price, stocked } = product

  return (
    <tr>
      <td style={{ color: !stocked ? "red" : "initial" }}>{name}</td>
      <td>{price}</td>
    </tr>
  )
}
