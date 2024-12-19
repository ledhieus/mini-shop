import "./styles/button.scss"
function Button(props){
    const path = props
    return (
        <>
            <a href={`collections/${path.path}`} className="view-all">Xem tất cả &gt;</a>
        </>
    )
}
export default Button