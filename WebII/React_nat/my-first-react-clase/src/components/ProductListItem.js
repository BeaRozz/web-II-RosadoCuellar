import "../styles/productsList.css";

export default function ProductListItem(){
    return(
        <div>
            <div className="product-list-item">
                <div className="product-image">
                    <img src="https://th.bing.com/th/id/OIP.SwhBT8qQW1J5uO-N-Q432wHaEe?rs=1&pid=ImgDetMain" alt="product" />
                </div>
                
                <div className="product-detail">
                    <h4>Product Name</h4>
                    <p> 
                        lorem ipsum dolor sit amet, consectetur adipiscing elit.    
                    </p>
                </div>
            </div>
        </div>
    )
}