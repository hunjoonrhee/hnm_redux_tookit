import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style/common.style.css';
import AppLayout from './Layout/AppLayout';
import AppRouter from './routes/AppRouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer />
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </div>
  );
}

export default App;
