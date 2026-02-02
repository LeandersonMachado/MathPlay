import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About  from './pages/Policy/About';
import PrivacyPolicy from './pages/Policy/PrivacyPolicy';
import TermsOfUse from './pages/Policy/TermsOfUse';
import ValorDoDigito from './pages/Games/ValorDoDigito'
import DescubraPi from './pages/Games/DescubraPi';


import ScrollToTop from './components/ScrollToTop';


function App() {
    return (
        <>
            <ScrollToTop />
            <NavBar />

            <main className="min-h-screen">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre" element={<About />} />
                    <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
                    <Route path="/termos-de-uso" element={<TermsOfUse />} />
                    <Route path="/valor-do-digito" element={<ValorDoDigito />} />
                    <Route path="/descubra-pi" element={<DescubraPi />} />
                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;