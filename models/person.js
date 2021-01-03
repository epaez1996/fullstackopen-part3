/* eslint-disable no-unused-vars */
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
	.then(result => {
		console.log('connected to MongoDB')
	})
	.catch(err => {
		console.log('error connecting to MongoDB:', err.message)
	})

const personsSchema = new mongoose.Schema({
	name: { 
		type: String, 
		unique: true,
		minlength: 3,
	},
	number: { 
		type: String, 
		minlength: 8,
	},
})
personsSchema.plugin(uniqueValidator)

personsSchema.set('toJSON', {
	transform: (document, returnedOBject) => {
		returnedOBject.id = returnedOBject._id.toString()
		delete returnedOBject._id
		delete returnedOBject._v
	}
})


module.exports = mongoose.model('Person', personsSchema)