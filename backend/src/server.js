import 'dotenv/config'
import app from './index';

const PORT = process.env.PORT || 5004;

app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta:${PORT}`)
})