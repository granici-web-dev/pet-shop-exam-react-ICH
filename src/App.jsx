import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/layout';

import Home from './pages/home';
import Categories from './pages/categories';
import Products from './pages/products';
import ProductPage from './pages/productPage';
import Sales from './pages/sales';
import Cart from './pages/cart';
import NotFound from './pages/notFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="home" element={<Navigate to={'/'} replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
