import {members , event , article} from '../data/homeData.js'
import { sendEmail } from '../mail.js'
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

