import { useEffect, useState, useRef, useMemo } from "react";
import Header from "../components/Header";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
import { fetchProducts } from "../services/api";
import ProductModal from "../components/ProductModal/ProductModal";

function CatalogPage() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [filters, setFilters] = useState({
        category: "all",
        sort: ""
    });
    const [selectedProduct, setSelectedProduct] = useState(null);

    const observerRef = useRef(null);
    const fetchedPagesRef = useRef(new Set());

    console.log(selectedProduct);

    useEffect(() => {
        loadProducts();
    }, [page]);


    useEffect(() => {
        if (!hasMore) return;

        const observer = new IntersectionObserver(
            (entries) => {
            const entry = entries[0];

            if (entry.isIntersecting && !loading) {
                console.log("seting page to", page + 1, "loading", loading);
                setPage((prev) => prev + 1);
            }
            },
            { rootMargin: "200px" }
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }
        return () => observer.disconnect();
    }, [loading, hasMore]);


    const loadProducts = async () => {
        if (!hasMore) return;

        if (fetchedPagesRef.current.has(page)) return;

        fetchedPagesRef.current.add(page);

        setLoading(true);

        const response = await fetchProducts({ page, limit: 8 });
        console.log("Loading page:", page);
        setProducts((prev) => [...prev, ...response.data]);
        setHasMore(response.hasMore);

        setLoading(false);
    };

    const filteredProducts = useMemo(() => {
        let updatedProducts = [...products];
        //filtrar por categoria
        if (filters.category !== "all") {
            updatedProducts = updatedProducts.filter(
                (p) => p.category === filters.category
            );
        }
          // Ordenar
        switch (filters.sort) {
            case "az":
            updatedProducts.sort((a, b) =>
                a.title.localeCompare(b.title)
            );
            break;

            case "za":
            updatedProducts.sort((a, b) =>
                b.title.localeCompare(a.title)
            );
            break;

            case "price-low":
            updatedProducts.sort((a, b) => a.price - b.price);
            break;

            case "price-high":
            updatedProducts.sort((a, b) => b.price - a.price);
            break;

            default:
            break;
        }

        return updatedProducts;
    }, [products, filters]);

    return(
        <div>
            <Header />
            <div className="container">
                <Filters filters={filters} setFilters={setFilters} />
                <ProductList
                    products={filteredProducts}
                    observerRef={observerRef}
                    onProductClick={setSelectedProduct}
                />
                {loading && <p>Loading...</p>}
                {selectedProduct && (
                    <ProductModal
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                    ></ProductModal>
                )}
            </div>
        </div>
    );
}

export default CatalogPage;