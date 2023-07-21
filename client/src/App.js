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
import StoryPage from './pages/StoryPage';
import Footer from './components/Footer';
import GlossaryPage from './pages/GlossaryPage';
import ResourcesPage from './pages/ResourcesPage';

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
                <Route path='/stories/:storyName' element={<StoryPage />} />
                <Route path='/glossary' element={<GlossaryPage />} />
                <Route path='/resources' element={<ResourcesPage />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;