import { DatePicker, Select, Input, Form } from 'antd';
import { Button } from "antd"
import Bill from './Bill';
import { useState } from 'react';
import { useSelector } from "react-redux"
const { TextArea } = Input

function Paying() {
    const [open, setOpen] = useState(false);
    const [infoClient, setInfoClient] = useState()
    const totalPrice = useSelector(state => state.updateQuantityCartReducer)
    
    const handleSubmit = (values) => {
        const result = {
            ...values,
            date: values.date.format('DD-MM-YYYY'),
            price: totalPrice.toLocaleString('vi-VN')
        }
        setInfoClient(result);
        setOpen(false)
        setTimeout(() => {
            setOpen(true);
        }, 0)
    };

    const handleDate = (date, dateString) => {
        console.log(date, dateString);
    };
    return (
        <>
            <div className="infoPay">
                <p className="infoPay__title">Thông tin thanh toán</p>
                <Form
                    layout="vertical"
                    onFinish={handleSubmit}
                >
                    <div className="infoPay__check">
                        <Form.Item
                            name="date"
                            label="Ngày nhận check đơn"
                            rules={[{ required: true, message: 'Vui lòng chọn ngày nhận' }]}
                        >

                            <DatePicker className="width" onChange={handleDate} format="DD-MM-YYYY" />
                        </Form.Item>

                        <div className="time">
                            <Form.Item
                                name="time"
                                label="Thời gian nhận check đơn"
                                rules={[{ required: true, message: 'Vui lòng chọn thời gian' }]}
                            >
                                <Select
                                    className="width"
                                    showSearch
                                    placeholder="Chọn thời gian"
                                    options={[
                                        { value: '08h00 - 12h00', label: '08h00 - 12h00' },
                                        { value: '12h00 - 18h00', label: '12h00 - 18h00' },
                                        { value: '18h00 - 00h00', label: '18h00 - 00h00' },
                                    ]}
                                />
                            </Form.Item>
                        </div>
                    </div>
                    <div className="infoPay__user">
                        <div className="user">
                            <Form.Item
                                name="fullName"
                                label="Họ và tên"
                                rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}
                            >
                                <Input placeholder="Họ và tên" className="width" />
                            </Form.Item>
                            <Form.Item
                                name="phoneNumber"
                                label="Số điện thoại"
                                rules={[
                                    { required: true, message: 'Vui lòng nhập số điện thoại' }
                                ]}
                            >
                                <Input placeholder="Số điện thoại" className="width" />
                            </Form.Item>
                        </div>

                        <Form.Item
                            name="address"
                            label="Địa chỉ"
                            rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
                        >
                            <TextArea
                                placeholder="Địa chỉ"
                                autoSize={{ minRows: 3, maxRows: 5 }}
                            />
                        </Form.Item>
                    </div>
                    <div className="infoPay__totalPrice">
                        <p>TỔNG CỘNG</p>
                        <span>{(totalPrice || 0).toLocaleString('vi-VN')}.000₫</span>
                    </div>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="infoPay__button"
                        >
                            Thanh toán
                        </Button>
                    </Form.Item>
                </Form>
                <Bill open={open} infoClient={infoClient} />
            </div>
        </>

    )
}
export default Paying