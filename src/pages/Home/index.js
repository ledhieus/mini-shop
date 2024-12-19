import { Col, Row } from "antd"
import "../Home/styles/home.scss"
import Policies from "./policies"
import Category from "./category"
import ProductHot from "./productHot"
import ProductSummer from "./productSummer"
import Collection from "./collection"
import Feedback from "./Feedback"

function Home() {
    
    return (
        <>
            <Row gutter={0}>
                <Col span={24}>
                    <img src="https://theme.hstatic.net/200000881795/1001243022/14/slider_1.jpg?v=152" className="banner__image" />
                </Col>
            </Row>
            <Row className="policies-wrap">
                <Policies
                    img="https://theme.hstatic.net/200000881795/1001243022/14/policies_icon_1.png?v=152"
                    title="Vẫn chuyển toàn quốc"
                    content="Vẫn chuyển nhanh chóng"
                />
                <Policies
                    img="https://theme.hstatic.net/200000881795/1001243022/14/policies_icon_2.png?v=152"
                    title="Ưu đãi hấp dẫn"
                    content="Nhiều ưu đãi khuyến mãi hot"
                />
                <Policies
                    img="https://theme.hstatic.net/200000881795/1001243022/14/policies_icon_3.png?v=152"
                    title="Bảo đảm chất lượng"
                    content="Sản phẩm đã được kiểm định"
                />
                <Policies
                    img="https://theme.hstatic.net/200000881795/1001243022/14/policies_icon_4.png?v=152"
                    title="Hotline: 0822221992"
                    content="Vui lòng gọi hotline để hỗ trợ"
                />
            </Row>

            <Category/>

            <ProductHot />
            
            <ProductSummer/>

            <Row gutter={0}>
                <Col span={24}>
                    <img src="https://theme.hstatic.net/200000881795/1001243022/14/imgtext_1_img.jpg?v=152" className="banner__image" />
                </Col>
            </Row>

            <Collection/>

            <Row gutter={0}>
                <Col span={24}>
                    <img src="https://theme.hstatic.net/200000881795/1001243022/14/imgtext_2_img.jpg?v=152" className="banner__image" />
                </Col>
            </Row>

            <Feedback/>

        </>
    )
}
export default Home