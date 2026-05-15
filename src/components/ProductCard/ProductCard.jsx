import "./ProductCard.css";

function ProductCard({ product, onClick }) {
    return (
        <div className="product-card" onClick={onClick}>
            <img
                src={product.images[0]} // Mostrar la primera imagen del array
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