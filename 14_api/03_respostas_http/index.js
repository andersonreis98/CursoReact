const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.post('/createproduct',(req,res)=>{

    const name = req.body.name
    const price = req.body.price

    if(!name){
        res.status(422).json({message:"O produto está sem nome"})
        return
    }else{

        res.status(201).json({message:"O produto "+name+" no valor de " +price+" foi adicionado com sucesso "})

    }

// Respostas Informativas (100 – 199)
// Respostas bem-sucedidas (200 – 299)
// Mensagens de redirecionamento (300 – 399)
// Respostas de erro do cliente (400 – 499)
// Respostas de erro do servidor (500 – 599)
})

app.get('/',(req,res)=>{
    
res.status(200).json({message:'Terceira rota criada com sucesso!'})

})

app.listen(3000)