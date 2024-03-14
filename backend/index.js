import express  from 'express';
import cors from 'cors';
import homeRoutes from './controller/manageRoutes.js';

const app = express()
app.use(cors())


app.use('/home' , homeRoutes());
app.use('/assets', express.static('assets'));

const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})