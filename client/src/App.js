import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/utils/Header';
import PersistLogin from './components/utils/PersistLogin';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import PolicyPage from './pages/PolicyPage';
import NewsPage from './pages/NewsPage';
import LearnPage from './pages/LearnPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/utils/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route element={<PersistLogin />}>
                    <Route path='/dashboard' element={<DashboardPage />} />
                    <Route path='/' element={<HomePage />} />
                    <Route path='/policy' element={<PolicyPage />} />
                    <Route path='/news' element={<NewsPage />} />
                    <Route path='/learn' element={<LearnPage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    );
};

export default App;