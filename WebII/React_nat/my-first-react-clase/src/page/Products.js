import { useNavigate } from 'react-router-dom'
import ProductItem from '../components/ProductListItem'
import Verification from '../components/Verification'
import '../styles/products.css'
import { useEffect, useState } from 'react'

export default function Products()
{
    const [products, setProducts] = useState(null)
    const [word, setWord] = useState(null)
    const [loading, setLoading] = useState(true)

    Verification()

    useEffect(() => {
        setTimeout(() => {const fetchProducts = async () => {
            const data = await getProducts();
            setLoading(false);
            setProducts(data.products)
        }

        fetchProducts()}, 200)
    }, [])
    //[] carga cuando la página web cargue.
    //[nombre] carga cuando este cambie el estado
    //nada carga cada vez que algo cambie

    useEffect(() => {
        const hasWord = word !== null && word !== undefined;
        
        if(!hasWord) return;

        const fetchPorductsByWord= async() => {
            const data = await getProductsByWord(word)
            setLoading(false);
            setProducts(data.products)
        }

        fetchPorductsByWord()
    }, [word])

    return (
        <div className='products'>
            <div className='title'>
                <div className='products-title'>
                    <h2>Our Products</h2>
                </div>

                <div className='search'>
                    <input 
                        type='text'
                        placeholder='Búsqueda de productos'
                        onChange={(e) => setWord(e.target.value)} 
                        id="search-input" 
                        class="search-input" />
                </div>
            </div>

            <div className='container-products'>
                {loading ? (
                    <p>Cargando productos...</p>
                ) :
                products && products.length > 0 ? (
                    products.map((item) => {
                        return (
                            <ProductItem
                            key={item.id}
                            title={item.title}
                            id={item.id}
                            description={item.description}
                            images={item.images}
                            />
                        );
                    })
                ) : (
                    <p>No hay productos disponibles.</p>
                )}
            </div>
        </div>
    )
}

async function getProducts() {
    const products = await fetch("https://dummyjson.com/products");
    return products.json();
}

async function getProductsByWord(word) {
    const products = await fetch(`https://dummyjson.com/products/search?q=${word}`)
    return products.json();
    
}