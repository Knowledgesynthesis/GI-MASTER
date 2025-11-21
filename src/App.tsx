import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ModulesPage } from './pages/ModulesPage';
import { UpperGIBleedPage } from './pages/modules/UpperGIBleedPage';
import { LowerGIBleedPage } from './pages/modules/LowerGIBleedPage';
import { PancreatitisPage } from './pages/modules/PancreatitisPage';
import { HPyloriPage } from './pages/modules/HPyloriPage';
import { IBDPage } from './pages/modules/IBDPage';
import { HepaticFailurePage } from './pages/modules/HepaticFailurePage';
import { GallstonePage } from './pages/modules/GallstonePage';
import { AssessmentPage } from './pages/AssessmentPage';
import { GlossaryPage } from './pages/GlossaryPage';
import { SettingsPage } from './pages/SettingsPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/modules" element={<ModulesPage />} />
          <Route path="/modules/upper-gi-bleed" element={<UpperGIBleedPage />} />
          <Route path="/modules/lower-gi-bleed" element={<LowerGIBleedPage />} />
          <Route path="/modules/pancreatitis" element={<PancreatitisPage />} />
          <Route path="/modules/h-pylori" element={<HPyloriPage />} />
          <Route path="/modules/ibd" element={<IBDPage />} />
          <Route path="/modules/hepatic-failure" element={<HepaticFailurePage />} />
          <Route path="/modules/gallstone" element={<GallstonePage />} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
