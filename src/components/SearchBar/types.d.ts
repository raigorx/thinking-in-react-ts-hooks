import {filterState} from '../FilterableProductTable/types';

export interface SearchBarProps {
  filterText: filterState<string>[0]
  setFilterText: filterState<string>[1]
  inStockOnly: filterState<boolean>[0]
  setInStockOnly: filterState<boolean>[1]
}