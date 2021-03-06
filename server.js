const express = require('express')
const app = express()
const path = require('path')

// Importing files
const router = require('./public/js/router.js')
app.use(router)

const fs = require('fs')

// Setting up port for express to use
app.listen(process.env.PORT || 3000)

//  Serve html, css and js files in the static directory
app.use(express.static(path.join(__dirname, 'dist')))

// View Engine init
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Express bodyparser data handling
// configure the app to use bodyParser()
app.use(express.urlencoded({ extended: false }))

// POST /login gets urlencoded bodies
app.post('/submit', (req, res) => {
  storeData(req.body)
  const { id } = req.body
  res.redirect(`/saved/${id}`)
})

// Check if user exists and render the corresponding data in the page.
app.post('/check-user', (req, res) => {
  console.log('running')
  const jsonFile = 'data/data.json'

  fs.readFile(jsonFile, (err, content) => {
    const id = req.body.usercode
    console.log(id)
    if (err) return console.log(err)

    const contentJSON = JSON.parse(content)

    const index = contentJSON.data.findIndex((data) => data.id === id)

    if (index === -1) {
      res.render('404.ejs')
    } else {
      console.log('exists')
      res.redirect(`/shirt-designer/${id}`)
    }
  })
})

// Code from Menno
function storeData (data) {
  const { id, gender, neck, size, color, text, font, textColor } = data
  const jsonFile = 'data/data.json'

  fs.readFile(jsonFile, (err, content) => {
    if (err) return console.log(err)

    const contentJSON = JSON.parse(content)

    const formData = { id, gender, neck, size, color, text, font, textColor }
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
