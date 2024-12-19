import { Col, Row } from "antd"
import "./styles/category.scss"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getCategory } from "../../services/category"
import Slider from 'react-slick'

function Category() {
    const [dataCategory, setdataCategory] = useState([])
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const fetchApi = async () => {
            const categoryList = await getCategory()
            setdataCategory(categoryList)
        }
        fetchApi()
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1026);
        };

        handleResize(); // Check initially
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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
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
    return (
        <>
            <Row className="category-container">
                <Col span={24} className="title">
                    <h3 >ĐỒ HIỆU MIXI</h3>
                </Col>
                <Col span={24} className="category-list">
                    {isMobile ? (
                        <Slider {...settings}>
                            {dataCategory.map((item) => (
                                <div key={item.id} className="category">
                                    <Link to={`products/${item.slug}`} >
                                        <div className="category__item">
                                            <div className="category__item--image">
                                                <img src={item.image} />
                                            </div>
                                            <div className="category__item--content">
                                                <p>{item.title}</p>
                                                <p>{item.stock} sản phẩm</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </Slider>

                    ) : (
                        <Row className="category-wrap" gutter={[12, 12]}>
                            {dataCategory.map((item) => (
                                <Col key={item.id} span={4} className="category">
                                    <Link to={`products/${item.slug}`}>
                                        <div className="category__item">
                                            <div className="category__item--image"><img src={item.image} alt={item.title} /></div>
                                            <div className="category__item--content">
                                                <p>{item.title}</p>
                                                <p>{item.stock} sản phẩm</p>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    )}

                </Col>

            </Row>

        </>
    )
}
export default Category