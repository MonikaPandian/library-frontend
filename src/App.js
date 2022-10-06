import './App.css';
import { Routes, Route } from "react-router-dom";
import Auth from './Auth';
import Dashboard from './components/Dashboard';
import Ebooks from './components/Ebooks';
import { AppProvider } from './context';
import AddEbooks from './components/AddEbooks';

function App() {
  return (
    <div>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/e-books" element={<Ebooks />} />
          <Route path="/add-ebooks" element={<AddEbooks />} />
        </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
