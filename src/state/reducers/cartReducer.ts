import { ActionType } from '../action-types';
import { CartAction, CartProduct } from '../actions/index';

const initialState: CartProduct[] = [];

const reducer = (state = initialState, action: CartAction) => {
  switch ( action.type ) {
    case ActionType.ADDTOCART:
      return state;
    case ActionType.REMOVEFROMCART:
      return state;
    default:
      return state;
  }
}

export default reducer;