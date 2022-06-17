import type {SearchBarProps} from './types';

export function SearchBar(props : SearchBarProps) {
  const { filterText, setFilterText, inStockOnly, setInStockOnly } = props

  const handleChangeFilterText : React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    setFilterText(evt.target.value)
  }

  const handleChangeStockOnly: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    setInStockOnly(evt.target.checked)
  }

  return (
    <div className="search-bar-container">
      <input onChange={handleChangeFilterText} value={filterText} className="block" type="text" placeholder="Search..." required />
      <label className="block">
        <input onChange={handleChangeStockOnly} checked={inStockOnly} type="checkbox" />
        Only show products in stock
      </label>
    </div>
  )
}
