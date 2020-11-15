import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductCard from "./components/ProductCard/ProductCard";
import Header from "./components/Header/Header";
import SortBy from "./components/SortBy/SortBy";

import * as Styled from "./App.styles";

function App() {
  const [productData, setProductData] = useState(null);
  const [categories, setCategories] = useState(null);

  const sortByOptions = [
    "Name (Ascending)",
    "Name (Descending)",
    "Size",
    "Id",
    "Category",
  ];

  useEffect(() => {
    if (productData === null && categories === null) {
      axios.all([axios.get("/products"), axios.get("/categories")]).then(
        axios.spread((...responses) => {
          setProductData(responses[0].data.data);
          setCategories(responses[1].data.data);
        })
      );
    }

    // Store data in local storage to persist state
    localStorage.setItem("product_data", JSON.stringify(productData));
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [productData, categories]);

  const getCategoryName = (categoryId) => {
    const result = categories.find(({ id }) => id === categoryId);
    return result.name;
  };

  const sortBy = (option) => {
    console.log("sorting by", option);
  };

  return (
    <div className="App">
      <Header />
      {categories && <SortBy options={sortByOptions} sortBy={sortBy} />}
      <Styled.Container>
        {productData &&
          categories &&
          productData.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              category={getCategoryName(product.categoryId)}
              creationDate={product.creationDate}
              updateDate={product.updateDate}
              lastPurchasedDate={product.lastPurchasedDate}
            />
          ))}
      </Styled.Container>
    </div>
  );
}

export default App;
