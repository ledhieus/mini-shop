import { getCart, getFavorite } from "../helper/localStorage"

const startQuantity = getFavorite().length
export const quantityFavoritesReducer = (state=startQuantity, action)=> {
    switch (action.type) {
        case "QUANTITY_FAVORITS":
            return action.quantity
        default:
            return state
    }
}
const startQuantityCart = getCart().length
export const quantityCartReducer = (state=startQuantityCart, action)=> {
    switch (action.type) {
        case "QUANTITY_CART":
            return action.quantity
        default:
            return state
    }
}
const listCartItem = getCart()
const totalPrice =  listCartItem.reduce((sum, item)=> {
    return sum + item.price * item.quantity
}, 0)
export const updateQuantityCartReducer = (state=totalPrice, action)=> {
    switch (action.type) {
        case "UPDATE_QUANTITY":
            return action.quantity
        default:
            return state
    }
}

export const openSideBarReducer = (state=false, action)=> {
    switch (action.type) {
        case "OPEN_SIDE_BAR":
            return action.action
        default:
            return state
    }
}

export const openSearchReducer = (state=false, action)=> {
    switch (action.type) {
        case "OPEN_SEARCH":
            return action.action
        case "OPEN_SUGGEST":
            return action.action
        default:
            return state
    }
}

export const openSuggestReducer = (state=true, action)=> {
    switch (action.type) {
        case "OPEN_SUGGEST":
            return action.action
        default:
            return state
    }
}

export const openQuickItemReducer = (state=false, action)=> {
    switch (action.type) {
        case "OPEN_QUICK_ITEM":
            return action.action
        default:
            return state
    }
}

export const infoQuickItemReducer = (state=0, action)=> {
    switch (action.type) {
        case "INFO_QUICK_ITEM":
            return action.id
        default:
            return state
    }
}