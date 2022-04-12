import {
  REVIEW_ALL_FAIL,
  REVIEW_ALL_REQUEST,
  REVIEW_ALL_SUCCESS
} from "../constants/reviewConstants"
import axios from 'axios'

export const listReviews = () => async (
  dispatch
) => {
  try {
    dispatch({ type: REVIEW_ALL_REQUEST })
    const { data } = await axios.get('/users/reviews')
    // console.log(data)
    dispatch({ type: REVIEW_ALL_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: REVIEW_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}