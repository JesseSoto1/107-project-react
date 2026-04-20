const catalog = [
    {
        "title":"Orange",
        "category":"fruit",
        "price":12.99,
        "image":"orange.png",
        "_id":"1"
       
    },
    {
        "title":"Strawberry",
        "category":"berry",
        "price":13.99,
        "image":"strawberry.png",
        "_id":"2"
    },
    {
        "title":"Apple",
        "category":"fruit",
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