const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const router = express.Router()

const fs = require('fs')

// Setting up port for express to use
app.listen(port, () => console.log(`app ${port}!`))

//  Serve html, css and js files in the static directory
app.use(express.static(path.join(__dirname, 'dist')))

// View Engine init
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Rendering homescreen
app.get('/', function (req, res) {
  res.render('test.ejs', {
    data: getRandomNumber(10000)
  })
})

// Rendering homescreen
app.get('/vorm', function (req, res) {
  res.render('vorm.ejs')
})

// Code from Menno
function storeData (data) {
  const { name, email } = data
  const jsonFile = 'data/data.json'

  fs.readFile(jsonFile, (err, content) => {
    if (err) return console.log(err)

    const contentJSON = JSON.parse(content)

    const formData = { name, email }

    contentJSON.data.push(formData)

    fs.writeFile(jsonFile, JSON.stringify(contentJSON), err => {
      if (err) console.log(err)

      console.log(jsonFile)
    })
  })
}

function getRandomNumber (between) {
  return Math.floor(Math.random() * between) + 1
}

// Express bodyparser data handling
// configure the app to use bodyParser()
app.use(express.urlencoded({ extended: false }))

// POST /login gets urlencoded bodies
app.post('/submit', (req, res) => {
  storeData(req.body)
  console.log(req.body)
  res.redirect('/')
})
