function Home(){
    return(
        <div className="d-flex flex-row justify-content-evenly m-2">
            <div>
                <h1>Welcome to Birbs and Borbs</h1>
                <p>Your Birbs and Borbs Seebs Provider</p>
                <p>Here you will find the best seebs for your Birbs and Borbs. We especialized in all species and we taylor our seebs mixes based on your Birb or Borb DNA makeup.</p>
                
                <div className="border p-4 m-4 bg-secondary-subtle rounded shadow">
                    <div className="d-flex flex-row justify-content-end m-2">
                        <div className="border p-4 m-4 bg-warning-subtle rounded shadow">
                            <p>Here with us you will find all the highest quality seebs your Birbs and Borbs will ever need for their maximum nutrition</p>
                        </div>
                        <img className="rounded-1 m-2" width={400} src="https://images.unsplash.com/photo-1535246819623-39f93202789f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                </div>
                <div className="border p-4 m-4 bg-secondary-subtle rounded shadow d-flex flex-row justify-content-start m-2">
                    <img className="rounded-1 m-2" width={400} src="https://cdn.dribbble.com/userupload/46727077/file/4b55dbb49b5baeb873ba6cce3e401c4d.jpg?resize=752x&vertical=center" alt="" />
                    <div className="border p-4 m-4 bg-warning-subtle rounded shadow ">
                        <p>Find yourself searching for the best feed for those silly Birbs and Borbs. Look no further fella' we got them all and for all shapes and sizes.</p>
                    </div>
                </div>
                <div className="border p-4 m-4 bg-secondary-subtle rounded shadow d-flex flex-row justify-content-end m-2">
                    <div className="border p-4 m-4 bg-warning-subtle rounded shadow">
                        <p>For every dollar you spend we donate 10 cents to saving the Birbs and Borbs around the world</p>
                    </div>
                    <img className="rounded-1 m-2" width={400} src="https://plus.unsplash.com/premium_photo-1671130295885-19cd68bde34f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </div>
            <div>
                <img className="rounded-pill m-2" width={100} src="https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div>
                <img className="rounded-pill m-2" width={150} src="https://images.unsplash.com/photo-1555169062-013468b47731?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div>
                <img className="rounded-pill m-2" width={200} src="https://images.unsplash.com/photo-1452570053594-1b985d6ea890?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>

        </div>

    )
}

export default Home;