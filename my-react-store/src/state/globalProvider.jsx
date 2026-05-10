import { useState } from "react";
import GlobalContext from "./globalContext";

function GlobalProvider(props){
    const [user, setUser] = useState({name:"Ricky Bobby", id: 66, email: "abcd@gmail.com"})
    const [cart, setCart] = useState([]);

    function addProductToCart(product){
        setCart([...cart, product])
    }
    function removeProductFromCart(productId){
        const updatedCart = cart.filter(product => product._id !== productId)
        setCart(updatedCart)
    }

    //return the context provider, passing down state and fucntions as value
    return(
        <GlobalContext.Provider value = {{
            user: user,
            cart:cart,
            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductFromCart
        }}>
            {props.children} {/* render any child components inside the provider*/}
        </GlobalContext.Provider>

    )


}
// export global provider component so it can be sued in other files
export default GlobalProvider;