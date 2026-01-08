/*
Crops data.
Plaintext: Self-explanatory.
Pest: Associated pest.
api: The name used for this crop in the Hypixel API. Used for lookup purposes.
mult: Amount of this crop that would be dropped from one harvest with 0 Farming Fortune.
coin: Base coins received from NPC sale for one harvest with 0 Farming Fortune. Includes price of seeds, if applicable.
compact: Deprecated. Indicates how many of the item needed to create a compact version. Now always 160.
scompact: Deprecated. Indicates how many of the item needed to create a super compact version. Now always 25,600.
bonus: Special crop that may be obtained using farming armors for harvesting this crop.
double: Indicates whether this crop is 3 blocks tall, meaning it is considered to be harvested twice and rolls for special crops twice per harvest.
milestones: List of crops required for each milestone.
*/
const crops = {
    "wheat": 
    {
        plaintext: "Wheat",
        pest: "Fly",
        api: "WHEAT",
        mult: "1",
        coin: "10.5",
        compact: "160",
        scompact: "25600",
        bonus: "cropie",
        double: 0,
        milestones: [30, 50, 80, 200, 350, 700, 1500, 2500, 3500, 5000, 6500, 8000, 10000, 20000, 35000, 50000, 75000, 100000, 175000, 250000, 375000, 400000, 450000, 650000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000],
    },
    "carrot": 
    {
        plaintext: "Carrot",
        pest: "Cricket",
        api: "CARROT_ITEM",
        mult: "3",
        coin: "3",
        compact: "160",
        scompact: "20480",
        bonus: "cropie",
        double: 0,
        milestones: [100, 150, 250, 500, 1000, 2000, 4500, 9000, 12000, 15000, 20000, 25000, 35000, 70000, 120000, 180000, 250000, 350000, 600000, 850000, 1100000, 1400000, 1800000, 2200000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000],
        
    },
    "potato": 
    {
        plaintext: "Potato",
        pest: "Locust",
        api: "POTATO_ITEM",
        mult: "3",
        coin: "3",
        compact: "160",
        scompact: "25600",
        bonus: "cropie",
        double: 0,
        milestones: [100, 150, 250, 500, 1000, 2000, 4500, 9000, 12000, 15000, 20000, 25000, 35000, 70000, 120000, 180000, 250000, 350000, 600000, 850000, 1100000, 1400000, 1800000, 2200000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000, 2600000],
    },
    "pumpkin":
    {
        plaintext: "Pumpkin",
        pest: "Rat",
        api: "PUMPKIN",
        mult: "1",
        coin: "10",
        compact: "160",
        scompact: "25600",
        bonus: "squash",
        double: 0,
        milestones: [30, 50, 80, 200, 350, 700, 1500, 2500, 3500, 5000, 6500, 8000, 10000, 20000, 35000, 50000, 75000, 100000, 175000, 250000, 375000, 400000, 450000, 650000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000],
    },
    "sugarcane":
    {
        plaintext: "Sugar Cane",
        pest: "Mosquito",
        api: "SUGAR_CANE",
        mult: "2",
        coin: "4",
        compact: "160",
        scompact: "25600",
        bonus: "fermento",
        double: 1,
        milestones: [60, 100, 160, 400, 700, 1400, 3000, 5000, 7000, 10000, 13000, 16000, 20000, 40000, 70000, 100000, 150000, 200000, 350000, 500000, 750000, 800000, 900000, 1300000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000],
    },
    "melon":
    {
        plaintext: "Melon",
        pest: "Earthworm",
        api: "MELON",
        mult: "5",
        coin: "2",
        compact: "160",
        scompact: "25600",
        bonus: "squash",
        double: 0,
        milestones: [150, 250, 400, 1000, 1750, 3500, 7500, 12500, 17500, 25000, 32500, 40000, 50000, 100000, 175000, 250000, 375000, 500000, 875000, 1250000, 1875000, 2000000, 2250000, 3250000, 4000000, 4000000, 4000000, 4000000, 4000000, 4000000, 4000000, 4000000, 4000000, 4000000, 4000000, 4000000, 4000000, 4000000, 4000000, 4000000, 4000000, 4000000, 4000000, 4000000, 4000000, 4000000, 4000000],
    },
    "cocoabeans":
    {
        plaintext: "Cocoa Beans",
        pest: "Moth",
        api: "INK_SACK:3",
        mult: "3",
        coin: "3",
        compact: "160",
        scompact: "20480",
        bonus: "squash",
        double: 0,
        milestones: [90, 150, 240, 600, 1050, 2100, 4500, 7500, 10500, 15000, 19500, 24000, 30000, 60000, 105000, 150000, 225000, 300000, 525000, 750000, 1125000, 1200000, 1350000, 1950000, 2400000, 2400000, 2400000, 2400000, 2400000, 2400000, 2400000, 2400000, 2400000, 2400000, 2400000, 2400000, 2400000, 2400000, 2400000, 2400000, 2400000, 2400000, 2400000, 2400000, 2400000, 2400000, 2400000],
    },
    "cactus":
    {
        plaintext: "Cactus",
        pest: "Mite",
        api: "CACTUS",
        mult: "2",
        coin: "4",
        compact: "160",
        scompact: "25600",
        bonus: "fermento",
        double: 1,
        milestones: [60, 100, 160, 400, 700, 1400, 3000, 5000, 7000, 10000, 13000, 16000, 20000, 40000, 70000, 100000, 150000, 200000, 350000, 500000, 750000, 800000, 900000, 1300000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000],
    },
    "mushroom":
    {
        plaintext: "Mushroom",
        pest: "Slug",
        api: "MUSHROOM_COLLECTION",
        mult: "1",
        coin: "10",
        compact: "160",
        scompact: "5120",
        bonus: "fermento",
        double: 0,
        milestones: [30, 50, 80, 200, 350, 700, 1500, 2500, 3500, 5000, 6500, 8000, 10000, 20000, 35000, 50000, 75000, 100000, 175000, 250000, 375000, 400000, 450000, 650000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000],
    },
    "netherwart":
    {
        plaintext: "Nether Wart",
        pest: "Beetle",
        api: "NETHER_STALK",
        mult: "3",
        coin: "4",
        compact: "160",
        scompact: "25600",
        bonus: "fermento",
        double: 0,
        milestones: [90, 150, 250, 500, 1000, 2000, 4000, 7500, 10000, 15000, 20000, 25000, 30000, 50000, 100000, 150000, 200000, 300000, 500000, 750000, 1000000, 1500000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000, 9000000, 9000000, 9000000, 9000000, 9000000, 9000000, 9000000, 9000000, 9000000, 9000000, 9000000, 9000000, 9000000, 9000000, 9000000, 9000000, 9000000, 9000000],
    },
    "moonflower":
    {
        plaintext: "Moonflower",
        pest: "Firefly",
        api: "MOONFLOWER",
        mult: "2",
        coin: "4",
        compact: "160",
        scompact: "25600",
        bonus: "helianthus",
        double: 0,
        milestones: [30, 50, 80, 200, 350, 700, 1500, 2500, 3500, 5000, 6500, 8000, 10000, 20000, 35000, 50000, 75000, 100000, 175000, 250000, 375000, 400000, 450000, 650000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000],
    },
    "sunflower":
    {
        plaintext: "Sunflower",
        pest: "Dragonfly",
        api: "DOUBLE_PLANT",
        mult: "2",
        coin: "4",
        compact: "160",
        scompact: "25600",
        bonus: "helianthus",
        double: 0,
        milestones: [30, 50, 80, 200, 350, 700, 1500, 2500, 3500, 5000, 6500, 8000, 10000, 20000, 35000, 50000, 75000, 100000, 175000, 250000, 375000, 400000, 450000, 650000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000, 800000],
    },
    "wildrose":
    {
        plaintext: "Wild Rose",
        pest: "Praying Mantis",
        api: "WILD_ROSE",
        mult: "2",
        coin: "4",
        compact: "160",
        scompact: "25600",
        bonus: "helianthus",
        double: 0,
        milestones: [60, 100, 160, 400, 700, 1400, 3000, 5000, 7000, 10000, 13000, 16000, 20000, 40000, 70000, 100000, 150000, 200000, 350000, 500000, 750000, 800000, 900000, 1300000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000, 1600000],
    },
}

/*
Composter upgrade requirements.
Title: Self explanatory.
Items, Counts, (crops): Feed tape of items used in each upgrade. e.g. items[0] = a, counts[0] = 128, where a indicates the use of Enchanted Wheat, so the first upgrade is 128 Enchanted Wheat.
I do not recommend using this format in your own works.
*/

var upgrades = {
    "speed": 
    {
        "title": "Composter Speed",
        "items": ['a', 'b', 'a', 'b', 'a', 'b', 'c', 'b', 'c', 'b', 'c', 'b', 'c', 'b', 'c', 'b', 'c', 'b', 'c', 'b', 'c', 'b', 'c', 'b', 'c'],
        "counts": [128, 2, 256, 4, 512, 8, 8, 16, 16, 32, 24, 48, 32, 64, 48, 96, 64, 128, 80, 192, 104, 256, 128, 320, 160],
        "a": {
            "name": "Enchanted Wheat",
            "cost": 960,
            "target": "enchanted_wheat",
        },
        "b": {
            "name": "Enchanted Golden Carrot",
            "cost": 76800,
            "target": "enchanted_golden_carrot",
        },
        "c": {
            "name": "Enchanted Hay Bale",
            "cost": 153600,  
            "target": "enchanted_hay_bale",
        },
    },
    "multi_drop": 
    {
        "title": "Multi-drop",
        "items": ['a', 'b', 'a', 'c', 'a', 'c', 'a', 'c', 'a', 'c', 'a', 'c', 'a', 'c', 'a', 'c', 'a', 'c', 'a', 'c', 'a', 'c', 'a', 'c', 'a'],
        "counts": [1, 64, 2, 1, 4, 2, 8, 4, 16, 8, 32, 16, 48, 32, 64, 48, 96, 64, 128, 96, 192, 128, 256, 192, 320],
        "a": {
            "name": "Enchanted Baked Potato",
            "cost": 76800,
            "target": "enchanted_baked_potato",
        },
        "b": {
            "name": "Enchanted Pumpkin",
            "cost": 1600,
            "target": "enchanted_pumpkin",
        },
        "c": {
            "name": "Polished Pumpkin",
            "cost": 256000,  
            "target": "polished_pumpkin",
        },
    },
    "fuel_cap": 
    {
        "title": "Fuel Cap",
        "items": ['a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a'],
        "counts": [1, 4, 2, 8, 4, 16, 8, 32, 16, 48, 32, 64, 48, 96, 64, 128, 96, 192, 128, 256, 192, 384, 256, 512, 320],
        "a": {
            "name": "Enchanted Sugar Cane",
            "cost": 102400,
            "target": "enchanted_sugar_cane",
        },
        "b": {
            "name": "Enchanted Melon Block",
            "cost": 51200,
            "target": "enchanted_melon_block",
        },

    },
    "organic_matter_cap": 
    {
        "title": "Organic Matter Cap",
        "items": ['a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a'],
        "counts": [1, 3, 2, 6, 4, 12, 7, 24, 10, 48, 16, 72, 24, 96, 32, 144, 48, 192, 64, 256, 96, 352, 128, 448, 160],
        "a": {
            "name": "Enchanted Cactus",
            "cost": 76800,
            "target": "enchanted_cactus",
        },
        "b": {
            "name": "Enchanted Cookie",
            "cost": 76800,
            "target": "enchanted_cookie",
        },
    },
    "cost_reduction": 
    {
        "title": "Cost Reduction",
        "items": ['a', 'b', 'c', 'b', 'd', 'b', 'c', 'b', 'd', 'b', 'c', 'b', 'd', 'b', 'c', 'b', 'd', 'b', 'c', 'b', 'd', 'b', 'c', 'b', 'd'],
        "counts": [32, 1, 2, 2, 4, 4, 16, 8, 32, 16, 64, 32, 128, 48, 256, 64, 448, 96, 640, 160, 832, 224, 1024, 288, 1216],
        "a": {
            "name": "Enchanted Brown Mushroom",
            "cost": 1600,
            "target": "enchanted_brown_mushroom",
        },
        "b": {
            "name": "Mutant Nether Wart",
            "cost": 102400,
            "target": "mutant_nether_wart",
        },
        "c": {
            "name": "Enchanted Red Mushroom Block",
            "cost": 256000,
            "target": "enchanted_red_mushroom_block",
        },
        "d": {
            "name": "Enchanted Brown Mushroom Block",
            "cost": 256000,
            "target": "enchanted_brown_mushroom_block",
        },
    },

}

//Items used universally across all composter upgrades.
var upgradesuniversal = {
    1: {
        copper: 100,
    },
    2: {
        copper: 150,
    },
    3: {
        copper: 200,
    },
    4: {
        copper: 250,
    },
    5: {
        copper: 300,
    },
    6: {
        copper: 350,
    },
    7: {
        copper: 400,
    },
    8: {
        copper: 500,
        crop: "cropie",
        count: 3,
        cost: "25000",
    },
    9: {
        copper: 600,
        crop: "cropie",
        count: 6,
        cost: "25000",
    },
    10: {
        copper: 700,
        crop: "cropie",
        count: 12,
        cost: "25000",
    },
    11: {
        copper: 800,
        crop: "cropie",
        count: 32,
        cost: "25000",
    },
    12: {
        copper: 900,
        crop: "cropie",
        count: 64,
        cost: "25000",
    },
    13: {
        copper: 1000,
        crop: "cropie",
        count: 128,
        cost: "25000",
    },
    14: {
        copper: 1200,
        crop: "squash",
        count: 3,
        cost: "75000",
    },
    15: {
        copper: 1400,
        crop: "squash",
        count: 6,
        cost: "75000",
    },
    16: {
        copper: 1600,
        crop: "squash",
        count: 12,
        cost: "75000",
    },
    17: {
        copper: 1800,
        crop: "squash",
        count: 32,
        cost: "75000",
    },
    18: {
        copper: 2000,
        crop: "squash",
        count: 64,
        cost: "75000",
    },
    19: {
        copper: 2250,
        crop: "squash",
        count: 128,
        cost: "75000",
    },
    20: {
        copper: 2500,
        crop: "fermento",
        count: 3,
        cost: "250000",
    },
    21: {
        copper: 2750,
        crop: "fermento",
        count: 6,
        cost: "250000",
    },
    22: {
        copper: 3000,
        crop: "fermento",
        count: 12,
        cost: "250000",
    },
    23: {
        copper: 3300,
        crop: "condensed_fermento",
        count: 4,
        cost: "2250000",
    },
    24: {
        copper: 3600,
        crop: "condensed_fermento",
        count: 7,
        cost: "2250000",
    },
    25: {
        copper: 4000,
        crop: "condensed_fermento",
        count: 14,
        cost: "2250000",
    },
}

//Plaintext versions of all crops used.
var croptranslations = {
    "enchanted_hay_bale": "Enchanted Hay Bale",
    "enchanted_golden_carrot": "Enchanted Golden Carrot",
    "tightly_tied_hay_bale": "Tightly-Tied Hay Bale",
    "enchanted_baked_potato": "Enchanted Baked Potato",
    "enchanted_pumpkin": "Enchanted Pumpkin",
    "polished_pumpkin": "Polished Pumpkin",
    "enchanted_sugar_cane": "Enchanted Sugar Cane",
    "enchanted_melon_block": "Enchanted Melon Block",
    "enchanted_cactus": "Enchanted Cactus",
    "enchanted_cookie": "Enchanted Cookie",
    "enchanted_brown_mushroom": "Enchanted Brown Mushroom",
    "mutant_nether_wart": "Mutant Nether Wart",
    "enchanted_red_mushroom_block": "Enchanted Red Mushroom Block",
    "enchanted_brown_mushroom_block": "Enchanted Brown Mushroom Block",
    "cropie": "Cropie",
    "squash": "Squash",
    "fermento": "Fermento",
    "helianthus": "Helianthus",
    "condensed_fermento": "Condensed Fermento",
    "copper": "Copper",
  }

//Basic sum function.
function sum(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        total += Number(array[i]);
    }
    console.log(total);
}
console.log(crops["cocoabeans"].milestones.length);
sum(crops["cocoabeans"].milestones);

/*
Mutations data.
Plaintext: Self explanatory.
Size: Side length of the square a mutation occupies.
Req: Itemized list of all crops that must be adjacent to this square in order to spawn this mutation.
Water: 1 if this plant needs water, 0 otherwise.
Stages: Number of stages to fully grow one instance of this crop once spawned. (Likely will not be used.)
*/
var mutations = {
    "wheat": {
        "plaintext": "Wheat",
        "rarity": "Common",
        "size": 1,
        "sreq": {
            "none": 1,
        },
        "water": 1,
        "stages": 8,
    },
    "carrot": {
        "plaintext": "Carrot",
        "rarity": "Common",
        "size": 1,
        "sreq": {
            "none": 1,
        },
        "water": 1,
        "stages": 8,
    },
    "potato": {
        "plaintext": "Potato",
        "rarity": "Common",
        "size": 1,
        "sreq": {
            "none": 1,
        },
        "water": 1,
        "stages": 8,
    },
    "pumpkin": {
        "plaintext": "Pumpkin",
        "rarity": "Common",
        "size": 1,
        "sreq": {
            "none": 1,
        },
        "water": 1,
        "stages": 11,
    },
    "sugarcane": {
        "plaintext": "Sugar Cane",
        "rarity": "Common",
        "size": 1,
        "sreq": {
            "none": 1,
        },
        "water": 1,
        "stages": 8,
    },
    "melon": {
        "plaintext": "Melon",
        "rarity": "Common",
        "size": 1,
        "sreq": {
            "none": 1,
        },
        "water": 1,
        "stages": 11,
    },
    "cactus": {
        "plaintext": "Cactus",
        "rarity": "Common",
        "size": 1,
        "sreq": {
            "none": 1,
        },
        "water": 0,
        "stages": 8,
    },
    "cocoabeans": {
        "plaintext": "Cocoa Beans",
        "rarity": "Common",
        "size": 1,
        "sreq": {
            "none": 1,
        },
        "water": 0,
        "stages": 8,
    },
    "redmushroom": {
        "plaintext": "Red Mushroom",
        "rarity": "Common",
        "size": 1,
        "sreq": {
            "none": 1,
        },
        "water": 0,
        "stages": 8,
    },
    "brownmushroom": {
        "plaintext": "Brown Mushroom",
        "rarity": "Common",
        "size": 1,
        "sreq": {
            "none": 1,
        },
        "water": 0,
        "stages": 8,
    },
    "netherwart": {
        "plaintext": "Nether Wart",
        "rarity": "Common",
        "size": 1,
        "sreq": {
            "none": 1,
        },
        "water": 0,
        "stages": 8,
    },
    "sunflower": {
        "plaintext": "Sunflower",
        "rarity": "Common",
        "size": 1,
        "sreq": {
            "none": 1,
        },
        "water": 1,
        "stages": 15,
    },
    "moonflower": {
        "plaintext": "Moonflower",
        "rarity": "Common",
        "size": 1,
        "sreq": {
            "none": 1,
        },
        "water": 1,
        "stages": 15,
    },
    "wildrose": {
        "plaintext": "Wild Rose",
        "rarity": "Common",
        "size": 1,
        "sreq": {
            "none": 1,
        },
        "water": 1,
        "stages": 15,
    },
    "fire": {
        "plaintext": "Fire",
        "rarity": "Common",
        "size": 1,
        "sreq": {
            "none": 1,
        },
        "water": 1,
        "stages": 0,
    },
    "fermento": {
        "plaintext": "Fermento",
        "rarity": "Common",
        "size": 1,
        "sreq": {
            "none": 1,
        },
        "water": 1,
        "stages": 0,
    },
    "ashwreath": {
        "plaintext": "Ashwreath",
        "rarity": "Common",
        "size": 1,
        "req": {
            "netherwart": 4,
            "fire": 4,
        },
        "water": 0,
        "stages": 0,
    },
    "choconut": {
        "plaintext": "Choconut",
        "rarity": "Common",
        "size": 1,
        "req": {
            "cocoabeans": 4,
        },
        "water": 0,
        "stages": 0,
    },
    "dustgrain": {
        "plaintext": "Dustgrain",
        "rarity": "Common",
        "size": 1,
        "req": {
            "wheat": 4,
        },
        "water": 0,
        "stages": 0,
    },
    "gloomgourd": {
        "plaintext": "Gloomgourd",
        "rarity": "Common",
        "size": 1,
        "req": {
            "pumpkin": 1,
            "melon": 1,
        },
        "water": 0,
        "stages": 0,
    },
    "lonelily": {
        "plaintext": "Lonelily",
        "rarity": "Common",
        "size": 1,
        "sreq": {
            "none": "No adjacent crops.",
        },
        "notes": {
            0: "Grows incredibly rarely in spaces with no adjacent crops.",
        },
        "water": 0,
        "stages": 0,
    },
    "scourroot": {
        "plaintext": "Scourroot",
        "rarity": "Common",
        "size": 1,
        "req": {
            "potato": 2,
            "carrot": 2,
        },
        "water": 0,
        "stages": 0,
    },
    "shadevine": {
        "plaintext": "Shadevine",
        "rarity": "Common",
        "size": 1,
        "req": {
            "sugarcane": 2,
            "cactus": 2,
        },
        "water": 0,
        "stages": 0,
    },
    "veilshroom": {
        "plaintext": "Veilshroom",
        "rarity": "Common",
        "size": 1,
        "req": {
            "redmushroom": 2,
            "brownmushroom": 2,
        },
        "water": 0,
        "stages": 0,
    },
    "witherbloom": {
        "plaintext": "Witherbloom",
        "rarity": "Common",
        "size": 1,
        "req": {
            "deadplant": 8,
        },
        "water": 0,
        "stages": 0,
    },
    "chocoberry": {
        "plaintext": "Chocoberry",
        "rarity": "Uncommon",
        "size": 1,
        "req": {
            "choconut": 6,
            "gloomgourd": 2,
        },
        "water": 1,
        "stages": 6,
    },
    "cindershade": {
        "plaintext": "Cindershade",
        "rarity": "Uncommon",
        "size": 1,
        "req": {
            "ashwreath": 4,
            "witherbloom": 4,
        },
        "water": 0,
        "stages": 8,
    },
    "coalroot": {
        "plaintext": "Coalroot",
        "rarity": "Uncommon",
        "size": 1,
        "req": {
            "scourroot": 3,
            "ashwreath": 5,
        },
        "notes": {
            0: "Requires a tool with at least Breaking Power 1 to harvest.",
        },
        "water": 1,
        "stages": 8,
    },
    "creambloom": {
        "plaintext": "Creambloom",
        "rarity": "Uncommon",
        "size": 1,
        "req": {
            "choconut": 8
        },
        "water": 1,
        "stages": 6,
    },
    "duskbloom": {
        "plaintext": "Duskbloom",
        "rarity": "Uncommon",
        "size": 1,
        "req": {
            "moonflower": 2,
            "sunflower": 2,
            "shadevine": 2,
            "dustgrain": 2,
        },
        "water": 1,
        "stages": 8,
    },
    "thornshade": {
        "plaintext": "Thornshade",
        "rarity": "Uncommon",
        "size": 1,
        "req": {
            "wildrose": 4,
            "veilshroom": 4,
        },
        "water": 1,
        "stages": 8,
    },
    "blastberry": {
        "plaintext": "Blastberry",
        "rarity": "Rare",
        "size": 1,
        "req": {
            "ashwreath": 3,
            "chocoberry": 5,
        },
        "notes": {
            0: "Explodes when harvested.",
            1: "All mutations adjacent except for Turtlellini will be destroyed.",
        },
        "water": 1,
        "stages": 6,
    },
    "cheesebite": {
        "plaintext": "Cheesebite",
        "rarity": "Rare",
        "size": 1,
        "req": {
            "creambloom": 4,
            "fermento": 4,
        },
        "notes": {
            0: "Will be attacked by a Rat at stages 4 and 7, stopping growth.",
            1: "Use a Vacuum to remove the Rat and resume growth.",
        },
        "water": 1,
        "stages": 10,
    },
    "chloronite": {
        "plaintext": "Chloronite",
        "rarity": "Rare",
        "size": 1,
        "req": {
            "coalroot": 6,
            "thornshade": 2,
        },
        "notes": {
            0: "Becomes a gemstone when fully grown.",
            1: "Drops an additional Chloronite per 500 Mining/Gemstone Fortune.",
        },
        "water": 1,
        "stages": 10,
    },
    "donoteatshroom": {
        "plaintext": "Do-not-eat-shroom",
        "rarity": "Rare",
        "size": 1,
        "req": {
            "veilshroom": 4,
            "scourroot": 4,
        },
        "notes": {
            0: "Causes 4s of Blindness and Nausea when harvested.",
        },
        "water": 1,
        "stages": 8,
    },
    "fleshtrap": {
        "plaintext": "Fleshtrap",
        "rarity": "Rare",
        "size": 1,
        "req": {
            "lonelily": 4,
            "cindershade": 4,
        },
        "notes": {
            0: "Must be fed with meat to continue growing.",
            1: "Hunger meter starts at 60% and depletes by roughly 20% per cycle. Enchanted meat fills the meter by about 20%.",
            2: "If fed at least 5 enchanted meat during its lifetime, drops an additional Fleshtrap when harvested.",
        },
        "water": 1,
        "stages": 14,
    },
    "magicjellybean": {
        "plaintext": "Magic Jellybean",
        "rarity": "Rare",
        "size": 1,
        "req": {
            "sugarcane": 5,
            "duskbloom": 3,
        },
        "notes": {
            0: "Drops 1 Magic Jellybean every 12 stages it has been alive.",
            1: "Can be harvested starting from stage 12.",
            2: "Number of drops can be visually determined by how tall the Jellybean is.",
        },
        "water": 1,
        "stages": 120,
    },
    "noctilume": {
        "plaintext": "Noctilume",
        "rarity": "Rare",
        "size": 2,
        "req": {
            "duskbloom": 6,
            "lonelily": 6,
        },
        "notes": {
            0: "Will not grow unless time of day matches the depiction on its flowers.",
            1: "Flowers switch to the opposite time of day every successful growth cycle.",
        },
        "water": 1,
        "stages": 4,
    },
    "snoozling": {
        "plaintext": "Snoozling",
        "rarity": "Rare",
        "size": 3,
        "req": {
            "dustgrain": 3,
            "thornshade": 3,
            "duskbloom": 3,
            "witherbloom": 3,
            "creambloom": 4,
        },
        "notes": {
            0: "Stops growing on cycles 5, 10, and 15, until woken up.",
            1: "Right-click to wake up.",
        },
        "water": 1,
        "stages": 20,
    },
    "soggybud": {
        "plaintext": "Soggybud",
        "rarity": "Rare",
        "size": 1,
        "req": {
            "melon": 8,
        },
        "notes": {
            0: "Drains roughly 1.39 water from surrounding crops with Water Retain every cycle.",
            1: "Cannot otherwise be watered.",
        },
        "water": 1,
        "stages": 10,
    },
    "chorusfruit": {
        "plaintext": "Chorus Fruit",
        "rarity": "Epic",
        "size": 1,
        "req": {
            "magicjellybean": 3,
            "chloronite": 5,
        },
        "notes": {
            0: "Converts a random block in the plot to End Stone every cycle.",
            1: "Teleports to a random End Stone block every cycle.",
            2: "If multiple Chorus Fruit teleport to the same End Stone block, all but one are destroyed.",
        },
        "water": 0,
        "stages": 12,
    },
    "plantboyadvance": {
        "plaintext": "PlantBoy Advance",
        "rarity": "Epic",
        "size": 2,
        "req": {
            "snoozling": 6,
            "thunderling": 6,
        },
        "notes": {
            0: "Demands a game of Snake be played before being harvested.",
            1: "The game is won at 8 apples collected.",
            2: "Failure will result in the regression of 3 growth states.",
        },
        "water": 1,
        "stages": 8,
    },
    "puffercloud": {
        "plaintext": "Puffercloud",
        "rarity": "Epic",
        "size": 1,
        "req": {
            "snoozling": 2,
            "donoteatshroom": 6,
        },
        "notes": {
            0: "Deals 10% of the player's max health as true damage every second when nearby.",
        },
        "water": 1,
        "stages": 14,
    },
    "shellfruit": {
        "plaintext": "Shellfruit",
        "rarity": "Epic",
        "size": 1,
        "sreq": {
            "none": "Turtlellini, at least 2 Blastberry",
        },
        "notes": {
            0: "Created when a Turtlellini is exploded by Blastberry, twice.",
        },
        "water": 0,
        "stages": 0,
    },
    "startlevine": {
        "plaintext": "Startlevine",
        "rarity": "Epic",
        "size": 1,
        "req": {
            "cheesebite": 4,
            "blastberry": 4,
        },
        "notes": {
            0: "Requires Invisibility to harvest.",
        },
        "water": 1,
        "stages": 12,
    },
    "stoplightpetal": {
        "plaintext": "Stoplight Petal",
        "rarity": "Epic",
        "size": 1,
        "req": {
            "snoozling": 4,
            "noctilume": 4,
        },
        "notes": {
            0: "Stoplight activates when harvest is attempted.",
            1: "Click rapidly while the petal is green, and stop when it turns yellow, then red.",
            2: "At about 100 clicks, visible on the meter above the petal, the petal is harvested.",
            3: "Clicking while the petal is red destroys the petal.",
        },
        "water": 1,
        "stages": 12,
    },
    "thunderling": {
        "plaintext": "Thunderling",
        "rarity": "Epic",
        "size": 1,
        "req": {
            "soggybud": 5,
            "noctilume": 3,
        },
        "notes": {
            0: "Generates 2,000 Charge every cycle.",
            1: "Right-click to discharge, dealing 25% of your current health as true damage and depleting the charge.",
            2: "At 16,000 Charge, the Thunderling explodes, destroying itself and all adjacent crops."
        },
        "water": 0,
        "stages": 16,
    },
    "turtlellini": {
        "plaintext": "Turtlellini",
        "rarity": "Epic",
        "size": 1,
        "req": {
            "soggybud": 4,
            "choconut": 4,
        },
        "water": 1,
        "stages": 0,
    },
    "zombud": {
        "plaintext": "Zombud",
        "rarity": "Epic",
        "size": 1,
        "req": {
            "cindershade": 2,
            "deadplant": 4,
            "fleshtrap": 2,
        },
        "notes": {
            0: "All adjacent Dead Plants are converted to Zombuddy when harvested.",
            1: "Slain Zombuddies drop 1 Zombud each.",
        },
        "water": 0,
        "stages": 16,
    },
    "allinaloe": {
        "plaintext": "All-in Aloe",
        "rarity": "Legendary",
        "size": 1,
        "req": {
            "magicjellybean": 6,
            "plantboyadvance": 2,
        },
        "notes": {
            0: "Can be harvested at any growth stage, but only drops 1 All-in Aloe Fragment.",
            1: "Every stage, drops multiply exponentially by an increasing multiplier (more info needed), but has a chance to reset to 1.",
            2: "Reset chance increases by a flat 3% every cycle. Maxes at 75%.",
            3: "9 All-in Aloe Fragment can be crafted into an All-in Aloe.",
            3: "Changes color every cycle that an additional complete All-in Aloe can be harvested from the current state."
        },
        "water": 0,
        "stages": 27,
    },
    "devourer": {
        "plaintext": "Devourer",
        "rarity": "Legendary",
        "size": 1,
        "req": {
            "puffercloud": 4,
            "zombud": 4,
        },
        "notes": {
            0: "Surfaces or crops nearby may be converted to Devourer Root.",
            1: "Devourer Root cannot spawn across empty spaces. Quarantine is recommended.",
        },
        "water": 1,
        "stages": 16,
    },
    "glasscorn": {
        "plaintext": "Glasscorn",
        "rarity": "Legendary",
        "size": 2,
        "req": {
            "chloronite": 6,
            "startlevine": 6,
        },
        "notes": {
            0: "Can be harvested at stage 7 or 8, visually indicated by the breaking of the glass growing over the stalks.",
            1: "At stage 9, shatters and regresses to stage 1.",
        },
        "water": 1,
        "stages": 8,
    },
    
    "godseed": {
        "plaintext": "Godseed",
        "rarity": "Legendary",
        "size": 3,
        "sreq": {
            "none": 1,
        },
        "notes": {
            0: "Spawns in any 3x3 area that is simultaneously receiving every positive effect, rarely.",
            1: "Requires an incredibly high amount of water.",
            2: "Recommended to spawn using Wild Rose, Cocoa Beans, Mushroom (any color), Shadevine, and Sunflower."
        },
        "water": 1,
        "stages": 40,
    },
    
   /*
    "jerryflower": {
        "size": 1,
        "req": {
            This will be worked on later.
        },
        "stages": 8,
    },
    */
    "phantomleaf": {
        "plaintext": "Phantomleaf",
        "rarity": "Legendary",
        "size": 1,
        "req": {
            "chorusfruit": 4,
            "shellfruit": 4,
        },
        "notes": {
            0: "Hides in a random crop in the plot when harvested. Cannot be harvested if no other crops are in the plot.",
            1: "A loud heartbeat plays when the selected crop is nearby. The correct crop plays the heartbeat at roughly 5 beats/sec when standing on it.",
            2: "Breaking the wrong crop or not making an action for 60 seconds destroys the Phantomleaf.",
        },
        "water": 1,
        "stages": 15,
    },
    "timestalk": {
        "plaintext": "Timestalk",
        "rarity": "Legendary",
        "size": 1,
        "req": {
            "stoplightpetal": 4,
            "chorusfruit": 2,
            "shellfruit": 2,
        },
        "notes": {
            0: "Visually shrinks as it \"grows\".",
            1: "Spawns a clone of the player when harvested.",
            2: "Drops when the clone is slain.",
        },
        "water": 0,
        "stages": 14,
    },
    
    "deadplant": {
        "plaintext": "Dead Plant",
        "rarity": "Common",
        "size": 1,
        "sreq": {
            "none": 1,
        },
        "notes": {
            0: "Spawns when a plant dies from thirst, or if it has been placed for longer than 72 hours."
        },
        "water": 0,
        "stages": 0,
    },
    
}

var cropIDs = [
    "wheat",
    "carrot",
    "potato",
    "pumpkin", 
    "sugarcane",
    "melon",
    "cactus",
    "cocoabeans",
    "redmushroom",
    "brownmushroom",
    "netherwart",
    "sunflower",
    "moonflower",
    "wildrose",
    "ashwreath",
    "choconut",
    "dustgrain",
    "gloomgourd",
    "lonelily",
    "scourroot",
    "shadevine",
    "veilshroom",
    "witherbloom",
    "chocoberry",
    "cindershade",
    "coalroot",
    "creambloom",
    "duskbloom",
    "thornshade",
    "blastberry",
    "cheesebite",
    "chloronite",
    "donoteatshroom",
    "fleshtrap",
    "magicjellybean",
    "noctilume",
    "snoozling",
    "soggybud",
    "chorusfruit",
    "plantboyadvance",
    "puffercloud",
    "shellfruit",
    "startlevine",
    "stoplightpetal",
    "thunderling",
    "turtlellini",
    "zombud",
    "allinaloe",
    "devourer",
    "glasscorn",
    "phantomleaf",
    "timestalk",
    "fire",
    "fermento",
    "godseed",
    "deadplant",
]