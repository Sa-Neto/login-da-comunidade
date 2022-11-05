import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;
const createToken = async (user,req,res) => {
  //create token
  const token = jwt.sign({
    name:user.name,
    id:user._id
  },secret)
  //return
  res.status(201).json({
    message: 'Você está authenticado',
    token,
    userId:user._id
  })
}
export default createToken;