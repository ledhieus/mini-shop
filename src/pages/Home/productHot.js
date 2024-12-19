import { Col, Row } from "antd"
import { ShoppingCartOutlined, EyeOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { getProductFeature } from "../../services/product";
import "./styles/productHot.scss"
import Button from "./button";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import FavoriteItem from "./favoriteItem";
import { useDispatch } from "react-redux"
import {infoQuickItem, openQuickItem} from "../../actions/openQuickItem"

function ProductHot() {
    const dispatch = useDispatch()

    const [dataProduct, setDataProduct] = useState([])
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductFeature()
            setDataProduct(result)
        }
        fetchApi()
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 772);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 415,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    const handleViewQuick =(e)=> {
        e.preventDefault()
        
        dispatch(openQuickItem(true))
        const productId = e.currentTarget.getAttribute("data-id")
        dispatch(infoQuickItem(productId))
    }
    return (
        <>
            <Row>
                <Col span={24}>
                    <div className="title-hot">
                        <h2>HÀNG HOT</h2>
                        <img src="https://theme.hstatic.net/200000881795/1001243022/14/flashsale-hot.png?v=152" />
                    </div>
                    <hr className="line" />
                </Col>
                <Col span={24} className="productHot-list">
                    {isMobile ? (
                        <Slider {...settings}>
                            {dataProduct.map(item => (
                                <div key={item.id} className="product">
                                    <div className="product__item">
                                        <Link to={`products/${item.slug}`} className="product__item--wrapper">
                                            <div className="product__item--image" >
                                                <img src={item.images[0]} className="img" />
                                            </div>
                                            <div className="quick-action">
                                                <div className="icon icon-cart" data-tooltip="Tùy chọn"><ShoppingCartOutlined /></div>
                                                <div className="icon icon-eye" data-tooltip="Xem nhanh" data-id={item.id} onClick={handleViewQuick}><EyeOutlined /></div>
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
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <Row gutter={[30, 30]} className="product-wrap">
                            {dataProduct.map(item => (
                                <Col md={6} sm={8} key={item.id} className="product">
                                    <div className="product__item">
                                        <Link to={`products/${item.slug}`} className="product__item--wrapper">
                                            <div className="product__item--image" >
                                                <img src={item.images[0]} className="img" />
                                            </div>
                                            <div className="quick-action">
                                                <div className="icon icon-cart" data-tooltip="Tùy chọn"><ShoppingCartOutlined /></div>
                                                <div className="icon icon-eye" data-tooltip="Xem nhanh" data-id={item.id} onClick={handleViewQuick}><EyeOutlined /></div>
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
                    )}
                </Col>
                <Col span={24}>
                    <div className="button-wrap">
                        <Button path={"hot-products"} />
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default ProductHot