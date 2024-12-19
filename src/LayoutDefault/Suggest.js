import { Link } from "react-router-dom"
import "./suggest.scss"
import { useDispatch } from "react-redux"
import { isOpenSearch, isOpenSuggest } from "../actions/openSearch"
function Suggest(props) {
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(isOpenSearch(false))
        dispatch(isOpenSuggest(false))

    }
    return (
        <>
            <div className={`result-search ${props.suggestResult ? "active" : ""}`}>
                <div className="text-result">Kết quả tìm kiếm</div>
                {/* {props.data.length > 0 ?
                    <>
                        
                    </> :
                    <>
                        <p>Không có kết quả</p>
                    </>} */}
                <div className="suggest-wrap">
                    {props.data.map(item => (
                        <Link to={`products/${item.slug}`} key={item.id} className="item-suggest" onClick={handleClose}>
                            <div className="image">
                                <img src={item.images[0]} />
                            </div>
                            <div className="info">
                                <p>{item.title}</p>
                                <span>{item.price}.000đ</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Suggest