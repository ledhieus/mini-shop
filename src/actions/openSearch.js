export const isOpenSearch = (action) => {
    return {
        type: "OPEN_SEARCH",
        action: action
    }
}

export const isOpenSuggest = (action) => {
    return {
        type: "OPEN_SUGGEST",
        action: action
    }
}