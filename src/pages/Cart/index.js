import { Col, Row } from "antd"
import "./cart.scss"
import Paying from "./Paying";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import { getCart } from "../../helper/localStorage";
import { useSelector } from "react-redux"

function Cart() {
    const [cartItem, setCartItem] = useState([])
    const quantityCart = useSelector(state => state.quantityCartReducer)

    useEffect(() => {
        const listCartItem = getCart() || []
        setCartItem(listCartItem)
    }, [quantityCart])
    return (
        <>
            <div style={{ fontSize: "30px", margin: "30px 20px" }}>
                Giỏ hàng
            </div>
            {cartItem.length > 0 ?
                <>
                    <Row className="cart-wrap">
                        <Col span={16}>
                            <CartItem />
                        </Col>

                        <Col span={8}>
                            <Paying />
                        </Col>
                    </Row>
                </> :
                <>
                <p style={{fontSize: "20px", textAlign: "center"}}>Chưa có sản phẩm trong giỏ hàng</p>
                </>}

        </>
    )
}
export default Cart