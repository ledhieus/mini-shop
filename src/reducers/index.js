import { combineReducers } from "redux"
import { infoQuickItemReducer, openQuickItemReducer, openSearchReducer, openSideBarReducer, openSuggestReducer, quantityCartReducer, quantityFavoritesReducer, updateQuantityCartReducer } from "./auth"

const allReducers = combineReducers({
    quantityFavoritesReducer, quantityCartReducer, updateQuantityCartReducer, openSideBarReducer, openSearchReducer, openSuggestReducer, openQuickItemReducer, infoQuickItemReducer
})
export default allReducers