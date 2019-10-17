// imporiting our model from the models folder so it knows the values we are referencing
var db = require("../models");

//so for example If I wanted to create a new strain in the table Cannabis it would look like
//-------------------------------------------------Indica Strains-----------------------------------------------------------------------


module.exports = function(){
    db.Cannabis.create({

    strainName: "Grand Daddy Purple",
    color: "Indica",
    desc: "This California staple inherits a complex grape and berry aroma from its Purple Urkle parent, while Big Bud passes on its oversized, compact bud structure.",
    flavor: "Grape, Berry, Sweet",
    pricePerGram: 10,
    percentOfTHC: 17.5,
    percentOfCBD: 0

})

db.Cannabis.create({

    strainName: "Northern Lights",
    color: "Indica",
    desc: "Northern Lights stands among the most famous strains of all time, a pure indica cherished for its resinous buds, fast flowering, and resilience during growth.",
    flavor: "Sweet, Spicy",
    pricePerGram: 15,
    percentOfTHC: 16.5,
    percentOfCBD: 0



})

db.Cannabis.create({

    strainName: "Tahoe OG Kush",
    color: "Indica",
    desc: "Great for those suffering from insomnia, pain, or lack of appetite, Tahoe OG has made a name for itself among other indicas. A top nighttime strain, it provides an extremely lazy, heavy body sensation.",
    flavor: "Citrus, Peppery, Herbal",
    pricePerGram: 16,
    percentOfTHC: 18,
    percentOfCBD: 0


})

db.Cannabis.create({

    strainName: "Blue Berry Kush",
    color: "Indica",
    desc: "Blueberry Kush is an indica-dominant strain that slowly brings on a heavy body sensation, helping consumers forget their stress and relax.",
    flavor: "Berry, Earthy, Herbal",
    pricePerGram: 12,
    percentOfTHC: 17.5,
    percentOfCBD: 0

})

db.Cannabis.create({

    strainName: "Lavender",
    color: "Indica",
    desc: "Built from strains around the world, Lavender by Soma Seeds has its origins from Super Skunk, Big Skunk Korean and Afghani Hawaiian. Leaving one feeling relaxed, happy, and euphoric.",
    flavor: "Foral, Spicy",
    pricePerGram: 11,
    percentOfTHC: 17,
    percentOfCBD: 0

})
db.Cannabis.create({

    strainName: "9 Pound Hammer",
    color: "Indica",
    desc: "9 Pound Hammer is an indica created by JinxProof Genetics that crosses Gooberry, Hells OG, and Jack the Ripper. These dense buds are coated in resin, offering sweet grape and lime flavors",
    flavor: "Sweet, Grape, Citrus",
    pricePerGram: 12,
    percentOfTHC: 18.5,
    percentOfCBD: 0

})

db.Cannabis.create({

    strainName: "Blackberry Kush",
    color: "Indica",
    desc: "Blackberry Kush tends to have a hashy, jet fuel smell and taste that is balanced by sweet berries. Blackberry Kush is often recommended for the treatment of pain thanks to its strong body effects.",
    flavor: "Herbal, Citrus, Peppery",
    pricePerGram: 19,
    percentOfTHC: 16,
    percentOfCBD: 0

})

db.Cannabis.create({

    strainName: "Do-Si-Dos",
    color: "Indica",
    desc: "Do-Si-Dos is an indica-dominant hybrid with qualities similar to its parent, OGKB, a GSC-phenotype. With glittering trichomes, bright pistils, and lime green and lavender leaves, this strain is a feast for eyes.",
    flavor: "Citrus, Peppery, Floral",
    pricePerGram: 15,
    percentOfTHC: 20.5,
    percentOfCBD: 0

})

db.Cannabis.create({

    strainName: "Bubba Kush",
    color: "Indica",
    desc: "Bubba Kush is an indica strain that has gained notoriety in the US and beyond for its heavy tranquilizing effects. Sweet hashish flavors with subtle notes of chocolate and coffee come through on the exhale, delighting the palate as powerful relaxation takes over.",
    flavor: "Herbal, Citrus, Peppery",
    pricePerGram: 10,
    percentOfTHC: 16.5,
    percentOfCBD: 0

})

db.Cannabis.create({

    strainName: "Brand X",
    color: "Indica",
    desc: "Earthy pine aromas mingle with notes of hashy mint in a flavorful introduction to this indica's heavy full-body relaxation. The sedating effects come coupled with a hazy euphoric head buzz that leaves you floating in a blissful headspace for hours.",
    flavor: "Earthy, Pine, Herbal",
    pricePerGram: 12,
    percentOfTHC: 28,
    percentOfCBD: 0

})

db.Cannabis.create({

    strainName: "Aurora Indica",
    color: "Indica",
    desc: "This strain induces heavy full-body effects and a sedating cerebral calm. Aurora Indica is a potent strain for evening treatment of insomnia, pain, and other conditions requiring a restful night’s sleep.",
    flavor: "Fruity, Floral, Herbal",
    pricePerGram: 18,
    percentOfTHC: 15.5,
    percentOfCBD: 0

})

db.Cannabis.create({

    strainName: "Maple Leaf Indica",
    color: "Indica",
    desc: " The effect of this wonderful strain has been known to act as an aphrodisiac and gives off a very relaxing and sensational body buzz.",
    flavor: "Sweet, Citrus, Peppery",
    pricePerGram: 14,
    percentOfTHC: 18,
    percentOfCBD: 0

})

db.Cannabis.create({

    strainName: "Grape Ape",
    color: "Indica",
    desc: "Named for its distinct grape-like smell, this indica is known for providing carefree relaxation that can help soothe pain, stress, and anxiety.",
    flavor: "Herbal, Pine, Peppery",
    pricePerGram: 15,
    percentOfTHC: 17,
    percentOfCBD: 0

})

db.Cannabis.create({

    strainName: "Kosher Kush",
    color: "Indica",
    desc: "The high experienced is typical of many heavy strains, producing pronounced relaxation and pain relief, with sleep often following close behind.",
    flavor: "Herbal, Citrus, Peppery",
    pricePerGram: 14,
    percentOfTHC: 20,
    percentOfCBD: 0

})

db.Cannabis.create({

    strainName: "Obama Kush",
    color: "Indica",
    desc: "Obama Kush offers cerebral stimulation and a euphoric rush. This strain is recommended for consumers looking for powerful physical effects as well as an intense cerebral lift.",
    flavor: "Peppery, Citrus, Pine",
    pricePerGram: 15,
    percentOfTHC: 17.5,
    percentOfCBD: 0

})

//-------------------------------------------------end of Indica------------------------------------------------------------------------

//-------------------------------------------------Sativa Strains-----------------------------------------------------------------------

db.Cannabis.create({

    strainName: "Blue Dream",
    color: "Sativia",
    desc: "Blue Dream, a sativa-dominant hybrid originating in California, has achieved legendary status among West Coast strains. Crossing Blueberry with Haze, Blue Dream balances full-body relaxation with gentle cerebral invigoration.",
    flavor: "Herbal, Pine, Peppery",
    pricePerGram: 6,
    percentOfTHC: 22.29,
    percentOfCBD: 0
})

db.Cannabis.create({

    strainName: "Sour Diesel",
    color: "Sativia",
    desc: "Sour Diesel, sometimes called Sour D, is an invigorating sativa-dominant strain named after its pungent, diesel-like aroma. This fast-acting strain delivers energizing, dreamy cerebral effects that have pushed Sour Diesel to its legendary status.",
    flavor: "Peppery, Citrus, Herbal",
    pricePerGram: 10,
    percentOfTHC: 18.5,
    percentOfCBD: 0
})

db.Cannabis.create({

    strainName: "Green Crack",
    color: "Sativia",
    desc: "Don’t let the name fool you: this is pure cannabis. Few strains compare to Green Crack’s sharp energy and focus as it induces an invigorating mental buzz that keeps you going throughout the day.",
    flavor: "Fruit, Earth, Citrus",
    pricePerGram: 15,
    percentOfTHC: 24,
    percentOfCBD: 0
})

db.Cannabis.create({

    strainName: "Chernobyl",
    color: "Sativa",
    desc: "Chernobyl is a sativa-dominant hybrid strain that carries a unique lime sherbet smell. Expect dreamy, long-lasting cerebral effects that will float you to a happy mood and relaxed mindsets.",
    flavor: "Spicy, Sweet, Citrus",
    pricePerGram: 12,
    percentOfTHC: 23.5,
    percentOfCBD: 0
})

db.Cannabis.create({

    strainName: "Dutch Treat Haze",
    color: "Sativa",
    desc: "Dutch Treat Haze appears to be a decently to highly potent (THC 19-24%), energetic, creative and sociable, most likely 70/30, daytime hybrid cross between Dutch Treat and Super Silver Haze.",
    flavor: "Citrus, Earth, Minty",
    pricePerGram: 12.50,
    percentOfTHC: 19.63,
    percentOfCBD: 0
})

db.Cannabis.create({

    strainName: "Acapulco Gold",
    color: "Sativa",
    desc: "Acapulco Gold is the legendary, (many say) mythical, 80/20, Sativa-Dominant, daytime hybrid which originated in Acapulco, Mexico around 1965 and was popularized by comedians Cheech and Chong in their 1978 film Up in Smoke.",
    flavor: "Earthy, Woody, Herbal",
    pricePerGram: 20,
    percentOfTHC: 18,
    percentOfCBD: 0
})

db.Cannabis.create({

    strainName: "Hawaiian Golden Pineapple",
    color: "Sativa",
    desc: "This cross of Puna Budder and Golden Pineapple yields an uplifting sativa strain with sweet and tropical notes that's perfect for pairing with an outdoor adventure!",
    flavor: "Sweet, Citrus, Tropical",
    pricePerGram: 10,
    percentOfTHC: 20.52,
    percentOfCBD: 0
})

db.Cannabis.create({

    strainName: "Jillbean",
    color: "Sativa",
    desc: "Jillybean is said (by some) to be a slightly Sativa-Dominant daytime hybrid known for its bitter, citrus, mango and pineapple jelly bean flavor.",
    flavor: "Citrus, Fruit, Sweet",
    pricePerGram: 6,
    percentOfTHC: 23,
    percentOfCBD: 0
})

db.Cannabis.create({

    strainName: "Laughing Buddja",
    ccolor: "Sativa",
    desc: "Laughing Buddha is an Amsterdam-bred, deceptively potent (THC levels reported at 18%), not-ideal-for-beginners, Sativa-Dominant hybrid blending of Thai and Jamaican strains.",
    flavor: "Fruit, Spicy, Peppery",
    pricePerGram: 6,
    percentOfTHC: 20.17,
    percentOfCBD: 0
})

db.Cannabis.create({

    strainName: "Mimosa",
    color: "Sativa",
    desc: "Mimosa is born of Purple Punch and Clementine, which makes for a very unique flavor profile – strong citrus with hints of Hawaiian punch.",
    flavor: "Citrus, Tropical, Floral",
    pricePerGram: 13,
    percentOfTHC: 19.04,
    percentOfCBD: 0
})

db.Cannabis.create({

    strainName: "Peaches & Diesel",
    color: "Sativa",
    desc: "Peaches & diesel is an extremely fragrant bud capturing a sweet, peachy taste with hints of diesel on the nose. Longer lasting head highs can be expected, with an extra stamina boost coming on end.",
    flavor: "Diesel, Sweet, Fruit",
    pricePerGram: 12,
    percentOfTHC: 18.7,
    percentOfCBD: 0
})

db.Cannabis.create({

    strainName: "Ripped Bubba",
    color: "Sativa",
    desc: "40/60 Highbred, created to combine the incredible high cannabinoids in Jack the Ripper with the clear calming effect of pre-’98 Bubba Kush which lead to creative and motivating effects.",
    flavor: "Skunk, Citrus, Spicy",
    pricePerGram: 12,
    percentOfTHC: 19.33,
    percentOfCBD: 0
})

db.Cannabis.create({

    strainName: "Strawberry Lemonade",
    color: "Sativa",
    desc: "Strawberry Lemonade was originally bred in the medicinal world for extremely potent anti-nausea properties. Combining this characteristic with a slightly uplifting and calming high, makes this super fruity strain an absolute classic sativa.",
    flavor: "Sweet, Citrus, Fruit",
    pricePerGram: 12,
    percentOfTHC: 18.6,
    percentOfCBD: 0
})

db.Cannabis.create({

    strainName: "White Buffalo",
    color: "Sativa",
    desc: "White Buffalo, or Tatanka (Lakota for bison), is a nicely potent ( THC 15-20%), senses-enhancing, talkative and hungry, 80/20, Sativa-Dominant, stoned yet functional, hybrid cross between Romulan, Blackberry Kush and Bay 11.",
    flavor: "Pepper, Sweet, Flower",
    pricePerGram: 8,
    percentOfTHC: 22.8,
    percentOfCBD: 0
})

db.Cannabis.create({

    strainName: "Chocolope",
    color: "Sativa",
    desc: "Chocolope was developed by crossing Chocolate Thai with Cantaloupe Haze to create an homage to the Chocolate strains of the 1980s. The hefty sativa buds give earthy, sweet coffee flavors that provide a dreamy, cerebral effect.",
    flavor: "Sweet, Earth, Coffee",
    pricePerGram: 11,
    percentOfTHC: 23,
    percentOfCBD: 0
})

//-------------------------------------------------end of Sativa------------------------------------------------------------------------
//-------------------------------------------------Begin Hybrids------------------------------------------------------------------------

db.Cannabis.create({

    strainName: "Gelato",
    color: "Hybrid",
    desc: "Gelato (also referred to as 'Larry Bird') is another tantalizing hybrid cannabis strain. Novice consumers may want to approach this THC powerhouse with caution, but those armed with a high tolerance will delight in Gelato’s heavy-handed euphoria.",
    flavor: "Peppery, Citrus, Hoppy",
    pricePerGram: 7,
    percentOfTHC: 20,
    percentOfCBD: 0

})

//2

db.Cannabis.create({

    strainName: "Original Glue",
    color: "Hybrid",
    desc: "Original Glue (GG4), developed by GG Strains, is a potent hybrid strain that delivers heavy-handed euphoria and relaxation, leaving you feeling “glued” to the couch. Its chunky, resin-covered buds fill the room with pungent earthy and sour aromas.",
    flavor: "Peppery, Citrus, Herbal",
    pricePerGram: 10,
    percentOfTHC: 22,
    percentOfCBD: 1

})

//3

db.Cannabis.create({

    strainName: "J1",
    color: "Hybrid",
    desc: "Original Glue (GG4), developed by GG Strains, is a potent hybrid strain that delivers heavy-handed euphoria and relaxation, leaving you feeling “glued” to the couch. Its chunky, resin-covered buds fill the room with pungent earthy and sour aromas.",
    flavor: "Peppery, Fruity, Minty",
    pricePerGram: 9,
    percentOfTHC: 18,
    percentOfCBD: 3

})

//4

db.Cannabis.create({

    strainName: "J1",
    color: "Hybrid",
    desc: "J1, or Jack One, is a high-end hybrid strain that is gaining widespread popularity. J1 is a cross between two famous sativas, Skunk #1 and Jack Herer, and is best known for its strong, uplifting, clear-headed buzz that allows for mobility.",
    flavor: "Peppery, Fruity, Minty",
    pricePerGram: 9,
    percentOfTHC: 18,
    percentOfCBD: 3

})

//5
db.Cannabis.create({

    strainName: "White Widow",
    color: "Hybrid",
    desc: "Its buds are white with crystal resin, warning you of the potent effects to come. A powerful burst of euphoria and energy breaks through immediately, stimulating both conversation and creativity.",
    flavor: "Bitter, Hoppy, Herbal",
    pricePerGram: 9,
    percentOfTHC: 11,
    percentOfCBD: 10

})

//6

db.Cannabis.create({

    strainName: "Pineapple Express",
    color: "Hybrid",
    desc: "Pineapple Express combines the potent and flavorful forces of parent strains Trainwreck and Hawaiian. The smell is likened to fresh apple and mango, with a taste of pineapple, pine, and cedar. This hard-hitting hybrid provides a long-lasting energetic buzz perfect for productive afternoons and creative escapes.",
    flavor: "Apple, Mango, Pine",
    pricePerGram: 5,
    percentOfTHC: 11,
    percentOfCBD: 10
})

//7

db.Cannabis.create({

    strainName:"AK-47" ,
    color: "Hybrid",
    desc: "This sativa-dominant strain mixes Colombian, Mexican, Thai, and Afghani varieties, bringing together a complex blend of flavors and effects. AK-47 may deliver a steady and long-lasting cerebral buzz that will keep you mentally alert and engaged in creative or social activities.",
    flavor: "Sweet, Sour, Earthy",
    pricePerGram: 5,
    percentOfTHC: 26,
    percentOfCBD: 1
})


//8

db.Cannabis.create({

    strainName:"Platinum GSC" ,
    color: "Hybrid",
    desc: "Platinum GSC, formerly known as Platinum Girl Scout Cookies. This Cup-winning hybrid—a cross of OG Kush, Durban Poison, and a third unknown strain—fills your nose and lungs with sweet notes of berry and candy, followed by a fruity spiciness.",
    flavor: "Fruity, Spicy, Sweet",
    pricePerGram: 7,
    percentOfTHC: 18,
    percentOfCBD: 0
})

//9

db.Cannabis.create({

    strainName:"Sherbert" ,
    color: "Hybrid",
    desc: "A complex aroma colors Sherbert with notes of skunky citrus, sweet berry, and that candy-like smell redolent of its GSC parent. Stress, tension, and sour moods melt away with the carefree mindset and physical relaxation that comes with this rich hybrid.",
    flavor: "Citrus, Sweet, Candy",
    pricePerGram: 8,
    percentOfTHC: 19,
    percentOfCBD: 1
})

//10

db.Cannabis.create({

    strainName:"Animal Cookies" ,
    color: "Hybrid",
    desc: "Animal Cookies has a sweet, sour aroma with heavy full-body effects that will impress any veteran consumer. This potent medicine might be overkill for mild symptoms, but its ability to obliterate severe pain and insomnia is unprecedented.  ",
    flavor: "Peppery, Citrus, Herbal",
    pricePerGram: 6,
    percentOfTHC: 23,
    percentOfCBD: 1
})

//11

db.Cannabis.create({

    strainName:"Wedding Cake" ,
    color: "Hybrid",
    desc: "Wedding Cake, also known as Pink Cookies, is the familial genetic cross of Girl Scout Cookies and Cherry Pie. This delectable treat is rich with tangy sweet earth and pepper, taking notes and dimension from its OG and Durban Poison parentage",
    flavor: "Tangy, Sweet, Earth",
    pricePerGram: 5,
    percentOfTHC: 22,
    percentOfCBD: 3
})

//12

db.Cannabis.create({

    strainName:"White Girl" ,
    color: "Hybrid",
    desc: "Its effects are middle-of-the-road, offering immediate mental elevation and creeping physical relaxation. White Girl’s terpene profile is herbal and woody, leaving a mild savory-sweet taste on the palate.",
    flavor: "Herbal, Savory, Sweet",
    pricePerGram: 10,
    percentOfTHC: 30,
    percentOfCBD: 0
})

//13

db.Cannabis.create({

    strainName:"Headband" ,
    color: "Hybrid",
    desc: "The smooth, creamy smoke is accented by flavors of lemons and diesel while the long-lasting effects are great for pain relief, helping you to relax, and to combat elevated stress levels.",
    flavor: "Lemon, diesel, Cream",
    pricePerGram: 8,
    percentOfTHC: 27,
    percentOfCBD: 1
})

//14

db.Cannabis.create({

    strainName:"Kandy Kush" ,
    color: "Hybrid",
    desc: "Like the name suggests, the flavor is sweet like candy with a strong lemon-Kush scent. Popular with medicinal growers, Kandy Kush provides a potent body high with pronounced pain relief.",
    flavor: "",
    pricePerGram: 5,
    percentOfTHC: 20,
    percentOfCBD: 1
})

//15

db.Cannabis.create({

    strainName:"Lucky Charms" ,
    color: "Hybrid",
    desc: "It may be named after breakfast cereal, but this strain tastes far more like tangy fruit than it does marshmallows. Lucky Charms does, however, boast an enticing coat of sugary resin inherited from its trichome-heavy parent, The White.",
    flavor: "Tangy, Fruity, Sweet",
    pricePerGram: 25,
    percentOfTHC: 36,
    percentOfCBD: 43
})

//---------------------BEGIN WINE SEEDS--------------------------------//
//---------------------WHITE WINE-------------------------------------//

db.Wine.create({
    name:"Pacific Rim Riesling Columbia Valley 2009",
    color: "White",
    varietal: "Riesling",
    flavor: "Orange Blossom, Peaches, Honeysuckle",
    pricePerBottle: 10,
    alcoholPercent: 12

})

//2
db.Wine.create({
    name: "àMaurice Cellars Sparrow Estate Viognier Walla Walla Valley 2009",
    color: "White",
    varietal: "Viognier",
    flavor: "Floral, Stone Fruit, Oak",
    pricePerBottle: 33,
    alcoholPercent: 15

})

//3
db.Wine.create({
    name: "Buty Winery Sémillon Sauvignon and Muscadelle Columbia Valley 2008",
    color: "White",
    varietal: "Sémillon Sauvignon",
    flavor: "Straw, Spice, Lemon",
    pricePerBottle: 25,
    alcoholPercent: 14

})

//4
db.Wine.create({
    name:"Forgeron Cellars Chardonnay Columbia Valley 2007",
    color: "White",
    varietal:"Chardonnay" ,
    flavor: "Light Spice, Mineral, Grass",
    pricePerBottle: 25,
    alcoholPercent: 14

})

//5
db.Wine.create({
    name:"Woodward Canyon Chardonnay Washington State 2008",
    color: "White",
    varietal:"Chardonnay" ,
    flavor: "Spice, Lemon, Mineral",
    pricePerBottle: 44,
    alcoholPercent: 14

})

//6

db.Wine.create({
    name:"Syncline Wine Cellars Roussanne Horse Heaven Hills 2008",
    color: "White",
    varietal: "Roussanne",
    flavor: "Candied Fruit, Melon, Zest",
    pricePerBottle: 22,
    alcoholPercent: 14

})

//7

db.Wine.create({
    name:"Long Shadows Poet’s Leap Riesling Columbia Valley 2008",
    color: "White",
    varietal: "Riesling",
    flavor: "Lemon, Diesel, Mineral" ,
    pricePerBottle: 20,
    alcoholPercent: 13

})

//8

db.Wine.create({
    name:"William Church Winery Viognier Columbia Valley 2009",
    color: "White",
    varietal: "Viognier",
    flavor: "Peaches, Melon, Floral",
    pricePerBottle: 21,
    alcoholPercent: 14

})

//9

db.Wine.create({
    name:"DeLille Cellars Chaleur Estate Blanc Columbia Valley 2008",
    color: "White",
    varietal: "Chaleur Blanc",
    flavor: "Gooseberry, Straw, Toast",
    pricePerBottle: 34,
    alcoholPercent: 14

})

//10

db.Wine.create({
    name:"Chateau Ste. Michelle and Dr. Loosen Eroica Riesling Columbia Valley 2008",
    color: "White",
    varietal: "Riesling",
    flavor: "Lime, Mineral, Diesel",
    pricePerBottle: 24,
    alcoholPercent: 11

})

//-------------------------------END WHITE WINE---------------------//
//-------------------------------BEGIN RED WINE---------------------//

db.Wine.create({
    name:"Quilceda Creek Cabernet Sauvignon Columbia Valley 2007",
    color: "Red",
    varietal: "Cabernet Sauvignon",
    flavor: "Black Cherry, Blackberry, Chocolate",
    pricePerBottle: 125,
    alcoholPercent: 15

})

//2
db.Wine.create({
    name:"Cayuse Vineyards God Only Knows Grenache 2006",
    color: "Red",
    varietal: "Grenache",
    flavor: "Black Olives, Earth, Savory",
    pricePerBottle: 65,
    alcoholPercent: 15

})

//3
db.Wine.create({
    name:"Woodward Canyon Cabernet Sauvignon Old Vines 2007",
    color: "Red",
    varietal: "Cabernet Sauvignon",
    flavor: "Black Fruit, Oak",
    pricePerBottle: 79,
    alcoholPercent: 15

})

//4
db.Wine.create({
    name:"Waters Winery Syrah Forgotten Hills Vineyard Walla Walla Valley 2007",
    color: "Red",
    varietal: "Syrah",
    flavor: "Earth, Black Olives, Berries",
    pricePerBottle: 40,
    alcoholPercent: 14

})

//5
db.Wine.create({
    name:"Owen Roe Chapel Block Syrah Red Willow Vineyard Yakima Valley 2008",
    color: "Red",
    varietal: "Syrah",
    flavor: "Fruit, Acid, Black Currant",
    pricePerBottle: 45,
    alcoholPercent: 15

})

//6

db.Wine.create({
    name:"Buty Winery Rediviva of the Stones Walla Walla Valley 2007",
    color: "Red",
    varietal: "Cabernet Sauvignon",
    flavor: "Earth, Seaweed, Olive",
    pricePerBottle: 55,
    alcoholPercent: 14

})

//7

db.Wine.create({
    name:"Rasa Vineyards Principia Reserve Syrah Walla Walla Valley 2007",
    color: "Red",
    varietal: "Syrah",
    flavor: "Lemon Zest, Blackberry, Black Fruit",
    pricePerBottle: 85,
    alcoholPercent: 15

})

//8

db.Wine.create({
    name:"Grand Reve Vintners Collaboration Series II Red Wine Ciel du Cheval Vineyard Red Mountain 2007",
    color: "Red",
    varietal: "Red Blend",
    flavor: "Earth, Mineral, Red Fruit",
    pricePerBottle: 45,
    alcoholPercent: 15

})

//9

db.Wine.create({
    name:"Gramercy Cellars Lagniappe Syrah Columbia Valley 2007",
    color: "Red",
    varietal: "Syrah",
    flavor: "Floral, Game, Earth",
    pricePerBottle: 40,
    alcoholPercent: 14

})

//10

db.Wine.create({
    name:"Abeja Cabernet Sauvignon Columbia Valley 2007",
    color: "Red",
    varietal: "Cabernet Sauvignon",
    flavor: "Toast, Dark Chocolate, Spice",
    pricePerBottle: 42,
    alcoholPercent: 15

})
}

//-------------------------------END RED WINE---------------------//
