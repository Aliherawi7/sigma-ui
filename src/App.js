
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home"
import Navbar from './components/navbar/Navbar';
import NotificationArea from './components/NotificationArea/NotificationArea';

function App() {
  return (
    <div className="App">
      <main className='layout'>
        <Router>
          <Navbar />
          <NotificationArea />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<h2>Not Found</h2>} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
