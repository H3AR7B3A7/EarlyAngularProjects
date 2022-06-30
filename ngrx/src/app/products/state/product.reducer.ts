import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store'
import { Product } from '../product'

import * as AppState from '../../state/app.state'
import * as ProductActions from './product.actions'

export interface State extends AppState.State {
  products: ProductState
}
export interface ProductState {
  showProductCode: boolean,
  currentProduct: Product,
  products: Product[],
}

const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
}

export const productReducer = createReducer<ProductState>(
  initialState,
  on(ProductActions.toggleProductCode, (state): ProductState => {
    return {
      ...state,
      showProductCode: !state.showProductCode
    }
  }),
  on(ProductActions.setCurrentProduct, (state, action): ProductState => {
    return {
      ...state,
      currentProduct: action.product
    }
  }),
  on(ProductActions.clearCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProduct: null
    }
  }),
  on(ProductActions.initializeCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProduct: { id: 0, productName: '', productCode: 'New', description: '', starRating: 0 }
    }
  }),
  on(ProductActions.loadSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: action.products
    }
  })
)

const getProductFeatureState = createFeatureSelector<ProductState>('products')

export const getShowProductCode = createSelector(getProductFeatureState, state => state.showProductCode)

export const getCurrentProduct = createSelector(getProductFeatureState, state => state.currentProduct)

export const getProducts = createSelector(getProductFeatureState, state => state.products)

// export const getCurrentProductId = createSelector(getProductFeatureState, state => state.currentProduct.id)

// export const getCurrentProduct = createSelector(
//   getProductFeatureState,
//   getCurrentProductId,
//   (state, currentProductId) => state.products.find(p => p.id === currentProductId)
// )
