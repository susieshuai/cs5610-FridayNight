import {
    ORDER_CREATE_FAIL,
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS
} from "../constants/orderConstants"
import axios from 'axios'

// create new order
export const createOrder = (order) => async (
    dispatch, getState
) => {
    try {
        dispatch({ type: ORDER_CREATE_REQUEST })

        //   get login user info first
        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }
        //  call API to create order
        const { data } = await axios.post(
            `/orders`,
            order,
            config
        )

        dispatch({ type: ORDER_CREATE_SUCCESS, payload: data })

    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}