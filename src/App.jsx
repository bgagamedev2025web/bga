import { BrowserRouter, Routes, Route } from 'react-router';
import { useState } from 'react';

import Layout from './pages/Layout.jsx';
import HomePage from './pages/HomePage.jsx';
import ArtPage from './pages/ArtPage.jsx';
import BioPage from './pages/BioPage.jsx';
import Contact from './pages/ContactPage.jsx';
import ProgrammingPage from './pages/ProgrammingPage.jsx';

function App() {
  
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout user={user} setUser={setUser} />}>
          <Route index element={<HomePage />} />
          <Route path="art" element={<ArtPage />} />
          <Route path="programming" element={<ProgrammingPage />} />
          <Route path="bio" element={<BioPage />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
