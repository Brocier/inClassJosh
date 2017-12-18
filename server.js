const express = require('express')
const app = express()
const hbs = require('hbs')
const mathController = require('./controllers/mathController.js')
const indexController = require('./controllers/indexController.js')
const greetingController = require('./controllers/greetingController.js')

app.set('view engine', 'hbs')
app.use(express.static(`${__dirname}/public`))
app.use('/greeting', greetingController)
app.use('/math', mathController)
app.use('/', indexController)

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> {
  console.log(`Application is listening on port ${PORT}`)
})