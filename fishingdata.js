const fishnames = ["sulphur_skitter", "obfuscated_fish_1", "steaming_hot_flounder", "", "gusher", "blobfish", "obfuscated_fish_2", "slugfish", "flyfish", "obfuscated_fish_3", "lava_horse", "mana_ray", "volcanic_stonefish", "vanille", "", "skeleton_fish", "moldfin", "soul_fish", "karate_fish", "golden_fish", ""];
const fishrealnames = ["Sulphur Skitter", "Obfuscated 1", "Steaming-Hot Flounder", "", "Gusher", "Blobfish", "Obfuscated 2", "Slugfish", "Flyfish", "Obfuscated 3", "Lavahorse", "Mana Ray", "Volcanic Stonefish", "Vanille", "", "Skeleton Fish", "Moldfin", "Soul Fish", "Karate Fish", "Golden Fish", ""];
const methods = ["% chance to be caught within 8 blocks of a Sulphur Ore", "% chance to be caught using Corrupted Bait or when killing a Corrupted Sea Creature", "% chance to be caught in a geyser in the Blazing Volcano", "", "% chance to be caught 7-16 minutes after a volcano eruption", "% chance to be caught under any conditions", "% chance to be caught using Obfuscated 1 as bait", "% chance to be caught when the bobber has been out for at least 20 seconds", "% chance to be caught while standing at least 8 blocks over lava in the Blazing Volcano", "% chance to be caught while using Obfuscated 2 as bait", "% chance to be caught under any conditions", "% chance to be caught when the user has at least 1200 mana", "% chance to be caught while inside the Blazing Volcano", "% chance to be caught using a Starter Lava Rod with no enchantments", "", "% chance to be caught in the Burning Desert or Dragontail", "% chance to be caught in the Mystic Marsh or Scarleton", "% chance to be caught in the Stronghold", "% chance to be caught in the Dojo", "Appears every 15-20 minutes of consecutive fishing"];
const fishrarities = ["#ffffff", "#ffffff", "#ffffff", "", "#ffffff", "#ffffff", "#55ff55", "#55ff55", "#55ff55", "#5555ff", "#5555ff", "#5555ff", "#5555ff", "#5555ff", "", "#aa00aa", "#aa00aa", "#aa00aa","#aa00aa", "#ffaa00", ""];
const raritycontrol = ["_bronze", "_silver", "_gold", "_diamond", ""];
const raritycolors = ["#555555", "#aaaaaa", "#ffaa00", "#55ffff", "#ffffff"];

const waterscnames = {
    "squid": "Squid",
    "agarimoo": "Agarimoo",
    "sea_walker": "Sea Walker",
    "night_squid": "Night Squid",
    "sea_guardian": "Sea Guardian",
    "sea_witch": "Sea Witch",
    "sea_archer": "Sea Archer",
    "rider_of_the_deep": "Rider of the Deep",
    "catfish": "Catfish",
    "carrot_king": "Carrot King",
    "sea_leech": "Sea Leech",
    "guardian_defender": "Guardian Defender",
    "deep_sea_protector": "Deep Sea Protector",
    "water_hydra": "Water Hydra",
    "sea_emperor": "Sea Emperor",
    "oasis_rabbit": "Oasis Rabbit",
    "oasis_sheep": "Oasis Sheep",
    "water_worm": "Water Worm",
    "poisoned_water_worm": "Poisoned Water Worm",
    "abyssal_miner": "Abyssal Miner",
    "scarecrow": "Scarecrow",
    "nightmare": "Nightmare",
    "werewolf": "Werewolf",
    "phantom_fisher": "Phantom Fisher",
    "grim_reaper": "Grim Reaper",
    "frozen_steve": "Frozen Steve",
    "frosty": "Frosty",
    "grinch": "Grinch",
    "yeti": "Yeti",
    "nutcracker": "Nutcracker",
    "reindrake": "Reindrake",
    "nurse_shark": "Nurse Shark",
    "blue_shark": "Blue Shark",
    "tiger_shark": "Tiger Shark",
    "great_white_shark": "Great White Shark",
    "None": 0,
}
const lavascnames = {
    "magma_slug": "Magma Slug",
    "moogma": "Moogma",
    "lava_leech": "Lava Leech",
    "pyroclastic_worm": "Pyroclastic Worm",
    "lava_flame": "Lava Flame",
    "fire_eel": "Fire Eel",
    "taurus": "Taurus",
    "plhlegblast": "Plhlegblast",
    "thunder": "Thunder",
    "lord_jawbus": "Lord Jawbus",
    "flaming_worm": "Flaming Worm",
    "lava_blaze": "Lava Blaze",
    "lava_pigman": "Lava Pigman",
}
var scrarities = {
    "squid": "common",
    "agarimoo": "rare",
    "sea_walker": "common",
    "night_squid": "common",
    "sea_guardian": "common",
    "sea_witch": "uncommon",
    "sea_archer": "uncommon",
    "rider_of_the_deep": "uncommon",
    "catfish": "rare",
    "carrot_king": "rare",
    "sea_leech": "rare",
    "guardian_defender": "epic",
    "deep_sea_protector": "epic",
    "water_hydra": "epic",
    "sea_emperor": "legendary",
    "oasis_rabbit": "uncommon",
    "oasis_sheep": "uncommon",
    "water_worm": "rare",
    "poisoned_water_worm": "rare",
    "abyssal_miner": "legendary",
    "scarecrow": "common",
    "nightmare": "rare",
    "werewolf": "epic",
    "phantom_fisher": "legendary",
    "grim_reaper": "legendary",
    "frozen_steve": "common",
    "frosty": "common",
    "grinch": "uncommon",
    "yeti": "legendary",
    "nutcracker": "rare",
    "reindrake": "legendary",
    "nurse_shark": "uncommon",
    "blue_shark": "rare",
    "tiger_shark": "epic",
    "great_white_shark": "legendary",
    "magma_slug": "uncommon",
    "moogma": "uncommon",
    "lava_leech": "rare",
    "pyroclastic_worm": "rare",
    "lava_flame": "rare",
    "fire_eel": "rare",
    "taurus": "epic",
    "plhlegblast": "legendary",
    "thunder": "mythic",
    "lord_jawbus": "mythic",
    "flaming_worm": "rare",
    "lava_blaze": "uncommon",
    "lava_pigman": "uncommon",
}
var raritycolors2 = {
    "common": "#c0c0c0",
    "uncommon": "#55ff55",
    "rare": "#5555ff",
    "epic": "#aa22aa",
    "legendary": "#ffaa00",
    "mythic": "#ff55ff",
}
const normalwaterscs = ["squid", "sea_walker", "sea_guardian", "sea_witch", "sea_archer", "rider_of_the_deep", "catfish", "guardian_defender", "sea_leech", "deep_sea_protector", "water_hydra", "sea_emperor"];
const spookyscs = ["scarecrow", "nightmare", "werewolf", "phantom_fisher", "grim_reaper"];
const sharkscs = ["nurse_shark", "blue_shark", "tiger_shark", "great_white_shark"];
const winterscs = ["frozen_steve", "frosty", "nutcracker", "grinch", "yeti", "reindrake"];
const squids = ["squid", "night_squid"];
const oasisscs = ["oasis_rabbit", "oasis_sheep"];
const goblinscs = ["abyssal_miner", "water_worm", "poisoned_water_worm"];
const precursorscs = ["flaming_worm"];
const magmascs = ["lava_blaze", "lava_pigman"];
const crimsonscs = ["magma_slug", "moogma", "lava_leech", "pyroclastic_worm", "lava_flame", "fire_eel", "taurus", "thunder", "lord_jawbus"];
const plhlegblastscs = ["magma_slug", "moogma", "lava_leech", "pyroclastic_worm", "lava_flame", "fire_eel", "taurus", "thunder", "lord_jawbus", "plhlegblast"];