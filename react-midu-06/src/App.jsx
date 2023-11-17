import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Products } from "./components/Products";
import { Header } from "./components/Header";
import products from "./mocks/products.json";
const InitialsProducts = products.products;
function App() {
  const [products, setProducts] = useState(InitialsProducts)
  const [filters, setFilters] = useState({
    category: "all",
    priceMin: 0
  })

  const filterProducts = () => {
    return products.filter((product) => {
      return (
        product.price > filters.priceMin &&
        (product.category === filters.category || filters.category === "all")
      );
    });
  };
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products Arrayproduct={filteredProducts} />
    </>
  );
}

export default App;
