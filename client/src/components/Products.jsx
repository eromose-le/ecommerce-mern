import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`;

const Products = ({ cat, filters, sort }) => {
  // FETCH DATA
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // GET ALL PRODUCTS || CAT PRODUCTS
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/v1/products?category=${cat}`
            : 'http://localhost:5000/api/v1/products'
        );
        console.log(res.data);
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    // GET PRODUCTS BY FILTER 'color' || 'size
    // If contain any of those properties ? display product.
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === 'asc') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
