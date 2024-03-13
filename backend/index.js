import express  from 'express';
import cors from 'cors';

const app = express()
app.use(cors())


import homeRoutes from './route/index.js';


app.use('/home' , homeRoutes());
app.use('/images', express.static('assets/images'));

const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})