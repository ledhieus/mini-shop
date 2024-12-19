import { Col, Row } from "antd"
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import "./footer.scss"
import { Link } from "react-router-dom"
function Footer() {
    return (
        <>
            <div className="footer layout-defaul">
                <Row>
                    <Col span={6} className="footer-content">
                        <div className="wrap-icon">
                            <EnvironmentOutlined className="icon" />
                            <p>Địa chỉ: Yên Lãng, Hà Nội</p>
                        </div>
                        <div className="wrap-icon">
                            <PhoneOutlined className="icon" />
                            <p>Số điện thoại: 0822221992</p>
                        </div>
                        <div className="wrap-icon">
                            <MailOutlined className="icon" />
                            <p>Email: Mixiishop@gmail.com</p>
                        </div>
                    </Col>
                    <Col span={6} className="footer-content">
                        <p className="title">CHÍNH SÁCH</p>
                        <div className="list-menu">
                            <Link>Trang chủ</Link>
                            <Link>Giới thiệu</Link>
                            <Link>Sản phẩm</Link>
                            <Link>Liên hệ</Link>
                            <Link>Kiểm tra đơn hàng</Link>
                        </div>
                    </Col>
                    <Col span={6} className="footer-content">
                        <p className="title">Tìm kiếm</p>
                        <p>Chính sách bảo mật</p>
                        <p>Điều khoản dịch vụ</p>
                        <p>Hướng dẫn kiểm tra đơn hàng</p>

                    </Col>

                    <Col span={6} className="footer-content">
                        <p className="title">ĐĂNG KÝ NHẬN TIN</p>
                        <input type="text" />
                        <button>Đăng ký</button>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default Footer