import {useState, useEffect} from "react";
import hello from '../../assets/hello.svg'
import {Link} from 'react-router-dom'

import { useSelector,useDispatch } from "react-redux";

import {register, reset} from '../../slice/userSlice'
import Message from "../../components/Message";

const Register = () => {

  // state
const [email, setEmail] = useState('');
const [name, setName] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');

const dispatch = useDispatch();

const {loading,error} = useSelector((state) => state.auth)

const handleSubmit = (e) => {
  e.preventDefault()
  
  const user = {
    email,
    name,
    password,
    confirmPassword
  }
  console.log(user);
  dispatch(register(user))
}

useEffect(() => {
  dispatch(reset());
},[dispatch]);

  return (
    <div className="container col-11 col-md-9 mt-5" id="form-container">
      <div className="row gx-5">
        <div className="col-md-6">
          <h2>Realize o seu cadastro</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input type="text" name="name" id="name" className="form-control" onChange={(e) => setName(e.target.value)}  value={name || ''}/>
              <label className="form-label">Digite o seu nome</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" name="email" id="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email || ''} />
              <label className="form-label">Digite o seu Email</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" name="password" id="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password || ''} />
              <label className="form-label">Digite a sua senha </label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" name="confirmPassword" id="confirmPassword" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword || ''} />
              <label className="form-label">Confirme a sua senha </label>
            </div>
            <div className="d-grid gap-2">
              {!loading && <input type="submit" className="btn btn-primary" value="Cadastrar" />}
              {loading && <input type="submit" className="btn btn-primary" value="Aguarde" />}
              {error && <Message msg={error}  type='danger'/>}
            </div>
          </form>
        </div>
        <div className="col-md-6 mt-4">
          <div className="row align-items-center">
            <div className="col-12">
              <img src={hello} className="img-fluid" />
            </div>
            <div className="col-12">
                <span>Já tem conta <Link to='/login'>Clique aqui </Link> </span> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
