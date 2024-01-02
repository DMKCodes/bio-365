import './App.css';
import { Routes, Route } from 'react-router-dom';
import PersistLogin from './components/PersistLogin';
import ScrollToTop from './utils/ScrollToTop';
import { ThemeProvider } from './hooks/ThemeProvider';

import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import AdminPage from './pages/AdminPage';
import ReadingListPage from './pages/ReadingListPage';
import ArticlesPage from './pages/ArticlesPage';
import LearnPage from './pages/LearnPage';
import StoriesPage from './pages/StoriesPage';
import StoryPage from './pages/StoryPage';
import ResourcesPage from './pages/ResourcesPage';
import GlossaryPage from './pages/GlossaryPage';
import DonationsPage from './pages/DonationsPage';
import Footer from './components/Footer';

const App = () => {
    return (
        <ThemeProvider>
            <div className='App'>
                <PersistLogin />
                <ScrollToTop />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/dashboard' element={<DashboardPage />} />
                    <Route path='/admin' element={<AdminPage />} />
                    <Route path='/readinglist' element={<ReadingListPage />} />
                    <Route path='/articles' element={<ArticlesPage />} />
                    <Route path='/learn' element={<LearnPage />} />
                    <Route path='/stories' element={<StoriesPage />} />
                    <Route path='/stories/:storyName' element={<StoryPage />} />
                    <Route path='/resources' element={<ResourcesPage />} />
                    <Route path='/glossary' element={<GlossaryPage />} />
                    <Route path='/donations' element={<DonationsPage />} />
                </Routes>
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default App;