import React from 'react';
import { useRouter } from 'next/router';
import { Col, Row } from 'react-bootstrap';
import Sidebar from '../component/Sidebar';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

const AppLayout = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);

  return (
    <div>
      {router.pathname.includes('admin') ? (
        <Row className="vh-100">
          <Col xs={12} md={3} className="sidebar mobile-sidebar">
            <Sidebar />
          </Col>
          <Col xs={12} md={9}>
            {children}
          </Col>
        </Row>
      ) : (
        <>
          <Navbar user={user} />
          {children}
        </>
      )}
    </div>
  );
};

export default AppLayout;
