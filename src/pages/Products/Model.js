import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import "./Model.scss"
import { Link } from 'react-router-dom';

function Model(props) {
    const [open, setOpen] = useState(props.open);

    useEffect(() => {
        setOpen(props.open);
    }, [props.open]);

    const handleOk = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <Modal
            open={open}
            title="Thêm vào giỏ hàng thành công!"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            centered
        >
            {props.product && (
                <>
                    <div className='model-wrap'>
                        <div className='img'>
                            <img src={props.product.img} alt={props.product.productTitle} />
                        </div>
                        <div className='info'>
                            <p className='info__title'>{props.product.productTitle}</p>
                            <div className='wrap'>
                                <p className='info__size'>Size: {props.product.size}</p>
                                <p className='info__quantity'>Số lượng: {props.product.quantity}</p>
                            </div>
                            <p className='info__price'>Giá: {props.product.price}.000 VND</p>
                        </div>
                    </div>
                </>
            )}
            <div className='modal-button'>
                <button onClick={handleCancel} className='button button__cancel'>Đóng</button>
                <Link to={`/cart`}>
                    <button className='button button__pay'>
                        Thanh toán ngay
                    </button>
                </Link>
            </div>
        </Modal>
    );
}

export default Model;
