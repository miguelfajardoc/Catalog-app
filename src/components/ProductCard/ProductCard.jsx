import "./ProductCard.css";

function ProductCard({ product }) {
    return (
        <div className="product-card" onClick={()=> console.log("Clicked:", product)}>
            <img
                src={product.image}
                alt={product.title}
                className="product-card__image"
            />

            <div>
                <h2 className="product-card__title">{product.title}</h2>
                <p className="product-card__price">${product.price}</p>
                <p className="product-card__category">{product.category}</p>
            </div>
        </div>
    );
}

export default ProductCard;