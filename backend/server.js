import express  from 'express'
import cors  from 'cors'
import dotenv  from 'dotenv'
import mongoose  from 'mongoose'
import path  from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config()
const app = express()

// Simulating __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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