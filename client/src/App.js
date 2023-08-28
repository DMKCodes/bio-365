import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import PersistLogin from './components/PersistLogin';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import AdminPage from './pages/AdminPage';
import ReadingListPage from './pages/ReadingListPage';
import NewsPage from './pages/NewsPage';
import LearnPage from './pages/LearnPage';
import StoriesPage from './pages/StoriesPage';
import StoryPage from './pages/StoryPage';
import Footer from './components/Footer';
import GlossaryPage from './pages/GlossaryPage';
import ResourcesPage from './pages/ResourcesPage';

function App() {
    const location = useLocation();

    return (
        <div className='App'>
            <PersistLogin />

            <Routes>
                <Route path='/dashboard' element={<DashboardPage />} />
                <Route path='/admin' element={<AdminPage />} />
                <Route path='/readinglist' element={<ReadingListPage />} />
                <Route path='/' element={<HomePage />} />
                <Route path='/news' element={<NewsPage />} />
                <Route path='/learn' element={<LearnPage />} />
                <Route path='/stories' element={<StoriesPage />} />
                <Route path='/stories/:storyName' element={<StoryPage />} />
                <Route path='/resources' element={<ResourcesPage />} />
                <Route path='/glossary' element={<GlossaryPage />} />
            </Routes>

            <Footer />
        </div>
    );
};

export default App;