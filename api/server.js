import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const prisma =  new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())

app.post('/usuarios', async (req, res) => { 
    await prisma.user.create({
        data: { 
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    res.status(201).json(req.body)
    
})

app.get('/usuarios', async (req, res) => { 
    const users = await prisma.user.findMany()
    res.status(200).json(users)
})


app.put('/usuarios/:id', async (req, res) => { 
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: { 
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })
    res.status(201).json(req.body)
    
})


app.delete('/usuarios/:id', async (req, res) => { 
    await prisma.user.delete({
        where: {
            id: req.params.id
        },
        
    })
    res.status(200).json(req.body)
    
})
app.listen(3000)

/* 
usuario: washingtonchagas
senha mongoDB: xBtRL2V1uK9IAECI
*/