import { openQuickItem } from "../../actions/openQuickItem"
import "./styles/quickItem.scss"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useEffect, useState } from 'react';
import { getItemById } from "../../services/product"
import { Col, Row } from "antd";
import { quantityCart, updateQuantityCart } from "../../actions/quantityCart";
import { addToCart, getCart } from "../../helper/localStorage";
import { notification } from 'antd';
import { sumPrice } from "../../helper/feature";

function QuickItem(props) {
    const idProduct = useSelector(state => state.infoQuickItemReducer)

    const [size, setSize] = useState("M")
    const [quantity, setQuantity] = useState(1)
    const [infoItem, setInfoItem] = useState([])
    const dispatch = useDispatch()

    const cartItem = getCart()

    const handleClose = () => {
        dispatch(openQuickItem(false))
    }
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getItemById(idProduct)
            setInfoItem(result)
        }
        fetchApi()
    }, [idProduct])
    const handleAddtoCart = () => {
        let infoProduct;
        if (infoItem[0].size) {
            infoProduct = {
                productId: infoItem[0].id,
                productTitle: infoItem[0].title,
                price: infoItem[0].price * quantity,
                img: infoItem[0].images[0],
                size: size,
                quantity: quantity
            }
        }
        else {
            infoProduct = {
                productId: infoItem[0].id,
                productTitle: infoItem[0].title,
                price: infoItem[0].price * quantity,
                img: infoItem[0].images[0],
                quantity: quantity
            }
        }
        const total = sumPrice(cartItem) + infoProduct.price * infoProduct.quantity
        dispatch(updateQuantityCart(total))

        dispatch(quantityCart(cartItem.length + 1))
        dispatch(openQuickItem(false))
        addToCart(infoProduct)

        notification.success({
            message: 'Thêm vào giỏ hàng thành công thành công',
            description: "Hãy vào giỏ hàng để đặt hàng ngay",
            placement: 'topRight',
        });
    }

    const handleSize = (e) => {
        setSize(e.target.name)
    }

    const handleChange = (e) => {
        const newQuantity = parseInt(e.target.value)
        if (!isNaN(newQuantity) && newQuantity > 0) {
            setQuantity(newQuantity);
        }
    }

    const handleSubtract = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handlePlus = () => {
        setQuantity(quantity + 1)
    }
    return (
        <>
            {props.isOpen && (
                <>
                    {infoItem.length > 0 && <Row gutter={[30, 30]} className="quick-wrap active">
                        <Col span={8} className="image-wrap">
                            <div className="image-item">
                                {infoItem.length > 0 && <img src={infoItem[0].images[0]} />}
                            </div>
                        </Col>
                        <Col span={16} className="info-wrap">
                            <h2 className="title">{infoItem[0].title}</h2>
                            <div className="nameCode">
                                <p className="name">Thương hiệu: <span>MIXI</span></p>
                                <p className="code">Mã sản phẩm: <span>{infoItem[0].code}</span></p>
                            </div>
                            <span className="price">{infoItem[0].price}.000đ</span>
                            <p className="size">Kích thước:</p>
                            {infoItem[0].size && <div className="size-wrap">
                                {infoItem[0].size.map((item, index) => (
                                    <button onClick={handleSize} name={item}
                                        className={`size-bt ${size === item ? "active" : ""}`} key={index}>{item}</button>
                                ))}
                            </div>}
                            <div className="promotion">
                                <ul>
                                    <li>Chuyển khoản với đơn hàng từ 500k trở lên (Bắt buộc)</li>
                                    <li>Đồng giá ship toàn quốc 30k</li>
                                    <li>Hỗ trợ trả lời thắc mắc qua fanpage chính thức</li>
                                    <li>Khuyến mãi trực tiếp trên giá sản phẩm</li>
                                    <li>Đổi trả nếu sản phẩm lỗi bất kì</li>
                                </ul>
                            </div>
                            <div className="detail-product__input">
                                <div className="input">
                                    <button className="input-bt subtract" onClick={handleSubtract}>-</button>
                                    <input value={quantity} type="text" onChange={handleChange} />
                                    <button className="input-bt plus" onClick={handlePlus}>+</button>
                                </div>
                                <button onClick={handleAddtoCart}>THÊM VÀO GIỎ HÀNG</button>
                            </div>
                        </Col>
                    </Row>}
                </>
            )}
            <div className={`overlay-quick ${props.isOpen ? "visible" : ""}`}
                onClick={handleClose}
            ></div>
        </>
    )
}
export default QuickItem