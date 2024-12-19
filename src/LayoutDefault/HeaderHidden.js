import { Link } from 'react-router-dom';
import { HeartOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Badge } from 'antd';
import { useSelector } from "react-redux"
import "./headerHidden.scss"
import { convertToSlug } from '../helper/convertSlug';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { isOpenSearch, isOpenSuggest } from "../actions/openSearch";
import { useEffect, useState } from 'react';
import Suggest from './Suggest';
import { searchItemBySlug } from '../services/product';

function HeaderHidden() {
    const dispatch = useDispatch()

    const quantityFavorite = useSelector(state => state.quantityFavoritesReducer)
    const quantityCart = useSelector(state => state.quantityCartReducer)

    const openSearch = useSelector(state => state.openSearchReducer)

    const [suggestResult, setSuggestResult] = useState(false)
    const [itemSuggest, setItemSuggest] = useState([])

    const closeSuggest = useSelector(state => state.openSuggestReducer)
    
    useEffect(()=> {
        if(closeSuggest){
            setSuggestResult(!closeSuggest)
        }else{
            setSuggestResult(closeSuggest)
        }
    }, [closeSuggest])
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const keyword = e.target.value.trim()
        const textConvertSlug = convertToSlug(keyword)
           
        if(!keyword){
            setItemSuggest([])
            setSuggestResult(false)
            return;
        }

        dispatch(isOpenSuggest(true))
        setSuggestResult(true)

        const fetchApi = async () => {
            const result = await searchItemBySlug(textConvertSlug)
            setItemSuggest(result)
        }
        fetchApi()
    }
    const handleCloseSuggest = () => {
        setSuggestResult(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = e.target[0].value
        const textConvertSlug = convertToSlug(text)
        navigate(`/search?query=${textConvertSlug}`);
        dispatch(isOpenSearch(false))
    }
    return (
        <>

            <div className={`header-search ${openSearch ? "visible" : ""}`}>
                <header className="header">
                    <div className="header__logo">
                        <Link to={"/"}><img src="https://theme.hstatic.net/200000881795/1001243022/14/logo.png?v=152" /></Link>
                    </div>
                    <form className="search-input" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Áo khoác, bình nước...."
                            name='search'
                            onChange={handleInputChange}
                        />
                        <button type='submit'><SearchOutlined /></button>
                    </form>
                    <div className="header__action">
                        <ul>
                            <li>
                                <SearchOutlined />
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
                <Suggest suggestResult={suggestResult} data = {itemSuggest}/>
            <div className={`overlay-search ${suggestResult ? "visible" : ""}`}
                onClick={handleCloseSuggest}
            ></div>
            </div>
            
        </>
    )
}
export default HeaderHidden