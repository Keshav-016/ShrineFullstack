import express  from 'express';
import cors from 'cors';
import manageRoutes from './controller/manageRoutes.js';

const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());


app.use('/home' , manageRoutes());
app.use('/assets', express.static('assets'));

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})