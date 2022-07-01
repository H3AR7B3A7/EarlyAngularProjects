import { createAction, props } from "@ngrx/store";

import { Product } from "../product";

export const toggleProductCode = createAction('[Product] Toggle Product Code');

export const setCurrentProduct = createAction('[Product] Set Current Product', props<{ productId: number }>());

export const clearCurrentProduct = createAction('[Product] Clear Current Product');

export const initializeCurrentProduct = createAction('[Product] Initialize Current Product');

// COMPLEX LOAD OPERATIONS

export const loadProducts = createAction('[Product] Load');

export const loadProductsSuccess = createAction('[Product] Load Success', props<{ products: Product[] }>());

export const loadProductsFail = createAction('[Product] Load Fail', props<{ error: string }>());

// COMPLEX UPDATE OPERATIONS

export const updateProduct = createAction('[Product] Update Product', props<{ product: Product }>());

export const updateProductSuccess = createAction('[Product] Update Product Success', props<{ product: Product }>());

export const updateProductFail = createAction('[Product] Update Product Fail', props<{ error: string }>());

// COMPLEX CREATE OPERATIONS

export const createProduct = createAction('[Product] Create Product', props<{ product: Product }>());

export const createProductSuccess = createAction('[Product] Create Product Success', props<{ product: Product }>());

export const createProductFail = createAction('[Product] Create Product Fail', props<{ error: string }>());

// COMPLEX DELETE OPERATIONS

export const deleteProduct = createAction('[Product] Delete Product', props<{ productId: number }>());

export const deleteProductSuccess = createAction('[Product] Delete Product Success', props<{ productId: number }>());

export const deleteProductFail = createAction('[Product] Delete Product Fail', props<{ error: string }>());
