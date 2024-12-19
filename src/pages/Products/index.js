import { Col, Row } from "antd"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductBySlug } from "../../services/product"
import { GiftOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import "./product.scss"
import Image from "./Image";
import ProductSame from "./ProductSame";
import { addToCart, getCart } from "../../helper/localStorage";
import Model from "./Model";
import { useDispatch } from "react-redux"
import { quantityCart, updateQuantityCart } from "../../actions/quantityCart";
import { sumPrice } from "../../helper/feature";

function Product() {
    const slugProduct = useParams()
    const [dataProduct, setDataProduct] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [size, setSize] = useState("M")
    const [open, setOpen] = useState(false);
    const [infoProduct, setInfoProduct] = useState();
    const dispatch = useDispatch()
    const cartItem = getCart().length

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductBySlug(slugProduct.slugProduct)
            setDataProduct(result)
        }
        fetchApi()
    }, [])
    const items = [
        {
            key: '1',
            label: 'Mô tả sản phẩm',
            children: dataProduct[0]?.description ? (
                <>{dataProduct[0].description}</>
            ) : (
                <p>Nội dung đang được cập nhật</p>
            ),
        },
        {
            key: '2',
            label: 'Chính sách giao hàng',
            children: <p>Nội dung đang được cập nhật</p>
        },
        {
            key: '3',
            label: 'Chính sách đổi trả',
            children: <>
                <h3>1. Điều kiện đổi trả</h3>
                <ul>
                    <p>Quý Khách hàng cần kiểm tra tình trạng hàng hóa và có thể đổi hàng/ trả lại hàng ngay tại thời điểm giao/nhận hàng trong những trường hợp sau:</p>
                    <li>Hàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc như trên website tại thời điểm đặt hàng.</li>
                    <li>Không đủ số lượng, không đủ bộ như trong đơn hàng.</li>
                    <li>Tình trạng bên ngoài bị ảnh hưởng như rách bao bì, bong tróc, bể vỡ…</li>
                    <p>Khách hàng có trách nhiệm trình giấy tờ liên quan chứng minh sự thiếu sót trên để hoàn thành việc hoàn trả/đổi trả hàng hóa. </p>
                </ul>
                <h3>2. Quy định về thời gian thông báo và gửi sản phẩm đổi trả</h3>
                <ul>
                    <li>Thời gian thông báo đổi trả: trong vòng 48h kể từ khi nhận sản phẩm đối với trường hợp sản phẩm thiếu phụ kiện, quà tặng hoặc bể vỡ.</li>
                    <li>Thời gian gửi chuyển trả sản phẩm: trong vòng 14 ngày kể từ khi nhận sản phẩm.</li>
                    <li>Địa điểm đổi trả sản phẩm: Khách hàng có thể mang hàng trực tiếp đến văn phòng/ cửa hàng của chúng tôi hoặc chuyển qua đường bưu điện.</li>
                </ul>
                <p>Trong trường hợp Quý Khách hàng có ý kiến đóng góp/khiếu nại liên quan đến chất lượng sản phẩm, Quý Khách hàng vui lòng liên hệ đường dây chăm sóc khách hàng của chúng tôi.</p>
            </>
        },
    ];

    const handleSubtract = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    const handlePlus = () => {
        setQuantity(quantity + 1)
    }
    const handleChange = (e) => {
        const newQuantity = parseInt(e.target.value)
        if (!isNaN(newQuantity) && newQuantity > 0) {
            setQuantity(newQuantity);
        }
    }
    const handleSize = (e) => {
        setSize(e.target.name)
    }
    const handleAddtoCart = () => {
        const infoProduct = {
            productId: dataProduct[0].id,
            productTitle: dataProduct[0].title,
            price: dataProduct[0].price * quantity,
            img: dataProduct[0].images[0],
            size: size,
            quantity: quantity
        }
        dispatch(quantityCart(cartItem+1))

        addToCart(infoProduct)
        setInfoProduct(infoProduct)

        setOpen(false)
        setTimeout(() => {
            setOpen(true);
        }, 0)

        const listCartItem = getCart()

        dispatch(updateQuantityCart(sumPrice(listCartItem)))
        console.log(listCartItem)
    }
    return (
        <>
            <div className="main-product-wrap">
                {dataProduct[0] && <Row>
                    <Col span={10} className="image-product">
                        <Image />
                    </Col>
                    <Col span={14} className="detail-product">
                        <h2 className="detail-product__title">{dataProduct[0].title}</h2>
                        <div className="detail-product__brand">
                            <p>Thương hiệu: <span>Mixi</span></p>
                            <p>Mã sản phẩm: <span>{dataProduct[0].code}</span></p>
                        </div>
                        <p className="detail-product__price">{dataProduct[0].price}.000₫</p>
                        <div className="detail-product__discount">
                            <ul>
                                <li>Chuyển khoản với đơn hàng từ 500k trở lên (Bắt buộc)</li>
                                <li>Đồng giá ship toàn quốc 30k</li>
                                <li>Hỗ trợ trả lời thắc mắc qua fanpage chính thức</li>
                                <li>Khuyến mãi trực tiếp trên giá sản phẩm</li>
                                <li>Đổi trả nếu sản phẩm lỗi bất kì</li>
                            </ul>
                            <div className="sign">
                                <GiftOutlined />
                                <span>KHUYẾN MÃI - ƯU ĐÃI</span>
                            </div>
                        </div>
                        <div className="detail-product__size">
                            {dataProduct[0].size &&
                                <>
                                    <p>Kích thước: <span>{size}</span></p>
                                    <div>
                                        {dataProduct[0].size.map((item, index) => (
                                            <button key={index}
                                                id={item} name={item}
                                                onClick={handleSize}
                                                className={size === item ? "active" : ""}
                                            >{item}</button>
                                        ))}
                                    </div>
                                </>
                            }
                        </div>
                        <div className="detail-product__input">
                            <div className="input">
                                <button className="input-bt subtract" onClick={handleSubtract}>-</button>
                                <input value={quantity} type="text" onChange={handleChange} />
                                <button className="input-bt plus" onClick={handlePlus}>+</button>
                            </div>
                            <button onClick={handleAddtoCart}>THÊM VÀO GIỎ HÀNG</button>

                        </div>
                        <button className="detail-product__buynow">MUA NGAY</button>

                        <p className="detail-product__hotline">Hotline: <span>0822221992</span> (7:30 - 22:00)</p>
                        <div className="detail-product__policy">
                            <div className="item">
                                <img src="https://theme.hstatic.net/200000881795/1001243022/14/policy_product_image_1.png?v=152" />
                                <span>Giao hàng toàn quốc</span>
                            </div>
                            <div className="item">
                                <img src="https://theme.hstatic.net/200000881795/1001243022/14/policy_product_image_2.png?v=152" />
                                <span>Ưu đãi hấp dẫn</span>
                            </div>
                            <div className="item">
                                <img src="https://theme.hstatic.net/200000881795/1001243022/14/policy_product_image_3.png?v=152" />
                                <span>Sản phẩm chính hãng</span>
                            </div>
                        </div>
                        <Collapse items={items} bordered={false} defaultActiveKey={['1']} size={"large"} />
                    </Col>
                </Row>}
            </div>
            {dataProduct.length > 0 && <ProductSame id={dataProduct[0].categoryId} />}

            <Model open={open} product={infoProduct}/>
        </>
    )
}

export default Product