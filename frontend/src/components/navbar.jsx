import logo from '../assets/logo.png';
import {useAuth} from '../hooks/useAuth';
import { useDispatch ,useSelector } from 'react-redux';
import {logout, reset} from '../slice/userSlice';
import {  useNavigate } from 'react-router-dom';
const navbar = () => {
  const {auth} = useAuth();
  const {user} = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }
  return (
  <>
    {auth ? (
    <>
    <nav className="navbar primary">
        <div className="container-fluid">
          <img src={logo} />
           <ul className='list-unstyled'>
            <li><button className='btn btn-danger' onClick={handleLogout} >Sair</button></li>
           </ul>
        </div>
    </nav>
    </>
  ): (
    <>
      <nav className="navbar primary">
        <div className="container-fluid">
          <img src={logo} />
        </div>
      </nav>
    </>
  )}
  </>
  )
}

export default navbar