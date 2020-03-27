const express = require('express')
const app = express()
const port = 3000
const path = require('path')

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
    id: getRandomNumber(10000)
  })
})

// Rendering shirt designer
app.get('/shirt-designer', function (req, res) {
  res.render('user-form.ejs', {
    generatedID: getRandomNumber(10000),
    userData: null
  })
})

// Rendering the form screen for a specific user
app.get('/shirt-designer/:id', findItem)

async function findItem (req, res) {
  const id = req.params.id
  const foundItem = await matchItem(id)
  res.render('user-form.ejs', {
    userData: foundItem
  })
}

// Code from Menno
function storeData (data) {
  const { id, gender, neck, size, color } = data
  const jsonFile = 'data/data.json'

  fs.readFile(jsonFile, (err, content) => {
    if (err) return console.log(err)

    const contentJSON = JSON.parse(content)

    const formData = { id, gender, neck, size, color }
    console.log('formData: ', formData)

    checkForDuplicateData(contentJSON, formData)


    fs.writeFile(jsonFile, JSON.stringify(contentJSON), err => {
      if (err) console.log(err)
    })
  })
}

function checkForDuplicateData (contentJSON, formData) {
  const index = contentJSON.data.findIndex((data) => data.id === formData.id)

  if (index === -1) {
    console.log('doesnt exist')
    contentJSON.data.push(formData)
  } else {
    console.log('exists')
    contentJSON.data[index] = formData
  }
}

function matchItem (id) {
  return new Promise((resolve, reject) => {
    const jsonFile = 'data/data.json'
    return fs.readFile(jsonFile, (err, content) => {
      if (err) return console.log(err)
      const contentJSON = JSON.parse(content)
      const foundItem = contentJSON.data.filter(found => { return found.id === id })
      resolve((foundItem.length !== 0 ? foundItem[0] : false))
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
  res.redirect('/')
})
