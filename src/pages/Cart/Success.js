import { CheckCircleFilled } from '@ant-design/icons';
import "./success.scss"
import { Link } from 'react-router-dom';
function Success(){
    return (
        <>
        <div className='success'>
            <CheckCircleFilled className='icon-success'/>
            <div className='text-success'>Đặt hàng thành công</div>
            <div className='button-success'>
                <Link to={"/"}>
                    <button className='back'>Quay lại</button>
                </Link>
                <Link to={"/tracking-order"}>
                    <button className='detail' >Xem chi tiết đơn hàng</button>
                </Link>
            </div>
        </div>
        
        </>
    )
}
export default Success