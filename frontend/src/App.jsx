import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';

import Home from './page/Home';
import Register from './page/auth/Register';
import Login from './page/auth/Login';
import Navbar from './components/navbar';
import {useAuth} from './hooks/useAuth';

function App() { 
  const {auth, loading} = useAuth();

  if(loading){
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
     <BrowserRouter>      
      <Navbar/>
      <div className="container">
      <Routes>
        <Route path='/' element={auth ? <Home/> : <Navigate to="/login" />} />
        <Route path='/login' element={!auth ? <Login/> : <Navigate to="/"/> } />
        <Route path='/register' element={!auth ? <Register/> : <Navigate to="/" />} />
      </Routes>
      </div>
     </BrowserRouter>
    </div>
  )
}

export default App
