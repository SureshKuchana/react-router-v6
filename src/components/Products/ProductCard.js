import React from "react";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";

const ProductCardStyles = css`
  display: flex;
  color: #fff;
  background: #2a2c37;
  text-decoration: none;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 5px;
  transition: transform 0.1s ease-in-out, background 0.1s ease-in-out,
    box-shadow 0.1s ease-in-out;
  &:hover {
    transform: translate(0, -3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.035);
  }
  .productCard {
    &-icon {
      width: 40px;
      margin-right: 15px;
    }
    &-name {
      font-size: 1.2rem;
      margin: 0;
    }
    &-price {
      color: #50fa7b;
      font-size: 1.2rem;
      margin: 0;
    }
  }
`;

export const ProductCard = ({ product }) => {
  return (
    <Link to={product.id} className={ProductCardStyles}>
      <img
        src={`/assets/img/products/${product.id}.svg`}
        alt={product.name}
        className="productCard-icon"
      />
      <div>
        <h2 className="productCard-name">{product.name}</h2>
        <p className="productCard-price">{product.price}</p>
      </div>
    </Link>
  );
};
