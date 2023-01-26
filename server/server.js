const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const port = 8080

app.use(cors())
app.use(bodyParser.json())

const {Schema} = mongoose;

const teachersSchema = new Schema ({
    img: {type: String, require: true},
    name: {type: String, require: true},
    subject: {type: String, require: true},
    description: {type: String, require: true},
    salary: {type: Number, require: true},
},
{timestamps: true}
)

const Teachers = mongoose.model("teachers", teachersSchema)

app.get('/', (req, res) => {
    Teachers.find({}, (error, docs) => {
        if(!error){
            res.send(docs)
        }else{
            res.status(500).json({message: error})
        }
    })
})
app.get('/:id', (req, res) => {
    const {id} = req.params
    Teachers.findById(id, (error, doc) => {
        if(!error){
            res.send(doc)
        }else{
            res.status(500).json({message: error})
        }
    })
})

app.delete('/:id', (req, res) => {
    const {id} = req.params
    Teachers.findByIdAndDelete(id, (error) => {
        if(!error){
            res.send("succsess")
        }else{
            res.status(404).json({message: error})
        }
    })
})

app.post("/",  (req, res) => {
    let newTeacher = new Teachers ({
        img: req.body.img,
        name: req.body.name,
        subject: req.body.subject,
        description: req.body.description,
        salary: req.body.salary,
    })
    newTeacher.save()
    res.send("succsess")
})

mongoose.set('strictQuery', false)

mongoose.connect(`mongodb+srv://lanakhidirova:lana@cluster0.rwyv5wv.mongodb.net/?retryWrites=true&w=majority`, (error) => {
    if(!error){
        app.listen(port, () => {
          console.log(`Example app listening on port http://localhost:${port}`)
        })
    }
})
