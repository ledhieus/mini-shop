import { get } from "../utils/request"

export const getProductFeature = async () => {
    const result = await get("products?feature=true")
    return result
}
export const getProductSummer = async () => {
    const result = await get("products?type=summer&_limit=3")
    return result
}

export const getProductByIdCategory = async (categoryId ,limit) => {
    const result = await get(`products?categoryId=${categoryId}&_limit=${limit}`)
    return result
}

export const getProductBySlug = async (slugProduct) => {
    const result = await get(`products?slug=${slugProduct}`)
    return result
}


export const searchItemBySlug = async (slugSearch) => {
    const result = await get(`products?slug_like=${slugSearch}`)
    return result
}

export const getItemById = async (id) => {
    const result = await get(`products?id=${id}`)
    return result
}