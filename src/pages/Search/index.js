import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchItemBySlug } from "../../services/product";
import ProductItem from "../Collection/ProductItem";
import { Col, Row } from "antd";

function Search() {
    const location = useLocation();
    const [data, setData] = useState([])
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");
    console.log(query)
    useEffect(() => {
        const fetchApi = async () => {
            const result = await searchItemBySlug(query)
            setData(result)
        }
        fetchApi()
    }, [query])

    
    return (
        <>
            <h2>Kết quả phù hợp</h2>
            <Row gutter={[30, 30]} className="collection-wrap">
                {data.map(item => (
                    <Col md={6} sm={8} key={item.id} className="product">
                        <ProductItem item={item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}
export default Search