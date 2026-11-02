import { BrowserRouter, Routes, Route } from 'react-router';
import Header from './components/Header';
import CatalogPage from './pages/CatalogPage';
import CarDetailsPage from './pages/CarDetailsPage';
import AccountPage from './pages/AccountPage';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/cars/1" element={<CarDetailsPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
