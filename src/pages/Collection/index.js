import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCategoryBySlug } from "../../services/category"
import { getProductByIdCategory, getProductFeature } from "../../services/product"
import { Col, Row } from "antd"
import ProductItem from "./ProductItem";
import Slider from "react-slick";
import "./styleCollection.scss"
function Collection() {
    const slugCategory = useParams()
    const [dataCollection, setDataCollection] = useState([])
    const [dataProduct, setDataProduct] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const category = await getCategoryBySlug(slugCategory.slug)

            const idCategory = category[0].id
            const product = await getProductByIdCategory(idCategory, 16)

            setDataCollection(product)
        }
        fetchApi()
    }, [slugCategory])

    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductFeature()
            setDataProduct(result)
        }
        fetchApi()
    }, [])

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 415,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };
    return (
        <>
            {dataCollection.length > 0 ?
                <Row gutter={[30, 30]} className="collection-wrap">
                    {dataCollection.map(item => (
                        <Col md={6} sm={8} key={item.id} className="product">
                            <ProductItem item={item} />
                        </Col>
                    ))}
                </Row>
                :
                <><p className="no-product">Chưa có sản phẩm</p></>}


            <Row gutter={[30, 30]} className="collection-wrap">
                <Col span={24} className="title-feature">
                    Sản phẩm nổi bật
                </Col>
                <Col span={24} className="productHot-list">
                    <Slider {...settings}>
                        {dataProduct.map(item => (
                            <div key={item.id} className="product">
                                <ProductItem item={item} />
                            </div>
                        ))}
                    </Slider>
                </Col>
            </Row>


        </>
    )
}

export default Collection