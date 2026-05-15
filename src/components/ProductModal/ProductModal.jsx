import "./ProductModal.css";
import { useEffect, useState } from "react";

function ProductModal({product, onClose}){
    if(!product) return null;

    const [selectedImage, setSelectedImage] = useState(product.images[0]);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        
        return () => {
            document.body.style.overflow = "auto";
        }
    }, []);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [onClose]);

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
                            src={selectedImage}
                            alt={product.title}
                            className="modal-image"
                        />
                        <div className="modal-thumbnails">
                            {product.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={product.title}
                                    className={`modal-thumbnail ${
                                        selectedImage === img ? "active" : ""
                                    }`}
                                    onClick={() => setSelectedImage(img)}
                                />
                            ))}
                        </div>
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