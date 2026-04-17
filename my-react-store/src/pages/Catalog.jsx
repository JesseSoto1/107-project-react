import Product from "../components/Product";
function Catalog(){
    return(
        <div>
            <h1>Check our amazing products</h1>

            <div className= "row">
                <Product/>
                <Product/>
            
                    
            </div>
        </div>
    )
}

export default Catalog;