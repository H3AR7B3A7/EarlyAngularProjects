import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store'
import { ProductState } from './product.state'

const initialState: ProductState = {
    products: []
}

// TODO : Add payload to the actions
export const productReducer = createReducer<ProductState>(
    initialState,
    on(createAction('[Product] Add'), (state): ProductState => {
        return {
            ...state,
            products: [...state.products, { id: Math.random(), name: 'New Laptop', price: 1200 }]
        }
    }),
    on(createAction('[Product] Remove'), (state): ProductState => {
        const newProducts = state.products.slice(1)
        return {
            ...state,
            products: newProducts
        }
    })
)

const getProductState = createFeatureSelector<ProductState>('products')

export const getProducts = createSelector(getProductState, (state: ProductState) => state.products)
