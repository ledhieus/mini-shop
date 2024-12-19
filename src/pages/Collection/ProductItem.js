// ProductItem.js
import {  ShoppingCartOutlined, EyeOutlined } from '@ant-design/icons';
import FavoriteItem from '../Home/favoriteItem';
import { infoQuickItem, openQuickItem } from '../../actions/openQuickItem';
import { useDispatch } from "react-redux"
function ProductItem({ item }) {
    const dispatch = useDispatch()
    const handleViewQuick =(e)=> {
        e.preventDefault()
        
        dispatch(openQuickItem(true))
        const productId = e.currentTarget.getAttribute("data-id")
        dispatch(infoQuickItem(productId))
    }
    return (
        <div className="product__item">
            <a href={`/products/${item.slug}`} className="product__item--wrapper">
                <div className="product__item--image" >
                    <img src={item.images[0]} className="img" />
                </div>
                <div className="quick-action">
                    <div className="icon icon-cart" data-tooltip="Tùy chọn"><ShoppingCartOutlined /></div>
                    <div className="icon icon-eye" data-tooltip="Xem nhanh"  data-id={item.id} onClick={handleViewQuick}><EyeOutlined /></div>
                </div>
            </a>
            <div className="product__item--content">
                <div className="banner">
                    <p>MIXI</p>
                    <FavoriteItem item = {item}/>
                </div>
                <p className="title">{item.title}</p>
                <p className="price">{item.price}.000₫</p>
                <img src="https://theme.hstatic.net/200000881795/1001243022/14/promo_tag_2.png?v=152" />
            </div>

        </div>
    );
}

export default ProductItem;
