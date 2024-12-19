import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { Link } from 'react-router-dom';
import { deleteCart, getCart } from '../../helper/localStorage';
import "./bill.scss"
import { order } from '../../services/order';
import { useDispatch } from 'react-redux';
import { quantityCart } from '../../actions/quantityCart';

function Bill(props) {
    const dispatch = useDispatch()
    const token= localStorage.getItem('user_token')
    const [open, setOpen] = useState(props.open);
    const listCartItem = getCart()
    useEffect(() => {
        setOpen(props.open);
    }, [props.open]);

    const handleOk = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };
    const handleConfirm=()=> {
        const orderUser = {
            ...props.infoClient,
            user_token:token ,
            item: listCartItem
        }
        order(orderUser)
        dispatch(quantityCart(0))
        deleteCart()
    }
    return (
        <Modal
            open={open}
            title="Chi tiết đơn hàng"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            centered
        >
            {props.infoClient && (
                <>
                    <div className='bill'>
                        {listCartItem.map(item => (
                            <div key={item.productId} className='bill__listItem'>
                                <div className='img-item'>
                                    <img src={item.img} />
                                </div>
                                <div className='info-item'>
                                    <p>{item.productTitle}</p>
                                    <div className='size-quantity'>
                                        <span>{item.size}</span>
                                        <span>Sl: {item.quantity}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className='bill__infoClient'>
                            <div>
                                <span>Tổng tiền:</span> {props.infoClient.price}.000₫
                            </div>
                            <div>
                                <span>Ngày nhận check hàng:</span> {props.infoClient.date}

                            </div>
                            <div>
                                <span>Thời gian nhận check hàng:</span> {props.infoClient.time}
                            </div>
                            <div>
                                <span>Người nhận:</span> {props.infoClient.fullName}
                            </div>
                            <div>
                                <span>Số điện thoại:</span> {props.infoClient.phoneNumber}
                            </div>
                            <div>
                                <span>Địa chỉ:</span> {props.infoClient.address}
                            </div>
                        </div>
                    </div>
                </>
            )}
            <div className='modal-button'>
                <button onClick={handleCancel} className='button button__cancel'>Đóng</button>
                <Link to={`success`}>
                    <button className='button button__pay' onClick={handleConfirm}>
                        Xác nhận
                    </button>
                </Link>
            </div>
        </Modal>
    )
}
export default Bill