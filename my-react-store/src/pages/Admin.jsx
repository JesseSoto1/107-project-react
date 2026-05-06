import { useState } from "react";

function Admin(){
    const [productTitle, setProductTitle] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [products, setProducts] = useState([]);

    function saveProducts(){

        const newProduct = {
            title: productTitle,
            category: productCategory,
            image: productImage,
            price: productPrice
        }

        // spread operator use it on the fly??????
        setProducts([...products, newProduct])

    }

    const [couponCode, setCouponCode] = useState("");
    const [couponDiscount, setCouponDiscount] = useState(0);
    const [coupons, setCoupons] = useState([]);

    function saveCoupon(){
            // console.log(couponCode);
            // console.log(couponDiscount);
        const newCoupon = {
            code: couponCode,
            discount: couponDiscount
        }

        setCoupons([...coupons, newCoupon])
    }


    return(
        <div>
            <h1>Admin Page</h1>

            <div className="d-flex gap-4">
                <section className="w-50">
                    <h3>Add Products</h3>

                    <div className="card">
                        <div className="card-body">
                            <div className="text-start m-4">
                                <label className="form-label">Title</label>
                                <input className="form-control" type="text" value={productTitle} onChange={(event) => setProductTitle(event.target.value)}/>
                            </div>
                            <div className="text-start m-4">
                                <label className="form-label">Category</label>
                                <input className="form-control" type="text" value={productCategory} onChange={(event) => setProductCategory(event.target.value)}/>
                            </div>
                            <div className="text-start m-4">
                                <label className="form-label">URL</label>
                                <input className="form-control" type="url" placeholder="www.mypage.com" value={productImage} onChange={(event) => setProductImage(event.target.value)} />
                            </div>
                            <div className="text-start m-4">
                                <label className="form-label">Price</label>
                                <input className="form-control" type="number" value={productPrice} onChange={(event) => setProductPrice(event.target.value)} />
                            </div>
                            <div>
                                <button className="btn btn-dark" onClick={saveProducts}>Save Product</button>
                            </div>

                        </div>

                    </div>

                    {/* */}
                    <div>
                        {products.map(product => (<li>{product.title} - {product.category} - {product.price}
                        <br />
                        <img width={300} src={product.image} 
                        alt="" /></li>))}
                    </div>
                </section>

                <section className="w-50">
                    <h3>Add Coupons</h3>

                    <div className="card">
                        <div className="card-body">
                            <div className="text-start m-4">
                                <label className="form-label">Code</label>
                                <input className="form-control" type="text" value={couponCode} onChange={(event) => setCouponCode(event.target.value)}/>
                            </div>

                            <div className="text-start m-4">
                                <label className="form-label">Discount</label>
                                <input className=" form-control" type="text" value={couponDiscount} onChange={(event) => setCoupons(event.target.value)}/>
                            </div>
                            <div>
                                <button className="btn btn-dark" onClick={saveCoupon}>Save Coupon</button>
                            </div>
                        </div>                  
                    </div>

                    {/* */}
                    <div>

                        {coupons.map(coupon => (<li>{coupon.code} - {coupon.discount} </li>))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Admin;
