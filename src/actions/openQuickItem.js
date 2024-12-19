export const openQuickItem = (action) => {
    return {
        type: "OPEN_QUICK_ITEM",
        action: action
    }
}

export const infoQuickItem = (id) => {
    return {
        type: "INFO_QUICK_ITEM",
        id: id
    }
}