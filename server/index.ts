import express from 'express';
import cors from 'cors';
import path from 'path';



const PORT: number = 5000;

const app = express();


app
    .use('/', express.static(path.resolve(__dirname,  '../client', 'build')))
    .use(cors())

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build'))
})


const server = app.listen(PORT, function () {
    console.log('Server has been started! YeYs')
})











