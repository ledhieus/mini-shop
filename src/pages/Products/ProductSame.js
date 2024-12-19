import { useEffect, useState } from "react"
import { getProductByIdCategory } from "../../services/product"
import ProductItem from "../Collection/ProductItem"
import { Col, Row } from "antd"

function ProductSame(props) {
    const [dataProduct, setDataProduct] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductByIdCategory(props.id, 4)
            setDataProduct(result)
        }
        fetchApi()
    }, [])
    return (
        <>
            <h3></h3>
            <Row gutter={[30, 30]} className="collection-wrap">
                <Col span={24} className="title-feature">
                    Sản phẩm tương tự
                </Col>
                {dataProduct.map(item => (
                    <Col md={6} sm={8} key={item.id} className="product">
                        <ProductItem item={item} />
                    </Col>
                ))}
            </Row>

        </>
    )
}
export default ProductSame