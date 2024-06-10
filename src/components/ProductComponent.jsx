import React, { useState } from 'react';
import { useGetProductsQuery } from './../api/slices/allProduct';

const ProductComponent = () => {
  const [langCode, setLangCode] = useState(2); 
  const { data: products, error, isLoading } = useGetProductsQuery(langCode);

  return (
    <div>
      <h1>Products</h1>
      <div>
        <label>
          Select Language:
          <select value={langCode} onChange={(e) => setLangCode(Number(e.target.value))}>
            <option value={1}>Azerbaijani</option>
            <option value={2}>Russian</option>
          </select>
        </label>
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <ul>
        {products?.map(product => (
          <li key={product.id}>
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductComponent;
