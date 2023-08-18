const data = {
    products: [
        {
            name: "aluminum plant",
            slug: "aluminum-plant",
            category: "indoorPlants",
            image: "/assets/plantImages/aluminumPlant.jpg",
            price: 26.0,
            countInStock: 4,
            grower: "Alexandra",
            rating: 4.5,
            numReviews: 11,
            description:
                "Pretium diam ornare! Architecto occaecati tempor aptent cum nesciunt dignissimos parturient a. Adipisicing placeat quibusdam",
        },
        {
            name: "arrowHead",
            slug: "arrow-head",
            category: "indoorPlants",
            image: "/assets/plantImages/arrowHead.jpg",
            price: 32.0,
            countInStock: 12,
            grower: "Pardis",
            rating: 4,
            numReviews: 7,
            description:
                "Pretium diam ornare! Architecto occaecati tempor aptent cum nesciunt dignissimos parturient a. Adipisicing placeat quibusdam",
        },
        {
            name: "Chinese ever green",
            slug: "chinese-ever-green",
            category: "indoorPlants",
            image: "/assets/plantImages/chineseEverGreen.jpg",
            price: 14.0,
            countInStock: 5,
            grower: "Hamid",
            rating: 5,
            numReviews: 14,
            description:
                "Pretium diam ornare! Architecto occaecati tempor aptent cum nesciunt dignissimos parturient a. Adipisicing placeat quibusdam",
        },
        {
            name: "hanging weeping fig",
            slug: "hanging-weeping-fig",
            category: "indoorPlants",
            image: "/assets/plantImages/hangingWeepingFig.jpg",
            price: 33.0,
            countInStock: 14,
            grower: "Abolfazl",
            rating: 5,
            numReviews: 11,
            description:
                "Pretium diam ornare! Architecto occaecati tempor aptent cum nesciunt dignissimos parturient a. Adipisicing placeat quibusdam",
        },
        {
            name: "rubber indoor plant",
            slug: "rubber-indoor-plant",
            category: "indoorPlants",
            image: "/assets/plantImages/rubberIndoorPlant.jpg",
            price: 45.0,
            countInStock: 14,
            grower: "Amir",
            rating: 5,
            numReviews: 11,
            description:
                "Pretium diam ornare! Architecto occaecati tempor aptent cum nesciunt dignissimos parturient a. Adipisicing placeat quibusdam",
        },
        {
            name: "grafted cactus",
            slug: "grafted-cactus",
            category: "cactus",
            image: "/assets/plantImages/graftedCactus.jpg",
            price: 32.0,
            countInStock: 14,
            grower: "jesse",
            rating: 3.5,
            numReviews: 34,
            description:
                "Pretium diam ornare! Architecto occaecati tempor aptent cum nesciunt dignissimos parturient a. Adipisicing placeat quibusdam",
        },
        {
            name: "office desk cactus",
            slug: "office-desk-cactus",
            category: "cactus",
            image: "/assets/plantImages/officeDeskCactus.jpg",
            price: 32.0,
            countInStock: 14,
            grower: "walter",
            rating: 4,
            numReviews: 34,
            description:
                "Pretium diam ornare! Architecto occaecati tempor aptent cum nesciunt dignissimos parturient a. Adipisicing placeat quibusdam",
        },
        {
            name: "old lady cacuts",
            slug: "old-lady-cactus",
            category: "cactus",
            image: "/assets/plantImages/oldLadyCactus.jpg",
            price: 210.0,
            countInStock: 14,
            grower: "mahdi",
            rating: 4,
            numReviews: 34,
            description:
                "Pretium diam ornare! Architecto occaecati tempor aptent cum nesciunt dignissimos parturient a. Adipisicing placeat quibusdam",
        },
        {
            name: "the evergreen lush",
            slug: "the-ever-green-lush",
            category: "cactus",
            image: "/assets/plantImages/theEverGreenLush.jpg",
            price: 70.0,
            countInStock: 10,
            grower: "sara",
            rating: 4,
            numReviews: 34,
            description:
                "Pretium diam ornare! Architecto occaecati tempor aptent cum nesciunt dignissimos parturient a. Adipisicing placeat quibusdam",
        },
        {
            name: "gonialoe veriegata",
            slug: "gonialoe-veriegata",
            category: "succulent",
            image: "/assets/plantImages/gonialoeVeriegata.jpg",
            price: 40.0,
            countInStock: 13,
            grower: "pardis",
            rating: 4.5,
            numReviews: 34,
            description:
                "Pretium diam ornare! Architecto occaecati tempor aptent cum nesciunt dignissimos parturient a. Adipisicing placeat quibusdam",
        },
        {
            name: "boncellensis secullant",
            slug: "boncellensis-secullant",
            category: "succulent",
            image: "/assets/plantImages/boncellensisSecullant.jpg",
            price: 40.0,
            countInStock: 13,
            grower: "sara",
            rating: 4.5,
            numReviews: 34,
            description:
                "Pretium diam ornare! Architecto occaecati tempor aptent cum nesciunt dignissimos parturient a. Adipisicing placeat quibusdam",
        },
        {
            name: "thorny secculent",
            slug: "thorny-seculent",
            category: "succulent",
            image: "/assets/plantImages/thornySecculent.jpg",
            price: 40.0,
            countInStock: 13,
            grower: "sara",
            rating: 4.5,
            numReviews: 34,
            description:
                "Pretium diam ornare! Architecto occaecati tempor aptent cum nesciunt dignissimos parturient a. Adipisicing placeat quibusdam",
        },
        {
            name: "crown of thrones",
            slug: "crown-of-thrones",
            category: "succulent",
            image: "/assets/plantImages/crownOfThrons.jpg",
            price: 40.0,
            countInStock: 13,
            grower: "hamid",
            rating: 4.5,
            numReviews: 31,
            description:
                "Pretium diam ornare! Architecto occaecati tempor aptent cum nesciunt dignissimos parturient a. Adipisicing placeat quibusdam",
        },
        {
            name: "desert rose",
            slug: "desert-rose",
            category: "bonsai",
            image: "/assets/plantImages/desertRose.jpg",
            price: 90.0,
            countInStock: 13,
            grower: "amir",
            rating: 4.5,
            numReviews: 31,
            description:
                "Pretium diam ornare! Architecto occaecati tempor aptent cum nesciunt dignissimos parturient a. Adipisicing placeat quibusdam",
        },
        {
            name: "juniper bonsai",
            slug: "juniper-bonsai",
            category: "bonsai",
            image: "/assets/plantImages/juniperBonsai.jpg",
            price: 126.0,
            countInStock: 13,
            grower: "amir",
            rating: 4.5,
            numReviews: 31,
            description:
                "Pretium diam ornare! Architecto occaecati tempor aptent cum nesciunt dignissimos parturient a. Adipisicing placeat quibusdam",
        },
        {
            name: "lemon bonsai",
            slug: "lemon-bonsai",
            category: "bonsai",
            image: "/assets/plantImages/lemonBonsai.jpg",
            price: 90.0,
            countInStock: 13,
            grower: "abolfazl",
            rating: 4.5,
            numReviews: 31,
            description:
                "Pretium diam ornare! Architecto occaecati tempor aptent cum nesciunt dignissimos parturient a. Adipisicing placeat quibusdam",
        },
        {
            name: "periwinkle bonsai",
            slug: "periwinikle-bonsai",
            category: "bonsai",
            image: "/assets/plantImages/periwinkleBonsai.jpg",
            price: 200.0,
            countInStock: 13,
            grower: "abolfazl",
            rating: 4.5,
            numReviews: 31,
            description:
                "Pretium diam ornare! Architecto occaecati tempor aptent cum nesciunt dignissimos parturient a. Adipisicing placeat quibusdam",
        },
    ],
};

export default data;
