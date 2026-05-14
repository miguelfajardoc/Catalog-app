import { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard/ProductCard";
import "./ProductList.css";

function ProductList({ products, observerRef, onProductClick }) {
    
    console.log(products);
    return(
        <>
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onClick={() => onProductClick(product)}
                    />
                ))}
            </div>
            { <div ref={observerRef} style={{ height: "20px" }} />}
        </>
    )
}

export default ProductList;