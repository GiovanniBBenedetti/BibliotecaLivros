import express from 'express'
const app = express()

app.use(express.json())
const port = 3000


const livros = [
    {
        id: 1,
        titulo:"O senhor dos aneis"
    },
    {
        id: 2,
        titulo:"O hobbit"
    }
]


function buscarLivro(id){
    return livros.findIndex(livro => {
        return livro.id === parseInt(id)
    })
}


app.get("/",  (req, res) => {
    res.send('olaaa')
})

app.get("/livros",  (req, res) => {
    res.status(200).json(livros);
})
app.get("/livros/:id", (req,res) =>{
    const index = buscarLivro(req.params.id)
    res.status(200).json(livros[index])
})

app.post("/livros", (req, res) =>{
    livros.push(req.body)
    res.status(201).send("livro cadastrado com sucesso")
})






app.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})
