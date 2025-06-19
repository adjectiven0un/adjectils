const classnamesCapital = ["Cow", "Hunter", "Shark", "Arcanist", "Dreadlord", "Golem", "Herobrine", "Pigman", "Zombie", "Blaze", "Enderman", "Shaman", "Squid", "Creeper", "Pirate", "Sheep", "Skeleton", "Spider", "Werewolf", "Angel", "Assassin", "Automaton", "Moleman", "Phoenix", "Dragon", "Renegade", "Snowman"];
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
            0: {
                name: "Cow",
                desc: "The default skin for Cow.",
                type: "default",
                path: "",
                backup: "",
                req: "",
                reqdesc: "Unlocked by default.",
            },
            1: {
                name: "Cow Suit",
                desc: "Perfect for costume parties!",
                type: "onetime",
                path: "walls3_i_am_cow",
                backup: "",
                req: "",
                reqdesc: "Cast Soothing Moo on 8 players at once.",
            },
            2: {
                name: "Iron Cow",
                desc: "The kind of cow to launch their pasture to Mars.",
                type: "",
                path: "bucket_barriers_broken",
                backup: "walls3_moo_brawl",
                req: "600",
                reqdesc: "Let 500 buckets from Bucket Barrier break protecting you.",
            },
            3: {
                name: "Skelly Moo",
                desc: "Thanks for good calcium.",
                type: "",
                path: "cow_ultra_pasteurized_drank",
                backup: "walls3_greedy_louis",
                req: "500",
                reqdesc: "Drink 500 Ultra Pasteurized Milk as Cow.",
            },
            4: {
                name: "Fungu Madness",
                desc: "This toxic cow conquers the world one infection at a time.",
                type: "onetime",
                path: "walls3_team_player",
                req: "",
                reqdesc: "Cast Refreshing Sip on 5 players at once during Deathmatch.",
            },
            5: {
                name: "One Serious Bull",
                desc: "Thick as a brick, strong as a... bull.",
                type: "onetime",
                path: "walls3_legendary_cow",
                req: "",
                reqdesc: "Reach 14 FK/A in a single game as Cow.",
            },
            6: {
                name: "Parasite",
                desc: "Tainted meat.",
                type: "",
                path: "final_assists_after_final_killed",
                backup: "walls3_beyond_the_grave",
                req: "15",
                reqdesc: "Get 15 total FK/A after taking a final death.",
            },
            7: {
                name: "Sir Loin",
                desc: "Runs his own five-star restaurant.",
                type: "onetime",
                path: "walls3_fine_dining",
                req: "",
                reqdesc: "Get a final kill with a steak as Cow.",
            },
            8: {
                name: "Sacred Bull",
                desc: "Red in nature.",
                type: "",
                path: "cow_players_healed",
                backup: "walls3_biological_restoration",
                req: "2500",
                reqdesc: "Cast abilities on players 2,500 times as Cow.",
            },
            9: {
                name: "King Cowie",
                desc: "Now that is one fancy cow.",
                type: "purchase",
                path: "king cowie",
                req: "5,000",
                reqdesc: "",
            },
            10: {
                name: "Buffalo Bill",
                desc: "Not actually a cow, but just as ruthless in its ruminant glory.",
                type: "pres3",
                path: "",
                req: "",
                reqdesc: "",
            },
            11: {
                name: "Minotaur",
                desc: "Don't let its floral nature fool you. You do not want to cross this minotaur.",
                type: "pres5",
                path: "",
                req: "",
                reqdesc: "",
            },
            12: {
                name: "Charred",
                desc: "Went to Hell and back for revenge, but might have stayed a bit too long.",
                type: "completionist",
                path: "",
                req: "",
                reqdesc: "",
            },
        }
    },
    1: {
        id: "hunter",
        plaintext: "Hunter",
        classcolor: "#55ff55",
        classtype: "Starter",
        styles: [
            "Ranged",
            "Fighter",
        ],
        difficulty: 2,
        skins: {
            0: {
                name: "Hunter",
                desc: "The default skin for Hunter.",
                type: "default", 
                path: "", 
                backup: "",
                req: "", 
                reqdesc: "" 
            },
            1: {
                name: "Edge",
                desc: "Highly skilled archer. Edge's fashion sense, however, is clearly not as strong as his bow skills.",
                type: "onetime",
                path: "walls3_on_point", 
                backup: "",
                req: "", 
                reqdesc: "Shoot 12 unique players in a row without missing a shot." 
            },
            2: {
                name: "Tucson",
                desc: "Roams the world searching for forgotten treasures.",
                type: "", 
                path: "hunter_g_activations",
                backup: "",
                req: "300",
                reqdesc: "Find 300 Golden Apples while playing as Hunter."
            },
            3: {
                name: "Hippie Moon",
                desc: "Has never harmed a fly in his life. Moon just wants to look after all the animals.",
                type: "onetime",
                path: "walls3_yeehaw",
                backup: "",
                req: "", 
                reqdesc: "Kill a wither while riding a pig."
            },
            4: {
                name: "Animal Tamer",
                desc: "This is his full-time profession. Next to Mega Walls, of course, where any creature would be lucky to be this warrior's mighty steed!",
                type: "",
                path: "hunter_b_final_assists",
                backup: "walls3_ba_boom",
                req: "5",
                reqdesc: "Get 5 total FK/A with Animal Companion."
            },
            5: {
                name: "Cake Hunter",
                desc: "At least I got cake.",
                type: "", 
                path: "cakes_found",
                backup: "walls3_cake_hunter",
                req: "150",
                reqdesc: "Find 150 unique cakes as any class."
            },
            6: {
                name: "Kuba the Caveman",
                desc: "Kuba did not discover fire, and he did not invent the wheel... but he does have homing arrows.",
                type: "onetime",
                path: "walls3_legendary_hunter",
                backup: "",
                req: "", 
                reqdesc: "Reach 14 FK/A in a single game as Hunter."
            },
            7: {
                name: "Annie",
                desc: "Her most refined weapon is her wit.",
                type: "",
                path: "force_of_nature_final_kills",
                backup: "",
                req: "50",
                reqdesc: "Get 50 total FK/A with Force of Nature active."
            },
            8: {
                name: "Bounty",
                desc: "Put a price on their head and he may come, but only if the price is good.",
                type: "onetime",
                path: "walls3_target_eliminated", 
                backup: "",
                req: "", 
                reqdesc: "Final kill 3 players you've killed previously in that game as Hunter." 
            },
            9: {
                name: "Jasmin",
                desc: "Beware, Jasmin is a master huntress.",
                type: "purchase",
                path: "jasmin",
                backup: "",
                req: "5,000", 
                reqdesc: "jasmin"
            },
            10: {
                name: "Genghis",
                desc: "Master hunter. It is said that one in every two hundred animals is directly spawned from Genghis's Animal Companion ability.",
                type: "pres3",
                path: "pres3",
                backup: "",
                req: "", 
                reqdesc: "" 
            },
            11: {
                name: "Sparta",
                desc: "Wishes they would come back. Even as a shadow. Even as a dream...",
                type: "pres5",
                path: "pres5",
                backup: "",
                req: "", 
                reqdesc: "" 
            },
            12: {
                name: "Slinger",
                desc: "Die standing or die running, that much is up to you.",
                type: "completionist",
                path: "completionist",
                backup: "",
                req: "", 
                reqdesc: "" 
            }
        }
    },
    2: {
        id: "shark",
        plaintext: "Shark",
        classcolor: "#ff55ff",
        classtype: "Starter",
        styles: [
            "Fighter",
            "Control",
        ],
        difficulty: 3,
        skins: {
            0: {
                name: "Shark",
                desc: "The default skin for Shark.",
                type: "default",
                path: "",
                backup: "",
                req: "",
                reqdesc: ""
            },
            1: {
                name: "Shelly",
                desc: "Shelly really is just a peaceful turtle. She likes to eat plants and legs.",
                type: "",
                path: "shark_water_kills",
                backup: "walls3_hammerhead",
                req: "100",
                reqdesc: "Kill 100 players while you and the victim are in water."
            },
            2: {
                name: "Treasure",
                desc: "This octopus stuck its head in a treasure chest and can't get out.",
                type: "onetime",
                path: "walls3_great_white",
                backup: "",
                req: "", 
                reqdesc: "Cast From the Depths on 7 players at once." 
            },
            3: {
                name: "Devourer",
                desc: "Devours bone, flesh, and souls.",
                type: "onetime",
                path: "walls3_tiger_shark",
                backup: "",
                req: "", 
                reqdesc: "Activate Food Hunt 4 times in 30 seconds during Deathmatch."
            },
            4: {
                name: "Wata",
                desc: "A feral child raised by fishes.",
                type: "onetime",
                path: "walls3_bull_shark", 
                backup: "",
                req: "", 
                reqdesc: "Attack someone while you have your full Blood Rage buff." 
            },
            5: {
                name: "Bblurgbl",
                desc: "This sailor swam too close to the funky corals.",
                type: "onetime",
                path: "walls3_legendary_shark",
                backup: "",
                req: "", 
                reqdesc: "Reach 14 FK/A in a single game as Shark." 
            },
            6: {
                name: "Cosmo",
                desc: "Originally sent to space courtesy of Dreadlord Airlines, he now explores the stars.",
                type: "",
                path: "shark_g_activations",
                backup: "walls3_oceans_explorer",
                req: "1000",
                reqdesc: "Activate Ocean's Treasure 1000 times."
            },
            7: {
                name: "Chum",
                desc: "Looks can be deceiving, Chum is strictly vegetarian. At least, that's what he says...",
                type: "",
                path: "shark_defender_kills",
                backup: "walls3_oceans_defender",
                req: "250",
                reqdesc: "Get 250 defensive kills as Shark."
            },
            8: {
                name: "Hammy",
                desc: "Years of butting heads with his fellow sharks has left him with the smoothest skull around.",
                type: "purchase",
                path: "hammy",
                backup: "",
                req: "5,000", 
                reqdesc: "hammy"
            },
            9: {
                name: "Selkie",
                desc: "Selkie doesn't care about your opinion. Selkie doesn't care what you look like. Selkie will chomp on you because you're breakfast.",
                type: "pres3",
                path: "pres3",
                backup: "",
                req: "", 
                reqdesc: "" 
            },
            10: {
                name: "Terror of the Deep",
                desc: "Over 90% of the ocean is still unexplored? Good!",
                type: "pres5",
                path: "pres5",
                backup: "",
                req: "", 
                reqdesc: "" 
            },
            11: {
                name: "Fishmonger",
                desc: "Sometimes the best way to catch fish is by diving in and grabbing them yourself.",
                type: "completionist",
                path: "completionist",
                backup: "",
                req: "", 
                reqdesc: "" 
            }
        }
    },
    3: {
        id: "arcanist",
        plaintext: "Arcanist",
        classcolor: "#ff5555",
        classtype: "Regular",
        styles: [
            "Control",
            "Fighter",
        ],
        difficulty: 1,
        skins: {
            0: {
                name: "Arcanist",
                desc: "The default skin for Arcanist.",
                type: "default",
                path: "",
                backup: "",
                req: "",
                reqdesc: ""
            },
            1: {
                name: "Drufus",
                desc: "This druid isn't into magic potions; Drufus instead brews some tasty soup.",
                type: "",
                path: "arcanist_c_total_final_kills",
                backup: "walls3_potions_of_death",
                req: "8",
                reqdesc: "Get 8 total FK/A with Arcane Explosion."
            },
            2: {
                name: "Steele",
                desc: "An ancient warrior raised to serve his team, Steele never backs off.",
                type: "",
                path: "arcanist_iron_ore_broken",
                backup: "walls3_hard_as_steel",
                req: "5000",
                reqdesc: "Mine 5,000 iron ore with Arcane Beam."
            },
            3: {
                name: "Chester",
                desc: "Space ranger and a brave leader, but at times Chester can also be too impulsive.",
                type: "onetime",
                path: "walls3_to_infinity", 
                backup: "",
                req: "",
                reqdesc: "Kill 3 players without losing Tempest's Speed III buff." 
            },
            4: {
                name: "Byron Boy",
                desc: "Byron Boy shoots lasers. He also shoots lasers. Did I mention he shoots lasers?",
                type: "onetime",
                path: "walls3_laser_precision", 
                backup: "",
                req: "",
                reqdesc: "Shoot 10 unique players with Arcane Beam in a row without missing a shot." 
            },
            5: {
                name: "Emperor",
                desc: "Rule your empire in dominating fashion.",
                type: "onetime",
                path: "walls3_legendary_arcanist", 
                backup: "",
                req: "",
                reqdesc: "Reach 14 FK/A in a single game as Arcanist."
            },
            6: {
                name: "Archmage",
                desc: "Studied at the Academy under the tutelage of some of the strongest sorcerers.",
                type: "",
                path: "arcanist_a_activations",
                backup: "walls3_abil_spammer",
                req: "1000",
                reqdesc: "Use Arcane Beam 1,000 times."
            },
            7: {
                name: "Arcana",
                desc: "Don't get on Arcana's bad side – she won't take kindly to it.",
                type: "onetime",
                path: "walls3_tripleshot",
                backup: "",
                req: "",
                reqdesc: "Hit 3 players with the same Arcane Beam." 
            },
            8: {
                name: "Isaiah",
                desc: "Rises above the battlefield with his prismarine-blue armor.",
                type: "purchase",
                path: "isaiah",
                backup: "",
                req: "5,000",
                reqdesc: "isaiah" 
            },
            9: {
                name: "Crawler",
                desc: "Creature of the void galaxies. Its appearace is both mysterious and sublime.",
                type: "pres3",
                path: "pres3",
                backup: "",
                req: "",
                reqdesc: ""
            },
            10: {
                name: "Kioka",
                desc: "An experiment went wrong, turning two young inventors into one. While one sleeps, the other works.",
                type: "pres5",
                path: "pres5",
                backup: "",
                req: "",
                reqdesc: ""
            },
            11: {
                name: "Mysterious",
                desc: "Fighting through this avatar, the real identity of Mysterious is unknown, and he is probably from the frontlines.",
                type: "completionist",
                path: "completionist",
                backup: "",
                req: "",
                reqdesc: ""
            }
        }
    },
    4: {
        id: "dreadlord",
        plaintext: "Dreadlord",
        classcolor: "#aa0000",
        classtype: "Regular",
        styles: [
            "Rusher",
            "Damage",
        ],
        difficulty: 1,
        skins: {
            0: {
                name: "Dreadlord",
                desc: "The default skin for Dreadlord.",
                type: "default",
                path: "",
                backup: "",
                req: "",
                reqdesc: ""
            },
            1: {
                name: "Doomboy",
                desc: "Fighting machine. Doomboy slices through enemies as if he's slicing through soft butter.",
                type: "onetime",
                path: "walls3_maximum_effort",
                backup: "",
                req: "",
                reqdesc: "Final kill 3 players in 12 seconds as Dreadlord."
            },
            2: {
                name: "Crowe",
                desc: "Medieval sorcerer. Crowe is a master of skull magic.",
                type: "onetime",
                path: "walls3_birds_eye",
                backup: "",
                req: "",
                reqdesc: "Hit a player with Shadow Burst from at least 35 blocks away."
            },
            3: {
                name: "Rushlord",
                desc: "Half-Dread, Half-Zombie. Prepare for the ultimate powerhouse rush!",
                type: "",
                path: "dreadlord_wither_damage",
                backup: "walls3_rushlord",
                req: "20000",
                reqdesc: "Deal 20,000 wither damage as Dreadlord."
            },
            4: {
                name: "Breadlord",
                desc: "Rush, rush, attack with your sword. You can't catch him, it's Breadlord!",
                type: "",
                path: "dreadlord_bread_crafted",
                backup: "walls3_breadlord",
                req: "617",
                reqdesc: "Craft 617 bread as Dreadlord."
            },
            5: {
                name: "Sweets",
                desc: "Born with the face of evil, but a heart of gold.",
                type: "onetime",
                path: "walls3_legendary_dreadlord",
                backup: "",
                req: "",
                reqdesc: "Reach 14 FK/A in a single game as Dreadlord."
            },
            6: {
                name: "Frostlord",
                desc: "Where were you when Hell froze over?",
                type: "",
                path: "dark_matter_armor",
                backup: "walls3_gathering_talent_indeed",
                req: "500",
                reqdesc: "Obtain 500 pieces of iron armor from Dark Matter."
            },
            7: {
                name: "Conquest",
                desc: "For Conquest, the only way is onward. No losses are too great. After all, a Pyrrhic victory is a victory nonetheless.",
                type: "onetime",
                path: "walls3_the_chosen_few",
                backup: "",
                req: "",
                reqdesc: "Win a game as Dreadlord with 3 or fewer teammates remaining."
            },
            8: {
                name: "Reaper",
                desc: "Nobody knows what's hiding behind Reaper's skull. Maybe another skull.",
                type: "purchase",
                path: "reaper",
                backup: "",
                req: "5,000",
                reqdesc: ""
            },
            9: {
                name: "Milo",
                desc: "Punished by the gods for his vanity, Milo was given the face of a demon such that nobody, including himself, could bear his sight.",
                type: "pres3",
                path: "pres3",
                backup: "",
                req: "",
                reqdesc: ""
            },
            10: {
                name: "Soul Reaver",
                desc: "Feeds off the life force of others. Channels their stored energy in combat when those they deem worthy die.",
                type: "pres5",
                path: "pres5",
                backup: "",
                req: "",
                reqdesc: ""
            },
            11: {
                name: "Dominator",
                desc: "Foul in wisdom, cruel in strength, the world lies within his dormant grasp.",
                type: "completionist",
                path: "completionist",
                backup: "",
                req: "",
                reqdesc: ""
            }
        }
    },
    5: {
        id: "golem",
        plaintext: "Golem",
        classcolor: "#aaaaaa",
        classtype: "Regular",
        styles: [
            "Tank",
            "Control",
        ],
        difficulty: 1,
        skins: {
            0: {
                name: "Golem",
                desc: "The default skin for Golem.",
                type: "default",
                path: "",
                backup: "",
                req: "",
                reqdesc: ""
            },
            1: {
                name: "Ogre",
                desc: "Defend your swamp!",
                type: "onetime",
                path: "walls3_its_all_ogre_now",
                backup: "",
                req: "",
                reqdesc: "As Golem, kill the last wither in the game then win the game within 12 minutes."
            },
            2: {
                name: "Bryce",
                desc: "Timber! Believe it or not, Lumberjack Bryce is able to gather wood just by punching trees.",
                type: "",
                path: "golem_wood_chopped",
                backup: "walls3_timber",
                req: "5000",
                reqdesc: "Break 5,000 wooden logs as Golem."
            },
            3: {
                name: "Flint",
                desc: "Born from molten lava, this fiery Golem can turn any swimming pool into a hot spring.",
                type: "onetime",
                path: "walls3_taking_the_heat",
                backup: "",
                req: "",
                reqdesc: "As Golem, kill a wither while on fire."
            },
            4: {
                name: "Victor",
                desc: "As a kid, Victor loved to go out for ice cream. He always went for three scoops at his favorite shop, 'Just Ice'.",
                type: "onetime",
                path: "walls3_hammer_down",
                backup: "",
                req: "",
                reqdesc: "Hit 5 players with one Iron Punch."
            },
            5: {
                name: "Grey",
                desc: "Grown's slightly shy and insecure twin brother. They're always racing one another.",
                type: "onetime",
                path: "walls3_legendary_golem",
                backup: "",
                req: "",
                reqdesc: "Reach 14 FK/A in a single game as Golem."
            },
            6: {
                name: "Cooper",
                desc: "Long lost relative of Grey and Grown. Likes to push people's buttons.",
                type: "onetime",
                path: "walls3_judgement_call",
                backup: "",
                req: "",
                reqdesc: "Final kill 4 players with Iron Punch in one game."
            },
            7: {
                name: "Iglu",
                desc: "Last seen in Frozen's wither room. Living out the rest of his days in solitude.",
                type: "",
                path: "golem_b_iron_heart_absorption",
                backup: "walls3_iron_hearted",
                req: "1000",
                reqdesc: "Receive 1,000 absorption from Iron Heart."
            },
            8: {
                name: "Commander Brown",
                desc: "Ready for deployment!",
                type: "purchase",
                path: "commander brown",
                backup: "",
                req: "5,000",
                reqdesc: ""
            },
            9: {
                name: "Grown",
                desc: "A charming Golem in the prime of her life! Grown will knock you off your feet with her beauty... and her Iron Punch!",
                type: "pres3",
                path: "pres3",
                backup: "",
                req: "",
                reqdesc: ""
            },
            10: {
                name: "Spol",
                desc: "Legends speak of an ancient, slumbering creature the size of a continent.",
                type: "pres5",
                path: "pres5",
                backup: "",
                req: "",
                reqdesc: ""
            },
            11: {
                name: "Construct",
                desc: "Though those who created it left its dimension eons ago, the Construct remains stalwart in its defense of their territory.",
                type: "completionist",
                path: "completionist",
                backup: "",
                req: "",
                reqdesc: ""
            }
        }
    },
    6: {
        id: "herobrine",
        plaintext: "Herobrine",
        classcolor: "#ffff55",
        classtype: "Regular",
        styles: [
            "Damage",
            "Control",
        ],
        difficulty: 1,
        skins: {
            0: {
                name: "Herobrine",
                desc: "The default skin for Herobrine.",
                type: "default",
                path: "",
                backup: "",
                req: "",
                reqdesc: ""
            },
            1: {
                name: "Thunders",
                desc: "Some like Thunders because he's so cute. Thunders just likes to electrocute.",
                type: "onetime",
                path: "walls3_thunder",
                backup: "",
                req: "",
                reqdesc: "Final kill two players with one Wrath."
            },
            2: {
                name: "Larry",
                desc: "Meet Steve's older and cooler brother Larry. Larry is really cool.",
                type: "onetime",
                path: "walls3_not_a_golem",
                backup: "",
                req: "",
                reqdesc: "Win a game as Herobrine wearing a diamond chestplate and diamond boots."
            },
            3: {
                name: "Sunny",
                desc: "Hahaha Sunny, you're so funny! OK enough – now you're annoying me.",
                type: "",
                path: "herobrine_treasures_found",
                backup: "walls3_lucky_sunny",
                req: "1000",
                reqdesc: "Find 1,000 chests while mining as Herobrine."
            },
            4: {
                name: "Boxer",
                desc: "Boxer's enemies usually tap out before the game has even started.",
                type: "onetime",
                path: "walls3_multi_kill",
                backup: "",
                req: "",
                reqdesc: "Get 5 FK/A in 15 seconds as Herobrine."
            },
            5: {
                name: "Odin",
                desc: "Odin knows a total of three words: 'Odin', 'Fight', and 'Asparagus'. He doesn't even like asparagus.",
                type: "onetime",
                path: "walls3_legendary_herobrine",
                backup: "",
                req: "",
                reqdesc: "Reach 14 FK/A in a single game as Herobrine."
            },
            6: {
                name: "Santabrine",
                desc: "You should stay in bed when this Santa delivers your presents.",
                type: "",
                path: "iron_armor_gifted",
                backup: "walls3_seasons_greetings",
                req: "1500",
                reqdesc: "Give 1,500 pieces of iron armor to teammates.",
            },
            7: {
                name: "Jerry",
                desc: "A truly terrifying fiend who has spread his influence over several universes, becoming a blight upon them all.",
                type: "onetime",
                path: "walls3_world_ender",
                backup: "",
                req: "",
                reqdesc: "Final kill 4 players from the same team as Herobrine."
            },
            8: {
                name: "Derpbrine",
                desc: "A legend among newbs.",
                type: "onetime",
                path: "walls3_derpbrines_revenge",
                backup: "",
                req: "",
                reqdesc: "As Herobrine, final kill someone who killed you earlier in the game."
            },
            9: {
                name: "Dark Herobrine",
                desc: "Who would've thought a more villainous Herobrine existed?",
                type: "purchase",
                path: "dark herobrine",
                backup: "",
                req: "5,000",
                reqdesc: ""
            },
            10: {
                name: "Null",
                desc: "An ancient spirit that roams the code. Null plans to nullify and plunge the world back into the darkness of his oblivion.",
                type: "purchase",
                path: "null",
                backup: "",
                req: "10,000",
                reqdesc: ""
            },
            11: {
                name: "Xiao Yu",
                desc: "Swordmaster Xiao Yu does not speak, he lets his sword do the talking.",
                type: "pres3",
                path: "pres3",
                backup: "",
                req: "",
                reqdesc: ""
            },
            12: {
                name: "Zeus",
                desc: "God of the Sky and all things under it. Move out of his way or die standing.",
                type: "pres5",
                path: "pres5",
                backup: "",
                req: "",
                reqdesc: ""
            },
            13: {
                name: "Godfrey",
                desc: "Fought on the rooftops of Forsaken in his youth. Now, old and blind, he's yet to shy away from a fight, even one that seems unwinnable.",
                type: "completionist",
                path: "completionist",
                backup: "",
                req: "",
                reqdesc: ""
            }
        }
    },
    7: {
        id: "pigman",
        plaintext: "Pigman",
        classcolor: "#ff55ff",
        classtype: "Regular",
        styles: [
            "Damage",
            "Tank",
        ],
        difficulty: 1,
        skins: {
            0: {
                name: "Pigman",
                desc: "The default skin for Pigman.",
                type: "default",
                path: "",
                backup: "",
                req: "",
                reqdesc: ""
            },
            1: {
                name: "Super Pig",
                desc: "Is it a bird? Is it a plane? It's Super Pig!",
                type: "onetime",
                path: "walls3_circle_of_trust",
                backup: "",
                req: "",
                reqdesc: "Cast Burning Souls on 8 players at once."
            },
            2: {
                name: "King Pig",
                desc: "King Pig is the evil mind behind the great Pigpocalypse.",
                type: "onetime",
                path: "walls3_blowing_bubbles",
                backup: "",
                req: "",
                reqdesc: "Cast Burning Souls 4 times in 21 seconds."
            },
            3: {
                name: "Kai",
                desc: "Pink Kai keeps his bright flamingo costume clean at all times.",
                type: "",
                path: "pigman_g_activations",
                backup: "walls3_collector",
                req: "500",
                reqdesc: "Find 500 armor sets in chests as Pigman."
            },
            4: {
                name: "Picasso",
                desc: "Let's add some more happy little trees!",
                type: "onetime",
                path: "walls3_masterpiece",
                backup: "",
                req: "",
                reqdesc: "Kill a wither with a painting as Pigman."
            },
            5: {
                name: "Bandit",
                desc: "This ferocious-looking beast practices the recorder every evening before bed time.",
                type: "onetime",
                path: "walls3_legendary_pigman",
                backup: "",
                req: "",
                reqdesc: "Reach 14 FK/A in a single game as Pigman."
            },
            6: {
                name: "Soos",
                desc: "A renowned troublemaker among Piglins. Keep an eye on your gold!",
                type: "",
                path: "pigman_c_enduranced_final_kills",
                backup: "walls3_young_thug",
                req: "5",
                reqdesc: "Final kill 5 players while Endurance is active."
            },
            7: {
                name: "Goliath",
                desc: "Unquestioned and unchallenged, Goliath has won 371 Mega Walls duels in a row.",
                type: "",
                path: "pigman_resistance_time_seconds",
                backup: "walls3_tough_skin",
                req: "500",
                reqdesc: "Have Endurance active for 500 seconds."
            },
            8: {
                name: "Zombie Pigman",
                desc: "Half-man, half-pig, half-zombie. Wait... that doesn't add up.",
                type: "purchase",
                path: "zombie pigman",
                backup: "",
                req: "5,000",
                reqdesc: ""
            },
            9: {
                name: "Dusk",
                desc: "Mythical creature of the dark-golden nights. Rumoured to be awoken by the northern lights.",
                type: "pres3",
                path: "pres3",
                backup: "",
                req: "",
                reqdesc: ""
            },
            10: {
                name: "Chomper",
                desc: "Will eat anything thrown in his direction, whether it's friend or foe.",
                type: "pres5",
                path: "pres5",
                backup: "",
                req: "",
                reqdesc: ""
            },
            11: {
                name: "Brute",
                desc: "Forged in fire, he's been waiting for this moment for decades.",
                type: "completionist",
                path: "completionist",
                backup: "",
                req: "",
                reqdesc: ""
            }
        }
    },
    8: {
        id: "zombie",
        plaintext: "Zombie",
        classcolor: "#22aa22",
        classtype: "Regular",
        styles: [
            "Tank",
            "Support",
        ],
        difficulty: 1,
        skins: {
            0: {
                name: "Zombie",
                desc: "The default skin for Zombie.",
                type: "default",
                path: "",
                backup: "",
                req: "",
                reqdesc: ""
            },
            1: {
                name: "Toon",
                desc: "Scarily cute... but also cutely scary!",
                type: "onetime",
                path: "walls3_alotv1",
                backup: "",
                req: "",
                reqdesc: "Kill a wither as Zombie as the last player alive on your team."
            },
            2: {
                name: "Jumbo",
                desc: "There's no better support than your favorite toy bear!",
                type: "onetime",
                path: "walls3_hug_me",
                backup: "",
                req: "",
                reqdesc: "Heal 150 HP to teammates in a single game as Zombie."
            },
            3: {
                name: "Taco",
                desc: "How do you decide between Zombie or Taco? Why not both?",
                type: "onetime",
                path: "walls3_gone_vegan",
                backup: "",
                req: "",
                reqdesc: "Win a game as zombie while only eating bread."
            },
            4: {
                name: "Yawn",
                desc: "Meet Yawn, the only creature with a permanent case of morning breath.",
                type: "",
                path: "games_beds_placed",
                backup: "",
                req: "50",
                reqdesc: "Place beds in 50 games as Zombie."
            },
            5: {
                name: "Gorilla",
                desc: "Legends never die... and neither do Zombies.",
                type: "onetime",
                path: "walls3_legendary_zombie",
                backup: "",
                req: "",
                reqdesc: "Reach 14 FK/A in a single game as Zombie."
            },
            6: {
                name: "Furbie",
                desc: "Once a soft toy, Furbie always watched over the child who purchased him. Now thrown away and forgotten, Furbie has developed a taste for revenge. And brains too.",
                type: "",
                path: "zombie_healed_low_teammates",
                backup: "walls3_mr_clutcherson",
                req: "100",
                reqdesc: "Heal teammates who are below 10 HP 100 times as Zombie."
            },
            7: {
                name: "King Dáinn",
                desc: "One of the oldest known Zombies. Enjoys building empires from the ground up and then destroying them for his own entertainment.",
                type: "",
                path: "zombie_berserked_kills",
                backup: "",
                req: "25",
                reqdesc: "Kill 25 players with Berserk active."
            },
            8: {
                name: "Zaza",
                desc: "Zaza loves to play some Mega Walls.",
                type: "purchase",
                path: "zaza",
                backup: "",
                req: "5,000",
                reqdesc: ""
            },
            9: {
                name: "Dorc",
                desc: "Orcs may not seem the brightest, but Dorc has studied medicine!",
                type: "pres3",
                path: "pres3",
                backup: "",
                req: "",
                reqdesc: ""
            },
            10: {
                name: "Shibe",
                desc: "Loves nothing more than chasing after Skeletons.",
                type: "pres5",
                path: "pres5",
                backup: "",
                req: "",
                reqdesc: ""
            },
            11: {
                name: "Shogun",
                desc: "Long dead, the Shogun keeps fighting in the hope that he will one day meet his match.",
                type: "completionist",
                path: "completionist",
                backup: "",
                req: "",
                reqdesc: ""
            }
        }
    },
    9: {
        id: "blaze",
        plaintext: "Blaze",
        classcolor: "#ff5555",
        classtype: "Regular",
        styles: [
            "Damage",
            "Ranged",
        ],
        difficulty: 2,
        skins: {
            0: {
                name: "Blaze",
                desc: "The default skin for Blaze.",
                type: "default",
                path: "",
                backup: "",
                req: "",
                reqdesc: ""
            },
            1: {
                name: "Mango",
                desc: "Mango the Fire Monkey! Nobody can throw flaming coconuts better than Mango.",
                type: "onetime",
                path: "walls3_throwing_coconuts",
                backup: "",
                req: "",
                reqdesc: "Final kill 3 players with Immolating Burst in one game."
            },
            2: {
                name: "Proto",
                desc: "Machine designed to withstand extreme heat. Nothing can melt Proto's steel armor.",
                type: "onetime",
                path: "walls3_max_render_distance",
                backup: "",
                req: "",
                reqdesc: "Hit a player with a flaming arrow from 100 blocks away as Blaze."
            },
            3: {
                name: "Scorch",
                desc: "It's one thing to shoot fireballs, it's another thing to be a fireball-shooting fireball.",
                type: "onetime",
                path: "walls3_blaze_party",
                backup: "",
                req: "",
                reqdesc: "Have 6 blazes active at once in Deathmatch."
            },
            4: {
                name: "Chaze",
                desc: "Chaze actually spits fire.",
                type: "",
                path: "blaze_g_amount_healed",
                backup: "walls3_high_on_ores",
                req: "2000",
                reqdesc: "Heal 2,000 HP from Fossil Fuels."
            },
            5: {
                name: "Ghaze",
                desc: "Ghaze actually spits fire... his rap skills, however, are below average.",
                type: "onetime",
                path: "walls3_legendary_blaze",
                backup: "",
                req: "",
                reqdesc: "Reach 14 FK/A in a single game as Blaze."
            },
            6: {
                name: "Matcho",
                desc: "He's always angry, though nobody ever knows why. The general public are advised to keep their distance and look away.",
                type: "",
                path: "on_fire_final_kills",
                backup: "walls3_light_em_up",
                req: "10",
                reqdesc: "Final kill 10 players who are on fire."
            },
            7: {
                name: "Miquella",
                desc: "Acknowledged to be the 'Queen of Blazes', even by her enemies.",
                type: "",
                path: "blaze_b_blazes_spawned",
                backup: "walls3_blazecaller",
                req: "500",
                reqdesc: "Summon 500 blazes."
            },
            8: {
                name: "Blizz",
                desc: "Who said Blazes couldn't be cool?",
                type: "purchase",
                path: "blizz",
                backup: "",
                req: "5,000",
                reqdesc: ""
            },
            9: {
                name: "Molton",
                desc: "Risen from the magmatic insides of an active volcano. Be aware, Molton has only just started to heat up.",
                type: "pres3",
                path: "pres3",
                backup: "",
                req: "",
                reqdesc: ""
            },
            10: {
                name: "Fiery",
                desc: "Just as dangerous on the battlefield as he is in the kitchen!",
                type: "pres5",
                path: "pres5",
                backup: "",
                req: "",
                reqdesc: ""
            },
            11: {
                name: "Flaming Rider",
                desc: "Smells of burning rubber and scorched marshmallows.",
                type: "completionist",
                path: "completionist",
                backup: "",
                req: "",
                reqdesc: ""
            }
        }
    },
    10: {
        id: "enderman",
        plaintext: "Enderman",
        classcolor: "#aa00aa",
        classtype: "Regular",
        styles: [
            "Mobility",
            "Fighter",
        ],
        difficulty: 2,
        skins: {
            0: {
                name: "Enderman",
                desc: "The default skin for Enderman.",
                type: "default",
                path: "",
                backup: "",
                req: "",
                reqdesc: ""
            },
            1: {
                name: "Dash",
                desc: "It might look like Dash teleports around... in reality, he jogs from one place to another.",
                type: "onetime",
                path: "walls3_speed_run",
                backup: "",
                req: "",
                reqdesc: "As Enderman, attack every enemy wither in a Standard game within 2 minutes of the walls falling."
            },
            2: {
                name: "Seeker",
                desc: "Can track down enemies in the blink of an eye.",
                type: "onetime",
                path: "walls3_untouchable",
                backup: "",
                req: "",
                reqdesc: "As Enderman, melee 7 unique players in a row without taking damage."
            },
            3: {
                name: "Gamer",
                desc: "Portal-robot designed by scientists. Due to progress in artificial intelligence, Gamer became self-aware and escaped by teleporting himself into the worlds of Mega Walls.",
                type: "",
                path: "enderman_a_activations",
                backup: "walls3_surprise",
                req: "2500",
                reqdesc: "Teleport to players 2,500 times as Enderman."
            },
            4: {
                name: "Shadow",
                desc: "An expert in disguise who attacks from the shadows.",
                type: "",
                path: "enderman_final_kills_melee_behind",
                backup: "walls3_sneak_attack",
                req: "100",
                reqdesc: "Get 100 total FK/A with melee strikes from behind the victim as Enderman."
            },
            5: {
                name: "Hoops",
                desc: "An encounter with this cheerful dragon will leave you with a smile!",
                type: "onetime",
                path: "walls3_legendary_enderman",
                backup: "",
                req: "",
                reqdesc: "Reach 14 FK/A in a single game as Enderman."
            },
            6: {
                name: "Inno",
                desc: "Creator of the Enderman teleport. Regrets what he unleashed upon the world.",
                type: "onetime",
                path: "walls3_true_teleporter",
                backup: "",
                req: "",
                reqdesc: "Teleport to players 50 times in one game as Enderman."
            },
            7: {
                name: "Plexi",
                desc: "Attended the Mega Walls beta launch and has been one-tricking Enderman ever since.",
                type: "onetime",
                path: "walls3_end_to_end",
                backup: "",
                req: "",
                reqdesc: "As any class, get the first and last final kill of the game."
            },
            8: {
                name: "Jumper",
                desc: "Playful and mischievous creature. With Jumper around, you should always watch your back!",
                type: "purchase",
                path: "jumper",
                backup: "",
                req: "5,000",
                reqdesc: ""
            },
            9: {
                name: "Entity_303",
                desc: "This mysterious entity is said to be the 'New Herobrine'. He is skilled in the art of deception and is out to cast his wrath on the ones who have betrayed him.",
                type: "purchase",
                path: "entity_303",
                backup: "",
                req: "10,000",
                reqdesc: ""
            },
            10: {
                name: "Baron",
                desc: "Malay dragon and guardian of the End gates. Baron is the protector of all Endermen.",
                type: "pres3",
                path: "pres3",
                backup: "",
                req: "",
                reqdesc: ""
            },
            11: {
                name: "Follower",
                desc: "Eagerly awaits the return of his master, even after all these years.",
                type: "pres5",
                path: "pres5",
                backup: "",
                req: "",
                reqdesc: ""
            },
            12: {
                name: "Warden",
                desc: "The guardian of the Deep Dark has come to reap his revenge upon the pillagers of his city.",
                type: "completionist",
                path: "completionist",
                backup: "",
                req: "",
                reqdesc: ""
            }
        }
    },
    11: {
        id: "shaman",
        plaintext: "Shaman",
        classcolor: "#55ff55",
        classtype: "Regular",
        styles: [
            "Control",
            "Mobility",
        ],
        difficulty: 2,
        skins: {
            0: {
                name: "Shaman",
                desc: "The default skin for Shaman.",
                type: "default",
                path: "",
                backup: "",
                req: "",
                reqdesc: ""
            },
            1: {
                name: "Totem",
                desc: "Don't worry, it's just a sculpture! It's not actually alive... I hope.",
                type: "onetime",
                path: "walls3_whirlwind",
                backup: "",
                req: "",
                reqdesc: "Hit 6 players with one Tornado."
            },
            2: {
                name: "Doggo",
                desc: "Doggo's vocabulary is surprisingly extensive. Copious charm.",
                type: "",
                path: "shaman_c_activations",
                backup: "walls3_much_dogs",
                req: "500",
                reqdesc: "Summon 500 wolves as Shaman."
            },
            3: {
                name: "Brian the Disco Bear",
                desc: "Brian LOVES disco! If you need anyone to hum Stayin' Alive while you're clutching up, he's your pick.",
                type: "onetime",
                path: "walls3_stayin_alive",
                backup: "",
                req: "",
                reqdesc: "Assist in the game-ending final kill while holding a jukebox as Shaman."
            },
            4: {
                name: "Wolf",
                desc: "Things get weird when the hunter becomes the hunted.",
                type: "",
                path: "shaman_c_total_final_kills",
                backup: "walls3_revenge_of_the_wolves",
                req: "5",
                reqdesc: "Get 5 FK/A with Wolf Pack as Shaman."
            },
            5: {
                name: "Nikolaos",
                desc: "With the power of his tornado and twenty-five wolves, Nikolaos, the legendary hero, plays for the win.",
                type: "onetime",
                path: "walls3_legendary_shaman",
                backup: "",
                req: "",
                reqdesc: "Reach 14 FK/A in a single game as Shaman."
            },
            6: {
                name: "Fina",
                desc: "Traded her eyes for the ability to maximize her magical energy.",
                type: "onetime",
                path: "walls3_souls_bound",
                backup: "",
                req: "",
                reqdesc: "Final kill 3 players with Tornadoes in 20 seconds."
            },
            7: {
                name: "Avarion",
                desc: "Shunned by his peers, Avarion is an example of what happens when the elements fight back.",
                type: "onetime",
                path: "walls3_call_it_a_comeback",
                backup: "",
                req: "",
                reqdesc: "Kill a wither while yours is dead as Shaman."
            },
            8: {
                name: "Dauntless",
                desc: "Bring the storm.",
                type: "",
                path: "heroism_triggers_in_dm",
                backup: "walls3_spring_hero",
                req: "250",
                reqdesc: "Trigger Heroism 250 times in Deathmatch as Shaman."
            },
            9: {
                name: "Chu",
                desc: "This Arctic nomad possesses a wide range of excellent survival skills.",
                type: "purchase",
                path: "chu",
                backup: "",
                req: "5,000",
                reqdesc: ""
            },
            10: {
                name: "Wayne",
                desc: "Wolfmaster Wayne, a courageous leader, was raised by wolves himself.",
                type: "pres3",
                path: "pres3",
                backup: "",
                req: "",
                reqdesc: ""
            },
            11: {
                name: "Kalhuik",
                desc: "Creator of seasons, maintainer of balance. Without him there would be nothing but chaos.",
                type: "pres5",
                path: "pres5",
                backup: "",
                req: "",
                reqdesc: ""
            },
            12: {
                name: "Major",
                desc: "Having once stumbled upon a strange mask in a stranger place, what's left of Major now wields its power.",
                type: "completionist",
                path: "completionist",
                backup: "",
                req: "",
                reqdesc: ""
            }
        }
    },
    12: {
        id: "squid",
        plaintext: "Squid",
        classcolor: "#55ffff",
        classtype: "Regular",
        styles: [
            "Control",
            "Tank",
        ],
        difficulty: 2,
        skins: {
            0: {
                name: "Squid",
                desc: "The default skin for Squid.",
                type: "default",
                path: "",
                backup: "",
                req: "",
                reqdesc: ""
            },
            1: {
                name: "Guardian",
                desc: "Has never lost a staring contest.",
                type: "",
                path: "squid_defender_final_kills",
                backup: "walls3_you_shall_not_pass",
                req: "10",
                reqdesc: "Get 10 total defensive FK/A as Squid."
            },
            2: {
                name: "Doctor Squish",
                desc: "Doctor Bobby H. Squish has a questionable background. At least he knows how to heal himself.",
                type: "",
                path: "squid_self_healed",
                backup: "walls3_trust_me_im_a_doctor",
                req: "2500",
                reqdesc: "Heal yourself for 2,500 HP as Squid."
            },
            3: {
                name: "K`Tulu",
                desc: "Green sea monster. K'Tulu won't hesitate to swipe out enemies with destructive tentacle blows.",
                type: "onetime",
                path: "walls3_whirlpool",
                backup: "",
                req: "",
                reqdesc: "Cast a level 5 Squid Splash on at least 4 players at once."
            },
            4: {
                name: "Grumps",
                desc: "You can be sure that this short-tempered Squid will do anything to shut up his neighboring teams.",
                type: "onetime",
                path: "walls3_i_feel_sick",
                backup: "",
                req: "",
                reqdesc: "Activate Luck of the Sea at least 8 times, then drink at least 8 absorption potions throughout the game."
            },
            5: {
                name: "Sea Warrior",
                desc: "Aquatic paladin who will always stand his oceanic ground.",
                type: "onetime",
                path: "walls3_legendary_squid",
                backup: "",
                req: "",
                reqdesc: "Reach 14 FK/A in a single game as Squid."
            },
            6: {
                name: "Lava Kraken",
                desc: "Very few things among the seven seas are agreed to be more dangerous than the Kraken. One of those things, however, is the Lava Kraken.",
                type: "onetime",
                path: "walls3_fiery_tomb",
                backup: "",
                req: "",
                reqdesc: "Final kill a player who is on fire with Squid Splash."
            },
            7: {
                name: "Glow Squid",
                desc: "An exceedingly rare variant found only in the deepest, darkest depths of the ocean.",
                type: "",
                path: "inner_ink_blinds",
                backup: "walls3_everblind",
                req: "250",
                reqdesc: "Blind players 250 times using Inner Ink."
            },
            8: {
                name: "Sharky",
                desc: "Cute but brutal predator. Sharky is a swift swimmer with razor sharp teeth.",
                type: "purchase",
                path: "sharky",
                backup: "",
                req: "5,000",
                reqdesc: ""
            },
            9: {
                name: "Snails",
                desc: "Enemies turn into stone upon gazing at his face. No mortal soul has ever dared to defy Snails.",
                type: "pres3",
                path: "pres3",
                backup: "",
                req: "",
                reqdesc: ""
            },
            10: {
                name: "Mind Flayer",
                desc: "Believes all other life forms to be inferior. This realm will be his next conquest.",
                type: "pres5",
                path: "pres5",
                backup: "",
                req: "",
                reqdesc: ""
            },
            11: {
                name: "Davy Bones",
                desc: "Used to get shoved into lockers during his days at seawater school. Now, he roams the seas, searching for those who wronged him.",
                type: "completionist",
                path: "completionist",
                backup: "",
                req: "",
                reqdesc: ""
            }
        }
    },
    13: {
        id: "creeper",
        plaintext: "Creeper",
        classcolor: "#55ff55",
        classtype: "Regular",
        styles: [
            "Control",
            "Damage",
        ],
        difficulty: 3,
        skins: {
            0: {
                name: "Creeper",
                desc: "The default skin for Creeper.",
                type: "default",
                path: "",
                backup: "",
                req: "",
                reqdesc: ""
            },
            1: {
                name: "Johnny",
                desc: "Thinks he's a real Creeper. Nobody has the heart to tell little Johnny the truth.",
                type: "onetime",
                path: "walls3_peacekreeper",
                backup: "",
                req: "",
                reqdesc: "Win a game as Creeper without using Detonate."
            },
            2: {
                name: "Bomberdude",
                desc: "It's what's on the inside that counts. For Bomberdude that'd be TNT.",
                type: "onetime",
                path: "walls3_ready_set_boom",
                backup: "",
                req: "",
                reqdesc: "Obtain 128 TNT in one game from coal ore via TNT Mining."
            },
            3: {
                name: "Destructo",
                desc: "A robotic experiment gone wrong: Destructo blew up the testing facility and escaped.",
                type: "",
                path: "creeper_a_blocks_broken",
                backup: "walls3_mass_destruction",
                req: "3000",
                reqdesc: "Destroy 3,000 blocks with Detonate."
            },
            4: {
                name: "Kreeft",
                desc: "Creeper scientist Kreeft investigates the properties of water to help his race overcome their prime weakness.",
                type: "",
                path: "creeper_b_total_final_kills",
                backup: "walls3_remote_detonation",
                req: "5",
                reqdesc: "Get 5 total FK/A with Fission Heart."
            },
            5: {
                name: "Cricket",
                desc: "Cricket the Ninja Cyborg has sworn to protect his village from Creepers.",
                type: "onetime",
                path: "walls3_legendary_creeper",
                backup: "",
                req: "",
                reqdesc: "Reach 14 FK/A in a single game as Creeper."
            },
            6: {
                name: "Haze",
                desc: "Struck by lightning at a young age, he gained impossibly fast reflexes. Naturally, he put them to use by becoming a pro gamer.",
                type: "onetime",
                path: "walls3_collateral",
                backup: "",
                req: "",
                reqdesc: "Final kill two players with one Detonate."
            },
            7: {
                name: "Steampunk",
                desc: "Obsessed with developing the next generation of explosive technology.",
                type: "",
                path: "creeper_primed_tnt_kills",
                backup: "walls3_instaboom",
                req: "20",
                reqdesc: "Kill 20 players with Fission Heart primed TNT."
            },
            8: {
                name: "Rainbow Creeper",
                desc: "Some lands use Rainbow Creepers as fireworks. We just force 'em to play Mega Walls.",
                type: "purchase",
                path: "rainbow creeper",
                backup: "",
                req: "5,000",
                reqdesc: ""
            },
            9: {
                name: "Slith",
                desc: "Overlord Slith is the invisible force behind several thriving Creeper galaxies.",
                type: "pres3",
                path: "pres3",
                backup: "",
                req: "",
                reqdesc: ""
            },
            10: {
                name: "Carlos",
                desc: "Scared of fireworks, alarm clocks, explosions and cats.",
                type: "pres5",
                path: "pres5",
                backup: "",
                req: "",
                reqdesc: ""
            },
            11: {
                name: "Nuclear Fuze",
                desc: "What happened that night changed him for life... Approach him if you dare!",
                type: "completionist",
                path: "completionist",
                backup: "",
                req: "",
                reqdesc: ""
            }
        }
    },
    14: {
        id: "pirate",
        plaintext: "Pirate",
        classcolor: "#ffaa00",
        classtype: "Regular",
        styles: [
            "Fighter",
            "Damage",
        ],
        difficulty: 3,
        skins: {
            0: {
                name: "Pirate",
                desc: "The default skin for Pirate.",
                type: "default",
                path: "",
                backup: "",
                req: "",
                reqdesc: ""
            },
            1: {
                name: "Captain Bones",
                desc: "Most heartless pirate to have travelled the seven seas... literally.",
                type: "",
                path: "pirate_treasures_found",
                backup: "walls3_grave_robber",
                req: "100",
                reqdesc: "Loot 100 treasures from Treasure Hunter."
            },
            2: {
                name: "Jameson",
                desc: "Bombs away! Sky Captain Jameson surprises his enemies from above.",
                type: "onetime",
                path: "walls3_fire_in_the_hole",
                backup: "",
                req: "",
                reqdesc: "Hit a player with a Cannon Fire from at least 50 blocks away."
            },
            3: {
                name: "Guy",
                desc: "Gill 'Guy' Spencer was born on December 21 1998 in Colorado. He wears his mask to remain anonymous.",
                type: "onetime",
                path: "walls3_esc",
                backup: "",
                req: "",
                reqdesc: "Activate Sea Legs 10 times in a single Deathmatch."
            },
            4: {
                name: "Parrot Frank",
                desc: "Frank is not an actual parrot. We pay Frank to wear that costume.",
                type: "",
                path: "pirate_b_total_final_kills",
                backup: "walls3_death_from_above",
                req: "12",
                reqdesc: "Get 12 total FK/A with Angry Birds."
            },
            5: {
                name: "Fjodor",
                desc: "Barbaric Viking. Fjodor decorates his longship with screenshots of his fallen enemies.",
                type: "onetime",
                path: "walls3_legendary_pirate",
                backup: "",
                req: "",
                reqdesc: "Reach 14 FK/A in a single game as Pirate."
            },
            6: {
                name: "Killigrew",
                desc: "Lawyer by day, pirate by night. Very capable of defending herself, both in and out of court.",
                type: "onetime",
                path: "walls3_lady_luck",
                backup: "",
                req: "",
                reqdesc: "Loot 5 unique items from Treasure Hunter in a single game."
            },
            7: {
                name: "Axe",
                desc: "Born in the seven seas, and grew to conquer them.",
                type: "",
                path: "pirate_final_water_kills",
                backup: "walls3_burial_at_sea",
                req: "5",
                reqdesc: "Get 5 total final kills while in water."
            },
            8: {
                name: "Weaver",
                desc: "Arr matey! Weaver is out for yer coins!",
                type: "purchase",
                path: "weaver",
                backup: "",
                req: "5,000",
                reqdesc: "weaver"
            },
            9: {
                name: "Nero",
                desc: "Weaves twine into his beard and lights it on fire to look more demonic. One day this ritual ensued a chain reaction of fires, causing a whole city to go down in flames.",
                type: "pres3",
                path: "pres3",
                backup: "",
                req: "",
                reqdesc: ""
            },
            10: {
                name: "Slothpixel",
                desc: "Slothpixel and his fleet rule over the seven seas. Wrong him and he will get you... eventually.",
                type: "pres5",
                path: "pres5",
                backup: "",
                req: "",
                reqdesc: ""
            },
            11: {
                name: "Whitebeard",
                desc: "Formerly known as Redbeard. Every life he sends to a watery grave turns one of his hairs white.",
                type: "completionist",
                path: "completionist",
                backup: "",
                req: "",
                reqdesc: ""
            }
        }
    },
    15: {
        id: "sheep",
        plaintext: "Sheep",
        classcolor: "#ffffff",
        classtype: "Regular",
        styles: [
            "Control",
            "Support",
        ],
        difficulty: 3,
        skins: {
            0: {
                name: "Sheep",
                desc: "The default skin for Sheep.",
                type: "default",
                path: "",
                backup: "",
                req: "",
                reqdesc: ""
            },
            1: {
                name: "Pablo",
                desc: "Can paint with all the colors of the wind.",
                type: "onetime",
                path: "walls3_think_twice",
                backup: "",
                req: "",
                reqdesc: "Trigger Thick Coat while Dyed Disguise is active."
            },
            2: {
                name: "Mutton",
                desc: "Won an undisclosed amount of money and now lives in a skyscraper far from his woolly brethren. His shades are worth more than your Wither.",
                type: "onetime",
                path: "walls3_magical_party",
                backup: "",
                req: "",
                reqdesc: "Have allies pick up Magical Wool 20 times in one game."
            },
            3: {
                name: "Lord Lambchop",
                desc: "What happens when a Sheep is struck by lightning? He gains the powers of the Arcane, of course!",
                type: "",
                path: "perfect_disguises",
                backup: "walls3_perfect_disguise",
                req: "100",
                reqdesc: "Have Dyed Disguise expire without being attacked 100 times."
            },
            4: {
                name: "Llama",
                desc: "Got a team that needs carrying? Llamas can carry so much as 200 points for up to 12 hours per day!",
                type: "",
                path: "sheep_a_amount_healed",
                backup: "walls3_woolly_respite",
                req: "250",
                reqdesc: "Heal 250 HP to your teammates using Wool War."
            },
            5: {
                name: "Ramsay",
                desc: "so smol and precious.",
                type: "onetime",
                path: "walls3_teamkill",
                backup: "",
                req: "",
                reqdesc: "Final kill a player while Dyed Disguise disguises you as a member of their team."
            },
            6: {
                name: "Dolly",
                desc: "Only those who survive the long winter may bear witness to the first rays of spring.",
                type: "onetime",
                path: "walls3_legendary_sheep",
                backup: "",
                req: "",
                reqdesc: "Reach 14 FK/A in a single game as Sheep."
            },
            7: {
                name: "Lambert",
                desc: "Gray brings him happiness!",
                type: "purchase",
                path: "lambert",
                backup: "",
                req: "5,000",
                reqdesc: ""
            },
            8: {
                name: "Baandit",
                desc: "Truly a wolf in sheep's clothing.",
                type: "pres3",
                path: "pres3",
                backup: "",
                req: "",
                reqdesc: ""
            },
            9: {
                name: "Sorceress",
                desc: "Of those who have been unfortunate enough to see her in the flesh, few have lived to tell the tale.",
                type: "pres5",
                path: "pres5",
                backup: "",
                req: "",
                reqdesc: ""
            },
            10: {
                name: "Sheep in Wolf`s Clothing",
                desc: "Inspired by how Werewolves were able to hit so hard and climb so high, he decided to become one of them.",
                type: "completionist",
                path: "completionist",
                backup: "",
                req: "",
                reqdesc: ""
            }
        }
    },
    16: {
        id: "skeleton",
        plaintext: "Skeleton",
        classcolor: "#55ffff",
        classtype: "Regular",
        styles: [
            "Ranged",
            "Control",
        ],
        difficulty: 3,
        skins: {
            0: {
                name: "Skeleton",
                desc: "The default skin for Skeleton.",
                type: "default",
                path: "",
                backup: "",
                req: "",
                reqdesc: ""
            },
            1: {
                name: "Jazz Hands",
                desc: "Worry about enemies first. Let's play some tunes first.",
                type: "onetime",
                path: "walls3_moodsetter",
                backup: "",
                req: "",
                reqdesc: "Obtain any music disc by killing a Creeper as Skeleton, then play it in a jukebox."
            },
            2: {
                name: "Space Armor",
                desc: "Not really effective... at least it looks cool.",
                type: "onetime",
                path: "walls3_bow_down",
                backup: "",
                req: "",
                reqdesc: "Final kill 7 players in one game without using your bow as Skeleton."
            },
            3: {
                name: "Trick",
                desc: "No need to chase cars; Trick catches his kills from a distance.",
                type: "",
                path: "skeleton_final_kills_ranged_30",
                backup: "walls3_marksman",
                req: "25",
                reqdesc: "Final kill 25 players from 30 blocks away."
            },
            4: {
                name: "Spookster",
                desc: "Quite some beauty treatments were needed to get those glowing bones",
                type: "",
                path: "skeleton_diamond_ore_broken",
                backup: "walls3_skeletons_best_friend",
                req: "50",
                reqdesc: "Mine 50 diamond ore as Skeleton."
            },
            5: {
                name: "Red Ted",
                desc: "An outcast but legendary archer.",
                type: "onetime",
                path: "walls3_legendary_skeleton",
                backup: "",
                req: "",
                reqdesc: "Reach 14 FK/A in a single game as Skeleton."
            },
            6: {
                name: "Symphony",
                desc: "Dances to the beat of his own drum, bobbing and weaving through the battlefield with the grace of a ballet dancer.",
                type: "onetime",
                path: "walls3_ranged_training",
                backup: "",
                req: "",
                reqdesc: "Win a game as Skeleton while only using your bow to deal damage."
            },
            7: {
                name: "dave",
                desc: "Nobody really knows what happened to dave. He doesn't seem to mind though.",
                type: "onetime",
                path: "walls3_explosive_ending",
                backup: "",
                req: "",
                reqdesc: "Final kill 3 players in one game using Explosive Arrow."
            },
            8: {
                name: "Mr. Wither",
                desc: "All skeletons wear suits, but not all skeletons use bows!",
                type: "purchase",
                path: "mr. wither",
                backup: "",
                req: "5,000",
                reqdesc: ""
            },
            9: {
                name: "Knuckles",
                desc: "Legend has it that Knuckles has been playing since pre-alpha.",
                type: "pres3",
                path: "pres3",
                backup: "",
                req: "",
                reqdesc: ""
            },
            10: {
                name: "Rib",
                desc: "Wants to ask his crush out, but doesn't have the guts.",
                type: "pres5",
                path: "pres5",
                backup: "",
                req: "",
                reqdesc: ""
            },
            11: {
                name: "Skully",
                desc: "Something something you're gonna have a bad time...",
                type: "completionist",
                path: "completionist",
                backup: "",
                req: "",
                reqdesc: ""
            }
        }
    },
    17: {
        id: "spider",
        plaintext: "Spider",
        classcolor: "#aa00aa",
        classtype: "Regular",
        styles: [
            "Mobility",
            "Rusher",
        ],
        difficulty: 3,
        skins: {
            0: {
                name: "Spider",
                desc: "The default skin for Spider.",
                type: "default",
                path: "",
                backup: "",
                req: "",
                reqdesc: ""
            },
            1: {
                name: "Lethal",
                desc: "A warrior of myth who knows no fear.",
                type: "onetime",
                path: "walls3_skitterama",
                backup: "",
                req: "",
                reqdesc: "Trigger Skitter 4 times in 2 minutes."
            },
            2: {
                name: "Vinny",
                desc: "Vinny, short for Vincenzo, was named after a famous Italian artist... or was it a map builder? I don't remember.",
                type: "onetime",
                path: "walls3_ninja_7s",
                backup: "",
                req: "",
                reqdesc: "As Spider, craft an iron sword and final kill 7 players with it."
            },
            3: {
                name: "Flutter",
                desc: "This devilish winged creature enjoys throwing rocks at unsuspecting victims.",
                type: "",
                path: "spider_meters_fallen",
                backup: "walls3_geronimo",
                req: "25000",
                reqdesc: "Fall 25,000 blocks as Spider."
            },
            4: {
                name: "Frog",
                desc: "For some frogs, life's a breeze. For this frog, however, life is tough. It's not easy being misclassified as Spider.",
                type: "onetime",
                path: "walls3_feels_bad",
                backup: "",
                req: "",
                reqdesc: "Final kill 2 players with one Leap."
            },
            5: {
                name: "Shade",
                desc: "Look out below!",
                type: "onetime",
                path: "walls3_legendary_spider",
                backup: "",
                req: "",
                reqdesc: "Reach 14 FK/A in a single game as Spider."
            },
            6: {
                name: "spoderman",
                desc: "Somehow escaped from the Smash Heroes lobby.",
                type: "",
                path: "spider_b_venom_strike_poison_damage",
                backup: "walls3_i_dont_feel_so_good",
                req: "600",
                reqdesc: "Deal 600 poison damage from Venom Strike."
            },
            7: {
                name: "Earl",
                desc: "Earl actually accompanied mankind on their first ever voyage into outer space. This was only because the shuttle's cleaning staff didn't spot him, but that doesn't make it any less impressive.",
                type: "",
                path: "spider_a_kills",
                backup: "walls3_one_giant_leap",
                req: "250",
                reqdesc: "Kill 250 players with Leap."
            },
            8: {
                name: "Cave Spider",
                desc: "Twice as deadly as a regular Spider.",
                type: "purchase",
                path: "cave spider",
                backup: "",
                req: "5,000",
                reqdesc: ""
            },
            9: {
                name: "Buggs",
                desc: "Floats like a butterfly, stings like a bee, and leaps like a Spider.",
                type: "pres3",
                path: "pres3",
                backup: "",
                req: "",
                reqdesc: ""
            },
            10: {
                name: "Symbiote",
                desc: "By the time you notice him, it'll already be too late.",
                type: "pres5",
                path: "pres5",
                backup: "",
                req: "",
                reqdesc: ""
            },
            11: {
                name: "Massacre",
                desc: "So primal in his brutality is Massacre that he oftentimes entirely forgets he is capable of leaping.",
                type: "completionist",
                path: "completionist",
                backup: "",
                req: "",
                reqdesc: ""
            }
        }
    },
    18: {
        id: "werewolf",
        plaintext: "Werewolf",
        classcolor: "#22aa22",
        classtype: "Mythic",
        styles: [
            "Tank",
            "Mobility",
        ],
        difficulty: 2,
        skins: {
            0: {
                name: "Werewolf",
                desc: "The default skin for Werewolf.",
                type: "default",
                path: "",
                backup: "",
                req: "",
                reqdesc: ""
            },
            1: {
                name: "Crunch",
                desc: "Always angry, very angry. You definitely don't want to try to steal one of Crunch's kills.",
                type: "",
                path: "werewolf_final_kills_below_10_hp",
                backup: "walls3_wolf_smash",
                req: "15",
                reqdesc: "Get 15 total FK's while under 10 HP as Werewolf."
            },
            2: {
                name: "Bloo",
                desc: "Lovable creature named after its blue-stained fur. Warning: may hug you to death.",
                type: "",
                path: "werewolf_steaks_eaten",
                backup: "walls3_time_to_diet",
                req: "750",
                reqdesc: "Eat 750 steaks as Werewolf."
            },
            3: {
                name: "Duster",
                desc: "Speeds away, leaving nothing but a trail of dust.",
                type: "",
                path: "werewolf_meters_walked_speed",
                backup: "walls3_hunting_season",
                req: "50000",
                reqdesc: "Run 50,000 blocks with the Speed effect as Werewolf."
            },
            4: {
                name: "Jake",
                desc: "Many have heard tales of the Abominable Snowman. That'd be Jake's second cousin.",
                type: "onetime",
                path: "walls3_time_to_feast",
                backup: "",
                req: "",
                reqdesc: "Receive 40 steaks from Carnivore in a single game."
            },
            5: {
                name: "Cruze",
                desc: "First-born Werewolf and original father of wolves. With his curious mind and animalistic instinct, Cruze is always off exploring the area to hunt.",
                type: "onetime",
                path: "walls3_legendary_werewolf",
                backup: "",
                req: "",
                reqdesc: "Reach 14 FK/A in a single game as Werewolf."
            },
            6: {
                name: "Lupus",
                desc: "Salaryman by day, Werewolf by night. He makes a killing.",
                type: "",
                path: "werewolf_a_enemies_hit",
                backup: "walls3_howling_moon",
                req: "1000",
                reqdesc: "Damage 1,000 players with Lycanthropy."
            },
            7: {
                name: "Savage",
                desc: "Once the full moon rises, he is uncontrollable. Unless you have cheese. He really likes cheese. He also doesn't eat meat. Not a half bad guy.",
                type: "onetime",
                path: "walls3_vegetarian",
                backup: "",
                req: "",
                reqdesc: "Play a game as Werewolf without eating any steak."
            },
            8: {
                name: "Pupper",
                desc: "Sometimes you'd almost forget that this cute wolf pupper will one day grow up to be a beast.",
                type: "purchase",
                path: "pupper",
                backup: "",
                req: "5,000",
                reqdesc: ""
            },
            9: {
                name: "Vito",
                desc: "Loyal but ruthless. Playing as 'Don the Lion'? Now there's an offer you can't refuse.",
                type: "pres3",
                path: "pres3",
                backup: "",
                req: "",
                reqdesc: ""
            },
            10: {
                name: "Warren",
                desc: "Loves picnics, fine wine, and getting his teeth into a good read.",
                type: "pres5",
                path: "pres5",
                backup: "",
                req: "",
                reqdesc: ""
            },
            11: {
                name: "Wolf in Sheep`s Clothing",
                desc: "Inspired by how Sheep were able to fool even the most grizzled of veterans, he decided to become one of them.",
                type: "completionist",
                path: "completionist",
                backup: "",
                req: "",
                reqdesc: ""
            }
        }
    },
    19: {
        id: "angel",
        plaintext: "Angel",
        classcolor: "#ffaa00",
        classtype: "Mythic",
        styles: [
            "Fighter",
            "Support",
        ],
        difficulty: 3,
        skins: {
            0: {
                name: "Angel",
                desc: "The default skin for Angel.",
                type: "default",
                path: "",
                backup: "",
                req: "",
                reqdesc: ""
            },
            1: {
                name: "Athena",
                desc: "Will your final moments truly be your final moments? That is for her to decide.",
                type: "onetime",
                path: "walls3_the_hand_that_feeds",
                backup: "",
                req: "",
                reqdesc: "Delay two teammates' deaths with a single cast of Divine Intervention."
            },
            2: {
                name: "Goddess",
                desc: "Renowned protector of the weak and healer of the sick.",
                type: "",
                path: "angel_divine_interventions",
                backup: "walls3_rewriting_fate",
                req: "250",
                reqdesc: "Delay 250 teammates' deaths with Divine Intervention."
            },
            3: {
                name: "Chad",
                desc: "It takes a lot of strength to choose kindness.",
                type: "onetime",
                path: "walls3_guardian_angel",
                backup: "",
                req: "",
                reqdesc: "Give a teammate your Halo before the walls fall, and win the game with both of you alive and them holding your Halo."
            },
            4: {
                name: "Eyeless",
                desc: "Justice is indeed blind.",
                type: "onetime",
                path: "walls3_unwavering",
                backup: "",
                req: "",
                reqdesc: "Heal 200 HP to yourself and teammates from Generosity in a single game."
            },
            5: {
                name: "Puck",
                desc: "Though mischievous and fun-loving in nature, he can always be counted upon in times of need.",
                type: "onetime",
                path: "walls3_delaying_the_inevitable",
                backup: "",
                req: "",
                reqdesc: "Delay the same teammate's death three times in one game."
            },
            6: {
                name: "Justice",
                desc: "While karma comes around naturally, sometimes justice starts with a nudge.",
                type: "onetime",
                path: "walls3_legendary_angel",
                backup: "",
                req: "",
                reqdesc: "Reach 14 FK/A in a single game as Angel."
            },
            7: {
                name: "Weepy",
                desc: "Probably best not to look away.",
                type: "purchase",
                path: "weepy",
                backup: "",
                req: "5,000",
                reqdesc: ""
            },
            8: {
                name: "Angel of Death",
                desc: "Powered by years of sitting in the Skywars lobby receiving souls as sacrifice, it was finally able to ascend to its true form.",
                type: "pres3",
                path: "pres3",
                backup: "",
                req: "",
                reqdesc: ""
            },
            9: {
                name: "Moon",
                desc: "A silent observer in the night sky, yearning to take part in the battles unfolding below.",
                type: "pres5",
                path: "pres5",
                backup: "",
                req: "",
                reqdesc: ""
            },
            10: {
                name: "Shining Judgement",
                desc: "Said to reside within the brief interstice between life and death.",
                type: "completionist",
                path: "completionist",
                backup: "",
                req: "",
                reqdesc: ""
            }
        }
    },
    20: {
        id: "assassin",
        plaintext: "Assassin",
        classcolor: "#aa0000",
        classtype: "Mythic",
        styles: [
            "Fighter",
            "Mobility",
        ],
        difficulty: 3,
        skins: {
            0: {
                name: "Assassin",
                desc: "The default skin for Assassin.",
                type: "default",
                path: "",
                backup: "",
                req: "",
                reqdesc: ""
            },
            1: {
                name: "Hitguy",
                desc: "Absolutely top secret credentials.",
                type: "",
                path: "assassin_strikes_from_cloak",
                backup: "walls3_dont_blink",
                req: "1200",
                reqdesc: "Attack 1200 players while Shadow Cloak is active."
            },
            2: {
                name: "Torny",
                desc: "Said to have been roaming kids' nightmares since the dawn of time.",
                type: "",
                path: "master_alechmy_hearts",
                backup: "walls3_alchemy_100",
                req: "1000",
                reqdesc: "Heal 1000 hearts from Master Alchemist"
            },
            3: {
                name: "Connor",
                desc: "One knight gone rogue!",
                type: "onetime",
                path: "walls3_thanks_connor",
                backup: "",
                req: "",
                reqdesc: "Catch 30 arrows in one game."
            },
            4: {
                name: "Blu",
                desc: "Legends say this wraith was disfigured by looking at the sky.",
                type: "onetime",
                path: "walls3_morra",
                backup: "",
                req: "",
                reqdesc: "Shadow Step a distance of exactly 20 blocks."
            },
            5: {
                name: "Okamoto",
                desc: "Trained for millenia to restore peace from the shadows.",
                type: "onetime",
                path: "walls3_legendary_assassin",
                backup: "",
                req: "",
                reqdesc: "Reach 14 FK/A in a single game as Assassin."
            },
            6: {
                name: "Shady",
                desc: "A proficient killer who never works for free. Capable of killing people before they even sense him nearby.",
                type: "onetime",
                path: "walls3_contract_killer",
                backup: "",
                req: "",
                reqdesc: "Final kill players of at least 5 different classes in one game."
            },
            7: {
                name: "Baba Yaga",
                desc: "Don't you dare hurt his dog!",
                type: "onetime",
                path: "walls3_kingmaker",
                backup: "",
                req: "",
                reqdesc: "Kill two withers in one game."
            },
            8: {
                name: "Abyss",
                desc: "Being stranded between worlds is enough to drive anyone crazy.",
                type: "purchase",
                path: "abyss",
                backup: "",
                req: "5,000",
                reqdesc: ""
            },
            9: {
                name: "Inner Monster",
                desc: "It only takes one bad day to forever put on a mask.",
                type: "pres3",
                path: "pres3",
                backup: "",
                req: "",
                reqdesc: ""
            },
            10: {
                name: "The Scream",
                desc: "While many Assassins prefer to move in silence, The Scream likes to let his prey know that he knows exactly where they're hiding.",
                type: "pres5",
                path: "pres5",
                backup: "",
                req: "",
                reqdesc: ""
            },
            11: {
                name: "Creed",
                desc: "Treasure every moment, for it is fleeting, and you never know when Creed will strike.",
                type: "completionist",
                path: "completionist",
                backup: "",
                req: "",
                reqdesc: ""
            }
        }
    },
    21: {
        id: "automaton",
        plaintext: "Automaton",
        classcolor: "#ffff55",
        classtype: "Mythic",
        styles: [
            "Tank",
            "Fighter",
        ],
        difficulty: 3,
        skins: {
            0: {
                name: "Automaton",
                desc: "The default skin for Automaton.",
                type: "default",
                path: "",
                backup: "",
                req: "",
                reqdesc: ""
            },
            1: {
                name: "Atomic",
                desc: "A great man during his life, mechanized beyond the grave.",
                type: "onetime",
                path: "walls3_emp",
                backup: "",
                req: "",
                reqdesc: "Cast an EMP pulse on 6 players at once."
            },
            2: {
                name: "Fender",
                desc: "Literally has a door into the future on its body.",
                type: "onetime",
                path: "walls3_into_the_future",
                backup: "",
                req: "",
                reqdesc: "Kill a wither with your Sharpness I diamond leggings as Automaton."
            },
            3: {
                name: "Vacuum",
                desc: "Is this you: wake up at 11AM from hearing VRRRRRRRRRRHH, play games all day.",
                type: "",
                path: "automaton_energy_syphoned",
                backup: "walls3_terminated_script",
                req: "3000",
                reqdesc: "Siphon 3000 energy from enemies as Automaton."
            },
            4: {
                name: "Failed Experiment",
                desc: "The faulty result of humanity trying to serialize massive robots.",
                type: "onetime",
                path: "walls3_failed_experiment",
                backup: "",
                req: "",
                reqdesc: "Cast EMP on two targets with 0 energy in one Deathmatch."
            },
            5: {
                name: "Crank",
                desc: "Machine turned cyborg, fighting from a power suit.",
                type: "onetime",
                path: "walls3_legendary_automaton",
                backup: "",
                req: "",
                reqdesc: "Reach 14 FK/A in a single game as Automaton."
            },
            6: {
                name: "CCDA-3301",
                desc: "A near-incomprehensible construct once unearthed by an ill-fated civilization. Attempting to solve its puzzle led them to an unfortunate end.",
                type: "onetime",
                path: "walls3_configuration",
                backup: "",
                req: "",
                reqdesc: "Finish a game having final killed exactly 3 players from one team, 2 from another, and 1 from the last."
            },
            7: {
                name: "Soldier",
                desc: "Few are known to exist, but they were engineered with an express purpose. Just one alone is enough to take on most armies.",
                type: "onetime",
                path: "walls3_current_objective_survive",
                backup: "",
                req: "",
                reqdesc: "Win a game as Automaton after starting Deathmatch as the team with the least amount of players remaining."
            },
            8: {
                name: "TERMIN8R",
                desc: "Programmed to wipe out enemies at all costs - even if that means a little killstealing here and there.",
                type: "purchase",
                path: "termin8r",
                backup: "",
                req: "5,000",
                reqdesc: ""
            },
            9: {
                name: "Orange",
                desc: "Proof that one tiny bot can do great things.",
                type: "pres3",
                path: "pres3",
                backup: "",
                req: "",
                reqdesc: ""
            },
            10: {
                name: "Al",
                desc: "Possesses the cumulative knowledge of all mankind as a result of once plugging a USB into his belly button.",
                type: "pres5",
                path: "pres5",
                backup: "",
                req: "",
                reqdesc: ""
            },
            11: {
                name: "Unit-13",
                desc: "If you're going to be making your last stand, this is a pretty impressive mech to be doing it in.",
                type: "completionist",
                path: "completionist",
                backup: "",
                req: "",
                reqdesc: ""
            }
        }
    },
    22: {
        id: "moleman",
        plaintext: "Moleman",
        classcolor: "#ffff55",
        classtype: "Mythic",
        styles: [
            "Damage",
            "Mobility",
        ],
        difficulty: 3,
        skins: {
            0: {
                name: "Moleman",
                desc: "The default skin for Moleman.",
                type: "default",
                path: "",
                backup: "",
                req: "",
                reqdesc: ""
            },
            1: {
                name: "Truck",
                desc: "Tough and hard-working. Truck is here to get stuff done.",
                type: "onetime",
                path: "walls3_gotcha",
                backup: "",
                req: "",
                reqdesc: "Final kill two players with one Dig."
            },
            2: {
                name: "Mineman Tyler",
                desc: "Some say he never stops digging...",
                type: "onetime",
                path: "walls3_speedy_mineman",
                backup: "",
                req: "",
                reqdesc: "Have Shortcut active for 5 minutes nonstop during Deathmatch."
            },
            3: {
                name: "Jolly",
                desc: "This happy creature speeds, jumps, digs, and goofs around.",
                type: "onetime",
                path: "walls3_coming_through",
                backup: "",
                req: "",
                reqdesc: "Hit 5 players with one Dig during Deathmatch."
            },
            4: {
                name: "Brick",
                desc: "Can you build a wall to defend your base? Yes you can!",
                type: "",
                path: "moleman_blocks_placed_preparation",
                backup: "walls3_constructor",
                req: "15000",
                reqdesc: "Place 15,000 blocks during the preparation period as Moleman."
            },
            5: {
                name: "Graen",
                desc: "Dwarven warrior. Lives underground and is the arm-wrestling champion of all two-legged creatures.",
                type: "onetime",
                path: "walls3_legendary_moleman",
                backup: "",
                req: "",
                reqdesc: "Reach 14 FK/A in a single game as Moleman."
            },
            6: {
                name: "Capybara",
                desc: "Fun fact: the Capybara is the world's largest living rodent.",
                type: "",
                path: "moleman_c_activations",
                backup: "walls3_nom_nom",
                req: "1000",
                reqdesc: "Obtain 1,000 Junk Items as Moleman."
            },
            7: {
                name: "Mole-rat",
                desc: "Seldom seen above ground. Thank goodness.",
                type: "onetime",
                path: "walls3_sixty_feet_under",
                backup: "",
                req: "",
                reqdesc: "Win a game as Moleman without triggering Shortcut once."
            },
            8: {
                name: "Rat",
                desc: "2020 is the Year of the Rat!",
                type: "",
                path: "moleman_junk_items_eaten",
                backup: "walls3_heavy_eater",
                req: "2000",
                reqdesc: "Eat 2,000 Junk Items as Moleman."
            },
            9: {
                name: "Beaver",
                desc: "Did you know? Beavers' large front teeth never stop growing.",
                type: "purchase",
                path: "beaver",
                backup: "",
                req: "5,000",
                reqdesc: ""
            },
            10: {
                name: "General Marcus",
                desc: "Grand Mole General Marcus. Lead his troops to victory in the bloody Battle of El Whackamole.",
                type: "pres3",
                path: "pres3",
                backup: "",
                req: "",
                reqdesc: ""
            },
            11: {
                name: "Matty",
                desc: "Voted best-dressed and most likely to accidentally spleef his teammates seven years in a row.",
                type: "pres5",
                path: "pres5",
                backup: "",
                req: "",
                reqdesc: ""
            },
            12: {
                name: "Biggie",
                desc: "Put your ear to the ground. Feel the vibrations? Hear the sweet, sweet tunes? That's Biggie, and he's heading straight for ya!",
                type: "completionist",
                path: "completionist",
                backup: "",
                req: "",
                reqdesc: ""
            }
        }
    },
    23: {
        id: "phoenix",
        plaintext: "Phoenix",
        classcolor: "#ff5555",
        classtype: "Mythic",
        styles: [
            "Support",
            "Ranged",
        ],
        difficulty: 3,
        skins: {
            0: {
                name: "Phoenix",
                desc: "The default skin for Phoenix.",
                type: "default",
                path: "",
                backup: "",
                req: "",
                reqdesc: ""
            },
            1: {
                name: "Sailor Sid",
                desc: "Oh boy, oh boy, oh boy... He's a bit clumsy and short-tempered, but Sailor Sid definitely has a big heart.",
                type: "onetime",
                path: "walls3_whats_the_big_idea",
                backup: "",
                req: "",
                reqdesc: "As Phoenix, throw a Regeneration III potion at an enemy, and final kill them while they still have the effect."
            },
            2: {
                name: "Owl",
                desc: "Did you know? A group of owls is called a parliament, but a group of fully maxed Owl-skin Phoenixes is called an OP party.",
                type: "",
                path: "phoenix_allies_healed",
                backup: "walls3_nights_rest",
                req: "1000",
                reqdesc: "Heal allies for 1,000 total HP as Phoenix."
            },
            3: {
                name: "Ember",
                desc: "The flame on Ember's tail indicates its kill count. If it's high, the flame burns brightly.",
                type: "onetime",
                path: "walls3_ashes_to_bashes",
                backup: "",
                req: "",
                reqdesc: "Win a game as Phoenix without resurrecting."
            },
            4: {
                name: "Fringe",
                desc: "Vale Tudo specialist. Seeing Fringe fight is like watching a deadly modern dance performance.",
                type: "onetime",
                path: "walls3_cruising_flames",
                backup: "",
                req: "",
                reqdesc: "Cast Sun Ray on 5 allies at once."
            },
            5: {
                name: "Falcon X",
                desc: "Some say he has sailed the entire world.",
                type: "onetime",
                path: "walls3_legendary_phoenix",
                backup: "",
                req: "",
                reqdesc: "Reach 14 FK/A in a single game as Phoenix."
            },
            6: {
                name: "Fae",
                desc: "Having lived a million lives and defied a million deaths, she is the pinnacle of rebirth.",
                type: "onetime",
                path: "walls3_reborn",
                backup: "",
                req: "",
                reqdesc: "Final kill a player within 10 seconds of resurrecting."
            },
            7: {
                name: "Hotshot",
                desc: "Big ego, fiery temper. The worst part? Everything he says, he backs it up on the battlefield.",
                type: "onetime",
                path: "walls3_simmer_down",
                backup: "",
                req: "",
                reqdesc: "As Phoenix, final kill the player who currently has the most FK/A."
            },
            8: {
                name: "Baby Chick",
                desc: "Tweet, tweet!",
                type: "purchase",
                path: "baby chick",
                backup: "",
                req: "5,000",
                reqdesc: ""
            },
            9: {
                name: "Dukes",
                desc: "Although born and raised in Dragonkeep, Dukes was banished from his home for toxic behavior.",
                type: "pres3",
                path: "pres3",
                backup: "",
                req: "",
                reqdesc: ""
            },
            10: {
                name: "Terry",
                desc: "Can't decide which of his five favorite dinosaurs is his ultimate favorite, so he has a onesie for each of them.",
                type: "pres5",
                path: "pres5",
                backup: "",
                req: "",
                reqdesc: ""
            },
            11: {
                name: "Everfyre",
                desc: "Goddess of the sun, her flames burn the wicked and heal the righteous.",
                type: "completionist",
                path: "completionist",
                backup: "",
                req: "",
                reqdesc: ""
            }
        }
    },
    24: {
        id: "dragon",
        plaintext: "Dragon",
        classcolor: "#ff5555",
        classtype: "Mythic",
        styles: [
            "Damage",
            "Ranged",
        ],
        difficulty: 4,
        skins: {
            0: {
                name: "Dragon",
                desc: "The default skin for Dragon.",
                type: "default",
                path: "",
                backup: "",
                req: "",
                reqdesc: ""
            },
            1: {
                name: "Frightful",
                desc: "A tiny dragon who loves to hide inside of pumpkins and startle passersby.",
                type: "onetime",
                path: "walls3_frightful_flames",
                backup: "",
                req: "",
                reqdesc: "Kill a player who is on fire while you are wearing a pumpkin."
            },
            2: {
                name: "Jade",
                desc: "While she can't exactly breathe fire, she has a fiery temper.",
                type: "onetime",
                path: "walls3_dragonborn",
                backup: "",
                req: "",
                reqdesc: "Set 15 unique players on fire in a single game."
            },
            3: {
                name: "Greg",
                desc: "A well-dressed fellow from lands afar, eager to explore that which shaped the past.",
                type: "onetime",
                path: "walls3_unbridled_riches",
                backup: "",
                req: "",
                reqdesc: "Have 15 Dwarven Gold in your inventory at once."
            },
            4: {
                name: "Fury",
                desc: "Few believe she exists, and even fewer have ever seen her. If you should ever be unlucky enough to come face-to-face with her on a winter's evening, run.",
                type: "",
                path: "final_kills_with_fire",
                backup: "walls3_ashes_to_ashes",
                req: "5",
                reqdesc: "Final kill 5 players with fire."
            },
            5: {
                name: "Hydragon",
                desc: "Devoured his brethren in an attempt to harness their power, only to be driven mad by guilt.",
                type: "onetime",
                path: "walls3_dragons_eye",
                backup: "",
                req: "",
                reqdesc: "Land 4 Hellfire shots in a row without missing a shot."
            },
            6: {
                name: "Pip",
                desc: "A domesticated dragon, perfect for cutting down on heating costs.",
                type: "onetime",
                path: "walls3_legendary_dragon",
                backup: "",
                req: "",
                reqdesc: "Reach 14 FK/A in a single game as Dragon."
            },
            7: {
                name: "Ender Dragon",
                desc: "Will do whatever it takes to protect her habitat.",
                type: "purchase",
                path: "ender dragon",
                backup: "",
                req: "5,000",
                reqdesc: ""
            },
            8: {
                name: "The Terrible",
                desc: "Taking over the kingdom and driving out its inhabitants, he now has more gold than he could ever need.",
                type: "pres3",
                path: "pres3",
                backup: "",
                req: "",
                reqdesc: ""
            },
            9: {
                name: "Hollow",
                desc: "Mankind thought they had finally triumphed only for him to rise again, even stronger.",
                type: "pres5",
                path: "pres5",
                backup: "",
                req: "",
                reqdesc: ""
            },
            10: {
                name: "Dragon Slayer",
                desc: "Cursed to never get a good night's sleep, he took up Mega Walls as a pastime.",
                type: "completionist",
                path: "completionist",
                backup: "",
                req: "",
                reqdesc: ""
            }
        }
    },
    25: {
        id: "renegade",
        plaintext: "Renegade",
        classcolor: "#ffaa00",
        classtype: "Mythic",
        styles: [
            "Mobility",
            "Ranged",
        ],
        difficulty: 4,
        skins: {
            0: {
                name: "Renegade",
                desc: "The default skin for Renegade.",
                type: "default",
                path: "",
                backup: "",
                req: "",
                reqdesc: ""
            },
            1: {
                name: "Bedrock",
                desc: "The most agile of fighters, protected by bedrock armor.",
                type: "onetime",
                path: "walls3_born_talented",
                backup: "",
                req: "",
                reqdesc: "Retrieve 15 arrows from a single Rend."
            },
            2: {
                name: "Traitor",
                desc: "Be careful not to choke on your convictions.",
                type: "",
                path: "renegade_arrows_from_rend",
                backup: "",
                req: "3000",
                reqdesc: "Retrieve 3,000 arrows using Rend."
            },
            3: {
                name: "Ara",
                desc: "Eyes on the road.",
                type: "onetime",
                path: "walls3_inventory_management",
                backup: "",
                req: "",
                reqdesc: "Loot 8 Regen-ades in one game."
            },
            4: {
                name: "Hood",
                desc: "I seem to have made myself an enemy of all the bad guys.",
                type: "",
                path: "renegade_energy_from_grappling_hook",
                backup: "",
                req: "20000",
                reqdesc: "Recover 20,000 energy after using Grappling Hook."
            },
            5: {
                name: "Morde",
                desc: "Warriors beyond redemption turn into Morde.",
                type: "onetime",
                path: "walls3_legendary_renegade",
                backup: "",
                req: "",
                reqdesc: "Reach 14 FK/A in a single game as Renegade."
            },
            6: {
                name: "Deathskull",
                desc: "Deathskull doesn't abide by a moral spectrum of any kind. In place of good or bad there is only dead and soon-to-be.",
                type: "",
                path: "renegade_final_kills_after_grappling_hook",
                backup: "",
                req: "20",
                reqdesc: "Final kill 20 total players within 5 seconds of using Grappling Hook."
            },
            7: {
                name: "Renny",
                desc: "Kind to animals, not so kind to those who look to harm them.",
                type: "onetime",
                path: "walls3_crossfire",
                backup: "",
                req: "",
                reqdesc: "Rend 5 players at once."
            },
            8: {
                name: "Elvish",
                desc: "Light-footed and nimble, few are able to catch him out on any occasion.",
                type: "purchase",
                path: "elvish",
                backup: "",
                req: "5,000",
                reqdesc: ""
            },
            9: {
                name: "Scarab",
                desc: "Jewel of both the desert and all the deserters.",
                type: "pres3",
                path: "pres3",
                backup: "",
                req: "",
                reqdesc: ""
            },
            10: {
                name: "Brother Betrayer",
                desc: "Long live the King.",
                type: "pres5",
                path: "pres5",
                backup: "",
                req: "",
                reqdesc: ""
            },
            11: {
                name: "V",
                desc: "You can (final) kill a man, but you can't kill an idea.",
                type: "completionist",
                path: "completionist",
                backup: "",
                req: "",
                reqdesc: ""
            }
        }
    },
    26: {
        id: "snowman",
        plaintext: "Snowman",
        classcolor: "#55ffff",
        classtype: "Mythic",
        styles: [
            "Damage",
            "Fighter",
        ],
        difficulty: 4,
        skins: {
            0: {
                name: "Snowman",
                desc: "The default skin for Snowman.",
                type: "default",
                path: "",
                backup: "",
                req: "",
                reqdesc: ""
            },
            1: {
                name: "Gus",
                desc: "This adventurer has ben waiting in the cold for the perfect kill so long that he became one with the snow.",
                type: "onetime",
                path: "walls3_chill_sniper", 
                backup: "",
                req: "", 
                reqdesc: "Hit 4 players with a single Ice Bolt." 
            },
            2: {
                name: "Frozen",
                desc: "In the depths of the icy waters of the South Pole, a frozen statue guards the gates to Atlantis.",
                type: "",
                path: "snowman_blizzard_seconds_slow",
                backup: "walls3_school_cancelled",
                req: "7200",
                reqdesc: "Slow players for a total of 7,200 seconds using Blizzard."
            },
            3: {
                name: "Abominable",
                desc: "Mighty Abominable, as powerful as it is annoying.",
                type: "onetime",
                path: "walls3_avalanche", 
                backup: "",
                req: "", 
                reqdesc: "Recover 200 energy from Snowman Companion in 40 seconds."
            },
            4: {
                name: "Ice Bug",
                desc: "Has been rampaging through the cold wasteland for thousands of years, trying to find a friend.",
                type: "",
                path: "snowman_snowmen_built",
                backup: "walls3_frosty_friendship",
                req: "500",
                reqdesc: "Build 500 Snowman Companions."
            },
            5: {
                name: "Dobu",
                desc: "Liquid nitrogen flows through its veins.",
                type: "onetime",
                path: "walls3_legendary_snowman",
                backup: "",
                req: "", 
                reqdesc: "Reach 14 FK/A in a single game as Snowman." 
            },
            6: {
                name: "Feathers",
                desc: "Ice cold but loving it.",
                type: "onetime",
                path: "walls3_snowball_fight",
                backup: "",
                req: "", 
                reqdesc: "Final kill a player as Snowman while holding a snowball."
            },
            7: {
                name: "David",
                desc: "I told my best friend to stop making Bigfoot jokes, Yeti still does.",
                type: "onetime",
                path: "walls3_grave_digger",
                backup: "",
                req: "",
                reqdesc: "Final kill 3 players with your diamond shovel without dying as Snowman."
            },
            8: {
                name: "Frozen Alex",
                desc: "Native to the Jerry Pond until recently, Alex is still adjusting to the new climate.",
                type: "purchase",
                path: "frozen alex", 
                backup: "",
                req: "5,000", 
                reqdesc: "frozen alex" 
            },
            9: {
                name: "Basilisk",
                desc: "The Basilisk has only been heard of in whispers of legends.",
                type: "pres3",
                path: "pres3",
                backup: "",
                req: "", 
                reqdesc: "" 
            },
            10: {
                name: "Frosty",
                desc: "No matter the season, Frosty's always keeping it cool.",
                type: "pres5",
                path: "pres5",
                backup: "",
                req: "", 
                reqdesc: "" 
            },
            11: {
                name: "Cynic",
                desc: "He's making a list, he's checking it twice, Cynic's gonna smash you with bolts made o' ice!",
                type: "completionist",
                path: "completionist",
                backup: "",
                req: "", 
                reqdesc: "" 
            }
        }
    },
}
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


const classTotalSkins = [Object.keys(classes[0].skins).length, Object.keys(classes[1].skins).length, Object.keys(classes[2].skins).length, Object.keys(classes[3].skins).length, Object.keys(classes[4].skins).length, Object.keys(classes[5].skins).length, Object.keys(classes[6].skins).length, Object.keys(classes[7].skins).length, Object.keys(classes[8].skins).length, Object.keys(classes[9].skins).length, Object.keys(classes[10].skins).length, Object.keys(classes[11].skins).length, Object.keys(classes[12].skins).length, Object.keys(classes[13].skins).length, Object.keys(classes[14].skins).length, Object.keys(classes[15].skins).length, Object.keys(classes[16].skins).length, Object.keys(classes[17].skins).length, Object.keys(classes[18].skins).length, Object.keys(classes[19].skins).length, Object.keys(classes[20].skins).length, Object.keys(classes[21].skins).length, Object.keys(classes[22].skins).length, Object.keys(classes[23].skins).length, Object.keys(classes[24].skins).length, Object.keys(classes[25].skins).length, Object.keys(classes[26].skins).length];