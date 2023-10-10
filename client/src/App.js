import './App.css';
import { Routes, Route } from 'react-router-dom';
import PersistLogin from './components/PersistLogin';
import ScrollToTop from './utils/ScrollToTop';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import AdminPage from './pages/AdminPage';
import ReadingListPage from './pages/ReadingListPage';
import NewsPage from './pages/NewsPage';
import LearnPage from './pages/LearnPage';
import StoriesPage from './pages/StoriesPage';
import StoryPage from './pages/StoryPage';
import ResourcesPage from './pages/ResourcesPage';
import GlossaryPage from './pages/GlossaryPage';
import DonationsPage from './pages/DonationsPage';
import Footer from './components/Footer';

function App() {
    return (
        <div className='App'>
            <PersistLogin />
            <ScrollToTop />
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
                <Route path='/donations' element={<DonationsPage />} />
            </Routes>

            <Footer />
        </div>
    );
};

export default App;