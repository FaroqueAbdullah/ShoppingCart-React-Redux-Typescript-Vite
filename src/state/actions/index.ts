import { ActionType } from "../action-types/index";

export interface CartProduct {
  productId: number,
  productType: string,
  productTitle: string,
  productPrice: number,
  productSize: string,
  productImage: string,
  totalAmountInCart: number
}

export interface AddToCart {
  type: ActionType.ADDTOCART,
  payload: CartProduct
}

export interface RemoveFromCart {
  type: ActionType.REMOVEFROMCART,
  payload: CartProduct
}

export type CartAction = AddToCart | RemoveFromCart;

