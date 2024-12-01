import './App.css';
import './styles/commonStyles.css';
import './styles/HomePage.css';
import './styles/ProjectPage.css';
import './styles/AboutPage.css';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import ProjectRoutes from './routes/ProjectRoutes';
// import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectRoutes />} />
        {/* <Route path="about" element={<AboutPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
