const catalog = [
    {
        "title":"Banana Blast",
        "category":"Tropical seebs",
        "price":12.99,
        "image":"orange.png",
        "_id":"1"
    
    },
    {
        "title":"Strawberry Storm",
        "category":"Fruity Seebs",
        "price":13.99,
        "image":"strawberry.png",
        "_id":"2"
    },
    {
        "title":"Apple Avalanche",
        "category":"Fruity",
        "price":13.99,
        "image":"apple.png",
        "_id":"3"
        
    }

];

class DataService{
    getProducts(){
        return catalog;
    }
}

export default DataService;