import "../styles/create_product.css"
import { useEffect, useState } from "react"
import CreateProductActions from "../functions/CreateProductActions"

export default function CreateProduct(){

    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function fetchCategories() {
            const response = await fetch("https://dummyjson.com/products/categories")
            const data = await response.json()
            setCategories(data)
        }

        fetchCategories()
    }, [])

    async function submitAction(formData){

        const data = Object.fromEntries(formData)
        const response = await CreateProductActions(data)
        console.log(response)

        if(response?.id === undefined){
            alert("Error creating product")
            return
        }

        const newProducts = localStorage.getItem("newProducts") != null? 
            JSON.parse([localStorage.getItem("newProducts")]) : []
        
        newProducts.push(response)

        const newProductsString = JSON.stringify(newProducts)
        localStorage.setItem("newProducts", newProductsString)

    }


    return(
        <div className="container-createProduct">
            <div className="container-createProduct__title">
                <h1>Create Product</h1>
            </div>

            <div className="container-createProduct__form">
                <form action={submitAction} method="POST" className="form-createProduct">
                    <label htmlFor="productName">Title</label>
                    <input type="text" id="productTitle" name="title" required />

                    <label htmlFor="productDescription">Product Description</label>
                    <textarea id="productDescription" name="description" required></textarea>

                    <div className="container-createProduct__form__under">

                        <div className="container-createProduct__form__under_1">
                            <label htmlFor="productCategory">Categories</label>
                            <select id="productCategory" name="category" required>
                                {categories.map((category) => (
                                    <option key={category.slug} value={category.slug}>{category.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="container-createProduct__form__under_2">
                            <label htmlFor="productPrice">Price</label>
                            <input type="number" id="productPrice" name="price" min={1}required />
                        </div>
                    </div>

                    <div className="container-createProduct__form__btn">
                        <button className="btn-createproducts" type="submit">Create Product</button>
                    </div>
                </form>
            </div>

        </div>
    )
}