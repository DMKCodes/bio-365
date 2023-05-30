import { Routes, Route } from 'react-router-dom';
import './App.css';
import PersistLogin from './components/utils/PersistLogin';
import Header from './components/utils/Header';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import AdminPage from './pages/AdminPage';
import NewsPage from './pages/NewsPage';
import LearnPage from './pages/LearnPage';
import DataPage from './pages/DataPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/utils/Footer';

function App() {
    return (
        <div className="App">
            <PersistLogin />
            <Header />
            <Routes>
                <Route path='/dashboard' element={<DashboardPage />} />
                <Route path='/admin' element={<AdminPage />} />
                <Route path='/' element={<HomePage />} />
                <Route path='/news' element={<NewsPage />} />
                <Route path='/learn' element={<LearnPage />} />
                <Route path='/data' element={<DataPage />} />
                <Route path='/about' element={<AboutPage />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;