import {Router} from 'express';
import { memberSection , eventSection , articleSection , subscribeChurch , aboutUs , question , questionHeroImage , bottomGallery} from '../route/route.js';
const route = Router();

export function homeRoutes(){
    memberSection(route);
    eventSection(route);
    articleSection(route);
    subscribeChurch(route);
    return route;
}

export function aboutUSRoutes(){
    aboutUs(route);
    return route;
}

export function questionRoutes(){
    questionHeroImage(route);
    question(route);
    return route;
}

export function gallery(){
    bottomGallery(route);
    return route;
}