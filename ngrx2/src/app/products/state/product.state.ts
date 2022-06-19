import { Product } from "../product.model";
import * as AppState from '../../state/app.state'

export interface State extends AppState.State {
    products: ProductState
}

export interface ProductState {
    products: Product[];
}