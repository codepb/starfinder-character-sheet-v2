export interface Feat {
  name: FeatName;
  prerequisites: string;
  benefit: string;
  isCombatFeat: boolean;
}

export type FeatName =
  | "Adaptive Fighting"
  | "Amplified Glitch"
  | "Antagonize"
  | "Barricade"
  | "Basic Melee Weapon Proficiency"
  | "Advanced Melee Weapon Proficiency"
  | "Special Weapon Proficiency"
  | "Blind-Fight"
  | "Bodyguard"
  | "In Harm’s Way"
  | "Cleave"
  | "Great Cleave"
  | "Climbing Master"
  | "Combat Casting"
  | "Connection Inkling"
  | "Coordinated Shot"
  | "Deadly Aim"
  | "Deflect Projectiles"
  | "Reflect Projectiles"
  | "Diehard"
  | "Dive for Cover"
  | "Diversion"
  | "Drag Down"
  | "Enhanced Resistance"
  | "Extra Resolve"
  | "Far Shot"
  | "Fast Talk"
  | "Fleet"
  | "Fusillade"
  | "Great Fortitude"
  | "Improved Great Fortitude"
  | "Grenade Proficiency"
  | "Harm Undead"
  | "Improved Combat Maneuver"
  | "Pull the Pin"
  | "Improved Critical"
  | "Improved Feint"
  | "Greater Feint"
  | "Improved Initiative"
  | "Improved Unarmed Strike"
  | "Iron Will"
  | "Improved Iron Will"
  | "Jet Dash"
  | "Kip Up"
  | "Light Armor Proficiency"
  | "Heavy Armor Proficiency"
  | "Powered Armor Proficiency"
  | "Lightning Reflexes"
  | "Improved Lightning Reflexes"
  | "Lunge"
  | "Master Crafter"
  | "Medical Expert"
  | "Minor Psychic Power"
  | "Psychic Power"
  | "Major Psychic Power"
  | "Mobility"
  | "Agile Casting"
  | "Shot on the Run"
  | "Parting Shot"
  | "Sidestep"
  | "Improved Sidestep"
  | "Spring Attack"
  | "Multi-Weapon Fighting"
  | "Mystic Strike"
  | "Nimble Moves"
  | "Opening Volley"
  | "Penetrating Attack"
  | "Penetrating Spell"
  | "Quick Draw"
  | "Skill Focus"
  | "Skill Synergy"
  | "Sky Jockey"
  | "Slippery Shooter"
  | "Small Arm Proficiency"
  | "Longarm Proficiency"
  | "Heavy Weapon Proficiency"
  | "Special Weapon Proficiency"
  | "Sniper Weapon Proficiency"
  | "Spell Focus"
  | "Spell Penetration"
  | "Greater Spell Penetration"
  | "Spellbane"
  | "Spry Cover"
  | "Stand Still"
  | "Improved Stand Still"
  | "Step Up"
  | "Step Up and Strike"
  | "Suppressive Fire"
  | "Strike Back"
  | "Swimming Master"
  | "Technomantic Dabbler"
  | "Toughness"
  | "Unfriendly Fire"
  | "Veiled Threat"
  | "Weapon Focus"
  | "Versatile Focus"
  | "Weapon Specialization"
  | "Versatile Specialization";

const feats: Feat[] = [
  {
    name: "Adaptive Fighting",
    prerequisites: "Three or more combat feats",
    benefit:
      "Once per day as a move action, gain the benefit of a combat feat you don’t have",
    isCombatFeat: true
  },
  {
    name: "Amplified Glitch",
    prerequisites: "Computers 3 ranks, Intimidate 3 ranks",
    benefit:
      "Disrupt devices, causing targets to become shaken for 1 round or more",
    isCombatFeat: true
  },
  {
    name: "Antagonize",
    prerequisites: "Diplomacy 5 ranks, Intimidate 5 ranks",
    benefit:
      "Anger a foe, causing it to become off-target and take a -2 penalty to skill checks for 1 round or more",
    isCombatFeat: false
  },
  {
    name: "Barricade",
    prerequisites: "Engineering 1 rank",
    benefit: "Create your own fragile cover",
    isCombatFeat: true
  },
  {
    name: "Basic Melee Weapon Proficiency",
    prerequisites: "—",
    benefit: "No penalty to attacks with basic melee weapons",
    isCombatFeat: true
  },
  {
    name: "Advanced Melee Weapon Proficiency",
    prerequisites: "Basic Melee Weapon Proficiency",
    benefit: "No penalty to attacks with advanced melee weapons",
    isCombatFeat: true
  },
  {
    name: "Special Weapon Proficiency",
    prerequisites: "Basic Melee Weapon Proficiency or Small Arm Proficiency",
    benefit: "No penalty to attacks with one special weapon",
    isCombatFeat: true
  },
  {
    name: "Blind-Fight",
    prerequisites: "—",
    benefit: "Reroll miss chances from concealment",
    isCombatFeat: true
  },
  {
    name: "Bodyguard",
    prerequisites: "—",
    benefit: "Add a +2 bonus to an adjacent ally’s AC as a reaction",
    isCombatFeat: true
  },
  {
    name: "In Harm’s Way",
    prerequisites: "Bodyguard",
    benefit: "Take the damage of a successful attack against an adjacent ally",
    isCombatFeat: true
  },
  {
    name: "Cleave",
    prerequisites: "Str 13, base attack bonus +1",
    benefit: "Make an additional melee attack if the first one hits",
    isCombatFeat: true
  },
  {
    name: "Great Cleave",
    prerequisites: "Str 13, Cleave, base attack bonus +4",
    benefit:
      "Make an additional melee attack after each melee attack that hits",
    isCombatFeat: true
  },
  {
    name: "Climbing Master",
    prerequisites: "Athletics 5 ranks",
    benefit: "Gain a climb speed equal to your base speed",
    isCombatFeat: false
  },
  {
    name: "Combat Casting",
    prerequisites: "Ability to cast 2nd-level spells",
    benefit:
      "+2 bonus to AC and saves against attacks of opportunity when casting spells",
    isCombatFeat: true
  },
  {
    name: "Connection Inkling",
    prerequisites: "Wis 15, character level 5th, no mystic levels",
    benefit: "Gain the ability to cast minor mystic spells",
    isCombatFeat: false
  },
  {
    name: "Coordinated Shot",
    prerequisites: "Base attack bonus +1",
    benefit:
      "Allies gain a +1 bonus to ranged attacks against foes you threaten",
    isCombatFeat: true
  },
  {
    name: "Deadly Aim",
    prerequisites: "Base attack bonus +1",
    benefit: "Take a -2 penalty to weapon attacks to deal extra damage",
    isCombatFeat: true
  },
  {
    name: "Deflect Projectiles",
    prerequisites: "Base attack bonus +8",
    benefit: "Spend 1 Resolve Point to attempt to avoid a ranged attack",
    isCombatFeat: true
  },
  {
    name: "Reflect Projectiles",
    prerequisites: "Deflect Projectiles, base attack bonus +16",
    benefit: "Spend 1 Resolve Point to attempt to redirect a ranged attack",
    isCombatFeat: true
  },
  {
    name: "Diehard",
    prerequisites: "—",
    benefit:
      "You can spend Resolve Points to stabilize and to stay in the fight in the same round",
    isCombatFeat: false
  },
  {
    name: "Dive for Cover",
    prerequisites: "Base Reflex save bonus +2",
    benefit: "Fall prone in an adjacent square to roll a Reflex save twice",
    isCombatFeat: true
  },
  {
    name: "Diversion",
    prerequisites: "—",
    benefit: "Use Bluff to create a distraction so that your allies can hide",
    isCombatFeat: false
  },
  {
    name: "Drag Down",
    prerequisites: "—",
    benefit: "When you are tripped, you can attempt to trip an adjacent foe",
    isCombatFeat: true
  },
  {
    name: "Enhanced Resistance",
    prerequisites: "Base attack bonus +4",
    benefit: "Gain damage reduction or energy resistance",
    isCombatFeat: false
  },
  {
    name: "Extra Resolve",
    prerequisites: "Character level 5th",
    benefit: "Gain 2 additional Resolve Points",
    isCombatFeat: false
  },
  {
    name: "Far Shot",
    prerequisites: "Base attack bonus +1",
    benefit: "Reduce penalty due to range increments",
    isCombatFeat: true
  },
  {
    name: "Fast Talk",
    prerequisites: "Bluff 5 ranks",
    benefit:
      "Baffle a potential foe, causing it to be surprised when combat begins",
    isCombatFeat: false
  },
  {
    name: "Fleet",
    prerequisites: "—",
    benefit: "Increase your base speed",
    isCombatFeat: true
  },
  {
    name: "Fusillade",
    prerequisites: "Base attack bonus +1, 4 or more arms",
    benefit: "Make an automatic-Mode attack with multiple small arms",
    isCombatFeat: true
  },
  {
    name: "Great Fortitude",
    prerequisites: "—",
    benefit: "+2 bonus to Fortitude saves",
    isCombatFeat: false
  },
  {
    name: "Improved Great Fortitude",
    prerequisites: "Great Fortitude, character level 5th",
    benefit: "Spend 1 Resolve Point to reroll a Fortitude save",
    isCombatFeat: false
  },
  {
    name: "Grenade Proficiency",
    prerequisites: "—",
    benefit: "No penalty to attacks made with grenades",
    isCombatFeat: true
  },
  {
    name: "Harm Undead",
    prerequisites: "Healing channel connection power, mystic level 1st",
    benefit: "Expend a spell slot for healing channel to also damage undead",
    isCombatFeat: false
  },
  {
    name: "Improved Combat Maneuver",
    prerequisites: "Base attack bonus +1",
    benefit: "+4 bonus to perform one combat maneuver",
    isCombatFeat: true
  },
  {
    name: "Pull the Pin",
    prerequisites: "Improved Combat Maneuver (disarm)",
    benefit: "Perform a disarm to activate a foe’s grenade",
    isCombatFeat: true
  },
  {
    name: "Improved Critical",
    prerequisites: "Base attack bonus +8",
    benefit:
      "The DC to resist the critical effects of your critical hits increases by 2",
    isCombatFeat: true
  },
  {
    name: "Improved Feint",
    prerequisites: "—",
    benefit: "Use Bluff to feint as a move action",
    isCombatFeat: true
  },
  {
    name: "Greater Feint",
    prerequisites: "Improved Feint, base attack bonus +6",
    benefit: "Foes you feint against are flat-footed for 1 round",
    isCombatFeat: true
  },
  {
    name: "Improved Initiative",
    prerequisites: "—",
    benefit: "+4 bonus to initiative checks",
    isCombatFeat: true
  },
  {
    name: "Improved Unarmed Strike",
    prerequisites: "—",
    benefit: "Deal more damage and threaten squares with unarmed strikes",
    isCombatFeat: true
  },
  {
    name: "Iron Will",
    prerequisites: "—",
    benefit: "+2 bonus to Will saves",
    isCombatFeat: false
  },
  {
    name: "Improved Iron Will",
    prerequisites: "Iron Will, character level 5th",
    benefit: "Spend 1 Resolve Point to reroll a Will save",
    isCombatFeat: false
  },
  {
    name: "Jet Dash",
    prerequisites: "—",
    benefit:
      "Move faster when running, double height and distance when jumping",
    isCombatFeat: false
  },
  {
    name: "Kip Up",
    prerequisites: "Acrobatics 1 rank",
    benefit: "Stand from prone as a swift action",
    isCombatFeat: true
  },
  {
    name: "Light Armor Proficiency",
    prerequisites: "—",
    benefit: "No penalty to attack rolls while wearing light armor",
    isCombatFeat: true
  },
  {
    name: "Heavy Armor Proficiency",
    prerequisites: "Str 13, Light Armor Proficiency",
    benefit: "No penalty to attack rolls while wearing heavy armor",
    isCombatFeat: true
  },
  {
    name: "Powered Armor Proficiency",
    prerequisites:
      "Str 13, Light Armor Proficiency, Heavy Armor Proficiency, base attack bonus +5",
    benefit: "No penalty to attack rolls while wearing powered armor",
    isCombatFeat: true
  },
  {
    name: "Lightning Reflexes",
    prerequisites: "—",
    benefit: "+2 bonus to Reflex saves",
    isCombatFeat: false
  },
  {
    name: "Improved Lightning Reflexes",
    prerequisites: "Lightning Reflexes, character level 5th",
    benefit: "Spend 1 Resolve Point to reroll a Reflex save",
    isCombatFeat: false
  },
  {
    name: "Lunge",
    prerequisites: "Base attack bonus +6",
    benefit:
      "Increase reach of melee attacks by 5 feet until the end of your turn",
    isCombatFeat: true
  },
  {
    name: "Master Crafter",
    prerequisites:
      "Computers, Engineering, Life Science, Mysticism, Physical Science, or Profession 5 ranks",
    benefit: "Craft items in half the normal time",
    isCombatFeat: false
  },
  {
    name: "Medical Expert",
    prerequisites:
      "Life Science 1 rank, Medicine 1 rank, Physical Science 1 rank",
    benefit:
      "Treat deadly wounds more quickly, and provide long-term care without a medical lab",
    isCombatFeat: false
  },
  {
    name: "Minor Psychic Power",
    prerequisites: "Cha 11",
    benefit: "Cast a 0-level spell as a Spell-Like ability 3/day",
    isCombatFeat: false
  },
  {
    name: "Psychic Power",
    prerequisites: "Cha 13, Minor Psychic Power, character level 4th",
    benefit: "Cast a 1st-level spell as a Spell-Like ability 1/day",
    isCombatFeat: false
  },
  {
    name: "Major Psychic Power",
    prerequisites:
      "Cha 15, Minor Psychic Power, Psychic Power, character level 7th",
    benefit: "Cast a 2nd-level spell as a Spell-Like ability 1/day",
    isCombatFeat: false
  },
  {
    name: "Mobility",
    prerequisites: "Dex 13",
    benefit: "+4 bonus to AC against attacks of opportunity from movement",
    isCombatFeat: true
  },
  {
    name: "Agile Casting",
    prerequisites: "Key ability score 15, Dex 15, Mobility, caster level 4th",
    benefit: "Cast a spell at any point during movement",
    isCombatFeat: false
  },
  {
    name: "Shot on the Run",
    prerequisites: "Dex 15, Mobility, base attack bonus +4",
    benefit: "Make a ranged attack at any point during movement",
    isCombatFeat: true
  },
  {
    name: "Parting Shot",
    prerequisites: "Dex 15, Mobility, Shot on the Run, base attack bonus +6",
    benefit: "Make a single ranged attack when withdrawing",
    isCombatFeat: true
  },
  {
    name: "Sidestep",
    prerequisites: "Dex 15, Mobility or trick attack",
    benefit:
      "Take guarded step as a reaction when a foe misses you with melee attack",
    isCombatFeat: true
  },
  {
    name: "Improved Sidestep",
    prerequisites: "Dex 17, Mobility or trick attack class feature, Sidestep",
    benefit: "Reduce penalties from Sidestep",
    isCombatFeat: true
  },
  {
    name: "Spring Attack",
    prerequisites: "Dex 15, Mobility, base attack bonus +4",
    benefit: "Move before and after a melee attack",
    isCombatFeat: true
  },
  {
    name: "Multi-Weapon Fighting",
    prerequisites: "—",
    benefit:
      "Reduce the penalty for full attacks when using multiple small arms or operative melee weapons",
    isCombatFeat: true
  },
  {
    name: "Mystic Strike",
    prerequisites: "Ability to cast spells",
    benefit: "Melee and ranged attacks count as magic",
    isCombatFeat: true
  },
  {
    name: "Nimble Moves",
    prerequisites: "Dex 15",
    benefit: "Ignore 20 feet of difficult terrain when you move",
    isCombatFeat: true
  },
  {
    name: "Opening Volley",
    prerequisites: "—",
    benefit:
      "+2 bonus to a melee attack against a target you damaged with a ranged attack",
    isCombatFeat: true
  },
  {
    name: "Penetrating Attack",
    prerequisites: "Base attack bonus +12",
    benefit:
      "Reduce enemy’s DR and energy resistance against your weapons by 5",
    isCombatFeat: true
  },
  {
    name: "Penetrating Spell",
    prerequisites: "Ability to cast 4th-level spells",
    benefit: "Reduce enemy’s DR and energy resistance against your spells by 5",
    isCombatFeat: false
  },
  {
    name: "Quick Draw",
    prerequisites: "Base attack bonus +1",
    benefit: "Draw a weapon as a swift action",
    isCombatFeat: true
  },
  {
    name: "Skill Focus",
    prerequisites: "—",
    benefit: "+3 insight bonus to one skill",
    isCombatFeat: false
  },
  {
    name: "Skill Synergy",
    prerequisites: "—",
    benefit: "Gain two new class skills or a +2 insight bonus to those skills",
    isCombatFeat: false
  },
  {
    name: "Sky Jockey",
    prerequisites: "Piloting 5 ranks",
    benefit: "Make jetpacks, Vehicles, and Starships go faster",
    isCombatFeat: false
  },
  {
    name: "Slippery Shooter",
    prerequisites: "Dex 15, base attack bonus +6",
    benefit:
      "+3 bonus to AC against attacks of opportunity when making ranged attacks",
    isCombatFeat: true
  },
  {
    name: "Small Arm Proficiency",
    prerequisites: "—",
    benefit: "No penalty to attacks with small arms",
    isCombatFeat: true
  },
  {
    name: "Longarm Proficiency",
    prerequisites: "Small Arm Proficiency",
    benefit: "No penalty to attacks with longarms",
    isCombatFeat: true
  },
  {
    name: "Heavy Weapon Proficiency",
    prerequisites: "Str 13, Longarm Proficiency, Small Arm Proficiency",
    benefit: "No penalty to attacks with heavy weapons",
    isCombatFeat: true
  },
  {
    name: "Special Weapon Proficiency",
    prerequisites: "Basic Melee Weapon Proficiency or Small Arm Proficiency",
    benefit: "No penalty to attacks with one special weapon",
    isCombatFeat: true
  },
  {
    name: "Sniper Weapon Proficiency",
    prerequisites: "—",
    benefit: "No penalty to attacks with sniper weapons",
    isCombatFeat: true
  },
  {
    name: "Spell Focus",
    prerequisites: "Ability to cast spells, character level 3rd",
    benefit: "DCs of spells you cast increase",
    isCombatFeat: false
  },
  {
    name: "Spell Penetration",
    prerequisites: "—",
    benefit: "+2 bonus to caster level checks to overcome SR",
    isCombatFeat: false
  },
  {
    name: "Greater Spell Penetration",
    prerequisites: "Spell Penetration",
    benefit: "Additional +2 bonus to caster level checks to overcome SR",
    isCombatFeat: false
  },
  {
    name: "Spellbane",
    prerequisites: "Unable to cast spells or use spell-Like abilities",
    benefit:
      "+2 insight bonus to saving throws against spells and Spell-Like abilities",
    isCombatFeat: false
  },
  {
    name: "Spry Cover",
    prerequisites: "Base attack bonus +1",
    benefit:
      "Covering fire grants a +4 bonus to an ally’s Acrobatics check to tumble",
    isCombatFeat: true
  },
  {
    name: "Stand Still",
    prerequisites: "—",
    benefit: "Make an attack of opportunity to stop a foe’s movement",
    isCombatFeat: true
  },
  {
    name: "Improved Stand Still",
    prerequisites: "Stand Still",
    benefit: "+4 bonus to melee attacks with Stand Still",
    isCombatFeat: true
  },
  {
    name: "Step Up",
    prerequisites: "Base attack bonus +1",
    benefit: "Take a guarded step as a reaction to an adjacent foe moving",
    isCombatFeat: true
  },
  {
    name: "Step Up and Strike",
    prerequisites: "Dex 13, Step Up, base attack bonus +6",
    benefit: "Make an attack of opportunity as part of Step Up",
    isCombatFeat: true
  },
  {
    name: "Suppressive Fire",
    prerequisites: "Base attack bonus +1, proficiency with heavy weapons",
    benefit: "Provide covering fire or harrying fire in an area",
    isCombatFeat: true
  },
  {
    name: "Strike Back",
    prerequisites: "Base attack bonus +1",
    benefit: "Ready an action to make a melee attack against a foe with reach",
    isCombatFeat: true
  },
  {
    name: "Swimming Master",
    prerequisites: "Athletics 5 ranks",
    benefit: "Gain a swim speed equal to your base speed",
    isCombatFeat: false
  },
  {
    name: "Technomantic Dabbler",
    prerequisites: "Int 15, character level 5th, no levels in technomancer",
    benefit: "Gain the ability to cast minor technomancer spells",
    isCombatFeat: false
  },
  {
    name: "Toughness",
    prerequisites: "—",
    benefit: "+1 Stamina Point per character level and other bonuses",
    isCombatFeat: false
  },
  {
    name: "Unfriendly Fire",
    prerequisites: "Bluff 5 ranks",
    benefit: "Trick an attacker into shooting at another enemy adjacent to you",
    isCombatFeat: true
  },
  {
    name: "Veiled Threat",
    prerequisites: "Cha 15, Intimidate 1 rank",
    benefit: "Intimidated foe doesn’t become hostile",
    isCombatFeat: false
  },
  {
    name: "Weapon Focus",
    prerequisites: "Proficiency with selected weapon type",
    benefit: "+1 bonus to attack rolls with selected weapon type",
    isCombatFeat: true
  },
  {
    name: "Versatile Focus",
    prerequisites: "Weapon Focus",
    benefit:
      "+1 bonus to attack rolls with all weapon types you are proficient with",
    isCombatFeat: true
  },
  {
    name: "Weapon Specialization",
    prerequisites: "Character level 3rd, proficiency with selected weapon type",
    benefit: "Deal extra damage with selected weapon type",
    isCombatFeat: true
  },
  {
    name: "Versatile Specialization",
    prerequisites: "Weapon Specialization, character level 3rd",
    benefit: "Deal extra damage with all weapon types you are proficient with",
    isCombatFeat: true
  }
];

export default feats;
