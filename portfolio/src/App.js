import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import './App.scss';
import './index.scss';

import Work from './routes/Work';
import NotFound from './routes/NotFound';
import Home from './routes/Home';
import JobHistory from './routes/JobHistory';

function App() {
  return (
    <>
    <Box className="App">
      <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/job-history" element={<JobHistory />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        
      </BrowserRouter>
    </Box>
    </>
  );
}

export default App;
