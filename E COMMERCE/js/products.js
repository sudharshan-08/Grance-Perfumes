const products = [
    // MEN (8)
    {
        id: "m1",
        name: "Midnight Noir EDP",
        category: "men",
        price: 15500,
        oldPrice: 18000,
        image: "images/bottle1.png",
        rating: 4.8,
        description: "An intense, deeply mysterious fragrance with robust notes of bergamot and black pepper.",
        isNew: true
    },
    {
        id: "m2",
        name: "Ocean Mist Cologne",
        category: "men",
        price: 8500,
        oldPrice: 10500,
        image: "images/bottle3.png",
        rating: 4.5,
        description: "A fresh aquatic scent with hints of sea salt and citrus.",
        isNew: false
    },
    {
        id: "m3",
        name: "Leather & Sandalwood",
        category: "men",
        price: 12000,
        oldPrice: 15000,
        image: "images/bottle2.png",
        rating: 4.7,
        description: "Warm, woody, and intensely masculine with rich leather undertones.",
        isNew: false
    },
    {
        id: "m4",
        name: "Silver Mountain Water",
        category: "men",
        price: 22000,
        oldPrice: 25000,
        image: "images/bottle3.png",
        rating: 4.9,
        description: "Crisp and icy. Inspired by the exhilarating crispness of alpine air.",
        isNew: true
    },
    {
        id: "m5",
        name: "Spicebomb Dark",
        category: "men",
        price: 9500,
        oldPrice: 12000,
        image: "images/bottle1.png",
        rating: 4.6,
        description: "An explosive cocktail of masculine spices and tobacco.",
        isNew: false
    },
    {
        id: "m6",
        name: "Vetiver Absolute",
        category: "men",
        price: 14000,
        oldPrice: 16500,
        image: "images/bottle2.png",
        rating: 4.4,
        description: "Earthy, grassy, and slightly smoky vetiver blend.",
        isNew: false
    },
    {
        id: "m7",
        name: "Blue Amber",
        category: "men",
        price: 11500,
        oldPrice: 13500,
        image: "images/bottle4.png",
        rating: 4.7,
        description: "Sophisticated amber combined with surprising fresh blue notes.",
        isNew: false
    },
    {
        id: "m8",
        name: "Gentleman's Reserve",
        category: "men",
        price: 18500,
        oldPrice: 21000,
        image: "images/bottle2.png",
        rating: 4.8,
        description: "A timeless classic for the modern gentleman. Oakmoss and bergamot.",
        isNew: true
    },

    // WOMEN (10)
    {
        id: "w1",
        name: "Rose Elegance Intense",
        category: "women",
        price: 16500,
        oldPrice: 19500,
        image: "images/bottle4.png",
        rating: 4.9,
        description: "A rich bouquet of damask roses, intertwined with sweet vanilla.",
        isNew: true
    },
    {
        id: "w2",
        name: "Amber Dawn Signature",
        category: "women",
        price: 13500,
        oldPrice: 16000,
        image: "images/bottle1.png",
        rating: 4.7,
        description: "Luminous and warm, evoking the first light of dawn.",
        isNew: false
    },
    {
        id: "w3",
        name: "Jasmine Whisper",
        category: "women",
        price: 10500,
        oldPrice: 12500,
        image: "images/bottle3.png",
        rating: 4.6,
        description: "Delicate white florals lead this romantic and sensual scent.",
        isNew: false
    },
    {
        id: "w4",
        name: "Velvet Peony",
        category: "women",
        price: 14500,
        oldPrice: 17000,
        image: "images/bottle4.png",
        rating: 4.8,
        description: "Lush, plush, and incredibly soft peon florals.",
        isNew: true
    },
    {
        id: "w5",
        name: "Vanilla Orchid",
        category: "women",
        price: 9000,
        oldPrice: 11000,
        image: "images/bottle2.png",
        rating: 4.5,
        description: "Gourmand vanilla blended with exotic orchids.",
        isNew: false
    },
    {
        id: "w6",
        name: "Midnight Magnolia",
        category: "women",
        price: 15500,
        oldPrice: 18500,
        image: "images/bottle1.png",
        rating: 4.7,
        description: "A dark, intoxicating take on the classic magnolia flower.",
        isNew: false
    },
    {
        id: "w7",
        name: "Golden Gardenia",
        category: "women",
        price: 17500,
        oldPrice: 20000,
        image: "images/bottle2.png",
        rating: 4.9,
        description: "Opulent and creamy gardenia with a touch of radiant sunshine.",
        isNew: true
    },
    {
        id: "w8",
        name: "Blush Bouquet",
        category: "women",
        price: 8500,
        oldPrice: 10500,
        image: "images/bottle4.png",
        rating: 4.4,
        description: "A flirty, youthful blend of pink petals and mixed berries.",
        isNew: false
    },
    {
        id: "w9",
        name: "Crystal Iris",
        category: "women",
        price: 19000,
        oldPrice: 22000,
        image: "images/bottle3.png",
        rating: 4.8,
        description: "Powdery, elegant, and incredibly sophisticated.",
        isNew: false
    },
    {
        id: "w10",
        name: "Fruity Nectar",
        category: "women",
        price: 7500,
        oldPrice: 9000,
        image: "images/bottle4.png",
        rating: 4.3,
        description: "A juicy, mouthwatering explosion of tropical fruits.",
        isNew: false
    },

    // UNISEX (6)
    {
        id: "u1",
        name: "Oud Wood Reserve",
        category: "unisex",
        price: 24500,
        oldPrice: 28000,
        image: "images/bottle2.png",
        rating: 5.0,
        description: "Rare oud wood, sandalwood, and Chinese pepper.",
        isNew: true
    },
    {
        id: "u2",
        name: "Citrus Bloom",
        category: "unisex",
        price: 11000,
        oldPrice: 13500,
        image: "images/bottle3.png",
        rating: 4.6,
        description: "Zesty lemon and bergamot balanced with soft white blossoms.",
        isNew: false
    },
    {
        id: "u3",
        name: "Saffron Spices",
        category: "unisex",
        price: 21000,
        oldPrice: 24000,
        image: "images/bottle1.png",
        rating: 4.8,
        description: "Warm, spicy, and luxurious with a heavy dose of rare saffron.",
        isNew: true
    },
    {
        id: "u4",
        name: "Green Tea & Fig",
        category: "unisex",
        price: 9500,
        oldPrice: 11500,
        image: "images/bottle3.png",
        rating: 4.5,
        description: "A calming, refreshing blend of green tea leaves and sweet fig.",
        isNew: false
    },
    {
        id: "u5",
        name: "Smoked Leather",
        category: "unisex",
        price: 18000,
        oldPrice: 21000,
        image: "images/bottle2.png",
        rating: 4.7,
        description: "Intense leather perfectly balanced with sweet, smoky tobacco.",
        isNew: false
    },
    {
        id: "u6",
        name: "White Musk",
        category: "unisex",
        price: 12500,
        oldPrice: 15000,
        image: "images/bottle4.png",
        rating: 4.6,
        description: "Clean, pure, and universally flattering white musk.",
        isNew: false
    }
];

// Export for usage in other scripts or just window scope
window.granceProducts = products;
