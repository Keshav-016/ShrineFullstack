export function memberSection(route) {
    route.use('/member', (req, res) => {
        res.status(200).json(
            {
                heading: "Feel god closer to  your members",
                subHeading: "A long established fact that a reader will be distracted by the readable content of a page when looking.A long established fact that.A long.",
                memberCardData: [
                    {
                        imgUrl: '/images/members/vonda.png',
                        title: 'Vonda Sande',
                        content: 'Sir Gerry Serrano',
                    },
                    {
                        imgUrl: '/images/members/ronnie.png',
                        title: 'Ronnie Ferrell',
                        content: 'Sir Gerry Serrano',
                    },
                    {
                        imgUrl: '/images/members/lorri.png',
                        title: 'Lori Vegaso',
                        content: 'Sir Gerry Serrano',
                    },
                    {
                        imgUrl: '/images/members/annie.png',
                        title: 'Annie Trevino',
                        content: 'Sir Gerry Serrano',
                    },
                ]
            }
        )
    })
}

export function eventSection(route) {
    route.use('/event', (req, res) => {
        res.status(200).json(
            {
                heading: "See our all events",
                subHeading: "A long established fact that a reader will be distracted by the readable content of a page when looking.A long established fact that.A long.",
                eventCardData: [
                    {
                        imgUrl: '/images/events/meditation.png',
                        title: 'Mindfullness Meidtation',
                        content: 'A long established fact that a reader will be <br> distracted by the readable content of...',
                        date: '24.12.2023-28.12.2023',
                        location: 'Russian Federation St. Peter\'s Church',
                        time: '4:38-8:24',
                        button: 'Join Now',
                    },
                    {
                        imgUrl: '/images/events/seminar.png',
                        title: 'The positive aura seminar',
                        content: 'A long established fact that a reader will be <br> distracted by the readable content of...',
                        date: '24.12.2023-28.12.2023',
                        location: 'Russian Federation St. Peter\'s Church',
                        time: '4:38-8:24',
                        button: 'Join Now',
                    },

                ]
            }
        )
    })
}

export function articleSection(route) {
    route.use('/article', (req, res) => {
        res.status(200).json(
            {
                heading: "Our latest Articles",
                subHeading: "A long established fact that a reader will be distracted by the readable content of a page when looking.A long established fact that.A long.",
                articleCardData: [
                    {
                        imgUrl: '/images/article/baptism.png',
                        title: 'Baptism Sunday of  church',
                        content: 'Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...',
                        userImgUrl: '/images/article/baptismGirl.png',
                        readTime: '2min read'
                    },
                    {
                        imgUrl: '/images/article/baptismRed.png',
                        title: 'Baptism Sunday of  church',
                        content: 'Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...',
                        userImgUrl: '/images/article/baptismRedGirl.png',
                        readTime: '4min read'
                    },
                    {
                        imgUrl: '/images/article/baptismBlack.png',
                        title: 'Baptism Sunday of  church',
                        content: 'Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...',
                        userImgUrl: '/images/article/baptismBlackGirl.png',
                        readTime: '2min read'
                    },
                    {
                        imgUrl: '/images/article/baptismRed.png',
                        title: 'Baptism Sunday of  church',
                        content: 'Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...',
                        userImgUrl: '/images/article/baptismRedGirl.png',
                        readTime: '4min read'
                    },
                    {
                        imgUrl: '/images/article/baptismBlack.png',
                        title: 'Baptism Sunday of  church',
                        content: 'Sir Gerry Serrano A long established fact that a reader will be distracted by the readable content of...',
                        userImgUrl: '/images/article/baptismBlackGirl.png',
                        readTime: '2min read'
                    }
                ]
            }
        )
    })
}


