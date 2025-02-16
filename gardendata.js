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
        milestones: [30, 50, 80, 170, 330, 670, 1330, 2500, 3500, 5000, 6500, 8000, 10000, 20000, 35000, 50000, 75000, 100000, 175000, 250000, 350000, 500000, 750000, 1000000, 1300000, 1600000, 2000000, 2300000, 2600000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000],
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
        milestones: [100, 150, 250, 500, 1500, 2500, 5000, 7500, 10000, 15000, 20000, 25000, 40000, 70000, 100000, 200000, 250000, 250000, 500000, 750000, 1000000, 1500000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000, 9000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000],
        
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
        milestones: [100, 150, 250, 500, 1500, 2500, 5000, 7500, 10000, 15000, 20000, 25000, 40000, 70000, 100000, 200000, 250000, 250000, 500000, 750000, 1000000, 1500000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000, 9000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000, 10000000],
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
        milestones: [30, 50, 80, 170, 330, 670, 1330, 2500, 3500, 5000, 6500, 8000, 10000, 20000, 35000, 50000, 75000, 100000, 175000, 250000, 350000, 500000, 750000, 1000000, 1300000, 1600000, 2000000, 2300000, 2600000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000],
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
        milestones: [60, 100, 160, 340, 660, 1340, 2660, 5000, 7000, 10000, 13000, 16000, 20000, 40000, 70000, 100000, 150000, 200000, 350000, 500000, 700000, 1000000, 1500000, 2000000, 2600000, 3200000, 4000000, 4600000, 5200000, 6000000, 6000000, 6000000, 6000000, 6000000, 6000000, 6000000, 6000000, 6000000, 6000000, 6000000, 6000000, 6000000, 6000000, 6000000, 6000000, 6000000, 6000000],
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
        milestones: [150, 250, 400, 850, 1650, 3350, 6650, 12500, 17500, 25000, 32500, 40000, 50000, 100000, 175000, 250000, 375000, 500000, 875000, 1250000, 1750000, 2500000, 3750000, 5000000, 6500000, 8000000, 10000000, 11500000, 13000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000, 15000000],
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
        milestones: [90, 150, 250, 500, 1000, 2000, 4000, 7500, 10000, 15000, 20000, 25000, 30000, 50000, 100000, 150000, 200000, 300000, 500000, 750000, 1000000, 1500000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000, 9000000, 9000000, 9000000, 9000000, 9000000, 9000000, 9000000, 9000000, 9000000, 9000000, 9000000, 9000000, 9000000, 9000000, 9000000, 9000000, 9000000, 9000000],
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
        milestones: [60, 100, 160, 340, 660, 1340, 2660, 5000, 7000, 10000, 13000, 16000, 20000, 40000, 70000, 100000, 150000, 200000, 350000, 500000, 700000, 1000000, 1500000, 2000000, 2600000, 3200000, 4000000, 4600000, 5200000, 6000000, 6000000, 6000000, 6000000, 6000000, 6000000, 6000000, 6000000, 6000000, 6000000, 6000000, 6000000, 6000000, 6000000, 6000000, 6000000, 6000000, 6000000],
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
        milestones: [30, 50, 80, 170, 330, 670, 1330, 2500, 3500, 5000, 6500, 8000, 10000, 20000, 35000, 50000, 75000, 100000, 175000, 250000, 350000, 500000, 750000, 1000000, 1300000, 1600000, 2000000, 2300000, 2600000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000],
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
}
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
            "cost": 61440,
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
            "cost": 61500,
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
            "cost": 51200,
            "target": "enchanted_red_mushroom_block",
        },
        "d": {
            "name": "Enchanted Brown Mushroom Block",
            "cost": 51200,
            "target": "enchanted_brown_mushroom_block",
        },
    },

}
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
    "condensed_fermento": "Condensed Fermento",
    "copper": "Copper",
  }
function sum(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        total += Number(array[i]);
    }
    console.log(total);
}
console.log(crops["cocoabeans"].milestones.length);
sum(crops["cocoabeans"].milestones);