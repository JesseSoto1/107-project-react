import QuantityPicker from "./QuantityPicker";
function Product(){
    return(
        <div className="card" style={{width: "18rem"}}>
                        <img src="https://images.unsplash.com/photo-1585059895524-72359e06133a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="text-start">Kiwi</h5>
                            <h6 className="text-start">$ 3.99</h6>

                            <QuantityPicker/>

                            <button href="#" className="btn btn-dark mt-4">Add to cart</button>
                        </div>
                    </div>

    )
}
export default Product;