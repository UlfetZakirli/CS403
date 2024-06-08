const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
require('colors')

const app = express()
app.use(bodyParser.json())


const students = [
    {
        id: 1,
        name: 'Ferhad'
    },
    {
        id: 2,
        name: 'Elnur'
    },
    {
        id: 3,
        name: 'Tural'
    },
    {
        id: 4,
        name: 'Isa'
    },

]


app.get('/students', (req, res) => {
    res.status(200).json(students)
})

app.get('/students/:id', (req, res) => {
    const param = req.params
    const student = students.find((item) => item.id == param.id)
    if (student) {
        return res.status(200).json(student)
    } else {
        return res.status(400).json('Student not found with the given id !')
    }
})

app.post('/students', (req, res) => {
    const student = req.body
    students.push(student)
    return res.status(201).json('Student added successfully !')
})


// db.connect(process.env.DATA_BASE_URL)

// const PORT = process.env.MAIN_PORT || process.env.EXTRA_PORT

app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`.italic.red))

// cut off - Ctrl+c
// take up - node index.js

// status code
// 200 - success
// 201 - success created

// 400 - bad request
// 401 - not authontication
// 403 - forbiden
// 404 - not found

// 500 - internal server error
