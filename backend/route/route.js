import {members , event , article} from '../data/homeData.js'
import {aboutData} from '../data/aboutUsData.js'
import {heroImage , questionsData} from '../data/questionData.js'

import { sendEmail } from '../helper/mail.js'
export function memberSection(route) {
    route.get('/member', (req, res) => {
        res.status(200).json(members)
    })
}

export function eventSection(route) {
    route.get('/event', (req, res) => {
        res.status(200).json(event)
    })
}

export function articleSection(route) {
    route.get('/article', (req, res) => {
        res.status(200).json(article)
    })
}

export function subscribeChurch(route){
    route.post('/subscribe/church' ,  (req, res) => {
        const email = req.body.email;
        // sendEmail(email)
        console.log(email)
        res.end();
    });
}

export function aboutUs(route){
    route.get('/aboutUsData' , (req,res)=>{
        res.status(200).json(aboutData);
    })
}

export function question(route){
    route.get('/questionData' , (req,res)=>{
        res.status(200).json(questionsData);
    })
}

export function questionHeroImage(route){
    route.get('/heroImage' , (req,res)=>{
        res.status(200).json(heroImage);
    })
}