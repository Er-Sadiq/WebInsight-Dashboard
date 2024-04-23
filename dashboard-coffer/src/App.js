import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Layout from './Components/Layout/Layout';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
        </Route>
        
    </Routes>
</Router>
  );
}

export default App;
