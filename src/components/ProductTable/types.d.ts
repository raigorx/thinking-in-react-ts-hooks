import {filterState} from '../FilterableProductTable/types';
import {productType} from '../../model/types'

interface ProductTableProps {
  filterText: filterState<string>[0]
  inStockOnly: filterState<boolean>[0]
}

export interface uniqueCategoryFunction {
  (arg0: productType['category'], arg1: Set<string> ): boolean
}

export interface filterFunction {
  (arg0: productType, arg1:filterState<string>[0], arg2: filterState<boolean>[0] ): boolean
}