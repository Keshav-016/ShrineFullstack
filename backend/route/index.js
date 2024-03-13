import {Router} from 'express';
import { memberSection , eventSection , articleSection } from './route.js';
const route = Router();

export default function homeRoutes(){
    memberSection(route);
    eventSection(route);
    articleSection(route);
    return route;
}