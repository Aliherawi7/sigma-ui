import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Spinner from './components/UI/Loading/Spinner';
import { Suspense } from 'react';
import Signup from './pages/Login/Signup';
import { useSelector } from 'react-redux';
import Wrapper from './components/HigherOrderComponent/Wrapper';
import HeaderNavbar from './components/HeaderNavbar/HeaderNavbar';


const Home = React.lazy(() => import("./pages/Home/Home"));
const Navbar = React.lazy(() => import('./components/navbar/Navbar'));
const NotificationArea = React.lazy(() => import('./components/NotificationArea/NotificationArea'));
const Chat = React.lazy(() => import('./pages/Chat/Chat'));
const Login = React.lazy(() => import("./pages/Login/Login"));
const Profile = React.lazy(() => import("./pages/Profile/Profile"));
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'));

function App() {
  const state = useSelector(state => state.authentication)

  return (
    <div className="App">
      <main className='layout'>
        <Router>
          <Suspense fallback={<Spinner />}>
            {state.isAuthenticated ? <HeaderNavbar /> : null}
            {state.isAuthenticated ? <Navbar /> : null}
            {state.isAuthenticated ? <NotificationArea /> : null}
            <Wrapper>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/chat' element={<Chat />} />
                <Route path='load' element={<Spinner />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </Wrapper>
          </Suspense>
        </Router>
      </main>
    </div>
  );
}

export default App;
