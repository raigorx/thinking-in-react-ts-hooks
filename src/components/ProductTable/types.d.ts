import {States} from '../FilterableProductTable/types';
import {productType} from '../../model/types'

interface ProductTableProps {
  filterText: States['string'][0]
  inStockOnly: States['boolean'][0]
}

export interface uniqueCategoryFunction {
  (arg0: productType['category'], arg1: Set<string> ): boolean
}

export interface filterFunction {
  (arg0: productType, arg1:States['string'][0], arg2: States['boolean'][0] ): boolean
}