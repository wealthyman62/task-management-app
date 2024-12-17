const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const path = require('path')

dotenv.config()
const app = express()

//Middleware
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

//Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.err(err))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/v1', (req, res) => {
    res.send('Task Management App Backend Running...')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
export const viteNodeApp = app