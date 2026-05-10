import QuantityPicker from "./QuantityPicker";
import { useState, useContext } from "react";

import globalContext from "../state/globalContext";


function Product(props){
    const globalAdd = useContext(globalContext).addProductToCart;    

    const [quantity, setQuantity]= useState(1);    
        function handleQtyChange(qty){
            console.log("New Value", qty);
            setQuantity(qty);
    }
    function getTotal(){
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }
    function onAdd(){
        console.log("adding product");
        let fixedProduct = {...props.data}//fruit info
        fixedProduct.quantity = quantity


        globalAdd(fixedProduct);
    }


    return(
        <div className="card" style={{width: "18rem"}}>
                        <img src={"/images/"+ props.data.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="text-start">{props.data.title}</h5>
                            <h6 className="text-start">${props.data.price.toFixed(2)}</h6>
                            <h6 className = "total">{getTotal()}</h6>

                            <QuantityPicker onChange={handleQtyChange}/>

                            <button href="#" className="btn btn-dark mt-4" onClick={onAdd}>Add to cart</button>
                        </div>
                    </div>

    )
}
export default Product;