import { Col, Row } from "antd"
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import "./contact.scss"
function Contact(){
    return (
        <>
            <Row gutter={[30, 30]} className="contact-wrap">
                <Col span={12}>
                    <div className="contact">
                        <h1>MixiShop Liên Hệ</h1>
                        <p><EnvironmentOutlined className="icon" />Địa chỉ: Yên Lãng, Hà Nội</p>
                        <p><PhoneOutlined className="icon" />Số điện thoại: 0822221992</p>
                        <p><MailOutlined className="icon" />Email: Mixiishop@gmail.com</p>
                        <hr/>
                        <h3 className="contat-us">Liên hệ với chúng tôi</h3>
                        <div className="form-contact">
                            <input type="text" placeholder="Họ và tên*"/>
                            <input type="text" placeholder="Email*"/>
                            <input type="text" placeholder="Số điện thoại*"/>
                            <textarea rows={5} placeholder="Nhập nội dung*"/>
                            <button>Gửi liên hệ của bạn</button>
                        </div>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="map">
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.538561069379!2d105.8138255758721!3d21.01112628838281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab62a5618c2d%3A0xb861a5fd512bbdb!2zUC5Zw6puIEzDo25nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1716129319216!5m2!1svi!2s" />
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default Contact