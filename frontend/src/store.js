import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productListReducer,
  productDeatilsReducer,
  productAddReviewReducer,
  productTopRatedReducer,

} from './reducers/productReducers'

import { cartReducer } from './reducers/cartReducers'
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer

} from './reducers/userReducers'

import { 
  orderCreateReducer, 
  orderDetailsReducer, 
  orderListMyReducer
} from './reducers/orderReducers'

import {  
  myReviewListReducer,
  reviewListReducer 
} from './reducers/reviewReducers'

const reducer = combineReducers({

  productList: productListReducer,
  productDetails: productDeatilsReducer,
  productAddReview: productAddReviewReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  productTopRated:productTopRatedReducer,
  orderDetails: orderDetailsReducer,
  orderListMy: orderListMyReducer,
  reviewList:reviewListReducer,
  myReviewList:myReviewListReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
