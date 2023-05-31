import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import NotMatch from './routes/NotMatch';
import APIquote from './components/APIquote';
import Home from './routes/Home';
import DoMaths from './routes/DoMaths';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<DoMaths />} />
        <Route path="quote" element={<APIquote />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
