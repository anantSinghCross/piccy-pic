import PropTypes from "prop-types"
import React, {useState, useContext} from "react"
import {Context} from "../Context"
import useHover from "../hooks/useHover"

function Image({className, img}) {

    const {allPhotos, cartItems, toggleFavorite, addCartItem, removeCartItem} = useContext(Context)
    // const [hovered, setHovered] = useState(false)
    const {hovered, ref} = useHover()

    // console.log("img.isFavorite",isFavorited)

    let heartIcon = <></>
    let cartIcon = <></>

    const handleHeartClick = () => {
        toggleFavorite(img.id)
    }
    
    let showCartIcon = () => {
        const currentPhoto = cartItems.find(item => item.id == img.id)
        if(currentPhoto){
            // console.log(currentPhoto)
            return cartIcon = <i onClick={() => removeCartItem(img)} className="ri-shopping-cart-fill cart"></i>
        }else if(hovered){
            // console.log(currentPhoto)
            return cartIcon = <i onClick={() => addCartItem(img)} className="ri-add-circle-line cart"></i>
        }
    }

    let showHeartIcon = () => {
        if(img.isFavorite === true){
            return heartIcon = <i onClick={handleHeartClick} className="ri-heart-fill favorite"></i>
        }else if(hovered){
            return heartIcon = <i onClick={handleHeartClick} className="ri-heart-line favorite"></i>
        }
    }
    
    return (
        <div
            ref={ref}
            className={`${className} image-container`}
        >
            <img src={img.url} className="image-grid"/>
            {showHeartIcon()}
            {showCartIcon()}
        </div>
    )
}

Image.prototypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.number,
        url: PropTypes.string,
        isFavorite: PropTypes.bool
    })
}

export default Image
