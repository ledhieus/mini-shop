import { Col, Row } from "antd"
import { StarOutlined } from '@ant-design/icons';
import "./styles/feedback.scss"
import FeedbackItem from "./FeedbackItem";
function Feedback() {
    return (
        <>
            <Row className="feedback-wrap" >
                <Col span={24} className="title-feedback">
                    <p>Khách hàng đã nói gì</p>
                </Col>
                <Col span={24}>
                    <Row gutter={[35, 35]}>
                        <Col span={8} className="feedback--item">
                            <FeedbackItem
                                name="Trần Linh"
                                cmt="Sản phẩm chất lượng, chất vải mềm mát mặc vào rất thoải mái và dễ hoạt động, giá cả hợp lý, giao hàng nhanh"
                                image="https://theme.hstatic.net/200000881795/1001243022/14/cus_review_avatar_1_compact.jpg?v=152"
                                imageProduct="https://product.hstatic.net/200000881795/product/ao-khoac-mixi-8-scaled_8bb77d5894534d6ab3c5961643f1547a_medium.jpg"
                                titleProduct="Áo khoác Mixi đen"
                            />
                        </Col>
                        <Col span={8} className="feedback--item">
                            <FeedbackItem
                                name="Nguyên An"
                                cmt="Sản phẩm đẹp, chất liệu tốt, mặc đúng size chuẩn, nhân viên phục vụ rất tận tình và chu đáo. 10 điểm!"
                                image="https://theme.hstatic.net/200000881795/1001243022/14/cus_review_avatar_2_compact.jpg?v=152"
                                imageProduct="https://product.hstatic.net/200000881795/product/ao-ba-lo-hi-anh-em-scaled_2a1e1143f0c94ee18ebbd2bca25551fc_medium.jpg"
                                titleProduct="Áo 3 Lỗ Mixi – BL02"
                            />
                        </Col>

                        <Col span={8} className="feedback--item">
                            <FeedbackItem
                                name="Trần Tuấn"
                                cmt="Sản phẩm chất lượng, chất vải mềm mát mặc vào rất thoải mái và dễ hoạt động, giá cả hợp lý, giao hàng nhanh"
                                image="https://theme.hstatic.net/200000881795/1001243022/14/cus_review_avatar_3_compact.jpg?v=152"
                                imageProduct="//product.hstatic.net/200000881795/product/1_9ddebb3a5f5b452399be563b0dea4c54_medium.png"
                                titleProduct="Bộ Ghép Hình Mixi – Mixi Block SS9"
                            />
                        </Col>

                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default Feedback