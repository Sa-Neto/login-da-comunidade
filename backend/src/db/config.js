import mongoose from 'mongoose'

const user = process.env.USER_DB;
const password = process.env.USER_PASSWORD

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.gk8kbgd.mongodb.net/?retryWrites=true&w=majority`)
        console.log('Conectado com sucesso');
        return dbConn
    } catch (error) {
        console.log(error)
    }
}
conn();
export default conn;