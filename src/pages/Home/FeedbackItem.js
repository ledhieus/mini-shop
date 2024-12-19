import { Col, Row } from "antd"
import { StarOutlined } from '@ant-design/icons';

function FeedbackItem(props) {
    return (
        <>
            <div className="feedback-container">
                <Row className="feedback--item__client">
                    <Col span={16} className="feedback--detail">
                        <p className="feedback--detail__name">{props.name}</p>
                        <div className="feedback--detail__rate">
                            <StarOutlined className="icon" />
                            <StarOutlined className="icon" />
                            <StarOutlined className="icon" />
                            <StarOutlined className="icon" />
                            <StarOutlined className="icon" />
                        </div>
                        <p className="feedback--detail__cmt">{props.cmt}</p>
                    </Col>
                    <Col span={8} className="client--image">
                        <img src={props.image} />
                    </Col>
                </Row>
                <hr />
                <Row className="feedback--item__product">
                    <Col span={4} className="product--image">
                        <img src={props.imageProduct} />
                    </Col>
                    <Col span={20} className="product--title">
                        <p>{props.titleProduct}</p>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default FeedbackItem