import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Row, Col, Container } from 'react-bootstrap';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import SearchBox from '../component/SearchBox';
import { getAllProducts } from '../component/context/product/productSlice';

const ProductAll = () => {
  const dispatch = useDispatch();
  const { getProductsLoading, products, totalPageNum } = useSelector((store) => store.product);
  const [query, setQuery] = useSearchParams();
  const name = query.get('name');

  useEffect(() => {
    console.log('ddd');
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      {getProductsLoading ? (
        <div className="loading">
          {' '}
          <ClipLoader color="#FB6D33" loading={getProductsLoading} size={100} />
        </div>
      ) : (
        <Container>
          <Row>
            {products.length > 0 ? (
              products.map((product, index) => (
                <Col md={3} sm={12} key={product._id}>
                  <ProductCard product={product} />
                </Col>
              ))
            ) : (
              <div className="text-align-center empty-bag">{name === '' ? <h2>No products registered.</h2> : <h2>No products match {name}.</h2>}</div>
            )}
          </Row>
        </Container>
      )}
    </>
  );
};

export default ProductAll;
