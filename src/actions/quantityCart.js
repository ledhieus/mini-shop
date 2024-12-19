export const quantityCart =( quantity )=> {
    return {
        type: "QUANTITY_CART",
        quantity: quantity
    }
}
export const updateQuantityCart = (quantity) => {
    return {
        type: "UPDATE_QUANTITY",
        quantity: quantity
    }
}