import {States} from '../FilterableProductTable/types';

export interface SearchBarProps {
  filterText: States['string'][0]
  setFilterText: States['string'][1]
  inStockOnly: States['boolean'][0]
  setInStockOnly: States['boolean'][1]
}