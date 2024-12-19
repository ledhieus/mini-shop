import { Link } from 'react-router-dom';
import { HeartOutlined, MenuOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { openSideBar } from '../actions/openSideBar';
import { isOpenSearch } from '../actions/openSearch';
function Header(props) {
    const dispatch = useDispatch()
    const items = props.items
    const showDrawer = () => {
        dispatch(openSideBar(true))
    };
    const openSearch=()=> {
        dispatch(isOpenSearch(true))
    }
    const quantityFavorite = useSelector(state => state.quantityFavoritesReducer)
    const quantityCart = useSelector(state => state.quantityCartReducer)

    return (
        <>
            <div className='header-wrap'>
                <header className="header">
                    <div className='header__menu-bar' onClick={showDrawer}><MenuOutlined /></div>
                    <div className="header__logo">
                        <Link to={"/"}><img src="https://theme.hstatic.net/200000881795/1001243022/14/logo.png?v=152" /></Link>
                    </div>
                    <div className="header__menu">
                        <ul>
                            <li>
                                <Link to={`/`}>Trang chủ</Link>
                            </li>
                            <li>
                                <Link to={`/about-us`}>Giới thiệu</Link>
                            </li>
                            <li>
                                <Dropdown menu={{ items }}>
                                    <Link >
                                        <Space>
                                            Sản phẩm
                                            <DownOutlined />
                                        </Space>
                                    </Link>
                                </Dropdown>
                            </li>
                            <li>
                                <Link to={`/contact`}>Liên hệ</Link>
                            </li>
                            <li>
                                <Link to={`/tracking-order`}>Theo dõi đơn hàng</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header__action">
                        <ul>
                            <li>
                                <SearchOutlined onClick={openSearch}/>
                            </li>
                            <li className='none'>
                                <UserOutlined />
                            </li>
                            <li>
                                <Link to={`/wishlist`}>
                                    <Badge count={quantityFavorite} color='#f5222d' showZero>
                                        <HeartOutlined />
                                    </Badge>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/cart`}>
                                    <Badge count={quantityCart} color='#f5222d' showZero >
                                        <ShoppingCartOutlined />
                                    </Badge>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header