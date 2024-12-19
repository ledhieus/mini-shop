import { get } from "../utils/request"

export const getCategory = async () => {
    const result = await get("category")
    return result
}

export const getCategoryBySlug = async (slugCategory) => {
    const result = await get(`category?slug=${slugCategory}`)
    return result
}