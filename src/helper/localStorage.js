export function addToFavorite(product) {

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const existingFavorite = favorites.find(item => item.id === product.id);
    if (existingFavorite) {
        favorites = favorites.filter(item => item.id !== product.id)
    } else {
        favorites.push(product);
    }

    // Lưu lại giỏ hàng vào Local Storage
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

export function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingCartIndex = cart.findIndex(item => item.productId === product.productId && item.size === product.size);

    if (existingCartIndex !== -1) {
        cart[existingCartIndex] = {
            ...cart[existingCartIndex],
            quantity: cart[existingCartIndex].quantity + product.quantity
        };
    } else {
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}


export function getCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart;
}
export function getFavorite() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    return favorites;
}

export function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Loại bỏ sản phẩm có id trùng với productId
    cart = cart.filter(item => item.productId !== productId);

    // Lưu lại giỏ hàng vào Local Storage
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart
}
export function deleteCart() {
    localStorage.setItem('cart', JSON.stringify([]));
}