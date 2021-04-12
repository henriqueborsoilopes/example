import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Routes from './Routes';

export default function App() {

  return (
    <div>
      <>
        <Routes/>
        <ToastContainer />
      </>
    </div>
  );
}
