import { get, post } from "../utils/request"

export const order = async (options) => {
    const result = await post("order", options)
}

export const orderByPhone = async (phone) => {
    const result = await get(`order?phoneNumber=${phone}`)
    return result
}