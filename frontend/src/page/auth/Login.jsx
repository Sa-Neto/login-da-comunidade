import { Link } from "react-router-dom";
import loginSvg from '../../assets/login.svg'
//Hooks
import { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//Components
import Message from "../../components/Message";
//Redux
import {login,reset} from '../../slice/userSlice'

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const dispatch = useDispatch();

  const {loading,error} = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = {
      email,
      password
    }
    console.log(user)
    dispatch(login(user))
  }
  useEffect(() => {
    dispatch(reset())
  },[dispatch]);

  return (
    <div className="container col-11 col-md-9 mt-5" id="form-container">
    <div className="row gx-5">
      <div className="col-md-6 mt-5">
        <h2 className="text-center">Realize o seu Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input type="email" name="email" id="email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
            <label className="form-label">Digite o seu Email</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" name="password" id="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
            <label className="form-label">Digite a sua senha </label>
          </div>
          <div className="d-grid gap-2">
            {!loading && <input type="submit" className="btn btn-primary" value="Cadastrar" />}
            {loading && <input type="submit" className="btn btn-primary" value="Aguarde" />}
            {error && <Message msg={error}  type='danger'/>}
          </div>
        </form>
      </div>
      <div className="col-md-6 mt-5">
        <div className="row align-items-center">
          <div className="col-12 ">
            <img src={loginSvg} className="img-fluid" />
          </div>
          <div className="col-12 mt-2">
              <span>Não possui conta ?<Link to='/register'>Clique aqui </Link> </span> 
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;
