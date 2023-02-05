export const filterData = [
    {
        id: "0",
        name: "Fast food",
        image: require("../assets/fastfood.png")
    },
    {
        id: "1",
        name: "Burgers",
        image: require("../assets/burgers.jpg")
    },
    {
        id: "2",
        name: "Salads",
        image: require("../assets/salad.jpg")
    },
    {
        id: "3",
        name: "Hotdog",
        image: require("../assets/hotdog.jpg")
    },
    {
        id: "4",
        name: "Chinese",
        image: require("../assets/chinese.jpg")
    },
    {
        id: "5",
        name: "Mexican",
        image: require("../assets/mexican.jpg")
    },
    {
        id: "6",
        name: "Sea food",
        image: require("../assets/seafood.jpg")
    },
]

export const restaurantsData = [
    {
        id: 0,
        restaurantName: "Mc Donalds",
        farAway: "21.2",
        businessAddress: "22 Bessie Street, Cape Town",
        images: require('../assets/fastfood.png'),
        averageReview: 4.9,
        numberOfReview: 272,
        coordinates: {
            lat: -26.1888612,
            lng: 28.246325
        },
        discount: 10,
        deliveryTime: 15,
        collectTime: 5,
        foodType: "Burgers, wraps, Milkshakes...",
        productData: [
            {
                name: "Hand cut chips",
                price: 29.30,
                image: require('../assets/fastfood.png'),
            },
            {
                name: "AAAAA",
                price: 50.30,
                image: require('../assets/fastfood.png'),
            },
            {
                name: "BBBBB",
                price: 39.30,
                image: require('../assets/fastfood.png'),
            },
        ]
    },
    {
        id: 1,
        restaurantName: "Mc Donalds",
        farAway: "21.2",
        businessAddress: "22 Bessie Street, Cape Town",
        images: require('../assets/hotdog.jpg'),
        averageReview: 4.9,
        numberOfReview: 272,
        coordinates: {
            lat: -26.1888612,
            lng: 28.246325
        },
        discount: 10,
        deliveryTime: 15,
        collectTime: 5,
        foodType: "Burgers, wraps, Milkshakes...",
        productData: [
            {
                name: "Hand cut chips",
                price: 29.30,
                image: require('../assets/hotdog.jpg'),
            },
            {
                name: "AAAAA",
                price: 50.30,
                image: require('../assets/hotdog.jpg'),
            },
            {
                name: "BBBBB",
                price: 39.30,
                image: require('../assets/hotdog.jpg'),
            },
        ]
    },
    {
        id: 2,
        restaurantName: "Mc Donalds",
        farAway: "21.2",
        businessAddress: "22 Bessie Street, Cape Town",
        images: require('../assets/mexican.jpg'),
        averageReview: 4.9,
        numberOfReview: 272,
        coordinates: {
            lat: -26.1888612,
            lng: 28.246325
        },
        discount: 10,
        deliveryTime: 15,
        collectTime: 5,
        foodType: "Burgers, wraps, Milkshakes...",
        productData: [
            {
                name: "Hand cut chips",
                price: 29.30,
                image: require('../assets/mexican.jpg'),
            },
            {
                name: "AAAAA",
                price: 50.30,
                image: require('../assets/mexican.jpg'),
            },
            {
                name: "BBBBB",
                price: 39.30,
                image: require('../assets/mexican.jpg'),
            },
        ]
    },
    {
        id: 3,
        restaurantName: "Mc Donalds",
        farAway: "21.2",
        businessAddress: "22 Bessie Street, Cape Town",
        images:  require('../assets/salad.jpg'),
        averageReview: 4.9,
        numberOfReview: 272,
        coordinates: {
            lat: -26.1888612,
            lng: 28.246325
        },
        discount: 10,
        deliveryTime: 15,
        collectTime: 5,
        foodType: "Burgers, wraps, Milkshakes...",
        productData: [
            {
                name: "Hand cut chips",
                price: 29.30,
                image: require('../assets/salad.jpg'),
            },
            {
                name: "AAAAA",
                price: 50.30,
                image: require('../assets/salad.jpg'),
            },
            {
                name: "BBBBB",
                price: 39.30,
                image: require('../assets/salad.jpg'),
            },
        ]
    },
]

export const menuData = [
    {
        title: 'BEEF',
        special: false,
        key: 0
    },
    {
        title: 'CHICKEN',
        special: false,
        key: 1
    },
    {
        title: 'VEGGIE BURGER',
        special: false,
        key: 2
    },

    {
        title: 'FRIES& CORN',
        special: false,
        key: 3
    },
    {
        title: 'SALADS',
        special: false,
        key: 4
    },
    {
        title: 'HAPPY MEALS',
        special: false,
        key: 5
    },
    {
        title: 'SHARE BOX',
        special: false,
        key: 6
    },
    {
        title: 'MILKSHAKES',
        special: false,
        key: 7
    },
    {
        title: 'COLD DRINKS',
        special: false,
        key: 8
    },
    {
        title: 'DESSERTS',
        special: false,
        key: 9
    },
    {
        title: 'HOT DRINKS',
        special: false,
        key: 10
    },
]

export const specialData = [
    {
        title: "LIMITED OFFER",
        key: 0
    },
    {
        title: "GO CHILLI",
        key: 1
    },
    {
        title: "GO CHEESE",
        key: 2
    },
    {
        title: "MCCHICKEN DELUXE PROMO",
        key: 3
    },
]

export const menu = [
    {
        key: 1,
        title: 'BEEF'
    },
    {
        key: 2,
        title: 'CHICKEN'
    },
    {
        key: 3,
        title: 'VEGGIE BURGER'
    },
    {
        key: 4,
        title: 'SHARE BOX'
    },
    {
        key: 5,
        title: 'Happy Meals'
    },
    {
        key: 6,
        title: 'Fries'
    },
    {
        key: 7,
        title: 'Sides'
    },
    {
        key: 8,
        title: 'Milkshakes'
    },

]

export const menuDetailData = [
    {
        id: 1,
        meal: "Big Mac",
        price: 70.2,
        image: require("../assets/fastfood.png"),
        details: "aaaa dvsvsvsv",
        preferenceTitle: ["a", 'b', 'cs'],
        preferenceData: [
            [
                {
                    id: 10,
                    name: "aa",
                    price: 6.43,
                    checked: false,
                },
                {
                    id: 6,
                    name: "a2a",
                    price: 6.43,
                    checked: false,
                },
            ],
            [
                {
                    id: 10,
                    name: "aa",
                    price: 6.43,
                    checked: false,
                },
                {
                    id: 6,
                    name: "a2a",
                    price: 6.43,
                    checked: false,
                },
            ],
            [
                {
                    id: 10,
                    name: "aa",
                    price: 6.43,
                    checked: false,
                },
                {
                    id: 6,
                    name: "a2a",
                    price: 6.43,
                    checked: false,
                },
            ],
        ],
        minimum_quality: [2,1,1],
        counter: [0,0,0],
        required: [true, true, false],
    },
    {
        id: 2,
        meal: "Big Ma2232c",
        price: 70.2,
        image: require("../assets/burgers.jpg"),
        details: "fwefwf",
        preferenceTitle: ["a", 'b', 'cs'],
        preferenceData: [
            [
                {
                    id: 1,
                    name: "aa",
                    price: 6.43,
                    checked: false,
                },
                {
                    id: 2,
                    name: "a2a",
                    price: 6.43,
                    checked: false,
                },
            ],
            [
                {
                    id: 3,
                    name: "aa",
                    price: 6.43,
                    checked: false,
                },
                {
                    id: 4,
                    name: "a2a",
                    price: 6.43,
                    checked: false,
                },
            ],
            [
                {
                    id: 5,
                    name: "aa",
                    price: 6.43,
                    checked: false,
                },
                {
                    id: 6,
                    name: "a2a",
                    price: 6.43,
                    checked: false,
                },
            ],
        ],
        minimum_quality: [4,1,1],
        counter: [3,2,0],
        required: [true, false, false],
    },
]