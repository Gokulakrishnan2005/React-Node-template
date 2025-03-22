import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage  from './pages/Homepage.jsx';
import Header from './componants/Header.jsx';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/home" element={<HomePage />} /> 
        </Routes>
    </BrowserRouter>
  );
}
