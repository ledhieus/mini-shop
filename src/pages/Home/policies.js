import { Col } from "antd"
import "../Home/styles/policies.scss"
function Policies(props) {
    return (
        <>
            <Col lg={6} sm={12} xs={24}className="policies-item">
                <div className="policies-item__image">
                    <img src={props.img} />
                </div>
                <div className="policies-item__content">
                    <p>{props.title}</p>
                    <p>{props.content}</p>
                </div>
            </Col>

        </>
    )
}
export default Policies