import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ColorRing } from 'react-loader-spinner';
import { currencyFormat } from '../utils/number';
import '../style/productDetail.style.css';
import ClipLoader from 'react-spinners/ClipLoader';
import { getProductBySku } from '../component/context/product/productSlice';

const ProductDetail = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  const { selectedProduct, getProductBySkuLoading, getProductBySkuError } = useSelector((store) => store.product);
  const [size, setSize] = useState('');
  const { sku } = useParams();
  const [sizeError, setSizeError] = useState(false);

  const navigate = useNavigate();
  // const pickIsTrue = () => {
  //   return selectedProduct.choice ? true : false;
  // };

  const addItemToCart = () => {
    if (size === '') {
      setSizeError(true);
      return;
    }
    if (!user) {
      navigate('/login');
    }
  };
  const selectSize = (value) => {
    setSize(value);
    if (sizeError) setSizeError(false);
  };
  useEffect(() => {
    console.log('xxx', sku);
    dispatch(getProductBySku(sku));
  }, [sku]);

  if (getProductBySkuLoading || !selectedProduct) {
    return (
      <div className="loading">
        {' '}
        <ClipLoader color="#FB6D33" loading={getProductBySkuLoading} size={100} />
      </div>
    );
  } else {
    return (
      <Container className="product-detail-card">
        <Row>
          <Col sm={6}>
            <img src={selectedProduct?.image} className="w-100" alt="image" />
          </Col>
          <Col className="product-info-area" sm={6}>
            <div className="detail-product-description">{selectedProduct?.description}</div>
            <br />
            <div className="detail-product-name">
              {selectedProduct?.name}
              <h className="detail-product-new">{selectedProduct?.isNew == true ? 'NEW' : ''}</h>
            </div>
            <br />
            <div className="detail-product-price">
              <h> ${currencyFormat(selectedProduct?.price)} </h>
            </div>
            <div className="detail-line" />

            <Dropdown variant="none" className="drop-down size-drop-down" title={size} align="start" onSelect={(eventKey) => selectSize(eventKey)}>
              <Dropdown.Toggle className="size-drop-down" variant={sizeError ? 'outline-danger' : 'outline-dark'} id="dropdown-basic" align="start">
                {size ? size.toUpperCase() : 'Select Size'}
              </Dropdown.Toggle>

              <Dropdown.Menu className="size-drop-down">
                {selectedProduct &&
                  selectedProduct?.stock?.length > 0 &&
                  selectedProduct?.stock?.map((sz, i) =>
                    selectedProduct?.stock[sz] > 0 ? (
                      <Dropdown.Item key={i} eventKey={sz}>
                        {sz.toUpperCase()}
                      </Dropdown.Item>
                    ) : (
                      <Dropdown.Item key={i} eventKey={sz} disabled={true}>
                        {sz.toUpperCase()}
                      </Dropdown.Item>
                    ),
                  )}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default ProductDetail;
