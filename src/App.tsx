import { useState } from 'react';

import Home from './pages/Home';
import Layout from './pages/Layout';
import MobileNav from './Components/mobile/MobileNav';
import Wrapper from './Components/Wrapper';
import Destination from './pages/Destination';

import jsonData from './data.json';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

function App() {
  const [data, setData] = useState(jsonData);
  const { destinations, crew, technology } = data;
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(() => !isOpen);
  }
  console.log(data);
  return (
    <BrowserRouter>
      <Layout toggleMenu={toggleMenu} isOpen={isOpen}>
        <MobileNav toggleMenu={toggleMenu} isOpen={isOpen} />
        <Wrapper>
          <Routes>
            <Route index path='home' element={<Home />} />
            <Route
              path='destination'
              element={<Destination destinations={destinations} />}
            />
            <Route path='crew' element={<Crew crew={crew} />} />
            <Route
              path='technology'
              element={<Technology technology={technology} />}
            />
          </Routes>
        </Wrapper>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
