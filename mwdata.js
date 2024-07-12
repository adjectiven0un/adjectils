const classnames = ["cow", "hunter", "shark", "arcanist", "dreadlord", "golem", "herobrine", "pigman", "zombie", "blaze", "enderman", "shaman", "squid", "creeper", "pirate", "sheep", "skeleton", "spider", "werewolf", "angel", "assassin", "automaton", "moleman", "phoenix", "dragon", "renegade", "snowman"];
const classnamesCapital = ["Cow", "Hunter", "Shark", "Arcanist", "Dreadlord", "Golem", "Herobrine", "Pigman", "Zombie", "Blaze", "Enderman", "Shaman", "Squid", "Creeper", "Pirate", "Sheep", "Skeleton", "Spider", "Werewolf", "Angel", "Assassin", "Automaton", "Moleman", "Phoenix", "Dragon", "Renegade", "Snowman"];
const classColors = ["#ff55ff", "#55ff55", "#00aaaa", "#ff5555", "#aa0000", "#aaaaaa", "#ffff55", "#ff55ff", "#00aa00", "#ff5555", "#aa00aa", "#55ff55", "#55ffff", "#55ff55", "#ffaa00", "#ffffff", "#55ffff", "#aa00aa", "#00aa00", "#ffaa00", "#aa0000", "#ffff55", "#ffff55", "#ff5555", "#ff5555", "#ffaa00", "#55ffff"];
const classTypes = ["Starter", "Starter", "Starter", "Standard", "Standard", "Standard", "Standard", "Standard", "Standard", "Standard", "Standard", "Standard", "Standard", "Standard", "Standard", "Standard", "Standard", "Standard", "Mythic", "Mythic", "Mythic", "Mythic", "Mythic", "Mythic", "Mythic", "Mythic", "Mythic"];
const classStyles1 = ["Support", "Ranged", "Fighter", "Control", "Rusher", "Tank", "Damage", "Damage", "Tank", "Damage", "Mobility", "Control", "Control", "Control", "Fighter", "Control", "Ranged", "Mobility", "Mobility", "Fighter", "Fighter", "Tank", "Damage", "Support", "Damage", "Mobility", "Damage"];
const classStyles2 = ["Tank", "Fighter", "Control", "Fighter", "Damage", "Control", "Control", "Tank", "Support", "Ranged", "Fighter", "Mobility", "Tank", "Damage", "Damage", "Support", "Control", "Rusher", "Tank", "Support", "Mobility", "Fighter", "Mobility", "Ranged", "Ranged", "Ranged", "Fighter"];
const difficulties = [1, 2, 3, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 4, 4, 4];
/*
const skinNames_0 = ["Cow", "Cow Suit", "Iron Cow", "Skelly Moo", "Fungu Madness", "One Serious Bull", "Parasite", "Sir Loin", "Sacred Bull", "King Cowie", "Buffalo Bill", "Minotaur", "Charred"];
const skinDesc_0 = [
    "The default skin for Cow.",
    "Perfect for costume parties!",
    "The kind of cow to launch their pasture to Mars.",
    "Thanks for good calcium.",
    "This toxic cow conquers the world one infection at a time.",
    "Thick as a brick, strong as a... bull.",
    "Tainted meat.",
    "Runs his own five-star restaurant.",
    "Red in nature.",
    "Now that is one fancy cow.",
    "Not actually a cow, but just as ruthless in its ruminant glory.",
    "Don't let its floral nature fool you. You do not want to cross this minotaur.",
    "Went to Hell and back for revenge, but might have stayed a bit too long."
];
const skinPaths_0 = [
    "",
    "onetime",
    "bucket_barriers_broken",
    "cow_ultra_pasteurized_drank",
    "onetime",
    "onetime",
    "final_assists_after_final_killed",
    "onetime",
    "cow_players_healed",
    "purchase",
    "pres3",
    "pres5",
    "completionist"
];
const skinPaths_onetime_0 = [
    "",
    "walls3_i_am_cow",
    "",
    "",
    "walls3_team_player",
    "walls3_legendary_cow",
    "",
    "walls3_fine_dining",
    "",
    "",
    "",
    "",
];
const skinReqs_0 = [
    "",
    "",
    "600",
    "500",
    "",
    "",
    "15",
    "",
    "2500",
    "5,000",
    "",
    "",
];
const skinReqDesc_0 = [
    "",
    "",
    "Let 500 buckets from Bucket Barrier break protecting you.",
    "Drink 500 Ultra Pasteurized Milk as Cow.",
    "",
    "",
    "Get 15 total FK/A after taking a final death.",
    "",
    "Cast abilities on players 2,500 times as Cow.",
    "",
    "",
    "",
    
];
const skinReqDesc_onetime_0 = [
    "",
    "Cast Soothing Moo on 8 players at once.",
    "",
    "",
    "Cast Refreshing Sip on 5 players at once during Deathmatch.",
    "Reach 14 FK/A in a single game as Cow.",
    "",
    "Get a final kill with a Steak as Cow.",
    "",
    "king cowie",
    "",
    "",
];
*/
const classes = {
    0: {
        id: "cow",
        plaintext: "Cow",
        classcolor: "#ff55ff",
        classtype: "Starter",
        styles: [
            "Support",
            "Tank",
        ],
        difficulty: 1,
        skins: {
            "Cow": {
                desc: "The default skin for Cow.",
                type: "default",
                path: "",
                req: "",
                reqdesc: "Unlocked by default.",
            },
            "Cow Suit": {
                desc: "Perfect for costume parties!",
                type: "challenge",
                path: "walls3_i_am_cow",
                req: "",
                reqdesc: "Cast Soothing Moo on 8 players at once.",
            },
            "Iron Cow": {
                desc: "The kind of cow to launch their pasture to Mars.",
                type: "",
                path: "bucket_barriers_broken",
                req: "600",
                reqdesc: "Let 500 buckets from Bucket Barrier break protecting you.",
            },
        }
    },
    1: {
        id: "hunter",
        plaintext: "Cow",
        classcolor: "#ff55ff",
        classtype: "Starter",
        style1: "Support",
        style2: "Tank",
        difficulty: 1,
        skins: {
            "Cow": {
                description: "The default skin for Cow.",
            }
        }
    },
    2: {
        id: "shark",
        plaintext: "Cow",
        classcolor: "#ff55ff",
        classtype: "Starter",
        style1: "Support",
        style2: "Tank",
        difficulty: 1,
        skins: {
            "Cow": {
                description: "The default skin for Cow.",
            }
        }
    },
    3: {
        id: "arcanist",
        plaintext: "Cow",
        classcolor: "#ff55ff",
        classtype: "Starter",
        style1: "Support",
        style2: "Tank",
        difficulty: 1,
        skins: {
            "Cow": {
                description: "The default skin for Cow.",
            }
        }
    },
    4: {
        id: "dreadlord",
        plaintext: "Cow",
        classcolor: "#ff55ff",
        classtype: "Starter",
        style1: "Support",
        style2: "Tank",
        difficulty: 1,
        skins: {
            "Cow": {
                description: "The default skin for Cow.",
            }
        }
    },
    5: {
        id: "golem",
        plaintext: "Cow",
        classcolor: "#ff55ff",
        classtype: "Starter",
        style1: "Support",
        style2: "Tank",
        difficulty: 1,
        skins: {
            "Cow": {
                description: "The default skin for Cow.",
            }
        }
    },
    6: {
        id: "herobrine",
        plaintext: "Cow",
        classcolor: "#ff55ff",
        classtype: "Starter",
        style1: "Support",
        style2: "Tank",
        difficulty: 1,
        skins: {
            "Cow": {
                description: "The default skin for Cow.",
            }
        }
    },
    7: {
        id: "pigman",
        plaintext: "Cow",
        classcolor: "#ff55ff",
        classtype: "Starter",
        style1: "Support",
        style2: "Tank",
        difficulty: 1,
        skins: {
            "Cow": {
                description: "The default skin for Cow.",
            }
        }
    },
    8: {
        id: "zombie",
        plaintext: "Cow",
        classcolor: "#ff55ff",
        classtype: "Starter",
        style1: "Support",
        style2: "Tank",
        difficulty: 1,
        skins: {
            "Cow": {
                description: "The default skin for Cow.",
            }
        }
    },
    9: {
        id: "blaze",
        plaintext: "Cow",
        classcolor: "#ff55ff",
        classtype: "Starter",
        style1: "Support",
        style2: "Tank",
        difficulty: 1,
        skins: {
            "Cow": {
                description: "The default skin for Cow.",
            }
        }
    },
    10: {
        id: "enderman",
        plaintext: "Cow",
        classcolor: "#ff55ff",
        classtype: "Starter",
        style1: "Support",
        style2: "Tank",
        difficulty: 1,
        skins: {
            "Cow": {
                description: "The default skin for Cow.",
            }
        }
    },
    11: {
        id: "shaman",
        plaintext: "Cow",
        classcolor: "#ff55ff",
        classtype: "Starter",
        style1: "Support",
        style2: "Tank",
        difficulty: 1,
        skins: {
            "Cow": {
                description: "The default skin for Cow.",
            }
        }
    },
    12: {
        id: "squid",
        plaintext: "Cow",
        classcolor: "#ff55ff",
        classtype: "Starter",
        style1: "Support",
        style2: "Tank",
        difficulty: 1,
        skins: {
            "Cow": {
                description: "The default skin for Cow.",
            }
        }
    },
    13: {
        id: "creeper",
        plaintext: "Cow",
        classcolor: "#ff55ff",
        classtype: "Starter",
        style1: "Support",
        style2: "Tank",
        difficulty: 1,
        skins: {
            "Cow": {
                description: "The default skin for Cow.",
            }
        }
    },
    14: {
        id: "pirate",
        plaintext: "Cow",
        classcolor: "#ff55ff",
        classtype: "Starter",
        style1: "Support",
        style2: "Tank",
        difficulty: 1,
        skins: {
            "Cow": {
                description: "The default skin for Cow.",
            }
        }
    },
    15: {
        id: "sheep",
        plaintext: "Cow",
        classcolor: "#ff55ff",
        classtype: "Starter",
        style1: "Support",
        style2: "Tank",
        difficulty: 1,
        skins: {
            "Cow": {
                description: "The default skin for Cow.",
            }
        }
    },
    16: {
        id: "skeleton",
        plaintext: "Cow",
        classcolor: "#ff55ff",
        classtype: "Starter",
        style1: "Support",
        style2: "Tank",
        difficulty: 1,
        skins: {
            "Cow": {
                description: "The default skin for Cow.",
            }
        }
    },
    17: {
        id: "spider",
        plaintext: "Cow",
        classcolor: "#ff55ff",
        classtype: "Starter",
        style1: "Support",
        style2: "Tank",
        difficulty: 1,
        skins: {
            "Cow": {
                description: "The default skin for Cow.",
            }
        }
    },
    18: {
        id: "werewolf",
        plaintext: "Cow",
        classcolor: "#ff55ff",
        classtype: "Starter",
        style1: "Support",
        style2: "Tank",
        difficulty: 1,
        skins: {
            "Cow": {
                description: "The default skin for Cow.",
            }
        }
    },
    19: {
        id: "angel",
        plaintext: "Cow",
        classcolor: "#ff55ff",
        classtype: "Starter",
        style1: "Support",
        style2: "Tank",
        difficulty: 1,
        skins: {
            "Cow": {
                description: "The default skin for Cow.",
            }
        }
    },
    20: {
        id: "assassin",
        plaintext: "Assassin",
        classcolor: "#aa0000",
        classtype: "Mythic",
        style1: "Fighter",
        style2: "Mobility",
        difficulty: 2,
        skins: {
            "Assassin": {
                description: "The default skin for Assassin.",
            }
        }
    },
    21: {
        id: "automaton",
        plaintext: "Cow",
        classcolor: "#ff55ff",
        classtype: "Starter",
        style1: "Support",
        style2: "Tank",
        difficulty: 1,
        skins: {
            "Cow": {
                description: "The default skin for Cow.",
            }
        }
    },
    22: {
        id: "moleman",
        plaintext: "Cow",
        classcolor: "#ff55ff",
        classtype: "Starter",
        style1: "Support",
        style2: "Tank",
        difficulty: 1,
        skins: {
            "Cow": {
                description: "The default skin for Cow.",
            }
        }
    },
    23: {
        id: "phoenix",
        plaintext: "Cow",
        classcolor: "#ff55ff",
        classtype: "Starter",
        style1: "Support",
        style2: "Tank",
        difficulty: 1,
        skins: {
            "Cow": {
                description: "The default skin for Cow.",
            }
        }
    },
    24: {
        id: "dragon",
        plaintext: "Cow",
        classcolor: "#ff55ff",
        classtype: "Starter",
        style1: "Support",
        style2: "Tank",
        difficulty: 1,
        skins: {
            "Cow": {
                description: "The default skin for Cow.",
            }
        }
    },
    25: {
        id: "renegade",
        plaintext: "Cow",
        classcolor: "#ff55ff",
        classtype: "Starter",
        style1: "Support",
        style2: "Tank",
        difficulty: 1,
        skins: {
            "Cow": {
                description: "The default skin for Cow.",
            }
        }
    },
    26: {
        id: "snowman",
        plaintext: "Cow",
        classcolor: "#ff55ff",
        classtype: "Starter",
        style1: "Support",
        style2: "Tank",
        difficulty: 1,
        skins: {
            "Cow": {
                description: "The default skin for Cow.",
            }
        }
    },
}
//"sheep", "skeleton", "spider", "werewolf", "angel", "assassin", "automaton", "moleman", "phoenix", "dragon", "renegade", "snowman"];
const tagColors = {
    "DARK_GRAY": "#555555",
    "WHITE": "#ffffff",
    "GOLD": "#ffaa00",
    "GREEN": "#55ff55",
    "AQUA": "#55ffff",
    "LIGHT_PURPLE": "#ff55ff",
    "RED": "#ff5555",
    "BLUE": "#5555ff",
    "YELLOW": "#ffff55",
    "DARK_GREEN": "#00aa00",
    "DARK_AQUA": "#00aaaa",
    "DARK_BLUE": "#0000aa",
    "DARK_PURPLE": "#aa00aa",
    "DARK_RED": "#aa0000",
    "BLACK": "#000000",
}
const styleColors = {
    "Support": "#ff55ff",
    "Tank": "#5555ff",
    "Ranged": "#00aaaa",
    "Fighter": "#00aa00", 
    "Control": "#ffaa00",
    "Rusher": "#aa0000",
    "Damage": "#ff5555",
    "Mobility": "#55ffff",
}
const difficultyColors = {
    1: "#55ff55",
    2: "#ffff55",
    3: "#ff5555",
    4: "#aa0000",
}

const skinNames_0 = ["Cow", "Cow Suit", "Iron Cow", "Skelly Moo", "Fungu Madness", "One Serious Bull", "Parasite", "Sir Loin", "Sacred Bull", "King Cowie", "Buffalo Bill", "Minotaur", "Charred"];
const skinDesc_0 = [
    "The default skin for Cow.",
    "Perfect for costume parties!",
    "The kind of cow to launch their pasture to Mars.",
    "Thanks for good calcium.",
    "This toxic cow conquers the world one infection at a time.",
    "Thick as a brick, strong as a... bull.",
    "Tainted meat.",
    "Runs his own five-star restaurant.",
    "Red in nature.",
    "Now that is one fancy cow.",
    "Not actually a cow, but just as ruthless in its ruminant glory.",
    "Don't let its floral nature fool you. You do not want to cross this minotaur.",
    "Went to Hell and back for revenge, but might have stayed a bit too long."
];
const skinPaths_0 = [
    "",
    "onetime",
    "bucket_barriers_broken",
    "cow_ultra_pasteurized_drank",
    "onetime",
    "onetime",
    "final_assists_after_final_killed",
    "onetime",
    "cow_players_healed",
    "purchase",
    "pres3",
    "pres5",
    "completionist"
];
const skinPaths_onetime_0 = [
    "",
    "walls3_i_am_cow",
    "",
    "",
    "walls3_team_player",
    "walls3_legendary_cow",
    "",
    "walls3_fine_dining",
    "",
    "",
    "",
    "",
];
const skinReqs_0 = [
    "",
    "",
    "600",
    "500",
    "",
    "",
    "15",
    "",
    "2500",
    "5,000",
    "",
    "",
];
const skinReqDesc_0 = [
    "",
    "",
    "Let 500 buckets from Bucket Barrier break protecting you.",
    "Drink 500 Ultra Pasteurized Milk as Cow.",
    "",
    "",
    "Get 15 total FK/A after taking a final death.",
    "",
    "Cast abilities on players 2,500 times as Cow.",
    "",
    "",
    "",
    
];
const skinReqDesc_onetime_0 = [
    "",
    "Cast Soothing Moo on 8 players at once.",
    "",
    "",
    "Cast Refreshing Sip on 5 players at once during Deathmatch.",
    "Reach 14 FK/A in a single game as Cow.",
    "",
    "Get a final kill with a Steak as Cow.",
    "",
    "king cowie",
    "",
    "",
];

const skinNames_1 = ["Hunter", "Edge", "Tucson", "Hippie Moon", "Animal Tamer", "Cake Hunter", "Kuba the Caveman", "Annie", "Bounty", "Jasmin", "Genghis", "Sparta", "Slinger"];
const skinDesc_1 = [
    "The default skin for Hunter.",
    "Highly skilled archer. Edge's fashion sense, however, is clearly not as strong as his bow skills.",
    "Roams the world searching for forgotten treasures.",
    "Has never harmed a fly in his life. Moon just wants to look after all the animals.",
    "This is his full-time profession. Next to Mega Walls, of course, where any creature would be lucky to be this warrior's mighty steed!",
    "At least I got cake.",
    "Kuba did not discover fire, and he did not invent the wheel... but he does have homing arrows.",
    "Her most refined weapon is her wit.",
    "Put a price on their head and he may come, but only if the price is good.",
    "Beware, Jasmin is a master huntress.",
    "Master hunter. It is said that one in every two hundred animals is directly spawned from Genghis's Animal Companion ability.",
    "Wishes they would come back. Even as a shadow. Even as a dream...",
    "Die standing or die running, that much is up to you.",
];
const skinPaths_1 = [
    "",
    "onetime",
    "hunter_g_activations",
    "onetime",
    "hunter_b_final_assists",
    "cakes_found",
    "onetime",
    "force_of_nature_final_kills",
    "onetime",
    "purchase",
    "pres3",
    "pres5",
    "completionist",
];
const skinPaths_onetime_1 = [
    "",
    "walls3_on_point",
    "",
    "walls3_yeehaw",
    "",
    "",
    "walls3_legendary_hunter",
    "",
    "walls3_target_eliminated",
    "",
    "",
    "",
];
const skinReqs_1 = [
    "",
    "",
    "300",
    "",
    "5",
    "150",
    "",
    "50",
    "",
    "5,000",
    "",
    "",
];
const skinReqDesc_1 = [
    "",
    "",
    "Find 300 Golden Apples while playing as Hunter.",
    "",
    "Get 5 total FK/A with Animal Companion.",
    "Find 150 unique cakes as any class.",
    "",
    "Get 50 total FK/A with Force of Nature active.",
    "",
    "",
    "",
    "",
];
const skinReqDesc_onetime_1 = [
    "",
    "Shoot 12 unique players in a row without missing a shot.",
    "",
    "Kill a wither while riding a pig.",
    "",
    "",
    "Reach 14 FK/A in a single game as Hunter.",
    "",
    "Final kill 3 players you've killed previously in that game as Hunter.",
    "jasmin",
    "",
    "",
];

const skinNames_2 = ["Shark", "Shelly", "Treasure", "Devourer", "Wata", "Bblurgbl", "Cosmo", "Chum", "Hammy", "Selkie", "Terror of the Deep", "Fishmonger"];
const skinDesc_2 = [
    "The default skin for Shark.",
    "Shelly really is just a peaceful turtle. She likes to eat plants and legs.",
    "This octopus stuck its head in a treasure chest and can't get out.",
    "Devours bone, flesh, and souls.",
    "A feral child raised by fishes.",
    "This sailor swam too close to the funky corals.",
    "Originally sent to space courtesy of Dreadlord Airlines, he now explores the stars.",
    "Looks can be deceiving, Chum is strictly vegetarian. At least, that's what he says...",
    "Years of butting heads with his fellow sharks has left him with the smoothest skull around.",
    "Selkie doesn't care about your opinion. Selkie doesn't care what you look like. Selkie will chomp on you because you're breakfast.",
    "Over 90% of the ocean is still unexplored? Good!",
    "Sometimes the best way to catch fish is by diving in and grabbing them yourself.",
];
const skinPaths_2 = [
    "",
    "shark_water_kills",
    "onetime",
    "onetime",
    "onetime",
    "onetime",
    "shark_g_activations",
    "shark_defender_kills",
    "purchase",
    "pres3",
    "pres5",
    "completionist",
];
const skinPaths_onetime_2 = [
    "",
    "",
    "walls3_great_white",
    "walls3_tiger_shark",
    "walls3_bull_shark",
    "walls3_legendary_shark",
    "",
    "",
    "",
    "",
    "",
];
const skinReqs_2 = [
    "",
    "100",
    "",
    "",
    "",
    "",
    "1000",
    "250",
    "5,000",
    "",
    "",
];
const skinReqDesc_2 = [
    "",
    "Kill 100 players while you and the victim are in water.",
    "",
    "",
    "",
    "",
    "Activate Ocean's Treasure 1000 times.",
    "Get 250 defensive kills as Shark.",
    "",
    "",
    "",
    "",
];
const skinReqDesc_onetime_2 = [
    "",
    "",
    "Cast From the Depths on 7 players at once.",
    "Activate Food Hunt 4 times in 30 seconds during Deathmatch.",
    "Attack someone while you have your full Blood Rage buff.",
    "Reach 14 FK/A in a single game as Shark.",
    "",
    "",
    "hammy",
    "",
];

const skinNames_3 = ["Arcanist", "Drufus", "Steele", "Chester", "Byron Boy", "Emperor", "Archmage", "Arcana", "Isaiah", "Crawler", "Kioka", "Mysterious"];
const skinDesc_3 = [
    "The default skin for Arcanist.",
    "This druid isn't into magic potions; Drufus instead brews some tasty soup.",
    "An ancient warrior raised to serve his team, Steele never backs off.",
    "Space ranger and a brave leader, but at times Chester can also be too impulsive.",
    "Byron Boy shoots lasers. He also shoots lasers. Did I mention he shoots lasers?",
    "Rule your empire in dominating fashion.",
    "Studied at the Academy under the tutelage of some of the strongest sorcerers.",
    "Don't get on Arcana's bad side – she won't take kindly to it.",
    "Rises above the battlefield with his prismarine-blue armor.",
    "Creature of the void galaxies. Its appearace is both mysterious and sublime.",
    "An experiment went wrong, turning two young inventors into one. While one sleeps, the other works.",
    "Fighting through this avatar, the real identity of Mysterious is unknown, and he is probably from the frontlines."
];
const skinPaths_3 = [
    "",
    "arcanist_c_total_final_kills",
    "arcanist_iron_ore_broken",
    "onetime",
    "onetime",
    "onetime",
    "arcanist_a_activations",
    "onetime",
    "purchase",
    "pres3",
    "pres5",
    "completionist",
];
const skinPaths_onetime_3 = [
    "",
    "",
    "",
    "walls3_to_infinity",
    "walls3_laser_precision",
    "walls3_legendary_arcanist",
    "",
    "walls3_tripleshot",
    "",
    "",
    "",
];
const skinReqs_3 = [
    "",
    "8",
    "5000",
    "",
    "",
    "",
    "1000",
    "",
    "5,000",
    "",
    "",
];
const skinReqDesc_3 = [
    "",
    "Get 8 total FK/A with Arcane Explosion.",
    "Mine 5,000 iron ore with Arcane Beam.",
    "",
    "",
    "",
    "Use Arcane Beam 1,000 times.",
    "",
    "",
    "",
    "",
];
const skinReqDesc_onetime_3 = [
    "",
    "",
    "",
    "Kill 3 players without losing Tempest's Speed III buff.",
    "Shoot 10 unique players with Arcane Beam in a row without missing a shot.",
    "Reach 14 FK/A in a single game as Arcanist.",
    "",
    "Hit 3 players with the same Arcane Beam.",
    "isaiah",
    "",
    "",
];

const skinNames_4 = ["Dreadlord", "Doomboy", "Crowe", "Rushlord", "Breadlord", "Sweets", "Frostlord", "Conquest", "Reaper", "Milo", "Soul Reaver", "Dominator"];
const skinDesc_4 = [
    "The default skin for Dreadlord.",
    "Fighting machine. Doomboy slices through enemies as if he's slicing through soft butter. ",
    "Medieval sorcerer. Crowe is a master of skull magic.",
    "Half-Dread, Half-Zombie. Prepare for the ultimate powerhouse rush!",
    "Rush, rush, attack with your sword. You can't catch him, it's Breadlord!",
    "Born with the face of evil, but a heart of gold.",
    "Where were you when Hell froze over?",
    "For Conquest, the only way is onward. No losses are too great. After all, a Pyrrhic victory is a victory nonetheless.",
    "Nobody knows what's hiding behind Reaper's skull. Maybe another skull.",
    "Punished by the gods for his vanity, Milo was given the face of a demon such that nobody, including himself, could bear his sight.",
    "Feeds off the life force of others. Channels their stored energy in combat when those they deem worthy die.",
    "Foul in wisdom, cruel in strength, the world lies within his dormant grasp.",
];
const skinPaths_4 = [
    "",
    "onetime",
    "onetime",
    "dreadlord_wither_damage",
    "dreadlord_bread_crafted",
    "onetime",
    "dark_matter_armor",
    "onetime",
    "purchase",
    "pres3",
    "pres5",
    "completionist",
];
const skinPaths_onetime_4 = [
    "",
    "walls3_maximum_effort",
    "walls3_birds_eye",
    "",
    "",
    "walls3_legendary_dreadlord",
    "",
    "walls3_the_chosen_few",
    "",
    "",
    "",
];
const skinReqs_4 = [
    "",
    "",
    "",
    "20000",
    "617",
    "",
    "500",
    "",
    "5,000",
    "",
    "",
];
const skinReqDesc_4 = [
    "",
    "",
    "",
    "Deal 20,000 wither damage as Dreadlord.",
    "Craft 617 bread as Dreadlord.",
    "",
    "Obtain 500 pieces of iron armor from Dark Matter.",
    "",
    "",
    "",
    "",
];
const skinReqDesc_onetime_4 = [
    "",
    "Final kill 3 players in 12 seconds as Dreadlord.",
    "Hit a player with Shadow Burst from at least 35 blocks away.",
    "",
    "",
    "Reach 14 FK/A in a single game as Dreadlord.",
    "",
    "Win a game as Dreadlord with 3 or fewer teammates remaining.",
    "reaper",
    "",
    "",
];

const skinNames_5 = ["Golem", "Ogre", "Bryce", "Flint", "Victor", "Grey", "Cooper", "Iglu", "Commander Brown", "Grown", "Spol", "Construct"] ;
const skinDesc_5 = [
    "The default skin for Golem.",
    "Defend your swamp!",
    "Timber! Believe it or not, Lumberjack Bryce is able to gather wood just by punching trees.",
    "Born from molten lava, this fiery Golem can turn any swimming pool into a hot spring.",
    "As a kid, Victor loved to go out for ice cream. He always went for three scoops at his favorite shop, 'Just Ice'.",
    "Grown's slightly shy and insecure twin brother. They're always racing one another.",
    "Long lost relative of Grey and Grown. Likes to push people's buttons.",
    "Last seen in Frozen's wither room. Living out the rest of his days in solitude.",
    "Ready for deployment!",
    "A charming Golem in the prime of her life! Grown will knock you off your feet with her beauty... and her Iron Punch!",
    "Legends speak of an ancient, slumbering creature the size of a continent.",
    "Though those who created it left its dimension eons ago, the Construct remains stalwart in its defense of their territory.",
];
const skinPaths_5 = [
    "",
    "onetime",
    "golem_wood_chopped",
    "onetime",
    "onetime",
    "onetime",
    "onetime",
    "golem_b_iron_heart_absorption",
    "purchase",
    "pres3",
    "pres5",
    "completionist",
];
const skinPaths_onetime_5 = [
    "",
    "walls3_its_all_ogre_now",
    "",
    "walls3_taking_the_heat",
    "walls3_hammer_down",
    "walls3_legendary_golem",
    "walls3_judgement_call",
    "",
    "",
    "",
    "",
];
const skinReqs_5 = [
    "",
    "",
    "5000",
    "",
    "",
    "",
    "",
    "1000",
    "5,000",
    "",
    "",
];
const skinReqDesc_5 = [
    "",
    "",
    "Break 5,000 wooden logs as Golem.",
    "",
    "",
    "",
    "",
    "Receive 1,000 absorption from Iron Heart.",
    "",
    "",
    "",
];
const skinReqDesc_onetime_5 = [
    "",
    "As Golem, kill the last wither in the game then win the game within 12 minutes.",
    "",
    "As Golem, kill a wither while on fire.",
    "Hit 5 players with one Iron Punch.",
    "Reach 14 FK/A in a single game as Golem.",
    "Final kill 4 players with Iron Punch in one game.",
    "",
    "commander brown",
    "",
    "",
];

const skinNames_6 = ["Herobrine", "Thunders", "Larry", "Sunny", "Boxer", "Odin", "Santabrine", "Jerry", "Derpbrine", "Dark Herobrine", "Null", "Xiao Yu", "Zeus", "Godfrey"];
const skinDesc_6 = [
    "The default skin for Herobrine.",
    "Some like Thunders because he's so cute. Thunders just likes to electrocute.",
    "Meet Steve's older and cooler brother Larry. Larry is really cool.",
    "Hahaha Sunny, you're so funny! OK enough – now you're annoying me.",
    "Boxer's enemies usually tap out before the game has even started.",
    "Odin knows a total of three words: 'Odin', 'Fight', and 'Asparagus'. He doesn't even like asparagus.",
    "You should stay in bed when this Santa delivers your presents.",
    "A truly terrifying fiend who has spread his influence over several universes, becoming a blight upon them all.",
    "A legend among newbs.",
    "Who would've thought a more villainous Herobrine existed?",
    "An ancient spirit that roams the code. Null plans to nullify and plunge the world back into the darkness of his oblivion.",
    "Swordmaster Xiao Yu does not speak, he lets his sword do the talking.",
    "God of the Sky and all things under it. Move out of his way or die standing.",
    "Fought on the rooftops of Forsaken in his youth. Now, old and blind, he's yet to shy away from a fight, even one that seems unwinnable.",
];
const skinPaths_6 = [
    "",
    "onetime",
    "onetime",
    "herobrine_treasures_found",
    "onetime",
    "onetime",
    "iron_armor_gifted_december",
    "onetime",
    "onetime",
    "purchase",
    "purchase",
    "pres3",
    "pres5",
    "completionist",
];
const skinPaths_onetime_6 = [
    "",
    "walls3_thunder",
    "walls3_not_a_golem",
    "",
    "walls3_multi_kill",
    "walls3_legendary_herobrine",
    "",
    "walls3_world_ender",
    "walls3_derpbrines_revenge",
    "",
    "",
    "",
    "",
];
const skinReqs_6 = [
    "",
    "",
    "",
    "1000",
    "",
    "",
    "1000",
    "",
    "",
    "5,000",
    "10,000",
    "",
    "",
];
const skinReqDesc_6 = [
    "",
    "",
    "",
    "Find 1,000 chests while mining as Herobrine.",
    "",
    "",
    "Give 1,000 pieces of iron armor to teammates during the month of December.",
    "",
    "",
    "",
    "",
];
const skinReqDesc_onetime_6 = [
    "",
    "Final kill two players with one Wrath.",
    "Win a game as Herobrine wearing a diamond chestplate and diamond boots.",
    "",
    "Get 5 FK/A in 15 seconds as Herobrine.",
    "Reach 14 FK/A in a single game as Herobrine.",
    "",
    "Final kill 4 players from the same team as Herobrine",
    "As Herobrine, final kill someone who killed you earlier in the game.",
    "dark herobrine",
    "null",
    "",
    "",
];

const skinNames_7 = ["Pigman", "Super Pig", "King Pig", "Kai", "Picasso", "Bandit", "Soos", "Goliath", "Zombie Pigman", "Dusk", "Chomper", "Brute"];
const skinDesc_7 = [
    "The default skin for Pigman.",
    "Is it a bird? Is it a plane? It's Super Pig!",
    "King Pig is the evil mind behind the great Pigpocalypse.",
    "Pink Kai keeps his bright flamingo costume clean at all times.",
    "Let's add some more happy little trees!",
    "This ferocious-looking beast practices the recorder every evening before bed time.",
    "A renowned troublemaker among Piglins. Keep an eye on your gold!",
    "Unquestioned and unchallenged, Goliath has won 371 Mega Walls duels in a row.",
    "Half-man, half-pig, half-zombie. Wait... that doesn't add up.",
    "Mythical creature of the dark-golden nights. Rumoured to be awoken by the northern lights.",
    "Will eat anything thrown in his direction, whether it's friend or foe.",
    "Forged in fire, he's been waiting for this moment for decades."
];
const skinPaths_7 = [
    "",
    "onetime",
    "onetime",
    "pigman_g_activations",
    "onetime",
    "onetime",
    "pigman_c_enduranced_final_kills",
    "pigman_resistance_time_seconds",
    "purchase",
    "pres3",
    "pres5",
    "completionist",
];
const skinPaths_onetime_7 = [
    "",
    "walls3_circle_of_trust",
    "walls3_blowing_bubbles",
    "",
    "walls3_masterpiece",
    "walls3_legendary_pigman",
    "",
    "",
    "",
    "",
    "",
];
const skinReqs_7 = [
    "",
    "",
    "",
    "500",
    "",
    "",
    "5",
    "500",
    "5,000",
    "",
    "",
];
const skinReqDesc_7 = [
    "",
    "",
    "",
    "Find 500 armor sets in chests as Pigman.",
    "",
    "",
    "Final kill 5 players while Endurance is active.",
    "Have Endurance active for 500 seconds.",
    "",
    "",
    "",
];
const skinReqDesc_onetime_7 = [
    "",
    "Cast Burning Souls on 8 players at once.",
    "Cast Burning Souls 4 times in 21 seconds.",
    "",
    "Kill a wither with a painting as Pigman.",
    "Reach 14 FK/A in a single game as Pigman.",
    "",
    "",
    "zombie pigman",
    "",
    "",
];

const skinNames_8 = ["Zombie", "Toon", "Jumbo", "Taco", "Yawn", "Gorilla", "Furbie", "King Dáinn", "Zaza", "Dorc", "Shibe", "Shogun"];
const skinDesc_8 = [
    "The default skin for Zombie.",
    "Scarily cute... but also cutely scary!",
    "There's no better support than your favorite toy bear!",
    "How do you decide between Zombie or Taco? Why not both?",
    "Meet Yawn, the only creature with a permanent case of morning breath.",
    "Legends never die... and neither do Zombies.",
    "Once a soft toy, Furbie always watched over the child who purchased him. Now thrown away and forgotten, Furbie has developed a taste for revenge. And brains too.",
    "One of the oldest known Zombies. Enjoys building empires from the ground up and then destroying them for his own entertainment.",
    "Zaza loves to play some Mega Walls.",
    "Orcs may not seem the brightest, but Dorc has studied medicine!",
    "Loves nothing more than chasing after Skeletons.",
    "Long dead, the Shogun keeps fighting in the hope that he will one day meet his match.",
];
const skinPaths_8 = [
    "",
    "onetime",
    "onetime",
    "onetime",
    "games_beds_placed",
    "onetime",
    "zombie_healed_low_teammates",
    "zombie_berserked_kills",
    "purchase",
    "pres3",
    "pres5",
    "completionist",
];
const skinPaths_onetime_8 = [
    "",
    "walls3_alotv1",
    "walls3_hug_me",
    "walls3_gone_vegan",
    "",
    "walls3_legendary_zombie",
    "",
    "",
    "",
    "",
    "",
];
const skinReqs_8 = [
    "",
    "",
    "",
    "",
    "50",
    "",
    "100",
    "25",
    "5,000",
    "",
    "",
];
const skinReqDesc_8 = [
    "",
    "",
    "",
    "",
    "Place beds in 50 games as Zombie.",
    "",
    "Heal teammates who are below 10 HP 100 times as Zombie.",
    "Kill 25 players with Berserk active.",
    "",
    "",
    "",
];
const skinReqDesc_onetime_8 = [
    "",
    "Kill a wither as Zombie as the last player alive on your team.",
    "Heal 150 HP to teammates in a single game as Zombie.",
    "Win a game as zombie while only eating bread.",
    "",
    "Reach 14 FK/A in a single game as Zombie.",
    "",
    "",
    "zaza",
    "",
    "",
];

const skinNames_9 = ["Blaze", "Mango", "Proto", "Scorch", "Chaze", "Ghaze", "Matcho", "Miquella", "Blizz", "Molton", "Fiery", "Flaming Rider"];
const skinDesc_9 = [
    "The default skin for Blaze.",
    "Mango the Fire Monkey! Nobody can throw flaming coconuts better than Mango.",
    "Machine designed to withstand extreme heat. Nothing can melt Proto's steel armor.",
    "It's one thing to shoot fireballs, it's another thing to be a fireball-shooting fireball.",
    "Chaze actually spits fire.",
    "Ghaze actually spits fire... his rap skills, however, are below average.",
    "He's always angry, though nobody ever knows why. The general public are advised to keep their distance and look away.",
    "Acknowledged to be the 'Queen of Blazes', even by her enemies.",
    "Who said Blazes couldn't be cool?",
    "Risen from the magmatic insides of an active volcano. Be aware, Molton has only just started to heat up.",
    "Just as dangerous on the battlefield as he is in the kitchen!",
    "Smells of burning rubber and scorched marshmallows.",
];
const skinPaths_9 = [
    "",
    "onetime",
    "onetime",
    "onetime",
    "blaze_g_amount_healed",
    "onetime",
    "on_fire_final_kills",
    "blaze_b_blazes_spawned",
    "purchase",
    "pres3",
    "pres5",
    "completionist",
];
const skinPaths_onetime_9 = [
    "",
    "walls3_throwing_coconuts",
    "walls3_max_render_distance",
    "walls3_blaze_party",
    "",
    "walls3_legendary_blaze",
    "walls3_light_em_up",
    "",
    "",
    "",
    "",
];
const skinReqs_9 = [
    "",
    "",
    "",
    "",
    "2000",
    "",
    "10",
    "500",
    "5,000",
    "",
    "",
];
const skinReqDesc_9 = [
    "",
    "",
    "",
    "",
    "Heal 2,000 HP from Fossil Fuels.",
    "",
    "Final kill 10 players who are on fire.",
    "Summon 500 blazes.",
    "",
    "",
    "",
];
const skinReqDesc_onetime_9 = [
    "",
    "Final kill 3 players with Immolating Burst in one game.",
    "Hit a player with a flaming arrow from 100 blocks away as Blaze.",
    "Have 6 blazes active at once in Deathmatch.",
    "",
    "Reach 14 FK/A in a single game as Blaze.",
    "",
    "",
    "blizz",
    "",
    "",
];

const skinNames_10 = ["Enderman", "Dash", "Seeker", "Gamer", "Shadow", "Hoops", "Inno", "Plexi", "Jumper", "Entity_303", "Baron", "Follower", "Warden"];
const skinDesc_10 = [
    "The default skin for Enderman.",
    "It might look like Dash teleports around... in reality, he jogs from one place to another.",
    "Can track down enemies in the blink of an eye.",
    "Portal-robot designed by scientists. Due to progress in artificial intelligence, Gamer became self-aware and escaped by teleporting himself into the worlds of Mega Walls.",
    "An expert in disguise who attacks from the shadows.",
    "An encounter with this cheerful dragon will leave you with a smile!",
    "Creator of the Enderman teleport. Regrets what he unleashed upon the world.",
    "Attended the Mega Walls beta launch and has been one-tricking Enderman ever since.",
    "Playful and mischievous creature. With Jumper around, you should always watch your back!",
    "This mysterious entity is said to be the 'New Herobrine'. He is skilled in the art of deception and is out to cast his wrath on the ones who have betrayed him.",
    "Malay dragon and guardian of the End gates. Baron is the protector of all Endermen.",
    "Eagerly awaits the return of his master, even after all these years.",
    "The guardian of the Deep Dark has come to reap his revenge upon the pillagers of his city.",
];
const skinPaths_10 = [
    "",
    "onetime",
    "onetime",
    "enderman_a_activations",
    "enderman_final_kills_melee_behind",
    "onetime",
    "onetime",
    "onetime",
    "purchase",
    "purchase",
    "pres3",
    "pres5",
    "completionist",
];
const skinPaths_onetime_10 = [
    "",
    "walls3_speed_run",
    "walls3_untouchable",
    "",
    "",
    "walls3_legendary_enderman",
    "walls3_true_teleporter",
    "walls3_end_to_end",
    "",
    "",
    "",
    ""
];
const skinReqs_10 = [
    "",
    "",
    "",
    "2500",
    "100",
    "",
    "",
    "",
    "5,000",
    "10,000",
    "",
    "",
];
const skinReqDesc_10 = [
    "",
    "",
    "",
    "Teleport to players 2,500 times as Enderman.",
    "Get 100 total FK/A with melee strikes from behind the victim as Enderman.",
    "",
    "",
    "",
    "",
    "",
    "",
];
const skinReqDesc_onetime_10 = [
    "",
    "As Enderman, attack every enemy wither in a Standard game within 2 minutes of the walls falling.",
    "As Enderman, melee 7 unique players in a row without taking damage.",
    "",
    "",
    "Reach 14 FK/A in a single game as Enderman.",
    "Teleport to players 50 times in one game as Enderman.",
    "As any class, get the first and last final kill of the game.",
    "jumper",
    "entity_303",
    "",
    "",
];

const skinNames_11 = ["Shaman", "Totem", "Doggo", "Brian the Disco Bear", "Wolf", "Nikolaos", "Fina", "Avarion", "Dauntless", "Chu", "Wayne", "Kalhuik", "Major"];
const skinDesc_11 = [
    "The default skin for Shaman.",
    "Don't worry, it's just a sculpture! It's not actually alive... I hope.",
    "Doggo's vocabulary is surprisingly extensive. Copious charm.",
    "Brian LOVES disco! If you need anyone to hum Stayin' Alive while you're clutching up, he's your pick.",
    "Things get weird when the hunter becomes the hunted.",
    "With the power of his tornado and twenty-five wolves, Nikolaos, the legendary hero, plays for the win.",
    "Traded her eyes for the ability to maximize her magical energy.",
    "Shunned by his peers, Avarion is an example of what happens when the elements fight back.",
    "Bring the storm.",
    "This Arctic nomad possesses a wide range of excellent survival skills.",
    "Wolfmaster Wayne, a courageous leader, was raised by wolves himself.",
    "Creator of seasons, maintainer of balance. Without him there would be nothing but chaos.",
    "Having once stumbled upon a strange mask in a stranger place, what's left of Major now wields its power.",
];
const skinPaths_11 = [
    "",
    "onetime",
    "shaman_c_activations",
    "onetime",
    "shaman_c_total_final_kills",
    "onetime",
    "onetime",
    "onetime",
    "heroism_triggers_in_dm",
    "purchase",
    "pres3",
    "pres5",
    "completionist",
];
const skinPaths_onetime_11 = [
    "",
    "walls3_whirlwind",
    "",
    "walls3_stayin_alive",
    "",
    "walls3_legendary_shaman",
    "walls3_souls_bound",
    "walls3_call_it_a_comeback",
    "walls3_living_on_the_edge",
    "",
    "",
    "",
    ""
];
const skinReqs_11 = [
    "",
    "",
    "500",
    "",
    "5",
    "",
    "",
    "",
    "250",
    "5,000",
    "",
    "",
];
const skinReqDesc_11 = [
    "",
    "",
    "Summon 500 wolves as Shaman.",
    "",
    "Get 5 FK/A with Wolf Pack as Shaman.",
    "",
    "",
    "",
    "Trigger Heroism 250 times in Deathmatch as Shaman.",
    "",
    "",
    "",
];
const skinReqDesc_onetime_11 = [
    "",
    "Hit 6 players with one Tornado.",
    "",
    "Assist in the game-ending final kill while holding a jukebox as Shaman.",
    "",
    "Reach 14 FK/A in a single game as Shaman.",
    "Final kill 3 players with Tornadoes in 20 seconds.",
    "Kill a wither while yours is dead as Shaman.",
    "",
    "chu",
    "",
    "",
];

const skinNames_12 = ["Squid", "Guardian", "Doctor Squish", "K`Tulu", "Grumps", "Sea Warrior", "Lava Kraken", "Glow Squid", "Sharky", "Snails", "Mind Flayer", "Davy Bones"];
const skinDesc_12 = [
    "The default skin for Squid.",
    "Has never lost a staring contest.",
    "Doctor Bobby H. Squish has a questionable background. At least he knows how to heal himself.",
    "Green sea monster. K'Tulu won't hesitate to swipe out enemies with destructive tentacle blows.",
    "You can be sure that this short-tempered Squid will do anything to shut up his neighboring teams.",
    "Aquatic paladin who will always stand his oceanic ground.",
    "Very few things among the seven seas are agreed to be more dangerous than the Kraken. One of those things, however, is the Lava Kraken.",
    "An exceedingly rare variant found only in the deepest, darkest depths of the ocean.",
    "Cute but brutal predator. Sharky is a swift swimmer with razor sharp teeth.",
    "Enemies turn into stone upon gazing at his face. No mortal soul has ever dared to defy Snails.",
    "Believes all other life forms to be inferior. This realm will be his next conquest.",
    "Used to get shoved into lockers during his days at seawater school. Now, he roams the seas, searching for those who wronged him.",
];
const skinPaths_12 = [
    "",
    "squid_defender_final_kills",
    "squid_self_healed",
    "onetime",
    "onetime",
    "onetime",
    "onetime",
    "inner_ink_blinds",
    "purchase",
    "pres3",
    "pres5",
    "completionist",
];
const extraPaths = [
    "squid_defender_final_assists",
    "final_kills_after_final_killed",
    "spider_a_final_kills",
]
const skinPaths_onetime_12 = [
    "",
    "",
    "",
    "walls3_whirlpool",
    "walls3_i_feel_sick",
    "walls3_legendary_squid",
    "walls3_fiery_tomb",
    "",
    "",
    "",
    "",
];
const skinReqs_12 = [
    "",
    "10",
    "2500",
    "",
    "",
    "",
    "",
    "250",
    "5,000",
    "",
    "",
];
const skinReqDesc_12 = [
    "",
    "Get 10 total defensive FK/A as Squid.",
    "Heal yourself for 2,500 HP as Squid.",
    "",
    "",
    "",
    "",
    "Blind players 250 times using Inner Ink.",
    "",
    "",
    "",
];
const skinReqDesc_onetime_12 = [
    "",
    "",
    "",
    "Cast a level 5 Squid Splash on at least 4 players at once.",
    "Activate Luck of the Sea at least 8 times, then drink at least 8 absorption potions throughout the game.",
    "Reach 14 FK/A in a single game as Squid.",
    "Final kill a player who is on fire with Squid Splash.",
    "",
    "sharky",
    "",
    "",
];

const skinNames_13 = ["Creeper", "Johnny", "Bomberdude", "Destructo", "Kreeft", "Cricket", "Haze", "Steampunk", "Rainbow Creeper", "Slith", "Carlos", "Nuclear Fuze"];
const skinDesc_13 = [
    "The default skin for Creeper.",
    "Thinks he's a real Creeper. Nobody has the heart to tell little Johnny the truth.",
    "It's what's on the inside that counts. For Bomberdude that'd be TNT.",
    "A robotic experiment gone wrong: Destructo blew up the testing facility and escaped.",
    "Creeper scientist Kreeft investigates the properties of water to help his race overcome their prime weakness.",
    "Cricket the Ninja Cyborg has sworn to protect his village from Creepers.",
    "Struck by lightning at a young age, he gained impossibly fast reflexes. Naturally, he put them to use by becoming a pro gamer.",
    "Obsessed with developing the next generation of explosive technology.",
    "Some lands use Rainbow Creepers as fireworks. We just force 'em to play Mega Walls.",
    "Overlord Slith is the invisible force behind several thriving Creeper galaxies.",
    "Scared of fireworks, alarm clocks, explosions and cats.",
    "What happened that night changed him for life... Approach him if you dare!"
];
const skinPaths_13 = [
    "",
    "onetime",
    "onetime",
    "creeper_a_blocks_broken",
    "creeper_b_total_final_kills",
    "onetime",
    "onetime",
    "creeper_primed_tnt_kills",
    "purchase",
    "pres3",
    "pres5",
    "completionist",
];
const skinPaths_onetime_13 = [
    "",
    "walls3_peacekreeper",
    "walls3_ready_set_boom",
    "",
    "",
    "walls3_legendary_creeper",
    "walls3_collateral",
    "walls3_instaboom",
    "",
    "",
    "",
];
const skinReqs_13 = [
    "",
    "",
    "",
    "3000",
    "5",
    "",
    "",
    "20",
    "5,000",
    "",
    "",
];
const skinReqDesc_13 = [
    "",
    "",
    "",
    "Destroy 3,000 blocks with Detonate.",
    "Get 5 total FK/A with Fission Heart.",
    "",
    "",
    "Kill 20 players with Fission Heart primed TNT.",
    "",
    "",
    "",
];
const skinReqDesc_onetime_13 = [
    "",
    "Win a game as Creeper without using Detonate.",
    "Obtain 128 TNT in one game from coal ore via TNT Mining.",
    "",
    "",
    "Reach 14 FK/A in a single game as Creeper.",
    "Final kill two players with one Detonate.",
    "",
    "rainbow creeper",
    "",
    "",
];

const skinNames_14 = ["Pirate", "Captain Bones", "Jameson", "Guy", "Parrot Frank", "Fjodor", "Killigrew", "Axe", "Weaver", "Nero", "Slothpixel", "Whitebeard"];
const skinDesc_14 = [
    "The default skin for Pirate.",
    "Most heartless pirate to have travelled the seven seas... literally.",
    "Bombs away! Sky Captain Jameson surprises his enemies from above.",
    "Gill 'Guy' Spencer was born on December 21 1998 in Colorado. He wears his mask to remain anonymous.",
    "Frank is not an actual parrot. We pay Frank to wear that costume.",
    "Barbaric Viking. Fjodor decorates his longship with screenshots of his fallen enemies.",
    "Lawyer by day, pirate by night. Very capable of defending herself, both in and out of court.",
    "Born in the seven seas, and grew to conquer them.",
    "Arr matey! Weaver is out for yer coins!",
    "Weaves twine into his beard and lights it on fire to look more demonic. One day this ritual ensued a chain reaction of fires, causing a whole city to go down in flames.",
    "Slothpixel and his fleet rule over the seven seas. Wrong him and he will get you... eventually.",
    "Formerly known as Redbeard. Every life he sends to a watery grave turns one of his hairs white.",
];
const skinPaths_14 = [
    "",
    "pirate_treasures_found",
    "onetime",
    "onetime",
    "pirate_b_total_final_kills",
    "onetime",
    "onetime",
    "pirate_final_water_kills",
    "purchase",
    "pres3",
    "pres5",
    "completionist",
];
const skinPaths_onetime_14 = [
    "",
    "",
    "walls3_fire_in_the_hole",
    "walls3_esc",
    "",
    "walls3_legendary_pirate",
    "walls3_lady_luck",
    "",
    "",
    "",
    "",
];
const skinReqs_14 = [
    "",
    "100",
    "",
    "",
    "12",
    "",
    "",
    "5",
    "5,000",
    "",
    "",
];
const skinReqDesc_14 = [
    "",
    "Loot 100 treasures from Treasure Hunter.",
    "",
    "",
    "Get 12 total FK/A with Angry Birds.",
    "",
    "",
    "Get 5 total final kills while in water.",
    "",
    "",
    "",
];
const skinReqDesc_onetime_14 = [
    "",
    "",
    "Hit a player with a Cannon Fire from at least 50 blocks away.",
    "Activate Sea Legs 10 times in a single Deathmatch.",
    "",
    "Reach 14 FK/A in a single game as Pirate.",
    "Loot 5 unique items from Treasure Hunter in a single game.",
    "",
    "weaver",
    "",
    "",
];

const skinNames_15 = ["Sheep", "Pablo", "Mutton", "Lord Lambchop", "Llama", "Ramsay", "Dolly", "Lambert", "Baandit", "Sorceress", "Sheep in Wolf`s Clothing"];
const skinDesc_15 = [
    "The default skin for Sheep.",
    "Can paint with all the colors of the wind.",
    "Won an undisclosed amount of money and now lives in a skyscraper far from his woolly brethren. His shades are worth more than your Wither.",
    "What happens when a Sheep is struck by lightning? He gains the powers of the Arcane, of course!",
    "Got a team that needs carrying? Llamas can carry so much as 200 points for up to 12 hours per day!",
    "so smol and precious.",
    "Only those who survive the long winter may bear witness to the first rays of spring.",
    "Gray brings him happiness!",
    "Truly a wolf in sheep's clothing.",
    "Of those who have been unfortunate enough to see her in the flesh, few have lived to tell the tale.",
    "Inspired by how Werewolves were able to hit so hard and climb so high, he decided to become one of them."
];
const skinPaths_15 = [
    "",
    "onetime",
    "onetime",
    "perfect_disguises",
    "sheep_a_amount_healed",
    "onetime",
    "onetime",
    "purchase",
    "pres3",
    "pres5",
    "completionist",
];
const skinPaths_onetime_15 = [
    "",
    "walls3_think_twice",
    "walls3_magical_party",
    "",
    "",
    "walls3_teamkill",
    "walls3_legendary_sheep",
    "",
    "",
    "",
];
const skinReqs_15 = [
    "",
    "",
    "",
    "100",
    "250",
    "",
    "",
    "5,000",
    "",
    "",
];
const skinReqDesc_15 = [
    "",
    "",
    "",
    "Have Dyed Disguise expire without being attacked 100 times.",
    "Heal 250 HP to your teammates using Wool War.",
    "",
    "",
    "",
    "",
    "",
];
const skinReqDesc_onetime_15 = [
    "",
    "Trigger Thick Coat while Dyed Disguise is active.",
    "Have allies pick up Magical Wool 20 times in one game.",
    "",
    "",
    "Final kill a player while Dyed Disguise disguises you as a member of their team.",
    "Reach 14 FK/A in a single game as Sheep.",
    "lambert",
    "",
    "",
];

const skinNames_16 = ["Skeleton", "Jazz Hands", "Space Armor", "Trick", "Spookster", "Red Ted", "Symphony", "dave", "Mr. Wither", "Knuckles", "Rib", "Skully"];
const skinDesc_16 = [
    "The default skin for Skeleton.",
    "Worry about enemies first. Let's play some tunes first.",
    "Not really effective... at least it looks cool.",
    "No need to chase cars; Trick catches his kills from a distance.",
    "Quite some beauty treatments were needed to get those glowing bones",
    "An outcast but legendary archer.",
    "Dances to the beat of his own drum, bobbing and weaving through the battlefield with the grace of a ballet dancer.",
    "Nobody really knows what happened to dave. He doesn't seem to mind though.",
    "All skeletons wear suits, but not all skeletons use bows!",
    "Legend has it that Knuckles has been playing since pre-alpha.",
    "Wants to ask his crush out, but doesn't have the guts.",
    "Something something you're gonna have a bad time...",
];
const skinPaths_16 = [
    "",
    "onetime",
    "onetime",
    "skeleton_final_kills_ranged_30",
    "skeleton_diamond_ore_broken",
    "onetime",
    "onetime",
    "onetime",
    "purchase",
    "pres3",
    "pres5",
    "completionist",
];
const skinPaths_onetime_16 = [
    "",
    "walls3_moodsetter",
    "walls3_bow_down",
    "",
    "",
    "walls3_legendary_skeleton",
    "walls3_ranged_training",
    "walls3_explosive_ending",
    "",
    "",
    "",
];
const skinReqs_16 = [
    "",
    "",
    "",
    "25",
    "50",
    "",
    "",
    "",
    "5,000",
    "",
    "",
];
const skinReqDesc_16 = [
    "",
    "",
    "",
    "Final kill 25 players from 30 blocks away.",
    "Mine 50 diamond ore as Skeleton.",
    "",
    "",
    "",
    "",
    "",
    "",
];
const skinReqDesc_onetime_16 = [
    "",
    "Obtain any music disc by killing a Creeper as Skeleton, then play it in a jukebox.",
    "Final kill 7 players in one game without using your bow as Skeleton.",
    "",
    "",
    "Reach 14 FK/A in a single game as Skeleton.",
    "Win a game as Skeleton while only using your bow to deal damage.",
    "Final kill 3 players in one game using Explosive Arrow.",
    "mr. wither",
    "",
    "",
];

const skinNames_17 = ["Spider", "Lethal", "Vinny", "Flutter", "Frog", "Shade", "spoderman", "Earl", "Cave Spider", "Buggs", "Symbiote", "Massacre"];
const skinDesc_17 = [
    "The default skin for Spider.",
    "A warrior of myth who knows no fear.",
    "Vinny, short for Vincenzo, was named after a famous Italian artist... or was it a map builder? I don't remember.",
    "This devilish winged creature enjoys throwing rocks at unsuspecting victims.",
    "For some frogs, life's a breeze. For this frog, however, life is tough. It's not easy being misclassified as Spider.",
    "Look out below!",
    "Somehow escaped from the Smash Heroes lobby.",
    "Earl actually accompanied mankind on their first ever voyage into outer space. This was only because the shuttle's cleaning staff didn't spot him, but that doesn't make it any less impressive.",
    "Twice as deadly as a regular Spider.",
    "Floats like a butterfly, stings like a bee, and leaps like a Spider.",
    "By the time you notice him, it'll already be too late.",
    "So primal in his brutality is Massacre that he oftentimes entirely forgets he is capable of leaping."
];
const skinPaths_17 = [
    "",
    "onetime",
    "onetime",
    "spider_meters_fallen",
    "onetime",
    "onetime",
    "spider_b_venom_strike_poison_damage",
    "spider_a_kills",
    "purchase",
    "pres3",
    "pres5",
    "completionist",
];
const skinPaths_onetime_17 = [
    "",
    "walls3_skitterama",
    "walls3_ninja_7s",
    "",
    "walls3_feels_bad",
    "walls3_legendary_spider",
    "",
    "",
    "",
    "",
    "",
];
const skinReqs_17 = [
    "",
    "",
    "",
    "25000",
    "",
    "",
    "600",
    "250",
    "5,000",
    "",
    "",
];
const skinReqDesc_17 = [
    "",
    "",
    "",
    "Fall 25,000 blocks as Spider.",
    "",
    "",
    "Deal 600 poison damage from Venom Strike.",
    "Kill 250 players with Leap.",
    "",
    "",
    "",
];
const skinReqDesc_onetime_17 = [
    "",
    "Trigger Skitter 4 times in 2 minutes.",
    "As Spider, craft an iron sword and final kill 7 players with it.",
    "",
    "Final kill 2 players with one Leap.",
    "Reach 14 FK/A in a single game as Spider.",
    "",
    "",
    "cave spider",
    "",
    "",
];

const skinNames_18 = ["Werewolf", "Crunch", "Bloo", "Duster", "Jake", "Cruze", "Lupus", "Savage", "Pupper", "Vito", "Warren", "Wolf in Sheep`s Clothing"];
const skinDesc_18 = [
    "The default skin for Werewolf.",
    "Always angry, very angry. You definitely don't want to try to steal one of Crunch's kills.",
    "Lovable creature named after its blue-stained fur. Warning: may hug you to death.",
    "Speeds away, leaving nothing but a trail of dust.",
    "Many have heard tales of the Abominable Snowman. That'd be Jake's second cousin.",
    "First-born Werewolf and original father of wolves. With his curious mind and animalistic instinct, Cruze is always off exploring the area to hunt.",
    "Salaryman by day, Werewolf by night. He makes a killing.",
    "Once the full moon rises, he is uncontrollable. Unless you have cheese. He really likes cheese. He also doesn't eat meat. Not a half bad guy.",
    "Sometimes you'd almost forget that this cute wolf pupper will one day grow up to be a beast.",
    "Loyal but ruthless. Playing as 'Don the Lion'? Now there's an offer you can't refuse.",
    "Loves picnics, fine wine, and getting his teeth into a good read.",
    "Inspired by how Sheep were able to fool even the most grizzled of veterans, he decided to become one of them.",
];
const skinPaths_18 = [
    "",
    "werewolf_final_kills_below_10_hp",
    "werewolf_steaks_eaten",
    "werewolf_meters_walked_speed",
    "onetime",
    "onetime",
    "werewolf_a_enemies_hit",
    "onetime",
    "purchase",
    "pres3",
    "pres5",
    "completionist",
];
const skinPaths_onetime_18 = [
    "",
    "walls3_wolf_smash",
    "",
    "",
    "walls3_time_to_feast",
    "walls3_legendary_werewolf",
    "",
    "walls3_vegetarian",
    "",
    "",
    "",
];
const skinReqs_18 = [
    "",
    "15",
    "750",
    "50000",
    "",
    "",
    "1000",
    "",
    "5,000",
    "",
    "",
];
const skinReqDesc_18 = [
    "",
    "Get 15 total FK's while under 10 HP as Werewolf.",
    "Eat 750 steaks as Werewolf.",
    "Run 50,000 blocks with the Speed effect as Werewolf.",
    "",
    "",
    "Damage 1,000 players with Lycanthropy.",
    "",
    "",
    "",
    "",
];
const skinReqDesc_onetime_18 = [
    "",
    "",
    "",
    "",
    "Receive 40 steaks from Carnivore in a single game.",
    "Reach 14 FK/A in a single game as Werewolf.",
    "",
    "Win a game as werewolf without eating any steak.",
    "pupper",
    "",
    "",
];

const skinNames_19 = ["Angel", "Athena", "Goddess", "Chad", "Eyeless", "Puck", "Justice", "Weepy", "Angel of Death", "Moon", "Shining Judgement"];
const skinDesc_19 = [
    "The default skin for Angel.",
    "Will your final moments truly be your final moments? That is for her to decide.",
    "Renowned protector of the weak and healer of the sick.",
    "It takes a lot of strength to choose kindness.",
    "Justice is indeed blind.",
    "Though mischievous and fun-loving in nature, he can always be counted upon in times of need.",
    "While karma comes around naturally, sometimes justice starts with a nudge.",
    "Probably best not to look away.",
    "Powered by years of sitting in the Skywars lobby receiving souls as sacrifice, it was finally able to ascend to its true form.",
    "A silent observer in the night sky, yearning to take part in the battles unfolding below.",
    "Said to reside within the brief interstice between life and death."
];
const skinPaths_19 = [
    "",
    "onetime",
    "angel_divine_interventions",
    "onetime",
    "onetime",
    "onetime",
    "onetime",
    "purchase",
    "pres3",
    "pres5",
    "completionist",
];
const skinPaths_onetime_19 = [
    "",
    "walls3_the_hand_that_feeds",
    "",
    "walls3_guardian_angel",
    "walls3_unwavering",
    "walls3_delaying_the_inevitable",
    "walls3_legendary_angel",
    "",
    "",
    "",
];
const skinReqs_19 = [
    "",
    "",
    "250",
    "",
    "",
    "",
    "",
    "5,000",
    "",
    "",
];
const skinReqDesc_19 = [
    "",
    "",
    "Delay 250 teammates' deaths with Divine Intervention.",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
];
const skinReqDesc_onetime_19 = [
    "",
    "Delay two teammates' deaths with a single cast of Divine Intervention.",
    "",
    "Give a teammate your Halo before the walls fall, and win the game with both of you alive and them holding your Halo.",
    "Heal 200 HP to yourself and teammates from Generosity in a single game.",
    "Delay the same teammate's death three times in one game.",
    "Reach 14 FK/A in a single game as Angel.",
    "weepy",
    "",
    "",
];

const skinNames_20 = ["Assassin", "Hitguy", "Torny", "Connor", "Blu", "Okamoto", "Shady", "Baba Yaga", "Abyss", "Inner Monster", "The Scream", "Creed"];
const skinDesc_20 = [
    "The default skin for Assassin.",
    "Absolutely top secret credentials.",
    "Said to have been roaming kids' nightmares since the dawn of time.",
    "One knight gone rogue!",
    "Legends say this wraith was disfigured by looking at the sky.",
    "Trained for millenia to restore peace from the shadows.",
    "A proficient killer who never works for free. Capable of killing people before they even sense him nearby.",
    "Don't you dare hurt his dog!",
    "Being stranded between worlds is enough to drive anyone crazy.",
    "It only takes one bad day to forever put on a mask.",
    "While many Assassins prefer to move in silence, The Scream likes to let his prey know that he knows exactly where they're hiding.",
    "Treasure every moment, for it is fleeting, and you never know when Creed will strike.",
];
const skinPaths_20 = [
    "",
    "assassin_strikes_from_cloak",
    "master_alechmy_hearts",
    "onetime",
    "onetime",
    "onetime",
    "onetime",
    "onetime",
    "purchase",
    "pres3",
    "pres5",
    "completionist",
];
const skinReqs_20 = [
    "",
    "1200",
    "1000",
    "",
    "",
    "",
    "",
    "",
    "5,000",
    "",
    "",
];
const skinReqDesc_20 = [
    "",
    "Attack 1200 players while Shadow Cloak is active.",
    "Heal 1000 hearts from Master Alchemist",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
];
const skinReqDesc_onetime_20 = [
    "",
    "",
    "",
    "Catch 30 arrows in one game.",
    "Shadow Step a distance of exactly 20 blocks.",
    "Reach 14 FK/A in a single game as Assassin.",
    "Final kill players of at least 5 different classes in one game.",
    "Kill two withers in one game.",
    "abyss",
    "",
    "",
];
const skinPaths_onetime_20 = [
    "",
    "",
    "",
    "walls3_thanks_connor",
    "walls3_morra",
    "walls3_legendary_assassin",
    "walls3_contract_killer",
    "walls3_kingmaker",
    "",
    "",
    "",
];

const skinNames_21 = ["Automaton", "Atomic", "Fender", "Vacuum", "Failed Experiment", "Crank", "CCDA-3301", "Soldier", "TERMIN8R", "Orange", "Al", "Unit-13"];
const skinDesc_21 = [
    "The default skin for Automaton.",
    "A great man during his life, mechanized beyond the grave.",
    "Literally has a door into the future on its body.",
    "Is this you: wake up at 11AM from hearing VRRRRRRRRRRHH, play games all day.",
    "The faulty result of humanity trying to serialize massive robots.",
    "Machine turned cyborg, fighting from a power suit.",
    "A near-incomprehensible construct once unearthed by an ill-fated civilization. Attempting to solve its puzzle led them to an unfortunate end.",
    "Few are known to exist, but they were engineered with an express purpose. Just one alone is enough to take on most armies.",
    "Programmed to wipe out enemies at all costs - even if that means a little killstealing here and there.",
    "Proof that one tiny bot can do great things.",
    "Possesses the cumulative knowledge of all mankind as a result of once plugging a USB into his belly button.",
    "If you're going to be making your last stand, this is a pretty impressive mech to be doing it in."
];
const skinPaths_21 = [
    "",
    "onetime",
    "onetime",
    "automaton_energy_syphoned",
    "onetime",
    "onetime",
    "onetime",
    "onetime",
    "purchase",
    "pres3",
    "pres5",
    "completionist",
];
const skinReqs_21 = [
    "",
    "",
    "",
    "3000",
    "",
    "",
    "",
    "",
    "5,000",
    "",
    "",
];
const skinReqDesc_21 = [
    "",
    "",
    "",
    "Siphon 3000 energy from enemies as Automaton.",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
];
const skinReqDesc_onetime_21 = [
    "",
    "Cast an EMP pulse on 6 players at once.",
    "Kill a wither with your Sharpness I diamond leggings as Automaton.",
    "",
    "Cast EMP on two targets with 0 energy in one Deathmatch.",
    "Reach 14 FK/A in a single game as Automaton.",
    "Win a game having final killed exactly 3 players from one team, 2 from another, and 1 from the last.",
    "Win a game as Automaton after starting Deathmatch as the team with the least amount of players remaining.",
    "termin8r",
    "",
    "",
];
const skinPaths_onetime_21 = [
    "",
    "walls3_emp",
    "walls3_into_the_future",
    "",
    "walls3_failed_experiment",
    "walls3_legendary_automaton",
    "walls3_configuration",
    "walls3_current_objective_survive",
    "",
    "",
    "",
];

const skinNames_22 = ["Moleman", "Truck", "Mineman Tyler", "Jolly", "Brick", "Graen", "Capybara", "Mole-rat", "Rat", "Beaver", "General Marcus", "Matty", "Biggie"];
const skinDesc_22 = [
    "The default skin for Moleman.",
    "Tough and hard-working. Truck is here to get stuff done.",
    "Some say he never stops digging...",
    "This happy creature speeds, jumps, digs, and goofs around.",
    "Can you build a wall to defend your base? Yes you can!",
    "Dwarven warrior. Lives underground and is the arm-wrestling champion of all two-legged creatures.",
    "Fun fact: the Capybara is the world's largest living rodent.",
    "Seldom seen above ground. Thank goodness.",
    "2020 is the Year of the Rat!",
    "Did you know? Beavers' large front teeth never stop growing.",
    "Grand Mole General Marcus. Lead his troops to victory in the bloody Battle of El Whackamole.",
    "Voted best-dressed and most likely to accidentally spleef his teammates seven years in a row.",
    "Put your ear to the ground. Feel the vibrations? Hear the sweet, sweet tunes? That's Biggie, and he's heading straight for ya!"
];
const skinPaths_22 = [
    "",
    "onetime",
    "onetime",
    "onetime",
    "moleman_blocks_placed_preparation",
    "onetime",
    "moleman_c_activations",
    "onetime",
    "moleman_junk_items_eaten",
    "purchase",
    "pres3",
    "pres5",
    "completionist",
];
const skinPaths_onetime_22 = [
    "",
    "walls3_gotcha",
    "walls3_speedy_mineman",
    "walls3_coming_through",
    "",
    "walls3_legendary_moleman",
    "",
    "walls3_sixty_feet_under",
    "walls3_heavy_eater",
    "",
    "",
    ""
];
const skinReqs_22 = [
    "",
    "",
    "",
    "",
    "15000",
    "",
    "1000",
    "",
    "2000",
    "5,000",
    "",
    "",
];
const skinReqDesc_22 = [
    "",
    "",
    "",
    "",
    "Place 15,000 blocks during the preparation period as Moleman.",
    "",
    "Obtain 1,000 Junk Items as Moleman.",
    "",
    "Eat 2,000 Junk Items as Moleman.",
    "",
    "",
    "",
];
const skinReqDesc_onetime_22 = [
    "",
    "Final kill two players with one Dig.",
    "Have Shortcut active for 5 minutes nonstop during Deathmatch.",
    "Hit 5 players with one Dig during Deathmatch.",
    "",
    "Reach 14 FK/A in a single game as Moleman.",
    "",
    "Win a game as Moleman without triggering Shortcut once.",
    "",
    "beaver",
    "",
    "",
];

const skinNames_23 = ["Phoenix", "Sailor Sid", "Owl", "Ember", "Fringe", "Falcon X", "Fae", "Hotshot", "Baby Chick", "Dukes", "Terry", "Everfyre"];
const skinDesc_23 = [
    "The default skin for Phoenix.",
    "Oh boy, oh boy, oh boy... He's a bit clumsy and short-tempered, but Sailor Sid definitely has a big heart.",
    "Did you know? A group of owls is called a parliament, but a group of fully maxed Owl-skin Phoenixes is called an OP party.",
    "The flame on Ember's tail indicates its kill count. If it's high, the flame burns brightly.",
    "Vale Tudo specialist. Seeing Fringe fight is like watching a deadly modern dance performance.",
    "Some say he has sailed the entire world.",
    "Having lived a million lives and defied a million deaths, she is the pinnacle of rebirth.",
    "Big ego, fiery temper. The worst part? Everything he says, he backs it up on the battlefield.",
    "Tweet, tweet!",
    "Although born and raised in Dragonkeep, Dukes was banished from his home for toxic behavior.",
    "Can't decide which of his five favorite dinosaurs is his ultimate favorite, so he has a onesie for each of them.",
    "Goddess of the sun, her flames burn the wicked and heal the righteous.",
];
const skinPaths_23 = [
    "",
    "onetime",
    "phoenix_allies_healed",
    "onetime",
    "onetime",
    "onetime",
    "onetime",
    "onetime",
    "purchase",
    "pres3",
    "pres5",
    "completionist",
];
const skinReqs_23 = [
    "",
    "",
    "1000",
    "",
    "",
    "",
    "",
    "",
    "5,000",
    "",
    "",
];
const skinReqDesc_23 = [
    "",
    "",
    "Heal allies for 1,000 total HP as Phoenix.",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
];
const skinReqDesc_onetime_23 = [
    "",
    "As Phoenix, throw a Regeneration III potion at an enemy, and final kill them while they still have the effect.",
    "",
    "Win a game as Phoenix without resurrecting.",
    "Cast Sun Ray on 5 allies at once.",
    "Reach 14 FK/A in a single game as Phoenix.",
    "Final kill a player within 10 seconds of resurrecting.",
    "As Phoenix, final kill the player who currently has the most FK/A.",
    "baby chick",
    "",
    "",
];
const skinPaths_onetime_23 = [
    "",
    "walls3_whats_the_big_idea",
    "",
    "walls3_ashes_to_bashes",
    "walls3_cruising_flames",
    "walls3_legendary_phoenix",
    "walls3_reborn",
    "walls3_simmer_down",
    "",
    "",
    "",
];

const skinNames_24 = ["Dragon", "Frightful", "Jade", "Greg", "Fury", "Hydragon", "Pip", "Ender Dragon", "The Terrible", "Hollow", "Dragon Slayer"];
const skinDesc_24 = [
    "The default skin for Dragon.",
    "A tiny dragon who loves to hide inside of pumpkins and startle passersby.",
    "While she can't exactly breathe fire, she has a fiery temper.",
    "A well-dressed fellow from lands afar, eager to explore that which shaped the past.",
    "Few believe she exists, and even fewer have ever seen her. If you should ever be unlucky enough to come face-to-face with her on a winter's evening, run.",
    "Devoured his brethren in an attempt to harness their power, only to be driven mad by guilt.",
    "A domesticated dragon, perfect for cutting down on heating costs.",
    "Will do whatever it takes to protect her habitat.",
    "Taking over the kingdom and driving out its inhabitants, he now has more gold than he could ever need.",
    "Mankind thought they had finally triumphed only for him to rise again, even stronger.",
    "Cursed to never get a good night's sleep, he took up Mega Walls as a pastime.",
];
const skinPaths_24 = [
    "",
    "onetime",
    "onetime",
    "onetime",
    "final_kills_with_fire",
    "onetime",
    "onetime",
    "purchase",
    "pres3",
    "pres5",
    "completionist",
];
const skinPaths_onetime_24 = [
    "",
    "walls3_frightful_flames",
    "walls3_dragonborn",
    "walls3_unbridled_riches",
    "",
    "walls3_dragons_eye",
    "walls3_legendary_dragon",
    "",
    "",
    "",
];
const skinReqs_24 = [
    "",
    "",
    "",
    "",
    "5",
    "",
    "",
    "5,000",
    "",
    "",
];
const skinReqDesc_24 = [
    "",
    "",
    "",
    "",
    "Final kill 5 players with fire.",
    "",
    "",
    "",
    "",
    "",
];
const skinReqDesc_onetime_24 = [
    "",
    "Kill a player who is on fire while you are wearing a pumpkin.",
    "Set 15 unique players on fire in a single game.",
    "Have 15 Dwarven Gold in your inventory at once.",
    "",
    "Land 4 Hellfire shots in a row without missing a shot.",
    "Reach 14 FK/A in a single game as Dragon.",
    "ender dragon",
    "",
    "",
];

const skinNames_25 = ["Renegade", "Bedrock", "Traitor", "Ara", "Hood", "Morde", "Deathskull", "Renny", "Elvish", "Scarab", "Brother Betrayer", "V"];
const skinDesc_25 = [
    "The default skin for Renegade.",
    "The most agile of fighters, protected by bedrock armor.",
    "Be careful not to choke on your convictions.",
    "Eyes on the road.",
    "I seem to have made myself an enemy of all the bad guys.",
    "Warriors beyond redemption turn into Morde.",
    "Deathskull doesn't abide by a moral spectrum of any kind. In place of good or bad there is only dead and soon-to-be.",
    "Kind to animals, not so kind to those who look to harm them.",
    "Light-footed and nimble, few are able to catch him out on any occasion.",
    "Jewel of both the desert and all the deserters.",
    "Long live the King.",
    "You can (final) kill a man, but you can't kill an idea.",
];
const skinPaths_25 = [
    "",
    "onetime",
    "renegade_arrows_from_rend",
    "onetime",
    "renegade_energy_from_grappling_hook",
    "onetime",
    "renegade_final_kills_after_grappling_hook",
    "onetime",
    "purchase",
    "pres3",
    "pres5",
    "completionist",
];
const skinReqs_25 = [
    "",
    "",
    "3000",
    "",
    "20000",
    "",
    "20",
    "",
    "5,000",
    "",
    "",
];
const skinReqDesc_25 = [
    "",
    "",
    "Retrieve 3,000 arrows using Rend.",
    "",
    "Recover 20,000 energy after using Grappling Hook.",
    "",
    "Final kill 20 total players within 5 seconds of using Grappling Hook.",
    "",
    "",
    "",
    "",
];
const skinReqDesc_onetime_25 = [
    "",
    "Retrieve 15 arrows from a single Rend.",
    "",
    "Loot 8 Regen-ades in one game.",
    "",
    "Reach 14 FK/A in a single game as Renegade.",
    "",
    "Rend 5 players at once.",
    "elvish",
    "",
    "",
];
const skinPaths_onetime_25 = [
    "",
    "walls3_born_talented",
    "",
    "walls3_inventory_management",
    "",
    "walls3_legendary_renegade",
    "",
    "walls3_crossfire",
    "",
    "",
    "",
];

const skinNames_26 = ["Snowman", "Gus", "Frozen", "Abominable", "Ice Bug", "Dobu", "Feathers", "David", "Frozen Alex", "Basilisk", "Frosty", "Cynic"];
const skinDesc_26 = [
    "The default skin for Snowman.",
    "This adventurer has ben waiting in the cold for the perfect kill so long that he became one with the snow.",
    "In the depths of the icy waters of the South Pole, a frozen statue guards the gates to Atlantis.",
    "Mighty Abominable, as powerful as it is annoying.",
    "Has been rampaging through the cold wasteland for thousands of years, trying to find a friend.",
    "Liquid nitrogen flows through its veins.",
    "Ice cold but loving it.",
    "I told my best friend to stop making Bigfoot jokes, Yeti still does.",
    "Native to the Jerry Pond until recently, Alex is still adjusting to the new climate.",
    "The Basilisk has only been heard of in whispers of legends.",
    "No matter the season, Frosty's always keeping it cool.",
    "He's making a list, he's checking it twice, Cynic's gonna smash you with bolts made o' ice!",
];
const skinPaths_26 = [
    "",
    "onetime",
    "snowman_blizzard_seconds_slow",
    "onetime",
    "snowman_snowmen_built",
    "onetime",
    "onetime",
    "onetime",
    "purchase",
    "pres3",
    "pres5",
    "completionist",
];
const skinReqs_26 = [
    "",
    "",
    "7200",
    "",
    "500",
    "",
    "",
    "",
    "5,000",
    "",
    "",
];
const skinReqDesc_26 = [
    "",
    "",
    "Slow players for a total of 7,200 seconds using Blizzard.",
    "",
    "Build 500 Snowman Companions.",
    "",
    "",
    "",
    "",
    "",
    "",
];
const skinReqDesc_onetime_26 = [
    "",
    "Hit 4 players with a single Ice Bolt.",
    "",
    "Recover 200 energy from Snowman Companion in 40 seconds.",
    "",
    "Reach 14 FK/A in a single game as Snowman.",
    "Final kill a player as Snowman while holding a snowball.",
    "Final kill 3 players with your diamond shovel without dying as Snowman.",
    "frozen alex",
    "",
    "",
];
const skinPaths_onetime_26 = [
    "",
    "walls3_chill_sniper",
    "",
    "walls3_avalanche",
    "",
    "walls3_legendary_snowman",
    "walls3_snowball_fight",
    "walls3_grave_digger",
    "",
    "",
    "",
];

const classTotalSkins = [skinNames_0.length, skinNames_1.length, skinNames_2.length, skinNames_3.length, skinNames_4.length, skinNames_5.length, skinNames_6.length, skinNames_7.length, skinNames_8.length, skinNames_9.length, skinNames_10.length, skinNames_11.length, skinNames_12.length, skinNames_13.length, skinNames_14.length, skinNames_15.length, skinNames_16.length, skinNames_17.length, skinNames_18.length, skinNames_19.length, skinNames_20.length, skinNames_21.length, skinNames_22.length, skinNames_23.length, skinNames_24.length, skinNames_25.length, skinNames_26.length];