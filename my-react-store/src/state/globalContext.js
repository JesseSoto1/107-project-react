import { createContext } from "react";

// GlobalContext defines context structure
const GlobalContext = createContext({
    user:{},//default user is an empty object
    cart:[],//needs to be array 

// addProductToCart: function(){}
    addProductToCart: () => {}
})

// export the contexxt so it can be used in otehr components
export default GlobalContext;