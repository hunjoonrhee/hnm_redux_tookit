import React from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import '../style/orderStatus.style.css';

const MyPage = () => {
  const dispatch = useDispatch();

  return (
    <>hallo</>
    // <Container className="status-card-container">
    //   {orderList.map((item) => (
    //     <OrderStatusCard orderItem={item} className="status-card-container" key={item._id} />
    //   ))}
    // </Container>
  );
};

export default MyPage;
