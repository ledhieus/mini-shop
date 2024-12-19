import { Col, Row } from "antd"
import { useEffect, useState } from "react"
import { getProductByIdCategory } from "../../services/product"
import { HeartOutlined, ShoppingCartOutlined, EyeOutlined } from '@ant-design/icons';
import "./styles/collection.scss"
import { Link } from "react-router-dom";
import FavoriteItem from "./favoriteItem";
import { infoQuickItem, openQuickItem } from "../../actions/openQuickItem";
import { useDispatch } from "react-redux"
function Collection() {
    const dispatch = useDispatch()
    
    const [data, setData] = useState([])
    const [categoryId, setCategoryId] = useState(4)
    useEffect(() => {
        const fetchApi = async () => {
            if (categoryId) {
                const result = await getProductByIdCategory(categoryId, 4)
                setData(result)
            }
        }
        fetchApi()
    }, [categoryId])
    const handleGetData = (id) => {
        setCategoryId(id)
    }
    const handleViewQuick =(e)=> {
        e.preventDefault()
        
        dispatch(openQuickItem(true))
        const productId = e.currentTarget.getAttribute("data-id")
        dispatch(infoQuickItem(productId))
    }
    return (
        <>
            <Row className="collection-wrap">
                <Col span={24} className="title-collection">
                    <p>Bộ sưu tập</p>
                </Col>
                <Col span={24}>
                    <ul className="collection-category">
                        <li onClick={() => handleGetData(4)} className={categoryId === 4 ? "active" : ""}>
                            Lego
                        </li>
                        <li onClick={() => handleGetData(1)} className={categoryId === 1 ? "active" : ""}>
                            Đồ xuân hè
                        </li>
                        <li onClick={() => handleGetData(2)} className={categoryId === 2 ? "active" : ""}>
                            Đồ thu đông
                        </li>
                    </ul>
                </Col>
                <Row gutter={[30, 30]}>
                    {data.map(item => (
                        <Col md={6} sm={8} key={item.id} className="product">
                            <div className="product__item">
                                <Link to={`products/${item.slug}`} className="product__item--wrapper">
                                    <div className="product__item--image" >
                                        <img src={item.images[0]} className="img" />
                                    </div>
                                    <div className="quick-action">
                                        <div className="icon icon-cart" data-tooltip="Tùy chọn"><ShoppingCartOutlined /></div>
                                        <div className="icon icon-eye" data-tooltip="Xem nhanh"  data-id={item.id} onClick={handleViewQuick}><EyeOutlined /></div>
                                    </div>
                                </Link>
                                <div className="product__item--content">
                                    <div className="banner">
                                        <p>MIXI</p>
                                        <FavoriteItem item = {item}/>
                                    </div>
                                    <p className="title">{item.title}</p>
                                    <p className="price">{item.price}.000₫</p>
                                    <img src="https://theme.hstatic.net/200000881795/1001243022/14/promo_tag_2.png?v=152" />
                                </div>

                            </div>
                        </Col>
                    ))}
                </Row>
            </Row>
        </>
    )
}
export default Collection