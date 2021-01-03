const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]

const url = 
 `mongodb+srv://eddsipe:${password}@cluster0.p9l9q.mongodb.net/Phonebook?retryWrites=true&w=majority`

 mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})

 const personsSchema = new mongoose.Schema({
     name: String,
     number: String,
 })

 const Person = mongoose.model('Person', personsSchema)

if (process.argv.length === 3) {
    console.log('phonebook:')
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(`${person.name} ${person.number}`)
        })
        mongoose.connection.close()
    })
}

if (process.argv.length === 5) {
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4],
    })

    person.save().then(result => {
        console.log('person saved')
        mongoose.connection.close()
    })
}

/*
 const person = new Person({
     name: "Arto Hellas",
     number: "040-123456"
 })

 person.save().then(result => {
     console.log('person saved')
     mongoose.connection.close()
 })
 */