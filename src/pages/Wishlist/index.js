import { Col, Row } from "antd"
import { getFavorite } from "../../helper/localStorage"
import ProductItem from "../Collection/ProductItem"
import "./wishlist.scss"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

function Wishlist() {
    const [wishlistItem, setWishlistItem] = useState([])
    const quantityFavorite = useSelector(state => state.quantityFavoritesReducer)
    useEffect(()=> {
        const wishlist = getFavorite()
        setWishlistItem(wishlist)
    },[quantityFavorite] )
    
    return (
        <>
            <Row gutter={[30, 30]} className="productWishlist-wrap">
                <Col span={24}>
                    <p>Wishlist</p>
                </Col>
                {wishlistItem.length === 0 ? <> Bạn chưa thêm sản phẩm yêu thích
                </> :  (
                    wishlistItem.map(item => (
                        <Col span={6} key={item.id}>
                            <ProductItem item={item} />
                        </Col>
                    ))
                )}
            </Row>
        </>
    )
}
export default Wishlist