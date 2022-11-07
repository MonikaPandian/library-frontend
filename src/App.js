import './App.css';
import SignIn from './Auth/SignIn'
import SignUp from './Auth/SignUp';
import { Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Ebooks from './components/Ebooks';
import { AppProvider } from './context';
import AddEbooks from './components/AddEbooks';

function App() {
  return (
    <div>
      <AppProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/e-books" element={<Ebooks />} />
          <Route path="/add-ebooks" element={<AddEbooks />} />
        </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
