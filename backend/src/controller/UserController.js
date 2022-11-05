import bcrypt from 'bcryptjs';
import User from '../models/User';
import createToken from '../helpers/create-token';

const register = async (req,res) => {
  const {name, email, password, confirmPassword} = req.body;
  
  //Validação para que todos os campos sejam preenchidos 
  if(!name || !email  || !password || !confirmPassword){
   return res.status(422).json({ error: ["Preencha todos os campos "]})
  }

  if(name.length <= 3){
    return res.status(422).json({error: ["Nome muito pequeno"]})
  }

  const user = await User.findOne({email})
  
  if(user){
    return res.status(422).json({error: ["Por favor ultilize outro email"]})
  }
  if(password.length < 3 ){
    return res.status(422).json({error : ["Senha muito pequena"]})
  }

  if(password != confirmPassword){
    return res.status(422).json({ error: ["Senha e com confirmação de senha tem que ser iguais"]})
  }

  try {
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hashSync(password,salt)
    
    const user = new User ({
      name,
      email,
      password:passwordHash
    })
    await user.save()
 
    createToken(user,req,res);
  } catch (error) {
    console.log(error)
  }

}

const login = async (req,res) => {
  const {email,password} = req.body;
  //fazendo pesquisa no banco de dados
  const user = await User.findOne({email})
  //checando se é nulo
  if (!user) {
    return res.status(422).json({ error : ['Email ou password está errado']})
  }
  console.log(user)
  //comparando o valor das celulas
  const comparePassword = await bcrypt.compare(password,user.password)
  if(!comparePassword){
    return res.status(422).json({ error : ['Email ou password está errado']})
  }

  createToken(user,req,res)
}

const userController = {
  register,
  login,
}

export default userController;