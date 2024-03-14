import {Router} from 'express';
import { memberSection , eventSection , articleSection , subscribeChurch} from '../route/route.js';
const route = Router();

export default function homeRoutes(){
    memberSection(route);
    eventSection(route);
    articleSection(route);
    subscribeChurch(route);
    return route;
}