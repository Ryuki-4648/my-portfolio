import './App.css';
import Work from './routes/Work';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './routes/NotFound';
import { Box } from '@chakra-ui/react';
import Home from './routes/Home';

function App() {
  return (
    <>
    <Box className="App">
      <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        
      </BrowserRouter>
    </Box>
    </>
  );
}

export default App;
