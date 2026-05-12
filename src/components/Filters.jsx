function Filters({filters, setFilters}) {
    return(
        <div 
            style={{
            display: "flex",
            gap: "20px",
            marginBottom: "24px",
        }}>
             <select
                value={filters.category}
                onChange={(e) =>
                setFilters((prev) => ({
                    ...prev,
                    category: e.target.value,
                }))
                }
            >
                <option value="all">Todas</option>
                <option value="Quesos">Quesos</option>
                <option value="Carnicos">Carnicos</option>
                <option value="Embutidos">Embutidos</option>
                <option value="Congelados">Congelados</option>
                <option value="Pan y mogolla">Pan y mogolla</option>
            </select>
            
                  <select
                    value={filters.sort}
                    onChange={(e) =>
                    setFilters((prev) => ({
                        ...prev,
                        sort: e.target.value,
                    }))
                    }
                >
                    <option value="">Default</option>
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                    <option value="price-low">Precio: Menor a mayor</option>
                    <option value="price-high">Precio: Mayor a menor</option>
                </select>
        </div>
    );
}

export default Filters;