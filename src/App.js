import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Spinner from './components/UI/Loading/Spinner';
import { Suspense } from 'react';

const Home = React.lazy(() => import("./pages/Home/Home"))
const Navbar = React.lazy(() => import('./components/navbar/Navbar'))
const NotificationArea = React.lazy(() => import('./components/NotificationArea/NotificationArea'))
const Chat = React.lazy(() => import('./pages/Chat/Chat'))
const Login = React.lazy(() => import("./pages/Login/Login"))

function App() {
  return (
      <div className="App">
        <main className='layout'>
          <Router>
          <Suspense fallback={<Spinner />}>
            <Navbar />
            <NotificationArea />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/chat' element={<Chat />} />
              <Route path='load' element={<Spinner />} />
              <Route path='/login' element={<Login />} />
              <Route path='*' element={<h2>Not Found</h2>} />
            </Routes>
            </Suspense>
          </Router>
        </main>
      </div>
  );
}

export default App;
