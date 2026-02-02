import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/Policy/PrivacyPolicy';
import TermsOfUse from './pages/Policy/TermsOfUse';
import ValorDoDigito from './pages/ValorDoDigito'
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <>
            <ScrollToTop />
            <NavBar />

            <main className="min-h-screen">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/policy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<TermsOfUse />} />
                    <Route path="/valor-do-digito" element={<ValorDoDigito />} />
                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;