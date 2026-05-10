import Product from "../components/Product";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";


function Catalog(){

    //const product = [];//
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);//variable to hold the categories//
    const [productsToDisplay, setProdsToDisplay] = useState([]); //to hold the products to show

    useEffect(function(){ //useEffect runs when the component loads//
        console.log("Component Loaded");
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data);
        loadCatalog();


    },[]//the empty array [] means "run this function once"
);

function loadCatalog(){
    let service = new DataService();
    let data = service.getProducts();
    setProdsToDisplay(data);// initially, display all products
    let cats = ["Tropical Seebs","Fruity Seebs","ALL"];
    setCategories(cats);

}
function filter(category){

    if(category==="all"){
        setProdsToDisplay(products);
        return;
    }
    let list = [];
    //find the [roduct that match the category//
    for(let i=0; i<products.length;i++)
{
    let prod = products[i];
    if(prod.category===category)
    {
        list.push(prod);
    }
}
setProdsToDisplay(list);
}

    return(
        <div>
            <h1>Check out our amazing products for all the Birbs and Borbs you love</h1>
            <div className="border p-3 m-4 bg-warning rounded shadow">
                {categories.map(cat => <button key={cat} className="btn btn-outline-primary m-5"onClick={()=>filter(cat)}>{cat}</button>)}       
                <br />
                <div className= "d-flex flex-row justify-content-evenly m-5 border p-3 m-4 bg-danger-subtle rounded shadow ">
                {productsToDisplay.map(prod => <Product key={prod._id} data={prod}/>)}  
                
            
            
                    
            </div>


            </div>   


            
        </div>
    )
}

export default Catalog;