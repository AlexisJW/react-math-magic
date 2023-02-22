import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import CalculatorPage from './routes/CalculatorPage';
import Home from './routes/Home';
import Quote from './routes/Quote';
import NotMatch from './routes/NotMatch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
