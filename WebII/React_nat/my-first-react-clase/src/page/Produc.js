import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import ProductUnit from "../components/ProductUnit";
import Verification from '../components/Verification'

export default function Produc(){
    Verification()

    const {id} = useParams();

    const [product, setProduct] = useState(null)

    useEffect(() => {
        const fetchProduct = async () => {
            const data = await getProductById(id)
            setProduct(data)
        }

        fetchProduct()
    }, [id])

    return (
        <div>
            {product && <ProductUnit 
                product={product}/>
            }
        </div>
    )
}

async function getProductById(id){
    const product = await fetch(`https://dummyjson.com/products/${id}`);
    return product.json();
}