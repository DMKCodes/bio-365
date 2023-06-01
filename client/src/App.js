import { Routes, Route } from 'react-router-dom';
import './App.css';
import PersistLogin from './components/PersistLogin';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import AdminPage from './pages/AdminPage';
import NewsPage from './pages/NewsPage';
import LearnPage from './pages/LearnPage';
import StoriesPage from './pages/StoriesPage';
import Footer from './components/Footer';

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
                <Route path='/stories' element={<StoriesPage />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;