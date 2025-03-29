import "../styles/productUnit.css";
import { useState, useEffect } from 'react'

export default function ProductUnit({product}){

    const {title, category, price, images, tags, stock, brand, dimensions} = product;
    const {height, width, depth} = dimensions ?? ""
    const image = images?.[0] ?? ""
    const [add, setAdd] = useState(1)
    const [enable, setEnable] = useState(false)
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        setEnable(add < 1 || add > stock)
    }, [add])

    useEffect(() => {
        if (clicked) {
          alert('Button clicked!');
          setClicked(false);
        }
      }, [clicked]);

    return(
        <div className="product-det">
            {title ? (
                <div className="product-container-det">
                    <div class="product-image-det">
                        <img src={image} alt="Producto" />
                    </div>

                    <div class="product-details-det">
                        <h1>{title}</h1>

                        <div class="tags">
                            {tags.map((tag) => (
                                <span>{tag}</span>
                            ))}
                        </div>

                        <div class="product-price-det">
                            ${price}
                        </div>

                        <p><strong>Categoría:</strong> {category}</p>

                        <p><strong>En stock:</strong> {stock} unidades</p>

                        <p><strong>Marca:</strong> {brand}</p>

                        <div class="product-info-det">
                            <div><strong>Dimensiones:</strong></div>
                            <div><strong>Alto:</strong> {height} cm</div>
                            <div><strong>Ancho:</strong> {width} cm</div>
                            <div><strong>Profundidad:</strong> {depth} cm</div>
                        </div>

                        <div className="Agregar-al-carrito-det">
                            <label for="cantidad">Cantidad:</label>
                            <input
                                type="number"
                                value={add}
                                min={1}
                                max={stock}
                                id="cantidad" 
                                class="cantidad-input"
                                onChange={(e) => setAdd(e.target.value)}
                                required/>
                            <button className="add-to-cart-btn"
                            onClick={() => setClicked(true)}
                            disabled={enable}>Agregar al carrito 🛒</button>
                        </div>

                    </div>
                </div>
            ) : (
                <p>No se encontró el producto</p>
            )}
        </div>
    )
}