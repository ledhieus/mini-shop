import { CloseOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { getCart, removeFromCart } from "../../helper/localStorage";
import { Col, Row } from "antd"
import { useDispatch } from "react-redux"
import { quantityCart, updateQuantityCart } from '../../actions/quantityCart';
import { sumPrice } from '../../helper/feature';

function CartItem() {
    const [cartItem, setCartItem] = useState([])
    const listCartItem = getCart()
    const [totalPrice, setTotalPrice] = useState()
    const dispatch = useDispatch()


    useEffect(() => {
        const listCartItem = getCart() || []
        setCartItem(listCartItem)
    }, [])

    useEffect(()=> {
        const total =  listCartItem.reduce((sum, item)=> {
            return sum + item.price * item.quantity
        }, 0)
        setTotalPrice(total)
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItem));
    }, [cartItem, listCartItem])
    
    const handleSubtract = (productId) => {
        const upDateQuantity = cartItem.map((item)=> {
            if(item.productId === productId){
                if(item.quantity > 1){
                    return { ...item, quantity: item.quantity -1}
                }              
            }
            return item
        })
        setCartItem(upDateQuantity)

        const total =  sumPrice(upDateQuantity)
        dispatch(updateQuantityCart(total))
    }
    const handlePlus = (productId) => {
        const upDateQuantity = cartItem.map((item)=> {
            if(item.productId === productId){
                return {...item, quantity: item.quantity + 1}
            }
            return item
        })
        setCartItem(upDateQuantity)
        const total =  sumPrice(upDateQuantity)
        dispatch(updateQuantityCart(total))
    }
    const handleChange = (e, productId) => {
        const newQuantity = parseInt(e.target.value) || 1; // Mặc định là 1 nếu không hợp lệ
        setCartItem((prevCart) =>
            prevCart.map((item) =>
                item.productId === productId
                    ? { ...item, quantity: Math.max(1, newQuantity) }
                    : item
            )
        );
    };
    const handleDeleteItem=(productId)=> {
        const upDateCart = removeFromCart(productId)
        setCartItem(upDateCart)
        const total =  sumPrice(upDateCart)
        dispatch(updateQuantityCart(total))
        dispatch(quantityCart(cartItem.length -1 ))
    }
    return (
        <>
            {cartItem.length > 0 ?
                <>
                    {cartItem.map(item => (
                        <Row className="cartItem" key={item.productId}>
                            <Col className="closeImage" span={3}>
                                <CloseOutlined onClick={()=> handleDeleteItem(item.productId)}/>
                                <div className="image">
                                    <img src={item.img} />
                                </div>
                            </Col>
                            <Col className="cartItem__info" span={21}>
                                <div className="titleSize">
                                    <p className="title">{item.productTitle}</p>
                                    <p className="size">{item.size}</p>
                                </div>
                                <div className="priceInput">
                                    <p className="price">{(item.price * item.quantity).toLocaleString('vi-VN')}.000₫</p>
                                    <div className="input">
                                        <button className="input-bt subtract"  onClick={()=> handleSubtract(item.productId)}>-</button>
                                        <input type="text" value={item.quantity} onChange={(e)=>handleChange(e, item.productId)}/>
                                        <button className="input-bt plus" onClick={()=> handlePlus(item.productId)}>+</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                    ))}
                </>
                :
                <><p>Chưa có sản phảm nào trong giỏ hàng</p></>}
        </>
    )
}
export default CartItem