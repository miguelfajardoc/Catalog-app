import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Distribuidora JF</h1>

          <p>
            Productos para comidas rápidas
          </p>
        </div>
      </section>

      <section className="categories-section">
        <h2>Categorías</h2>

        <div className="categories-grid">
          <div className="category-card">
            <h3>Quesos</h3>
          </div>
          <div className="category-card">
            <h3>Panadería</h3>
          </div>
          <div className="category-card">
            <h3>Carnes</h3>
          </div>
          <div className="category-card">
            <h3>Embutidos</h3>
          </div>
          <div className="category-card">
            <h3>Congelados</h3>
          </div>
          <div className="category-card">
            <h3>Salsas</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;