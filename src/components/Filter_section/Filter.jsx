import React, { useState, useEffect } from "react";
import "../../All_comp_styles/Filter.css";
// import myimg from "../../assets/img/Masthead.png";

function Filter(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = "Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo";
    const url =
      "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products";

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch products");
        }
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  // Fething material
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const token = "Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo";
    const url =
      "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material";

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch materials");
        }
      })
      .then((data) => {
        setMaterials(data.material);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  // Fething colors

  const [colors, setColors] = useState([]);

  useEffect(() => {
    const token = "Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo";
    const url =
      "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colors";

    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch colors");
        }
      })
      .then((data) => {
        setColors(data.colors);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <>
      <div className="Filter_header">Filter</div>

      <div>
        <h1 className="product_list">Product</h1>
        <div className="product_List_container">
          <ul className="fetched_data_view_contaier">
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h1 className="product_list">Materials</h1>
        <div className="product_List_container">
          <ul className="fetched_data_view_contaier">
            {materials.map((material) => (
              <li
                key={material.id}
                onClick={(material) => {
                  props.ClassRemov(material.name);
                }}
              >
                {material.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h1 className="product_list">Colors</h1>
        <div className="product_List_container">
          <ul className="fetched_data_view_contaier">
            {colors.map((color) => (
              <li key={color.id}>{color.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Filter;
