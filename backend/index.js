import express  from 'express';
import cors from 'cors';
import {homeRoutes , aboutUSRoutes , questionRoutes , gallery , videoListing , event , pastorRoutes} from './controller/manageRoutes.js';

const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());


app.use('/home' , homeRoutes());
app.use('/aboutUS', aboutUSRoutes());
app.use('/question', questionRoutes());
app.use('/gallery' , gallery());
app.use('/pastor' , pastorRoutes());
app.use('/videoListing' , videoListing());
app.use('/event' , event())
app.use('/assets', express.static('assets'));

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})