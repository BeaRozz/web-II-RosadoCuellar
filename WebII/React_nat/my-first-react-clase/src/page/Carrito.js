import Verification from "../components/Verification";
import '../styles/product_carrito.css';

export default function Carrito(){
    Verification()

    const carrito = JSON.parse(localStorage.getItem('shoppingCart'));
    const total = parseFloat(localStorage.getItem('total')) || 0;
    const haveProducts = carrito !== null
    console.log(carrito)

    return(
        <div className="carrito-page">
            <div className="title-carrito">
                <h2>Carrito 🛒</h2>
            </div>
            

            <div className="carrito-content">
                {haveProducts ? (

                    carrito.map((product) => {
                        return(
                            <div className="product-card-carrito">
                                <div className="image-carrito">
                                    <img src={product.image} alt="Product Image" />
                                </div>
                                <div className="product-info-carrito">
                                    <h2 className="product-title-carrito">{product.title}</h2>
                                    <div className="data-carrito">
                                        <p className="product-category-carrito">Categoría: {product.category}</p>
                                        <p className="product-quantity-carrito">Cantidad: <span className="quantity">{product.cant}</span></p>
                                        <p className="product-price-carrito">Precio Unitario: $<span className="unit-price">{product.unitPrice}</span></p>
                                        <p className="product-final-price-carrito">Precio Final: $<span className="final-price">{product.finalPrice}</span></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                ) : (
                    <p>No hay productos agregados</p>
                )}
            </div>

            <div className="total-content">
                <hr></hr>
                <h1>Total: ${total}</h1>
            </div>
      </div>
    )
}