
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
import News from './pages/News';
import Support from './pages/Support';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [cartCount, setCartCount] = useState(2);

  return (
    <Router>
      <div className="max-w-md mx-auto min-h-screen bg-white dark:bg-slate-900 shadow-2xl relative flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<News />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Navbar cartCount={cartCount} />
      </div>
    </Router>
  );
};

export default App;
