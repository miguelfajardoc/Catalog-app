import "./ProductModal.css";

function ProductModal({product, onClose}){
    if(!product) return null;

    return(
            <div className="modal-overlay" onClick={onClose}>
                <div
                    className="modal-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                    className="modal-close"
                    onClick={onClose}
                    >
                    ×
                    </button>

                    <div className="modal-image-container">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="modal-image"
                    />
                    </div>

                    <div className="modal-info">
                    <h2>{product.title}</h2>

                    <p className="modal-price">
                        ${product.price}
                    </p>

                    <p className="modal-description">
                        {product.description}
                    </p>
                    </div>
                </div>
                </div>
    )
}

export default ProductModal;