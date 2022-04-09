import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,

  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,

  PRODUCT_ADD_REVIEW_REQUEST,
  PRODUCT_ADD_REVIEW_SUCCESS,
  PRODUCT_ADD_REVIEW_FAIL,
} from '../constants/productConstants'

//the reducer of get all items
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] }
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      }
    case PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

//reducer of get one item
export const productDeatilsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state }
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload }
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

// reducer of add new review
export const productAddReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_ADD_REVIEW_REQUEST:
      return { loading: true }
    case PRODUCT_ADD_REVIEW_SUCCESS:
      return { loading: false, success: true }
    case PRODUCT_ADD_REVIEW_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}