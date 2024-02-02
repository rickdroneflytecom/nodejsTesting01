
const express = require('express')
const router = express.Router()

router.use(logger)

router.get('/', (req, res) => { 
    console.log(req.query.name) 
    res.send('User List')
}) 

router.get('/new', (req, res) => {
    res.render("users/new", { firstName: 'Test' })
    // res.redirect("/users/${users.length - 1}")
})

router.post('/', (req, res) => {
    const isValid = false
        if (isValid) {
            users.push({firstName: req.body.firstName})
            res.redirect(`/users/${users.length - 1}`)

        } else {
            console.log("ERROR")
            res.render("users/new", { firstName: req.body.firstName })
        }
})

router.get('/:id', (req, res) => {
    console.log(req.user)
    res.send(`Get User With ID ${req.params.id}`)
})

router.put('/:id', (req, res) => {
    res.send(`Update User With ID ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    res.send(`Delete User With ID ${req.params.id}`)
})

const users = [
    {
        id: 1,
        name: 'Kyle'
    },
    {
        id: 2,
        name: 'Sally'
    }
]

router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

function logger(req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
}

module.exports = router