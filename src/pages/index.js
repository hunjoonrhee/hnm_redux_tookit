// pages/index.js
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import AppLayout from '../component/AppLayout';

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <ClipLoader />;
  }

  return (
    <AppLayout>
      <h1>Welcome to May Day!</h1>
    </AppLayout>
  );
};

export default Home;