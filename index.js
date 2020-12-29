const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.json())

morgan.token('postdata', (request, response) => {
    const data = request.body
    return JSON.stringify(data)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :postdata'))
let persons = [
    {
        id: 1, 
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Hello there</h1>')
})

app.get('/info', (request, response) => {
    const requestTime = new Date()
    response.send(`Phonebook has info for ${persons.length} people 
    ${requestTime}`)
})

app.get('/api/persons', (request, response) => {
    response.send(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find((person) => person.id === id)
    response.send(person)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter((person) => person.id !== id)
    response.status(204).end()
})

const randomId = () => Math.floor(Math.random() * 1000)

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'name or number missing'
        })
    }
    
    const doesNameExist = persons.find((person) => person.name === body.name)
    if (doesNameExist) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }


    const person = {
        id: randomId(),
        name: body.name,
        number: body.number
    }
    persons = persons.concat(person)

    response.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})