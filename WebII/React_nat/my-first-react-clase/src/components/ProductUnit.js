import "../styles/productUnit.css";
import { useState, useEffect } from 'react'

export default function ProductUnit({product}){

    const {title, category, price, images, tags, stock, brand, dimensions, id} = product;
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
            const dataProduct = {
                id: id,
                image: image,
                title: title,
                category: category,
                cant: add,
                unitPrice: price,
                stock: stock,
                finalPrice: add*price
            }
            AddToShoppingCart(dataProduct)
            setClicked(false);
        }
      }, [clicked]);

    return(
        <div className="product-det">
            {title ? (
                <div className="product-container-det">
                    <div className="product-image-det">
                        <img src={image} alt="Producto" />
                    </div>

                    <div className="product-details-det">
                        <h1>{title}</h1>

                        <div className="tags">
                            {tags.map((tag) => (
                                <span>{tag}</span>
                            ))}
                        </div>

                        <div className="product-price-det">
                            ${price}
                        </div>

                        <p><strong>Categoría:</strong> {category}</p>

                        <p><strong>En stock:</strong> {stock} unidades</p>

                        <p><strong>Marca:</strong> {brand}</p>

                        <div className="product-info-det">
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

function AddToShoppingCart(product){
    const {cant, stock, id, finalPrice} = product

    //primero validamos que la cantidad a comprar es válida
    if(cant <= 0 || cant > stock)
    {
        alert("La cantidad solicitada no es válida")
        return
    }

    //obtenemos el carrito de compras, sino hay es un arreglo vacío y tmb el total de productos
    const allShoppingProducts = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    const totalShoppingCart = parseFloat(localStorage.getItem('total')) || 0;

    //calculamos el nuevo total
    const newTotal = parseFloat(totalShoppingCart + finalPrice).toFixed(2)

    //verificamos que el carrito no supere los 10,000
    if(newTotal > 10000){
        alert("El carrito supera los $10,000")
        return
    }

    //verificamos que no sea un producto repetido, en caso que sí, lo agregamos
    const indexRepited = allShoppingProducts.findIndex((item) => item.id === id);
    const repited = indexRepited !== -1
    
    if(repited){
        
        //verificamos que no sea agregue más que el stock en e inventario
        const oldCant = parseInt(allShoppingProducts[indexRepited].cant)
        const newCant = oldCant + parseInt(cant)

        console.log(oldCant, newCant)

        if(newCant > stock){
            alert("No hay suficiente stock")
            return
        }

        allShoppingProducts[indexRepited].cant = `${newCant}`

        //Agregamos el nuevo precio
        const oldPrice = parseFloat(allShoppingProducts[indexRepited].finalPrice)
        const newPrice = oldPrice + parseFloat(finalPrice)
        console.log(newPrice)
        allShoppingProducts[indexRepited].finalPrice = `${newPrice.toFixed(2)}`
    }

    //si el producto no está repedido lo agregamos al arrglo
    if(!repited) allShoppingProducts.push(product)

    //si tenemos más de 5 elementos en el arreglo retornamos
    if(allShoppingProducts.length > 5){
        alert("El máximo de productos diferentes es 5")
        return
    }

    //Guardamos en el local storage
    localStorage.setItem('shoppingCart', JSON.stringify(allShoppingProducts))
    localStorage.setItem('total', newTotal)

    console.log(localStorage.getItem('shoppingCart'))
    console.log(localStorage.getItem('total'))

    alert("Producto agregado")
    return
}