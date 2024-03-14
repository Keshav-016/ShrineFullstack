import {members , event , article} from '../data/homeData.js'
export function memberSection(route) {
    route.use('/member', (req, res) => {
        res.status(200).json(members)
    })
}

export function eventSection(route) {
    route.use('/event', (req, res) => {
        res.status(200).json(event)
    })
}

export function articleSection(route) {
    route.use('/article', (req, res) => {
        res.status(200).json(article)
    })
}


