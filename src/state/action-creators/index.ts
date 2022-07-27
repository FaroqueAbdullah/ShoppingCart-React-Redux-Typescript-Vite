import { Dispatch } from "redux"
import { ActionType } from "../action-types"
import { CartAction, CartProduct } from "../actions"

const addProductToCart = ( product: CartProduct ) => {
  return ( dispatch: Dispatch<CartAction> ) => {
    dispatch({
      type: ActionType.ADDTOCART,
      payload: product
    })
  }
}

const removeProductFromCart = ( product: CartProduct ) => {
  return ( dispatch: Dispatch<CartAction> ) => {
    dispatch({
      type: ActionType.REMOVEFROMCART,
      payload: product
    })
  }
}