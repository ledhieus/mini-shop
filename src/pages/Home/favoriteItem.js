import { addToFavorite, getFavorite } from "../../helper/localStorage";
import { HeartOutlined } from '@ant-design/icons';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { quantityFavorites } from "../../actions/quantityFav";

function FavoriteItem(props) {
    const [favoriteItem, setFavoriteItem] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        const storedFavorite = getFavorite()
        setFavoriteItem(storedFavorite)
    }, [])
    const handleFavorite = (item) => {
        addToFavorite(item)
        const quantityFavorite = getFavorite().length
        dispatch(quantityFavorites(quantityFavorite))

        setFavoriteItem((prevFavorites) => {
            if (prevFavorites.find((fav) => fav.id === item.id)) {
                return prevFavorites.filter((fav) => fav.id !== item.id)
            } else {
                return [...prevFavorites, item]
            }
        })
    }
    const isFavorite = (id) => {
        return favoriteItem.some((fav) => fav.id === id)
    }
    return (
        <>
            <HeartOutlined
                onClick={() => handleFavorite(props.item)}
                className={isFavorite(props.item.id) ? "favorite" : ""}
            />
        </>
    )
}
export default FavoriteItem