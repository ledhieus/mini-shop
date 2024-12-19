import { UserOutlined } from '@ant-design/icons';
import { Drawer, Menu } from 'antd';
import "./side-bar.scss"
import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { getCategory } from '../services/category';
import { openSideBar } from '../actions/openSideBar';
import { useDispatch } from "react-redux"

function SideBar({ open}) {
    const [data, setData] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchApi = async () => {
            const category = await getCategory()
            setData(category)
        }
        fetchApi()
    }, [])

    const children = useMemo(() =>
        data.map((item) => ({
            label: <Link to={`products/${item.slug}`}>{item.title}</Link>,
            key: item.id,
        })),
        [data]
    );

    const items = [
        {
            key: 'sanpham',
            label: 'Sản Phẩm',
            children: children
        }
    ]

    const closeDrawer = () => {
        dispatch(openSideBar(false))
    };
    
    return (
        <>
            <Drawer
                title={<div className='header-drawer'>
                    <div className='header-drawer__avatar'>
                        <div className='wrap'>
                            <UserOutlined />
                        </div>
                    </div>
                    <div className='header-drawer__info'>
                        <p>Tài Khoản</p>
                        <p>Đăng nhập</p>
                    </div>
                </div>}
                placement="left"
                closable={false}
                onClose={closeDrawer}
                open={open}
                key="left"
                className="custom-drawer"
                width={295}
            >
                <ul className='menu'>
                    <li className='menu__item'>
                        <Link to={"/"}>Trang chủ</Link>
                    </li>
                    <li className='menu__item'>
                        <Link to={`/about-us`}>Giới thiệu</Link>
                    </li>
                    <li className='menu__item'>
                        <Menu
                            style={{
                                width: 275,
                            }}
                            mode="vertical"
                            items={items}
                        />
                    </li>
                    <li className='menu__item'>
                        <Link to={`/contact`}>Liên hệ</Link>
                    </li>
                    <li className='menu__item'>
                        <Link to={`/tracking-order`}>Theo dõi đơn hàng</Link>
                    </li>
                </ul>

            </Drawer>
        </>
    )
}
export default SideBar