export const sumPrice = (item) => {
    return (item.reduce((sum, item)=> {
        return sum + item.price * item.quantity
    }, 0)) 
}