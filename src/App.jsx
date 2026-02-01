import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Policy from './pages/Policy/Policy';

function App() {
  return (
    <>
      <NavBar />
      
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;