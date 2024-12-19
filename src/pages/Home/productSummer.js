import { Col, Row } from "antd"
import { getProductSummer } from "../../services/product"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./styles/productSummer.scss"
import Slider from "react-slick"
function ProductSummer() {
    const [dataProduct, setDataProduct] = useState([])
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductSummer()
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
                breakpoint: 772,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    const [showTags, setShowTags] = useState([true, false, false]);
    const handleShowDetail = (index) => {
        console.log(index)
        setShowTags(prevShowTags =>
            prevShowTags.map((show, i) => i === index ? !show : show)
        );
    }
    return (
        <>
            <Row className="product-summer-wrap">
                <Col span={24} className="title-summer">
                    <p>Đồ hè cho bạn</p>
                </Col>
                <Col span={24}>
                {isMobile ? (
                    <Slider {...settings}>
                        {dataProduct.map((item, index) => (
                            <Col md={8} key={item.id} className="product-summer">
                                <div className="product-summer__image">
                                    <img src={item.images[0]} />
                                    <button className="icon" onClick={() => handleShowDetail(index)}>+
                                    </button>
                                    {showTags[index] &&
                                        (
                                            <Link to={`products/${item.slug}`}>
                                                <div className="tag">
                                                    <div className="tag-img">
                                                        <img src={item.images[0]} />
                                                    </div>
                                                    <div className="tag-detail">
                                                        <p>{item.title}</p>
                                                        <p>{item.price}.000đ</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    }
                                </div>
                                <div className="product-summer__content">
                                    <p>Mua ngay</p>
                                    <Link to={`products/${item.slug}`}>Xem chi tiết</Link>
                                </div>
                            </Col>
                        ))}
                    </Slider>
                ) : (
                    <Row gutter={[30, 30]} className="product-wrap">
                        {dataProduct.map((item, index) => (
                            <Col md={8} key={item.id} className="product-summer">
                                <div className="product-summer__image">
                                    <img src={item.images[0]} />
                                    <button className="icon" onClick={() => handleShowDetail(index)}>+
                                    </button>
                                    {showTags[index] &&
                                        (
                                            <Link to={`products/${item.slug}`}>
                                                <div className="tag">
                                                    <div className="tag-img">
                                                        <img src={item.images[0]} />
                                                    </div>
                                                    <div className="tag-detail">
                                                        <p>{item.title}</p>
                                                        <p>{item.price}.000đ</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    }
                                </div>
                                <div className="product-summer__content">
                                    <p>Mua ngay</p>
                                    <Link to={`products/${item.slug}`}>Xem chi tiết</Link>
                                </div>
                            </Col>
                        ))}
                    </Row>
                )}
                </Col>

            </Row>
        </>
    )
}
export default ProductSummer