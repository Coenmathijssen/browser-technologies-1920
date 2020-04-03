const express = require('express')
const router = express.Router()
const fs = require('fs')

// Rendering shirt designer
router.get('/', function (req, res) {
  res.render('user-form.ejs', {
    generatedID: getRandomNumber(10000),
    userData: null
  })
})

// Rendering shirt designer
router.get('/shirt-designer', function (req, res) {
  res.render('user-form.ejs', {
    generatedID: getRandomNumber(10000),
    userData: null
  })
})

// Rendering saved page
router.get('/saved/:id', function (req, res) {
  const id = req.params.id
  res.render('saved.ejs', {
    id: id
  })
})

// Test
router.get('/test', (req, res) => {
  res.render('404.ejs')
})

// Rendering the form screen for a specific user
router.get('/shirt-designer/:id', findItem)

async function findItem (req, res) {
  const id = req.params.id
  const foundItem = await matchItem(id)
  res.render('user-form.ejs', {
    userData: foundItem
  })
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

module.exports = router
