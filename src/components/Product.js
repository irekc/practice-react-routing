import React from 'react';
import { Link } from 'react-router-dom';


const Product = ({id, name, price, category, description}) => {
  return (
      <article>
          <h1><Link to={`/task02/product-${id}`}>{name}</Link></h1>
          <h2>{price}</h2>
          <h3>{category}</h3>
          <p>{description}</p>
      </article>
  );
}

export default Product;