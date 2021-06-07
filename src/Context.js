import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {

    const [allPhotos, setAllPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    const toggleFavorite = (id) => {
        console.log("Favorited id",id)
        setAllPhotos(prevPhotos => {
            const updatedPhotos = prevPhotos.map(curPhoto =>{
                if(curPhoto.id === id){
                    return{
                        ...curPhoto,
                        isFavorite: !curPhoto.isFavorite
                    }
                }else{
                    return curPhoto
                }
            })
            return updatedPhotos
        })
        // console.log(allPhotos)
    }

    const addCartItem = (img) => {
        // console.log(img)
        setCartItems(prevCartItems => [...prevCartItems,img])
        console.log(cartItems)
    }

    const removeCartItem = (img) => {
        // console.log("remove clicked for ", img.id)
        setCartItems(prevCartItems => {
            const updatedCartItems = prevCartItems.filter(item => item.id != img.id)
            return updatedCartItems
        })
    }

    // console.log("cart State", cartItems)

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])
    
    return (
        <Context.Provider value={{allPhotos, cartItems, toggleFavorite, addCartItem, removeCartItem}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}