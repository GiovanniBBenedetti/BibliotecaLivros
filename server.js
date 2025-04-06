import express from 'express'
import conectaNaDatabase from './config/dbConnect.js'
import routes from "./routes/index.js";
const conexao = await conectaNaDatabase()

conexao.on("error", (erro) =>{
    console.error("Erro de conexão", erro)
})
conexao.once("open", () =>{
    console.log("Conexão efetuada com Sucesso")
})

const app = express()
const port = 3000
app.use(express.json())
routes(app);











app.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})

