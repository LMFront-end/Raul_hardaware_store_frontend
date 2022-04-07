import React from "react";
import { dataProducts } from "../../data/products";
import { NewProductsCard } from "../../components/newProductCard/NewProductsCard";
import { NavbarPages } from '../../components/navbarPages/NavbarPages'
import styles from "./NewProducts.module.css";

const NewProducts = () => {
  let products = dataProducts;

  return (
    <>
    <NavbarPages />
      <h2 className={styles.title_contact}>New Products</h2>

      <div className={styles.hotelList}>
        {products.map((product) => {
          return (
            <NewProductsCard
              key={product.slug}
              img={product.photo}
              name={product.name}
              description={product.description}
              reference={product.reference}
              price={product.price}
            />
          );
        })}
      </div>
    </>
  );
};

export { NewProducts };
