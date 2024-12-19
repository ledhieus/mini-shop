import { useEffect, useState } from "react"
import { orderByPhone } from "../../services/order"
import "./trackingOrder.scss"
function TrackingOrder() {
    const [valueInput, setValueInput] = useState("")
    const [phone, setPhone] = useState("")
    const [order, setOrder] = useState("")
    const [isSearched, setIsSearched] = useState(false);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await orderByPhone(phone)
            setOrder(result)
        }
        fetchApi()
    }, [phone])
    const handleChange = (e) => {
        setValueInput(e.target.value)
    }
    const handleClick = () => {
        console.log("OK")
        setPhone(valueInput)
        setIsSearched(true); 
    }
    return (
        <>
            <h3 className="tracking-text">Kiểm tra đơn hàng</h3>
            <div className="searching">
                <input type="text" placeholder="Nhập số điện thoại" onChange={handleChange} value={valueInput} />
                <button onClick={handleClick}>Kiểm tra</button>
            </div>
            { isSearched && (
                order.length > 0 ? <table className="table-order">
                    <thead>
                        <tr>
                            <th >Tên Sản phẩm</th>
                            <th >Mã đơn hàng</th>
                            <th >Trạng thái</th>
                            <th >Số lượng</th>
                            <th >Cỡ</th>
                            <th >Giá tiền</th>
                            <th >Địa chỉ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order[0].item.map((itemOrder, index) => (
                            <tr key={index}>
                                <td >{itemOrder.productTitle}</td>
                                <td >{order[0].id}</td>
                                <td >Đang xử lý</td>
                                <td >{itemOrder.quantity}</td>
                                <td >{itemOrder.size}</td>
                                <td >{itemOrder.price*itemOrder.quantity}.000đ</td>
                                <td >{order[0].address}</td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table> : <><div className="notExist">Đơn hàng không tồn tại</div></>
            )}
        </>
    )
}
export default TrackingOrder