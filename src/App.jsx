import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/catalog"
          element={<CatalogPage />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
