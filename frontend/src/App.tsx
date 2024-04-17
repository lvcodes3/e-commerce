import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import Store from './pages/Store';
import Cart from './pages/Cart';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Store /> } />
        <Route path="/cart" element={ <Cart /> } />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
