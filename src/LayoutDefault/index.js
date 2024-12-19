import "./layout.scss"
import { Layout } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { getCategory } from '../services/category';
import { Link, Outlet } from 'react-router-dom';
import SideBar from './side-bar';
import { Content } from 'antd/es/layout/layout';
import Footer from './Footer';
import { useSelector } from "react-redux"
import Header from './Header';
import HeaderHidden from "./HeaderHidden";
import { useDispatch } from "react-redux"
import { isOpenSearch } from "../actions/openSearch";
import QuickItem from "../pages/Home/QuickItem";

function LayoutDefault() {
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const [open, setOpen] = useState(false);
    const openSideBar = useSelector(state => state.openSideBarReducer)

    const openSearch = useSelector(state => state.openSearchReducer)

    const openQuickItem = useSelector(state => state.openQuickItemReducer)
    console.log(openQuickItem)

    const handleOpenSearch = () => {
        dispatch(isOpenSearch(false))
    }

    useEffect(() => {
        setOpen(openSideBar)
    }, [openSideBar])

    useEffect(() => {
        const fetchApi = async () => {
            const category = await getCategory()
            setData(category)
        }
        fetchApi()
    }, [])


    const items = useMemo(() =>
        data.map((item) => ({
            label: <Link to={`collections/${item.slug}`}>{item.title}</Link>,
            key: item.id,
        })),
        [data]
    );


    return (
        <>
            <Layout className="layout-default">
                <QuickItem isOpen = {openQuickItem}/>
                <Header items={items} />
                <HeaderHidden />
                <div
                    className={`overlay ${openSearch ? "visible" : ""}`}
                    onClick={handleOpenSearch}
                ></div>
                <Layout className='container'>
                    <Content >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
            <Layout>
                <Footer />
            </Layout>
            <SideBar open={open} />
        </>
    )
}
export default LayoutDefault