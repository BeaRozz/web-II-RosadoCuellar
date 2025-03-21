import ProductListItem from "../components/ProductListItem"

export default function Products() {
    return(
        <div>
            <div className="container-product">
                <ProductListItem />
                <ProductListItem />
                <ProductListItem />
            </div>
        </div>
    )
}