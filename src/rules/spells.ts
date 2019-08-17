import { Class } from "./classes";

type SpellLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6;

enum SpellSchool {
  Necromancy = "Necromancy",
  Divination = "Divination",
  Evocation = "Evocation",
  Transmutation = "Trasmutation",
  Abjuration = "Abjuration",
  Enchantment = "Enchantment",
  Conjuration = "Conjuration",
  Illusion = "Illusion",
  Universal = "Universal"
}

enum SpellDescriptor {
  Scrying = "Scrying",
  Electricity = "Electricity",
  Curse = "Curse",
  Acid = "Acid",
  MindAffecting = "Mind Affecting",
  Charm = "Charm",
  Compulsion = "Compulsion",
  LanguageDependent = "Language Dependent",
  SenseDependent = "Sense Dependent",
  Creation = "Creation",
  Death = "Death",
  Teleportation = "Teleportation",
  Fire = "Fire",
  Emotion = "Emotion",
  Fear = "Fear",
  Force = "Force",
  Cold = "Cold",
  Pain = "Pain",
  Disease = "Disease",
  Poison = "Poison",
  Radiation = "Radiation",
  Healing = "Healing",
  Calling = "Calling",
  Shadow = "Shadow",
  Sonic = "Sonic"
}

type RuleSource = "Core Rulebook";

interface SpellClass {
  class: Class;
  level?: SpellLevel | SpellLevel[];
}

interface SpellDefinition {
  CastingTime: string;
  Classes: SpellClass[];
  SpellListDescription: string;
  Descriptor?: SpellDescriptor[];
  Duration: string;
  Level?: SpellLevel | SpellLevel[];
  Description: string;
  Range: string;
  SavingThrow?: string;
  School: SpellSchool;
  Source: RuleSource;
  PageNumber: string;
  SpellResistance?: string;
  TargetsEffectArea?: string;
  Variants?: string[];
}

const spells: { [key: string]: SpellDefinition } = {
  "Animate Dead": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 4 },
      { class: Class.Technomancer, level: 4 }
    ],
    SpellListDescription:
      "Create controlled undead creatures out of target corpses.",
    Duration: "Instantaneous",
    Level: 4,
    Description:
      "This spell turns corpses into undead creatures that obey your spoken commands. The undead can be made to follow you or they can be made to remain in place and attack any creature (or a specific kind of creature) entering the area. They remain animated until they are destroyed. A destroyed undead can't be animated again. You can create one or more undead creatures with a total CR of no more than (CASTERLEVEL/2). You can only create one type of undead with each casting of this spell. Creating undead requires special materials worth 1000 credits * the total CR of the undead created; these materials are consumed as part of casting the spell. The undead you create remain under your control indefinitely. No matter how many times you use this spell however you can control only a number of undead whose total CR is no greater than (CASTERLEVEL). If you exceed this number all the newly created creatures fall under your control and any excess undead from previous castings become uncontrolled. You choose which creatures are released. Once released such undead have no particular feelings of loyalty to you and in time they may grow in power beyond the undead you can create. The corpses you use must be as intact as the typical undead of the type you choose to create. For example a skeleton can be created only from a mostly intact corpse (that has bones) or skeleton. A zombie can be created only from a creature with a physical anatomy.",
    Range: "Touch",
    SavingThrow: "None",
    School: SpellSchool.Necromancy,
    Source: "Core Rulebook",
    PageNumber: "p.340",
    SpellResistance: "No",
    TargetsEffectArea: "One or more corpses"
  },
  "Arcane Eye": {
    CastingTime: "10 minutes",
    Classes: [{ class: Class.Technomancer, level: 4 }],
    SpellListDescription:
      "Invisible floating eye moves 30 feet per round and sends you visual information.",
    Descriptor: [SpellDescriptor.Scrying],
    Duration: "(CASTERLEVEL) minutes (D)",
    Level: 4,
    Description:
      "You create an invisible magical sensor that sends you visual information. The sensor appears at any point within line of sight but it can then travel beyond your line of sight without hindrance. An arcane eye travels at 30 feet per round (300 feet per minute) if viewing an area ahead as a humanoid would (primarily looking at the floor) or 10 feet per round (100 feet per minute) if examining the ceiling and walls as well as the floor ahead. The arcane eye sees exactly as you would see if you were there. The arcane eye can travel in any direction as long as the spell lasts. Solid barriers block its passage but it can pass through a hole or space as small as 1 inch in diameter. The arcane eye can't enter another plane of existence even through Drift travel or a magical gate or similar magical portal. You must concentrate to use an arcane eye. If you do not concentrate the sensor is inert until you concentrate again.",
    Range: "Planetary",
    SavingThrow: "None",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.340",
    SpellResistance: "No",
    TargetsEffectArea: "Magical sensor"
  },
  "Arcane Sight": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 3 }],
    SpellListDescription: "Magical sources become visible to you.",
    Duration: "(CASTERLEVEL) minutes (D)",
    Level: 3,
    Description:
      "This spell allows you to see magic sources within 120 feet of you. The effect is similar to that of a detect magic spell but arcane sight does not require concentration and discerns information more quickly. You know the location and caster level of all magic sources within your sight. If the magic sources are in line of sight you can attempt a DC 28 Mysticism check (one check per source) to determine the school of magic involved in each source. If you concentrate on a specific creature within 120 feet of you as a standard action you can determine whether it has any spellcasting or spell-like abilities and the caster level of the most powerful spell or spell-like ability the creature currently has available for use. As with detect magic you can use this spell to identify the properties of magic items but not of artifacts.",
    Range: "Personal",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.340"
  },
  "Arcing Surge": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 3 }],
    SpellListDescription: "Deal 10d6 electricity damage in a 120-foot line.",
    Descriptor: [SpellDescriptor.Electricity],
    Duration: "(CASTERLEVEL) minutes (D)",
    Level: 3,
    Description:
      "You cause an electrical device in your possession to surge in power and unleash a line of electricity from the massive oversurge. This deals 10d6 electricity damage to all creatures and objects in the area.",
    Range: "120 ft.",
    SavingThrow: "Reflex half",
    School: SpellSchool.Evocation,
    Source: "Core Rulebook",
    PageNumber: "p.340",
    SpellResistance: "Yes",
    TargetsEffectArea: "Line-shaped burst"
  },
  Augury: {
    CastingTime: "1 minute",
    Classes: [{ class: Class.Mystic, level: 2 }],
    SpellListDescription: "Learn whether an action will be good or bad.",
    Duration: "Instantaneous",
    Level: 2,
    Description:
      "Casting augury can tell you whether a particular action will bring good or bad results for you in the immediate future. Casting this spell takes intense personal focus and requires you to spend 1 Resolve Point. The chance for successfully receiving a meaningful reply is 75%; this roll is made secretly by the GM. A question may be so straightforward that a successful result is automatic or it may be so vague as to have no chance of success. If the augury succeeds you get one of four results; Weal (if the action will probably bring good results) Woe (for bad results) Weal and woe (for both) Nothing (for actions that have neither especially good nor especially bad results). If the augury isn't successful you get the nothing result. A spellcaster who gets the nothing result has no way to tell whether it was the consequence of a failed or successful augury. The augury can see only about 30 minutes into the future so anything that might happen beyond that time frame does not affect the result. Thus the result might not take into account the long-term consequences of a contemplated action. Multiple castings of augury by the same creature about the same topic use the same die result as the first casting.",
    Range: "Personal",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.340"
  },
  "Battle Junkbot": {
    CastingTime: "1 round",
    Classes: [{ class: Class.Technomancer, level: 6 }],
    SpellListDescription:
      "Create a temporary robot from random junk turning it into a deadly combatant.",
    Duration: "(CASTERLEVEL) rounds",
    Level: 6,
    Description:
      "You turn a pile of technological junk into a vicious robot that can hunt down and attack your enemies. You must target inert nonworking electronic equipment of at least 1 bulk. Valid targets include a large broken computer system nonworking or unconnected computer or robot parts a destroyed robot or another such trashed mechanical system or any related electronic components or combination of the above as long as the junk is found in a large enough quantity. Creating a battle junkbot also requires one ultra-capacity battery. Casting this spell drains all of the battery's charges. While casting this spell you use your magic and technological know-how to rearrange the junked parts and infuse them with aggression and martial skills. A battle junkbot is Small its KAC and EAC are each (CASTERLEVEL+15) it has hardness 15 and it has a number of Hit Points equal to half of your own (but no Stamina Points). It uses your saving throw bonuses when it is the target of spells and other targeted effects. It has a land speed of 30 feet and a fly speed of 15 feet with average maneuverability. For purposes of spells and effects that target the junkbot it is treated as a construct with the magical and technological subtypes. The battle junkbot has four hands. It is treated as if it had the Deadly Aim and Improved Combat Maneuver (Bull Rush Grapple Trip) feats. It has an attack bonus  of (CASTERLEVEL+6); in one hand it wields a special buzzblade dagger that deals 6d8+6 damage instead of its normal damage and a second hand carries a special light laser pistol that deals 6d6 damage instead of its normal damage. Damage from the junkbot's special weapons counts as magic for the purpose of overcoming damage reduction. You can give new basic commands to your battle junkbot telepathically on your turn as a move action and the junkbot can take actions as if it were a normal creature. You are aware when the robot has made an attack or combat maneuver and whether or not it was successful as well as when the battle junkbot has been attacked has taken damage or is destroyed but you can perceive nothing else through this basic telepathic link. When the battle junkbot is destroyed or this spell ends the electronic equipment you used to create the junkbot falls apart into refuse its circuitry fried beyond anything recognizable. You cannot use this refuse as a target to create another junkbot.",
    Range: "Touch",
    SavingThrow: "None",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.341",
    SpellResistance: "No",
    TargetsEffectArea: "At least 1 bulk of inert electronic equipment; see text"
  },
  "Bestow Curse": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 3 }],
    SpellListDescription:
      "Target takes -4 penalty to attack rolls saves and checks or 50% chance of not acting on each of its turns.",
    Descriptor: [SpellDescriptor.Curse],
    Duration: "Permanent",
    Level: 3,
    Description:
      "You place a terrible curse on the target stealing either its overall competency or its ability to think and act on its feet. Choose one of the following; The target takes a -4 penalty to ability checks attack rolls saving throws and skill checks. -OR- Each turn the target has a 50% chance to act normally; otherwise it takes no action. You can also invent your own curse (see Afflictions on page 414 for a few ideas) but it should be no more powerful than those described above. The curse bestowed by this spell cannot be dispelled but it can be removed with a break enchantment miracle remove affliction or wish spell. Casting this spell doesn't provoke attacks of opportunity. Bestow curse counters remove affliction.",
    Range: "Touch",
    SavingThrow: "Will negates",
    School: SpellSchool.Necromancy,
    Source: "Core Rulebook",
    PageNumber: "p.341",
    SpellResistance: "Yes",
    TargetsEffectArea: "One creature"
  },
  "Break Enchantment": {
    CastingTime: "1 minute",
    Classes: [
      { class: Class.Mystic, level: 5 },
      { class: Class.Technomancer, level: 5 }
    ],
    SpellListDescription:
      "Free creatures from curses enchantments and transmutations.",
    Duration: "Instantaneous",
    Level: 5,
    Description:
      "This spell frees victims from curses enchantments and transmutations. Break enchantment can reverse even an instantaneous effect. For each such effect you attempt a caster level check (1d20 + %1) against a DC equal to 11 + the caster level of the effect. Success means that the creature is free of the spell curse or effect. For a cursed magic item the DC of the caster level check is equal to the DC of the curse. If the spell is one that can't be dispelled by dispel magic break enchantment works only if that spell is 5th level or lower. If the effect comes from a permanent magic item break enchantment doesn't remove the curse from the item but it does free the victim from the item's effects.|min(CASTERLEVEL15)",
    Range: "Close",
    SavingThrow: "None",
    School: SpellSchool.Abjuration,
    Source: "Core Rulebook",
    PageNumber: "p.341",
    SpellResistance: "No",
    TargetsEffectArea:
      "Up to (CASTERLEVEL) creatures no two of which can be more than 30 ft. apart"
  },
  "Call Cosmos": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 5 }],
    SpellListDescription:
      "Rain cosmic particles on targets dealing 4d6 fire damage and 3d6 cold damage.",
    Duration: "(CASTERLEVEL) rounds (D)",
    Level: 5,
    Description:
      "You evoke a vertical column of dangerous material from across the universe that rains down upon creatures in the area. This matter is made up of bits of burning stars and chunks of frozen comets and it deals 4d6 fire damage and 3d6 cold damage to every creature in the area. This damage occurs only once when the spell is cast. For the spell's remaining duration the fallen starstuff makes the entire area difficult terrain and thick swirling clouds of particulate space matter magically block vision. This obscures all sight beyond 5 feet including darkvision and other vision-based senses (including vision-based blindsight and sense through) but doesn't prevent blindsense. A creature within 5 feet of its attacker has concealment (attacks have a 20% miss chance). Creatures farther away have total concealment (50% miss chance and the attacker can't use sight to locate the target). Additionally the swirling cosmic particles are distracting to spellcasters in the area who have a 20% chance of losing any spell they attempt to cast in the area. At the end of the duration the starstuff disappears leaving no aftereffects (other than the damage dealt).",
    Range: "Long",
    SavingThrow: "None",
    School: SpellSchool.Evocation,
    Source: "Core Rulebook",
    PageNumber: "p.342",
    SpellResistance: "Yes",
    TargetsEffectArea: "Cylinder (20-ft. radius 40 ft. high)"
  },
  "Caustic Conversion": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 2 }],
    SpellListDescription:
      "Fling magical nanites as a ranged attack that deals 4d4 acid damage to one target plus 5 additional damage in subsequent rounds.",
    Descriptor: [SpellDescriptor.Acid],
    Duration: "(CASTERLEVEL/3+1) rounds",
    Level: 2,
    Description:
      "You fling magical nanites that convert water vapor around your target into deadly acid. Make a ranged attack roll against your target's EAC. If you hit the target takes 4d4 acid damage and it takes 5 additional acid damage at the end of its turn each round for the spell's duration.",
    Range: "Medium",
    SavingThrow: "None",
    School: SpellSchool.Evocation,
    Source: "Core Rulebook",
    PageNumber: "p.342",
    SpellResistance: "Yes",
    TargetsEffectArea: "One creature or object"
  },
  "Chain Surge": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 6 }],
    SpellListDescription:
      "Deal 13d12 electricity damage to primary target and up to 10 secondary targets; one of the primary target's electrical devices stops functioning for 1 round.",
    Descriptor: [SpellDescriptor.Electricity],
    Duration: "Instantaneous",
    Level: 6,
    Description:
      "Choose a primary target as well as up to 10 secondary targets within 30 feet of the primary target. The primary target must be carrying or wielding some kind of equipment that uses electricity. This spell causes the primary target's electrical equipment to surge with deadly electricity which arcs out to strike the secondary targets dealing 13d12 electricity damage to all targets chosen. If the primary target fails its Reflex save the spell also shorts out one of that target's electrical items (your choice) for 1 round meaning the primary target can't use it for that period. If the primary target negates the effect entirely (such as with evasion) the secondary targets also suffer no effects.",
    Range: "Long",
    SavingThrow: "Reflex half; see text",
    School: SpellSchool.Evocation,
    Source: "Core Rulebook",
    PageNumber: "p.342",
    SpellResistance: "Yes",
    TargetsEffectArea:
      "One primary target and up to 10 secondary targets no two of which can be more than 30 ft. from the primary target"
  },
  "Charm Monster": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 3 }],
    SpellListDescription:
      "Make one creature believe it is your ally for (CASTERLEVEL) days.",
    Descriptor: [SpellDescriptor.Charm, SpellDescriptor.MindAffecting],
    Duration: "(CASTERLEVEL) days",
    Level: 3,
    Description:
      "This charm makes a creature regard you as its trusted friend and ally (treat the target's attitude as friendly). If the creature is currently being threatened or attacked by you or your allies however it receives a +5 bonus to its saving throw. The spell does not enable you to control the charmed creature as if it were an automaton. It is unlikely to attempt to harm you but it is also unlikely to attack any of its true friends or allies. You can try to give the target suggestions but you must succeed at an opposed Charisma check to convince it to do anything it wouldn't ordinarily do. (Retries of this check are not allowed.) An affected creature never obeys suicidal or obviously harmful suggestions. Any act by you or your apparent allies that threatens the charmed creature breaks the spell. You must speak the creature's language to communicate your suggestions or else be good at pantomiming.",
    Range: "Close",
    SavingThrow: "Will negates",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.342",
    SpellResistance: "Yes",
    TargetsEffectArea: "One living creature"
  },
  "Charm Person": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 1 }],
    SpellListDescription:
      "Make one humanoid creature believe that it is your ally.",
    Descriptor: [SpellDescriptor.Charm, SpellDescriptor.MindAffecting],
    Duration: "(CASTERLEVEL) hours",
    Level: 1,
    Description:
      "This charm makes a humanoid creature regard you as its trusted friend and ally (treat the target's attitude as friendly). If the creature is currently being threatened or attacked by you or your allies however it receives a +5 bonus to its saving throw. The spell does not enable you to control the charmed creature as if it were an automaton. It is unlikely to attempt to harm you but it is also unlikely to attack any of its true friends or allies. You can try to give the target suggestions but you must succeed at an opposed Charisma check to convince it to do anything it wouldn't ordinarily do. (Retries of this check are not allowed.) An affected creature never obeys suicidal or obviously harmful suggestions. Any act by you or your apparent allies that threatens the charmed creature breaks the spell. You must speak the creature's language to communicate your suggestions or else be good at pantomiming.",
    Range: "Close",
    SavingThrow: "Will negates",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.342",
    SpellResistance: "Yes",
    TargetsEffectArea: "One humanoid creature"
  },
  "Clairaudience/Clairvoyance": {
    CastingTime: "10 minutes",
    Classes: [
      { class: Class.Mystic, level: 3 },
      { class: Class.Technomancer, level: 3 }
    ],
    SpellListDescription:
      "Hear or see at a distance for (CASTERLEVEL) minutes.",
    Descriptor: [SpellDescriptor.Scrying],
    Duration: "(CASTERLEVEL) minutes (D)",
    Level: 3,
    Description:
      "You create an invisible magical sensor at a specific location that enables you to hear or see (your choice) almost as if you were there. You don't need line of sight or line of effect to create this sensor in a specific spot within range but the locale must be either a place that's familiar to you or an obvious location such as inside a cave whose entrance you can see. The sensor doesn't move but you can rotate it in all directions to view the area as desired. This spell functions only on the plane of existence you are currently occupying.",
    Range: "Long",
    SavingThrow: "None",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.342",
    SpellResistance: "No",
    TargetsEffectArea: "Magical sensor"
  },
  Command: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 1 }],
    SpellListDescription: "One creature obeys a select command for 1 round.",
    Descriptor: [
      SpellDescriptor.Compulsion,
      SpellDescriptor.LanguageDependent,
      SpellDescriptor.MindAffecting
    ],
    Duration: "1 round",
    Level: 1,
    Description:
      "You give the target one of the following commands which it obeys to the best of its ability at its earliest opportunity. If the target can't carry out your command on its next turn the spell automatically fails. Approach - The target moves toward you as quickly and directly as possible for 1 round taking no other actions and triggering reactions (such as attacks of opportunity) for this movement as normal. Drop - The target drops whatever it is holding. It can't pick up any dropped item until its next turn. Fall - The target falls to the ground and remains prone for 1 round. It can otherwise act normally. Flee - The target moves away from you as quickly and directly as possible for 1 round taking no other actions and provoking reactions (such as attacks of opportunity) for this movement as normal. Halt - The target is dazed for 1 round.",
    Range: "Close",
    SavingThrow: "Will negates",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.343",
    SpellResistance: "Yes",
    TargetsEffectArea: "One living creature"
  },
  "Command (Greater)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 5 }],
    SpellListDescription:
      "Up to (CASTERLEVEL) creatures obey select command for (CASTERLEVEL) rounds.",
    Descriptor: [
      SpellDescriptor.Compulsion,
      SpellDescriptor.LanguageDependent,
      SpellDescriptor.MindAffecting
    ],
    Duration: "(CASTERLEVEL) rounds",
    Level: 5,
    Description:
      "This spell functions like command except you can affect up to (CASTERLEVEL) creatures and the targets continue the specified activity beyond 1 round. At the start of each commanded creature's action after the first it can attempt another Will saving throw to break free from the spell. Each creature must receive the same command. You give the targets one of the following commands which they obeys to the best of their ability at the earliest opportunity. If the targets can't carry out your command on its next turn the spell automatically fails. Approach - The targets move toward you as quickly and directly as possible for 1 round taking no other actions and triggering reactions (such as attacks of opportunity) for this movement as normal. Drop - The targets drop whatever they are holding. They can't pick up any dropped item until their next turn. Fall - The targets fall to the ground and remain prone for 1 round. They can otherwise act normally. Flee - The targets move away from you as quickly and directly as possible for 1 round taking no other actions and provoking reactions (such as attacks of opportunity) for this movement as normal. Halt - The targets are dazed for 1 round.",
    Range: "Close",
    SavingThrow: "Will negates",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.343",
    SpellResistance: "Yes",
    TargetsEffectArea:
      "Up to (CASTERLEVEL) creatures no two of which can be more than 30 ft. apart"
  },
  "Command Undead": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 2 },
      { class: Class.Technomancer, level: 2 }
    ],
    SpellListDescription: "Undead creature obeys your commands.",
    Descriptor: [SpellDescriptor.SenseDependent],
    Duration: "(CASTERLEVEL) days",
    Level: 2,
    Description:
      "This spell allows you a degree of control over an undead creature. If the target is intelligent it perceives your words and actions favorably (treat its attitude as friendly). It will not attack you while the spell lasts. You can give the target suggestions but you must succeed at an opposed Charisma check to convince it to do anything it wouldn't ordinarily do. (Retries are not allowed.) An intelligent commanded undead never obeys suicidal or obviously harmful suggestions but it might be convinced that something very dangerous is worth doing. An unintelligent undead creature gets no saving throw against this spell. When you control a mindless being you can communicate only basic commands such as Come here Go there Fight Stand still and so on. Unintelligent undead won't resist suicidal or obviously harmful orders. Any act by you or your apparent allies that threatens the commanded undead (regardless of its Intelligence) breaks the spell. You command the undead creature by voice and it understands you no matter what language you speak.",
    Range: "Close",
    SavingThrow: "Will negates; see text",
    School: SpellSchool.Necromancy,
    Source: "Core Rulebook",
    PageNumber: "p.343",
    SpellResistance: "Yes",
    TargetsEffectArea: "One undead creature"
  },
  "Commune with Nature": {
    Classes: [{ class: Class.Mystic, level: 5 }],
    Level: 5,
    CastingTime: "10 minutes",
    SpellListDescription: "Learn about terrain for (CASTERLEVEL) miles.",
    Duration: "Instantaneous",
    Description:
      "You become one with nature attaining knowledge of the surrounding territory. You instantly gain knowledge of up to three facts from among the following subjects; the ground or terrain plants minerals bodies of water people general animal population presence of native creatures presence of powerful unnatural creatures or general state of the natural setting. In outdoor settings the spell operates in a radius of (CASTERLEVEL) miles. In natural underground settings-caves caverns and the like-the spell is less powerful and its radius is limited to (CASTERLEVEL*100) feet. The spell does not function where nature has been replaced by construction or settlements such as in cities factories and starships.",
    Range: "Personal",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.344"
  },
  "Comprehend Languages": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 1 }],
    SpellListDescription:
      "You understand all spoken signed and written or tactile languages.",
    Duration: "(CASTERLEVEL*10) minutes (D)",
    Level: 1,
    Description:
      "You can understand the spoken or signed words of creatures or read otherwise incomprehensible written or tactile messages. The ability to read does not necessarily impart insight into the material merely its literal meaning. The spell enables you to understand or read an unknown language not speak or write it. You can't use this spell to read magic writing or encoded messages (though it does reveal if a message is magic or encoded) but you can use it to read raw computer code or foreign programming languages allowing you to understand enough to attempt Computers checks on those materials without penalties.",
    Range: "Personal",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.344"
  },
  Confusion: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 4 }],
    SpellListDescription: "Targets behave randomly for (CASTERLEVEL) rounds.",
    Descriptor: [SpellDescriptor.Compulsion, SpellDescriptor.MindAffecting],
    Duration: "(CASTERLEVEL) rounds",
    Level: 4,
    Description:
      "This spell causes confusion in all creatures in the area making them unable to determine their actions. Any confused creature that is attacked automatically attacks or attempts to attack its attackers on its next turn as long as it is still confused at the start of its next turn. Note that a confused creature will not make attacks of opportunity against any foe that it is not already devoted to attacking (either because of its most recent action or because it has just been attacked). For confused creatures that have not been attacked roll on the following table at the start of each affected creature's turn each round to see what it does in that round. [D% - BEHAVIOR] 1-25 Act normally; 26-50 Do nothing but babble incoherently; 51-75 Deal 1d8 + Str modifier damage to self with item in hand; 76-100 Attack nearest creature. A confused creature that can't carry out the indicated action does nothing but babble incoherently. Attackers are not at any special advantage when attacking a confused target.",
    Range: "Medium",
    SavingThrow: "Will negates",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.344",
    SpellResistance: "Yes",
    TargetsEffectArea: "15-ft.-radius burst"
  },
  "Confusion (Lesser)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 1 }],
    SpellListDescription: "One living creature is confused for 1 round.",
    Descriptor: [SpellDescriptor.Compulsion, SpellDescriptor.MindAffecting],
    Duration: "1 round",
    Level: 1,
    Description:
      "This spell causes a single creature to become confused for 1 round. Any confused creature that is attacked automatically attacks or attempts to attack its attackers on its next turn as long as it is still confused at the start of its next turn. Note that a confused creature will not make attacks of opportunity against any foe that it is not already devoted to attacking (either because of its most recent action or because it has just been attacked). For confused creatures that have not been attacked roll on the following table at the start of each affected creature's turn each round to see what it does in that round. [D% - BEHAVIOR] 1-25 Act normally; 26-50 Do nothing but babble incoherently; 51-75 Deal 1d8 + Str modifier damage to self with item in hand; 76-100 Attack nearest creature. A confused creature that can't carry out the indicated action does nothing but babble incoherently. Attackers are not at any special advantage when attacking a confused target.",
    Range: "Close",
    SavingThrow: "Will negates",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.344",
    SpellResistance: "Yes",
    TargetsEffectArea: "One living creature"
  },
  "Contact Other Plane": {
    CastingTime: "10 minutes",
    Classes: [
      { class: Class.Mystic, level: 5 },
      { class: Class.Technomancer, level: 5 }
    ],
    SpellListDescription: "Ask questions of extraplanar entity.",
    Duration: "Concentration",
    Level: 5,
    Description:
      "You send your mind to another plane of existence (an Elemental Plane or some plane further removed) in order to receive advice and information from powers there. The powers reply in a language you understand but they resent such contact and give only brief answers to your questions. All questions are answered with Yes No Maybe Never Irrelevant or some other one-word answer. You must concentrate on maintaining the spell in order to ask questions at the rate of one per round. A question is answered by the power during the same round. You can ask (CASTERLEVEL/2) questions. On rare occasions this divination may be blocked by an act of certain deities or forces. Contacting a minor planar power is relatively safe but may not result in useful answers. For each question you ask the GM secretly rolls 1d20. [1-2] The power gives you no answer the spell ends and you must attempt a DC 7 Intelligence check. On a failed check your Intelligence and Charisma scores each fall to 8 for a week and you are unable to cast spells for that period. [3-5] You receive a random answer to the question. [6-10] You receive an incorrect answer to the question. Based on the nature and needs of the creature contacted this may be a lie designed to harm you. [11-15] You receive no answer to the question. [16 or More] You receive a truthful and useful one-word answer. If the question can't be truthfully answered in this way no answer is received. Contact with minds further removed from your home plane increases the probability that you will incur a decrease in Intelligence and Charisma due to your brain being overwhelmed by the power's sheer strangeness and force but it also increases the chance of the power knowing the answer and answering correctly. You can add any value from +1 to +5 to the d20 roll to represent contacting increasingly powerful planar beings. However on a roll of 1 or 2 the result is still no answer the spell ends and you must attempt an Intelligence check to avoid losing Intelligence and Charisma. The DC of this Intelligence check is increased by the same amount added to the d20 check to contact a planar creature.",
    Range: "Personal",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.344"
  },
  "Control Gravity": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 6 },
      { class: Class.Technomancer, level: 6 }
    ],
    SpellListDescription: "Alter gravity in an area.",
    Duration: "(CASTERLEVEL) rounds (D)",
    Level: 6,
    Description:
      "You can control gravity in an area causing it to reverse become zero-g or become extremely strong. A creature or object within the area that succeeds at its saving throw is unaffected (though if it stays in the area it must succeed at a new save each round or become affected) but it might still suffer secondary effects (such as an object flying up from reversed gravity or an object falling upon it when the spell ends). You choose how to have this spell affect gravity when you cast it and you cannot change it without recasting the spell. If two control gravity spells affect the same area they negate each other in the area of overlap. If you reverse gravity in an area you cause unattached objects and creatures in the area to fall upward and reach the top of the affected area in 1 round. If a solid object (such as a ceiling) is encountered in this fall falling objects and creatures strike it in the same manner as they would during a normal downward fall. If an object or creature reaches the top of the spell's area without striking anything it remains there oscillating slightly until the spell ends. At the end of the spell's duration affected objects and creatures fall downward. Creatures who can fly or levitate can keep themselves from falling in either direction. If you increase gravity in the area creatures and objects weigh twice as much as normal move at half speed can jump only half as far as normal and can lift and carry only half as much as normal. Any flying target has its maneuverability worsened by one step (from average to clumsy for example; minimum clumsy) and plummets to the ground unless it succeeds at a DC 25 Acrobatics check to fly to remain in the air. An area of zero-g works like the zero-g environment (see page 402). You can also use this spell to make areas of zero-g heavy gravity or light gravity act as normal gravity for the duration (see page 402).",
    Range: "Medium",
    SavingThrow: "Fortitude negates; see text",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.345",
    SpellResistance: "Yes",
    TargetsEffectArea: "Up to (CASTERLEVEL/2) ten-foot cubes [S]"
  },
  "Control Machines": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 5 }],
    SpellListDescription:
      "Command technological constructs within range telepathically.",
    Duration: "Concentration up to (CASTERLEVEL) rounds",
    Level: 5,
    Description:
      "You wrest control of the target constructs and command them telepathically. You can issue commands to any number of controlled constructs on your turn beginning when you cast this spell as part of the concentration required to sustain its duration (a standard action). If any of the constructs are under the control of a hostile creature that controlling creature can attempt a Will saving throw (DC equal to this spell's) to negate this spell's effect. Each construct under the control of another creature grants its controlling creature a separate saving throw to negate the effect for that construct. While this spell is in effect the affected constructs follow any command you give them even if it would be dangerous to the controlled constructs. At the end of the spell the constructs revert to their normal behavior. If they are intelligent they know and remember that you used magic to control them.",
    Range: "Medium",
    SavingThrow: "Will negates",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.345",
    SpellResistance: "No",
    TargetsEffectArea:
      "Constructs of the technological subtype individual CRs no greater than (CASTERLEVEL+1) total CR no greater than (CASTERLEVEL*2) no two of which can be more than 30 ft. apart"
  },
  "Control Undead": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 6 },
      { class: Class.Technomancer, level: 6 }
    ],
    SpellListDescription:
      "Undead creatures follow your commands and don't attack you.",
    Duration: "(CASTERLEVEL) minutes",
    Level: 6,
    Description:
      "This spell enables you to control undead creatures for a short period of time. You command them by voice and they understand you no matter what language you speak. No matter what the controlled undead do not attack you. At the end of the spell the targets revert to their normal behavior. If any of the undead are under the control of a hostile creature that controlling creature can attempt a Will saving throw (DC = the spell's DC) to negate this spell's effect if the creature failed its initial saving throw. Each undead under the control of another creature grants its controlling creature a separate saving throw to negate the effect for that undead. Intelligent undead creatures remember that you controlled them and they may seek revenge after the spell's duration ends.",
    Range: "Close",
    SavingThrow: "Will negates",
    School: SpellSchool.Necromancy,
    Source: "Core Rulebook",
    PageNumber: "p.345",
    SpellResistance: "Yes",
    TargetsEffectArea:
      "Undead creatures with individual CRs no greater than (CASTERLEVEL+1) and a total CR no greater than (CASTERLEVEL*2) no two of which can be more than 30 ft. apart"
  },
  "Corrosive Haze": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 4 }],
    SpellListDescription:
      "Cloud deals 4d8 acid damage per round plus 10 additional damage.",
    Descriptor: [SpellDescriptor.Acid],
    Duration: "(CASTERLEVEL) rounds",
    Level: 4,
    Description:
      "A 5-foot cloud of acid-resistant nanites continually converts nearby water vapor into deadly acid. You can create the cloud in the same square as a creature and move it up to 30 feet in any direction as a move action on your turn. If the cloud enters (or is created in) a square containing a creature it can't move any farther that round and deals 4d6 acid damage to that creature (Reflex negates). The acidic cloud also corrodes any unattended objects along its path dealing them 4d8 acid damage. If you don't move the cloud it remains where it is; if it shares its square with any creature at the beginning of your turn that creature must succeed at a Reflex save or take 4d8 acid damage. Any creature that takes damage from the cloud takes 10 additional acid damage at the end of its next turn.",
    Range: "Medium",
    SavingThrow: "Reflex negates",
    School: SpellSchool.Evocation,
    Source: "Core Rulebook",
    PageNumber: "p.346",
    SpellResistance: "Yes",
    TargetsEffectArea: "5-ft.-diameter cloud of acid"
  },
  "Cosmic Eddy": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 4 }],
    SpellListDescription:
      "Whirlwind deals 4d6 damage and knocks creatures prone.",
    Duration: "(CASTERLEVEL) rounds (D)",
    Level: 4,
    Description:
      "You pull dormant mystical energy from the land and objects around you and use it to create a swirling eddy that batters your foes and can hinder their movement. The eddy deals 4d6 bludgeoning damage to each creature in the area. Additionally creatures in the area are knocked prone and are reduced to half speed while the spell is in effect. A creature that succeeds at a Reflex save takes only half damage and is not knocked prone but it is still reduced to half speed. Flying creatures within the eddy's area must attempt an Acrobatics check to fly (DC equals the spell's save DC) each round. Failure means the creature cannot move for that round. The spell deals damage and knocks creatures prone only once. However if a creature leaves the spell's area and then returns it is subject to the damage and other effects described above again (and can attempt another Reflex saving throw). Similarly if a creature is not in this spell's area when it is first cast but later moves into it it is subject to the damage and other effects described above. Small unattended items (no more than light bulk) are also thrown around in the eddy's area. At the end of the spell's duration such items land in a randomly determined space within the spell's area.",
    Range: "Medium",
    SavingThrow: "Reflex partial see text",
    School: SpellSchool.Evocation,
    Source: "Core Rulebook",
    PageNumber: "p.346",
    SpellResistance: "Yes",
    TargetsEffectArea: "20-ft.-radius spread"
  },
  "Creation (Level 4)": {
    CastingTime: "1 minute",
    Classes: [{ class: Class.Technomancer, level: 4 }],
    SpellListDescription: "Create one object made of vegetable matter.",
    Descriptor: [SpellDescriptor.Creation],
    Duration: "See text",
    Level: 4,
    Description:
      "You create a nonmagical nontechnological unattended object of nonliving matter. The volume of the item created can't exceed (CASTERLEVEL) cubic feet (or (CASTERLEVEL) bulk). You must succeed at an appropriate Engineering or Profession check to make a complex item and you can't create a consumable item.  When you cast creation as a 4th-level spell it creates an object made out of vegetable matter (such as wood) that has an item level no greater than (CASTERLEVEL/3). The duration is (CASTERLEVEL) hours.",
    Range: "0 ft.",
    SavingThrow: "None",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.347",
    SpellResistance: "No",
    TargetsEffectArea:
      "One nonmagical nontechnological object of nonliving matter up to (CASTERLEVEL) bulk; see text"
  },
  "Creation (Level 5)": {
    CastingTime: "1 minute",
    Classes: [{ class: Class.Technomancer, level: 5 }],
    SpellListDescription:
      "Create a single object made of vegetable or mineral matter.",
    Descriptor: [SpellDescriptor.Creation],
    Duration: "See text",
    Level: 5,
    Description:
      "You create a nonmagical nontechnological unattended object of nonliving matter. The volume of the item created can't exceed (CASTERLEVEL) cubic feet (or (CASTERLEVEL) bulk). You must succeed at an appropriate Engineering or Profession check to make a complex item and you can't create a consumable item.  When you cast creation as a 5th-level spell it creates an object made out of vegetable matter or material of a mineral nature; crystal metal stone or the like. The object can't have an item level greater than (CASTERLEVEL/2). The duration depends on the hardness and rarity of the created object as indicated on the following table. HARDNESS AND RARITY EXAMPLES DURATION - Vegetable matter (CASTERLEVEL*2) hours; Stone crystal base metals (CASTERLEVEL) hours; Precious metals (CASTERLEVEL*20) minutes; Gems (CASTERLEVEL*10) minutes; Rare metals* (CASTERLEVEL) rounds. *Includes adamantine alchemical silver mithral and skymetal alloys. You can't use a 5th-level creation spell to create a cold iron item.",
    Range: "0 ft.",
    SavingThrow: "None",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.347",
    SpellResistance: "No",
    TargetsEffectArea:
      "One nonmagical nontechnological object of nonliving matter up to (CASTERLEVEL) bulk; see text"
  },
  "Crush Skull": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 5 }],
    SpellListDescription: "Deal 18d8 damage to living creature's head.",
    Descriptor: [SpellDescriptor.Death],
    Duration: "Instantaneous",
    Level: 5,
    Description:
      "You manipulate the energy that swirls around the target's head pulling it inward and potentially crushing its skull. You must make a ranged attack against the target's EAC to ensure this spell hits the necessary weak spots in the target's head but you can add your key ability score modifier to this attack roll instead of your Dexterity modifier if it is higher. If you hit and the target fails a Fortitude saving throw it takes 18d8 damage. If the target succeeds at its saving throw it instead takes 4d8 damage. The target might die from damage even if it succeeds at its saving throw; in this case the spell is not a death effect. This spell has no effect against living creatures that don't have an anatomical head.",
    Range: "Close",
    SavingThrow: "Fortitude partial",
    School: SpellSchool.Necromancy,
    Source: "Core Rulebook",
    PageNumber: "p.347",
    SpellResistance: "Yes",
    TargetsEffectArea: "One living creature"
  },
  "Dancing Lights": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 0 }],
    SpellListDescription: "Create and direct up to four lights.",
    Duration: "1 minute (D)",
    Level: 0,
    Description:
      "You create up to four lights that resemble small headlights or flashlights. The dancing lights must stay within a 10-foot-radius area in relation to each other but otherwise move as you desire; forward or back up or down straight or turning corners or the like. The lights can move up to 100 feet per round. A light winks out if the distance between you and it exceeds the spell's range. You can have only one dancing lights spell active at a time. If you cast this spell while another casting is still in effect the previous casting is dispelled.",
    Range: "Medium",
    SavingThrow: "None",
    School: SpellSchool.Evocation,
    Source: "Core Rulebook",
    PageNumber: "p.347",
    SpellResistance: "No",
    TargetsEffectArea: "Up to four lights"
  },
  Darkvision: {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 2 },
      { class: Class.Technomancer, level: 2 }
    ],
    SpellListDescription: "Grant ability to see 60 feet in total darkness.",
    Duration: "(CASTERLEVEL) hours",
    Level: 2,
    Description:
      "The target gains the ability to see 60 feet even in total darkness. Darkvision is black and white only but otherwise like normal sight.",
    Range: "Touch",
    SavingThrow: "Will negates (harmless)",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.347",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "One creature or camera"
  },
  Daze: {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 0 },
      { class: Class.Technomancer, level: 0 }
    ],
    SpellListDescription: "Humanoid creature of CR 3 or lower is dazed.",
    Descriptor: [SpellDescriptor.Compulsion, SpellDescriptor.MindAffecting],
    Duration: "1 round",
    Level: 0,
    Description:
      "This spell short-circuits the mind of a humanoid creature with a CR of 3 or lower so that it is dazed (unable to take actions but taking no penalty to AC). Humanoids of CR 4 or higher are not affected. After a creature has been dazed by this spell it is immune to it for 1 minute.",
    Range: "Close",
    SavingThrow: "Will negates",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.347",
    SpellResistance: "Yes",
    TargetsEffectArea: "One humanoid creature of CR 3 or lower"
  },
  "Daze Monster": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 2 },
      { class: Class.Technomancer, level: 2 }
    ],
    SpellListDescription: "Target living creature of CR 5 or lower is dazed.",
    Descriptor: [SpellDescriptor.Compulsion, SpellDescriptor.MindAffecting],
    Duration: "1 round",
    Level: 2,
    Description:
      "This spell short-circuits the mind of a creature with a CR of 5 or lower so that it is dazed (unable to take actions but taking no penalty to AC). Humanoids of CR 6 or higher are not affected. After a creature has been dazed by this spell it is immune to it for 1 minute.",
    Range: "Medium",
    SavingThrow: "Will negates",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.347",
    SpellResistance: "Yes",
    TargetsEffectArea: "One living creature of CR 5 or lower"
  },
  "Death Ward": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 4 }],
    SpellListDescription:
      "Target gains +4 bonus to saves against death spells and is immune to negative energy and gaining negative levels.",
    Duration: "(CASTERLEVEL) minutes",
    Level: 4,
    Description:
      "The target gains a +4 morale bonus to saving throws against all spells and effects with the death descriptor. The target can attempt a save to negate such effects even if one is not normally allowed. The target can't gain negative levels and is immune to any negative energy effects. This spell does not remove negative levels the target has already gained but it does remove the penalties from negative levels for the duration of its effect. Death ward does not protect against other sorts of attacks even if those attacks might be lethal.",
    Range: "Touch",
    SavingThrow: "Will negates (harmless)",
    School: SpellSchool.Necromancy,
    Source: "Core Rulebook",
    PageNumber: "p.348",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "One living creature"
  },
  "Deep Slumber": {
    CastingTime: "1 round",
    Classes: [{ class: Class.Mystic, level: 3 }],
    SpellListDescription:
      "Put a number of creatures whose CRs total 8 or less to sleep.",
    Descriptor: [SpellDescriptor.Compulsion, SpellDescriptor.MindAffecting],
    Duration: "(CASTERLEVEL) minutes",
    Level: 3,
    Description:
      "This spell causes living creatures in the area to fall into a magical sleep gaining the asleep condition (except normal noise doesn't wake up the sleeping creatures). Creatures with the lowest CR are affected first. Among creatures of equal CR those who are closest to the spell's point of origin are affected first. Deep slumber doesn't affect unconscious creatures constructs or undead creatures.",
    Range: "Close",
    SavingThrow: "Will negates",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.348",
    SpellResistance: "Yes",
    TargetsEffectArea:
      "One or more living creatures with a total CR of 8 or lower all within a 10-ft.-radius burst"
  },
  "Destruction Protocol": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 4 }],
    SpellListDescription:
      "Turn nonhostile technological construct against your foes.",
    Duration: "Concentration up to (CASTERLEVEL) rounds",
    Level: 4,
    Description:
      "Waves of inciting programming ebb from your touch reprogramming a construct to have murderous intentions toward your enemies. This spell must target a construct that is not already programmed or tasked with harming you. The target construct must have a CR lower than (CASTERLEVEL). If the target construct is under the control of another creature the controlling creature can attempt a Will saving throw (DC = the spell's DC) to negate this spell's effect. While this spell is in effect the construct is under your control. On your turn starting when you cast this spell you must direct it to attack a target; the construct then pursues and attacks this target as best it can. You can change which target the construct attacks as part of your concentration to continue this spell's duration (a standard action). When you stop concentrating or when the spell's duration otherwise ends the construct immediately stops following your commands to attack.",
    Range: "Touch",
    SavingThrow: "None",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.348",
    SpellResistance: "Yes",
    TargetsEffectArea:
      "One nonhostile construct of the technological subtype; see text"
  },
  "Detect Affliction": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 0 },
      { class: Class.Technomancer, level: 0 }
    ],
    SpellListDescription:
      "Determine whether a creature or object has been poisoned is diseased is cursed or is suffering a similar affliction.",
    Duration: "Instantaneous",
    Level: 0,
    Description:
      "You determine whether a creature or object has been poisoned is diseased is cursed or is suffering a similar affliction. If the target is poisoned or diseased you automatically detect that fact and can determine the exact type of poison or disease with a successful DC 20 Intelligence or Wisdom check. If you are trained in Life Science or Medicine (depending on the nature of the poison or disease) you can attempt a DC 20 check of that skill if you fail your Wisdom or Intelligence check. If the target is cursed or suffering from a similar affliction you must succeed at a DC 20 Intelligence or Wisdom check to determine that fact. You can then determine the exact nature of the curse with a successful DC 25 Mysticism check.",
    Range: "Close",
    SavingThrow: "None",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.348",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "One creature or object"
  },
  "Detect Magic": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 0 },
      { class: Class.Technomancer, level: 0 }
    ],
    SpellListDescription: "Detect spells and magic items within 60 feet.",
    Duration: "Concentration up to (CASTERLEVEL) minutes",
    Level: 0,
    Description:
      "You detect all magic spells effects items and objects (including those on or affecting creatures you can see) as well as hybrid items in the area. You can't detect magical traps in this way as they are created with additional magic that wards them from this common spell. Each round you concentrate on the same area you can determine if one magic source you detect is from a spell magic item or other effect and the caster level (or item level) of the effect. You can't determine if there are magic sources in areas you can't see or if there was a magic source in an area at one time but that has since expired.",
    Range: "60 ft.",
    SavingThrow: "None",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.348",
    SpellResistance: "No",
    TargetsEffectArea: "Cone-shaped emanation"
  },
  "Detect Radiation": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 1 },
      { class: Class.Technomancer, level: 1 }
    ],
    SpellListDescription: "Detect radiation within 120 feet.",
    Duration: "(CASTERLEVEL*10) minutes",
    Level: 1,
    Description:
      "You detect radiation in the surrounding area and you can determine the specific intensity of the radiation of one area or object within the spell's area each round without taking an action (see Radiation on page 403 for more details). The spell can penetrate barriers but 3 feet of dirt or wood 1 foot of stone 1 inch of common metal a thin sheet of lead or any force field blocks it.",
    Range: "120 ft.",
    SavingThrow: "None",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.348",
    SpellResistance: "No",
    TargetsEffectArea: "120-ft. spherical emanation centered on you"
  },
  "Detect Tech": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 1 }],
    SpellListDescription:
      "Detect technological items with charges or that replenish charges within 60 feet.",
    Duration: "Instantaneous",
    Level: 1,
    Description:
      "You detect all technological items (even hybrid items) with charges or that replenish charges in the area including batteries power cells and generators (as well as such items that are on creatures you can see even if the creatures have hidden those items on themselves). You can't determine if there are technological items in areas you can't see nor can you detect technological traps in this way. The information this spell provides allows you to differentiate between charged items and items that replenish charges but it does not provide any further information nor does it tell you for example how many charges an item currently has or how many maximum charges it can hold. This spell can penetrate barriers but 3 feet of dirt or wood 1 foot of stone 1 inch of common metal a thin sheet of lead or any force field blocks it.",
    Range: "60 ft.",
    SavingThrow: "None",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.349",
    SpellResistance: "No",
    TargetsEffectArea: "Cone-shaped burst"
  },
  "Detect Thoughts": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 1 }],
    SpellListDescription: "Listen to surface thoughts.",
    Descriptor: [SpellDescriptor.MindAffecting],
    Duration: "Concentration up to (CASTERLEVEL) minutes",
    Level: 1,
    Description:
      "You detect the surface thoughts of intelligent creatures around you. The amount of information revealed depends on how long you study a particular area or target. [1st Round] You detect the presence or absence of thoughts from conscious creatures that have Intelligence scores of at least 1 (or an Intelligence modifier of -5) or higher. [2nd Round] You detect the number of thinking minds and the Intelligence score (or modifier) of each. If the highest Intelligence score is 26 (or a modifier of +8) or higher and at least 10 points higher than your own Intelligence score (or 5 points higher than your own Intelligence modifier) you are stunned for 1 round and the spell ends. This spell doesn't let you determine the location of the thinking minds if you can't see the creatures whose thoughts you are detecting. [3rd Round] You can read the surface thoughts of any mind in the area. A target who succeeds at its Will save prevents you from reading its thoughts and you must cast detect thoughts again to have another chance. Creatures of animal intelligence (an Intelligence score of 1 or 2 or an Intelligence modifier of -4 or lower) have simple instinctual thoughts. Each round you can turn to detect thoughts in a new area. The spell can penetrate barriers but 3 feet of dirt or wood 1 foot of stone 1 inch of common metal a thin sheet of lead or any force field blocks it.",
    Range: "60 ft.",
    SavingThrow: "Will negates; see text",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.349",
    SpellResistance: "No",
    TargetsEffectArea: "Cone-shaped emanation"
  },
  "Dimension Door": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 4 }],
    SpellListDescription: "Teleport a short distance.",
    Descriptor: [SpellDescriptor.Teleportation],
    Duration: "Instantaneous",
    Level: 4,
    Description:
      "You instantly transfer yourself from your current location to any other spot within range. You always arrive at exactly the spot desired-whether by simply visualizing the area or by stating its direction. You can bring along objects as long as their weight doesn't exceed your maximum load. You can also bring up to four additional willing or unconscious Medium or smaller creatures (carrying gear or objects up to their maximum load) or their equivalent. A Large creature counts as two Medium creatures and a Huge creature counts as two Large creatures. All creatures to be transported must be in contact with one another and at least one of those creatures must be in contact with you. After using this spell you can't take any other actions until your next turn (and each creature traveling with you can't take any other actions until its next turn). If you arrive in a place that is already occupied by a solid body you and each creature traveling with you each take 1d6 damage and are shunted to a random open space on a suitable surface within 100 feet of the intended location. If there is no free space within 100 feet you and each creature traveling with you take 2d6 additional damage and are shunted to a free space within 1000 feet. If there is no free space within 1000 feet you and each creature traveling with you take 4d6 additional damage and the spell simply fails.",
    Range: "Long",
    SavingThrow: "None Will negates (object)",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.349",
    SpellResistance: "No yes (object)",
    TargetsEffectArea:
      "You and touched objects or touched willing or unconscious creatures"
  },
  "Discern Lies": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 4 }],
    SpellListDescription: "Reveal deliberate falsehoods.",
    Duration: "Concentration up to (CASTERLEVEL) rounds",
    Level: 4,
    Description:
      "Each round you concentrate on one target within range. You know if the target deliberately and knowingly speaks a lie by discerning disturbances in its aura caused by lying. The spell does not reveal the truth or uncover unintentional inaccuracies and it doesn't necessarily reveal evasions. Each round you can concentrate on a different target.",
    Range: "Close",
    SavingThrow: "Will negates",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.349",
    SpellResistance: "No",
    TargetsEffectArea:
      "Up to (CASTERLEVEL) creatures no two of which can be more than 30 ft. apart"
  },
  Discharge: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 3 }],
    SpellListDescription:
      "Disrupts or depowers one target technological item or construct.",
    Duration: "Instantaneous",
    Level: 3,
    Description:
      "You can dissipate the charges from one technological object temporarily depower one electrically powered technological object that does not use charges or severely hinder a construct with the technological subtype. If the spell targets an object with charges the object loses all of its remaining charges. If the object is powered by electrical means other than charges its functions are suppressed for 1d4 rounds. If the spell targets a creature not of the technological subtype it affects a random charged or electrically powered item in that creature's possession. If the target is a construct with the technological subtype it is staggered and cannot use any energy-based attacks for 1d4 rounds. A construct with the technological subtype that is affected by this spell can attempt a Fortitude saving throw at the end of each round to shrug off the effect.",
    Range: "Medium",
    SavingThrow: "Fortitude negates (object)",
    School: SpellSchool.Abjuration,
    Source: "Core Rulebook",
    PageNumber: "p.350",
    SpellResistance: "No",
    TargetsEffectArea: "One creature or technological object"
  },
  "Discharge (Greater)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 6 }],
    SpellListDescription:
      "Disrupts or depowers multiple technological items or constructs.",
    Duration: "Instantaneous",
    Level: 6,
    Description:
      "You can dissipate the charges from technological objects temporarily depower electrically powered technological objects that do not use charges or severely hinder a construct with the technological subtype. If the spell targets an object with charges the object loses all of its remaining charges. If the object is powered by electrical means other than charges its functions are suppressed for 1d4 rounds. If the spell targets a creature not of the technological subtype it affects a random charged or electrically powered item in that creature's possession. If the target is a construct with the technological subtype it is staggered and cannot use any energy-based attacks for 1d4 rounds. A construct with the technological subtype that is affected by this spell can attempt a Fortitude saving throw at the end of each round to shrug off the effect. This spell functions as discharge except it can discharge multiple technological objects. You can use it in one of two ways - an area discharge or a targeted discharge. [Area Discharge] When used in this way the spell affects everything within a 20-foot-radius burst. Each creature in the area is affected as though by discharge (affecting only one object in the creature's possession) and each unattended object is similarly affected. [Targeted Discharge] If this spell targets a single creature it can discharge (CASTERLEVEL/4) randomly determined objects from the target's charged or electrically powered possessions.",
    Range: "Medium",
    SavingThrow: "Fortitude negates (object)",
    School: SpellSchool.Abjuration,
    Source: "Core Rulebook",
    PageNumber: "p.350",
    SpellResistance: "No",
    TargetsEffectArea:
      "One creature or technological object or a 20-ft.-radius burst"
  },
  "Disguise Self": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 1 },
      { class: Class.Technomancer, level: 1 }
    ],
    SpellListDescription: "Change your appearance.",
    Duration: "(CASTERLEVEL*10) minutes (D)",
    Level: 1,
    Description:
      "You make yourself-and any clothing armor weapons and equipment on you-look different. You can seem up to 1 foot shorter or taller thin fat or in between. You can't change your creature type (although you can appear as another subtype). Otherwise the extent of the apparent change is up to you. You could merely add or obscure a minor feature or you could look like an entirely different person or gender. The spell does not provide the abilities or mannerisms of the chosen form nor does it alter the perceived tactile (touch) or audible (sound) properties of you or your equipment. If you use this spell to create a disguise you gain a +10 circumstance bonus to the Disguise check (since it counts as altering your form). A creature that interacts with you directly can attempt a Will saving throw to recognize your appearance as an illusion.",
    Range: "Personal",
    School: SpellSchool.Illusion,
    Source: "Core Rulebook",
    PageNumber: "p.350"
  },
  Disintegrate: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 6 }],
    SpellListDescription: "Ray reduces one creature or object to dust.",
    Duration: "Instantaneous",
    Level: 6,
    Description:
      "Immense power shoots from your finger with the potential to disintegrate a target where it stands. When you cast this spell a thin green ray springs from your pointing finger. You must make a ranged attack against your target's EAC but you can add your key ability score bonus to this attack instead of your Dexterity modifier if it is higher. If you hit the target takes 14d20 damage. Any creature reduced to 0 Hit Points by this spell is entirely disintegrated leaving behind only a trace of fine dust. A disintegrated creature's equipment is unaffected. Only one target is affected per casting of this spell. When used against an object the ray simply disintegrates as much as a 10-foot cube of nonliving matter. Thus the spell disintegrates only part of any very large object or structure targeted. The ray affects even objects constructed entirely of force but it does not affect other magical effects that are not an object creature or force effect. A creature or object that succeeds at a Fortitude saving throw is partially affected taking only 4d20 damage. If this damage reduces the creature or object to 0 Hit Points the target is entirely disintegrated.",
    Range: "Medium",
    SavingThrow: "Fortitude partial (object)",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.350",
    SpellResistance: "Yes",
    TargetsEffectArea:
      "One creature or object or up to a 10-ft. cube of nonliving matter"
  },
  "Dismissal (Level 4)": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 4 },
      { class: Class.Technomancer, level: 4 }
    ],
    SpellListDescription: "Force a creature to return to its native plane.",
    Duration: "Instantaneous",
    Level: 4,
    Description:
      "The spell instantly forces one or more extraplanar creatures off your current plane, whisking them away instantly-usually to the creature's home plane, but there is a 20% chance of sending the target to a random plane other than its own. You can improve the spell's chance of success by presenting one object or substance that the target fears, hates, or otherwise opposes; you gain a +1 circumstance bonus to your caster level check to overcome the target's spell resistance (if any), and the save DC of the spell increases by 2. At the GM's discretion, certain rare items might work twice as well, providing a +2 circumstance bonus to the caster level check to overcome spell resistance and increasing the spell's save DC by 4. When you cast dismissal as a 4th-level spell, it affects one extraplanar creature.",
    Range: "Close",
    SavingThrow: "Will negates, see text",
    School: SpellSchool.Abjuration,
    Source: "Core Rulebook",
    PageNumber: "p.350",
    SpellResistance: "Yes",
    TargetsEffectArea: "See text"
  },
  "Dismissal (Level 5)": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 5 },
      { class: Class.Technomancer, level: 5 }
    ],
    SpellListDescription:
      "Force extraplanar creatures whose total CR is no greater than (CASTERLEVEL+2) to return to their native planes.",
    Duration: "Instantaneous",
    Level: 5,
    Description:
      "The spell instantly forces one or more extraplanar creatures off your current plane, whisking them away instantly-usually to the creature's home plane, but there is a 20% chance of sending the target to a random plane other than its own. You can improve the spell's chance of success by presenting one object or substance that the target fears, hates, or otherwise opposes; you gain a +1 circumstance bonus to your caster level check to overcome the target's spell resistance (if any), and the save DC of the spell increases by 2. At the GM's discretion, certain rare items might work twice as well, providing a +2 circumstance bonus to the caster level check to overcome spell resistance and increasing the spell's save DC by 4. When you cast dismissal as a 5th-level spell, it affects a number of extraplanar creatures whose total CR can't exceed (CASTERLEVEL+2), no two of which can be more than 30 feet apart.",
    Range: "Close",
    SavingThrow: "Will negates, see text",
    School: SpellSchool.Abjuration,
    Source: "Core Rulebook",
    PageNumber: "p.350",
    SpellResistance: "Yes",
    TargetsEffectArea: "See text"
  },
  "Dispel Magic": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 3 },
      { class: Class.Technomancer, level: 3 }
    ],
    SpellListDescription: "Cancel one magical spell or effect.",
    Duration: "Instantaneous",
    Level: 3,
    Description:
      "You can use dispel magic to end one ongoing spell that has been cast on a creature or object to temporarily suppress the magical abilities of a magic item or to counter another spellcaster's spell. A dispelled spell ends as if its duration had expired. Some spells as detailed in their descriptions can't be defeated by dispel magic. Dispel magic can dispel (but not counter) spell-like abilities just as it does spells. The effect of a spell with an instantaneous duration can't be dispelled. You choose to use dispel magic in one of two ways as a targeted dispel or as a counter. [Targeted Dispel] One creature object or spell is the target of the dispel magic spell. You can also use a targeted dispel to specifically end one spell affecting the target or one spell affecting an area (such as zone of truth). You must name the specific spell effect to be targeted in this way or otherwise uniquely identify it (such as that burning wall or the spell that's giving him those duplicates). Attempt a dispel check (1d20 + your caster level) with a DC equal to 11 + the spell's caster level. If you succeed the spell ends. If you don't specify a spell and there is more than one possible spell on the target your targeted dispel attempts to dispel a spell at random. If you target a force an object or a creature that is the effect of an ongoing spell (such as unseen servant) you attempt a dispel check to end the spell that conjured the object or creature. If the object that you target is a magic item you attempt a dispel check against the item level (DC = 11 + the item level). If you succeed all the item's magical properties are suppressed for 1d4 rounds after which the item recovers its magical properties. A suppressed item becomes nonmagical for the duration of the effect. A magic item's nonmagical physical properties are unchanged; a suppressed holy laser pistol is still a laser pistol. Artifacts and deities are unaffected by mortal magic such as this. You can choose to automatically succeed at your dispel check against any spell you have cast. [Counter] You can use the energy of dispel magic to disrupt the casting of other spells. First select an opponent and take the ready action (see page 249) to cast dispel magic when that target casts a spell. This is considered a purely defensive action. When that readied action is triggered you cast dispel magic and must attempt a dispel check (1d20 + your caster level) to counter the other spellcaster's spell. The DC is equal to 11 + the other spellcaster's caster level. If the check is successful and the target is in range the spell fails and has no result.",
    Range: "Medium",
    SavingThrow: "None",
    School: SpellSchool.Abjuration,
    Source: "Core Rulebook",
    PageNumber: "p.351",
    SpellResistance: "No",
    TargetsEffectArea: "One creature object spell or spellcaster"
  },
  "Dispel Magic (Greater)": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 5 },
      { class: Class.Technomancer, level: 5 }
    ],
    SpellListDescription: "Cancel multiple spells or effects.",
    Duration: "Instantaneous",
    Level: 5,
    Description:
      "This spell functions like dispel magic except it can end more than one spell on a target and it can be used to target multiple creatures. You choose to use greater dispel magic in one of three ways a targeted dispel an area dispel or a counter. [Targeted Dispel] This functions as a targeted dispel magic but you can dispel one spell for every 4 caster levels you have attempting a separate dispel check for each spell. Additionally greater dispel magic has a chance to dispel any curse that remove affliction can remove even if dispel magic can't dispel that effect. The DC of this check is equal to the curse's DC. [Area Dispel] When greater dispel magic is used in this way the spell affects everything within a 20-foot-radius burst. Attempt one dispel check and apply that check to each creature or object in the area as if it were targeted by dispel magic. If you don't specify spells and there is more than one possible spell on the target your targeted dispel attempts to dispel spells at random. Magic items themselves are not affected by an area dispel but additional magical effects on them may be dispelled. For each ongoing spell effect whose point of origin is within the area of the greater dispel magic spell apply the result of the dispel check to dispel the spell. For each ongoing spell whose area overlaps that of the greater dispel magic spell apply the result of the dispel check to end the effect but only within the overlapping area. If an object or a creature that is the effect of an ongoing spell is in the area apply the result of the dispel check to end the spell that conjured that object or creature (returning it whence it came) in addition to attempting to dispel one spell targeting the creature or object. You can choose to automatically succeed at your dispel check against any spell you have cast. [Counter] This functions as countering with dispel magic but you receive a +4 bonus to your dispel check to counter the other spellcaster's spell.",
    Range: "Medium",
    SavingThrow: "None",
    School: SpellSchool.Abjuration,
    Source: "Core Rulebook",
    PageNumber: "p.352",
    SpellResistance: "No",
    TargetsEffectArea:
      "One creature object spell or spellcaster; or a 20-ft.-radius burst"
  },
  Displacement: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 3 }],
    SpellListDescription: "Attacks miss target 50% of the time.",
    Duration: "(CASTERLEVEL) rounds (D)",
    Level: 3,
    Description:
      "The target of this spell appears to be about 2 feet away from its true location. The creature benefits from a 50% miss chance as if it had total concealment. Unlike actual total concealment displacement doesn't prevent enemies from targeting the creature normally. True seeing reveals the target's true location and negates the miss chance. If a creature with blindsense can also see the displaced creature the visual and blindsense information combined are enough for the creature with blindsense to attack the displaced creature without a miss chance unlike normal for blindsense.",
    Range: "Touch",
    SavingThrow: "Will negates (harmless)",
    School: SpellSchool.Illusion,
    Source: "Core Rulebook",
    PageNumber: "p.352",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "One creature"
  },
  Divination: {
    CastingTime: "10 minutes",
    Classes: [{ class: Class.Mystic, level: 4 }],
    SpellListDescription: "Gain useful advice for specific proposed actions.",
    Duration: "Instantaneous",
    Level: 4,
    Description:
      "Similar to augury but more powerful a divination spell can provide you with a useful piece of advice in reply to a question concerning a specific goal event or activity that is to occur within 1 week. Casting this spell requires you to expend 1 Resolve Point. The advice granted by the spell can be as simple as a short phrase or it might take the form of a cryptic rhyme or omen. If you don't act on the information the conditions may change so that the information is no longer useful. The chance for a correct divination is 75%. If the die roll fails you know the spell failed unless specific magic yielding false information is at work. As with augury multiple castings of divination about the same topic by the same caster use the same die result as the first divination spell and yield the same answer each time.",
    Range: "Personal",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.352"
  },
  "Dominate Person": {
    CastingTime: "1 round",
    Classes: [{ class: Class.Mystic, level: 5 }],
    SpellListDescription: "Control humanoid telepathically.",
    Descriptor: [SpellDescriptor.Compulsion, SpellDescriptor.MindAffecting],
    Duration: "(CASTERLEVEL) days; see text",
    Level: 5,
    Description:
      "You fire a bright purple ray at your target making a ranged attack against your target's EAC but you can add your key ability score bonus to this attack instead of your Dexterity modifier if it is higher. If you hit and your target fails its Will saving throw you establish a telepathic link with the target's mind and can control its actions. If you and the target have a common language you can generally force the target to perform as you desire within the limits of its abilities. If no common language exists you can communicate only basic commands such as Come here Go there Fight and Stand still. You know what the target is experiencing but you don't receive direct sensory input from it nor can it communicate with you telepathically. Once you have given a dominated creature a command it continues to attempt to carry out that command to the exclusion of all other activities except those necessary for day-to-day survival (such as sleeping eating and so forth). Changing your orders or giving a dominated creature a new command is a move action. By concentrating fully on the spell (a standard action) you can receive full sensory input as interpreted by the mind of the target though it still can't communicate with you. You don't actually see through the target's eyes but you still get a good idea of what's going on. The target resists this control and any target forced to take actions against its nature can attempt a new saving throw with a +2 bonus. Obviously self-destructive orders are not carried out. Once control is established the range at which it can be exercised is unlimited as long as you and the target are on the same plane. You don't need to see the target to control it. If you don't spend at least 1 round concentrating on the spell each following day the target can attempt a new saving throw to throw off the domination. You can be prevented from exercising control or using the telepathic link while the target is under the effects of some spells but such effects don't automatically dispel the domination.",
    Range: "Close",
    SavingThrow: "Will negates",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.352",
    SpellResistance: "Yes",
    TargetsEffectArea: "One humanoid"
  },
  "Energy Ray": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 0 }],
    SpellListDescription: "Ray deals 1d3 acid cold electricity or fire damage.",
    Descriptor: [SpellDescriptor.Creation],
    Duration: "Instantaneous",
    Level: 0,
    Description:
      "When you cast this spell choose acid cold electricity or fire; the spell gains that descriptor. You fire a ray at the target and you must make a ranged attack against its EAC. On a hit the ray deals 1d3 damage of the chosen energy type.",
    Range: "Close",
    SavingThrow: "None",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.353",
    SpellResistance: "Yes",
    TargetsEffectArea: "One creature or object"
  },
  Enervation: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 4 }],
    SpellListDescription: "Ray imposes 2 negative levels.",
    Duration: "Instantaneous",
    Level: 4,
    Description:
      "You shoot a black ray at a target making a ranged attack against the target's EAC. If you hit the target gains 2 temporary negative levels. Negative levels stack. If the target survives it recovers from negative levels after %1 hours. An undead creature struck by the ray gains 10 temporary Hit Points for 1 hour.|min(15CASTERLEVEL)",
    Range: "Close",
    SavingThrow: "None",
    School: SpellSchool.Necromancy,
    Source: "Core Rulebook",
    PageNumber: "p.353",
    SpellResistance: "Yes",
    TargetsEffectArea: "One creature"
  },
  "Enshrining Refuge": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 6 }],
    SpellListDescription:
      "Targets can't attack or be attacked but can exist comfortably.",
    Duration: "(CASTERLEVEL) rounds (D)",
    Level: 6,
    Description:
      "All creatures within a 40-foot radius of the spell's point of origin are protected from violence. Any opponent attempting to directly attack a warded creature even with a targeted spell must attempt a Will saving throw. If the opponent succeeds it can attack that creature normally though it takes a -2 penalty to attacks against that creature for the duration of the spell. On a failed save the opponent can't follow through with the attack loses that action and can't directly attack the warded creature for the duration of the spell. Those not attempting to attack a warded creature remain unaffected. This spell doesn't prevent warded creatures from being affected by an attack with an area of effect though a warded creature receives a +2 bonus to saving throws against such attacks. Each warded creature can breathe normally no matter the surrounding atmosphere and it suffers no harm from being in a hot or cold environment. A warded creature can't attack without breaking the spell for itself but it can use harmless spells and abilities that don't require attack rolls and it can act otherwise.",
    Range: "Close",
    SavingThrow: "Will negates; see text",
    School: SpellSchool.Abjuration,
    Source: "Core Rulebook",
    PageNumber: "p.353",
    SpellResistance: "No",
    TargetsEffectArea: "All creatures in 40-ft. radius burst"
  },
  "Entropic Grasp": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 3 }],
    SpellListDescription:
      "Touch decays a construct or nonmagical manufactured item once per round for (CASTERLEVEL) rounds.",
    Duration: "See text",
    Level: 3,
    Description:
      "Any unattended manufactured (built from component parts including metal wood plastic glass and so on) item you touch crumbles into dust rust and decay. If the item is so large that it can't fit within a 3-foot radius a 3-foot-radius volume of the material is destroyed. This is an instantaneous effect. You can employ entropic grasp in combat by making a melee attack against your opponent's EAC. If you hit you instantaneously reduce a manufactured armor's KAC and EAC bonus by 3 (to a minimum of a +0 bonus). Damaged armor can be repaired using the Engineering skill; with a successful check the armor's armor bonuses are restored to their original values. Against a manufactured creature (generally constructs but not undead) this attack instead deals 6d12 damage. Weapons and equipment in use by an opponent are more difficult to affect with this spell. You attempt a sunder combat maneuver against the item. If successful you deal 6d6 damage to the weapon or item. Used in combat this spell lasts (CASTERLEVEL) rounds and you can make one melee attack each round on future rounds as a standard action. The target can attempt a save to negate each melee attack but success does not end the spell. Casting this spell doesn't provoke attacks of opportunity.",
    Range: "Touch",
    SavingThrow: "Fortitude negates (object)",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.353",
    SpellResistance: "No",
    TargetsEffectArea:
      "One nonmagical manufactured object (or the volume of the object within a 3-ft.-radius of the touched point) or one manufactured creature touched each round"
  },
  Erase: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 1 }],
    SpellListDescription:
      "Remove writings of either magical or mundane nature.",
    Duration: "Instantaneous",
    Level: 1,
    Description:
      "Erase removes writings of either magical or mundane nature from any written storage including paper computers or similar devices. You remove up to 1500 words worth of text (for computer files this could be a 1500-word data file or 1500 words of computer code). With this spell you can remove magic runes and glyphs created by spells of 3rd-level and lower. Nonmagical writing in a book or manual is automatically erased if you touch it and no one else is holding it. Magical writing and computer programs must be touched (either directly or by touching the physical drive that holds the file) to be erased and you must also succeed at a caster level check (1d20 + caster level) with a DC equal to 11 + the caster level for the magical writing or the item level of the computer's drive. Computers generally keep backups on a round-by-round basis and when you erase code from a computer it takes 1 round for the computer to access its backups. If you erase a file that stores continuous data (like a camera feed) the computer won't be able to recover the missing round. A natural 1 is always a failure on this check. If you fail to erase writing that is part of a trap (magical or otherwise) you set off that trap.",
    Range: "Close",
    SavingThrow: "None",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.353",
    SpellResistance: "No",
    TargetsEffectArea: "One written data set"
  },
  "Ethereal Jaunt": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 6 },
      { class: Class.Technomancer, level: 6 }
    ],
    SpellListDescription: "You become ethereal for 1 round per level.",
    Duration: "(CASTERLEVEL) rounds (D)",
    Level: 6,
    Description:
      "You become ethereal along with your equipment. For the duration of the spell you are on the Ethereal Plane which overlaps the Material Plane. When the spell expires you return to material existence. An ethereal creature is invisible insubstantial and capable of moving in any direction even up or down albeit at half normal speed. As an insubstantial creature you can move through solid objects including living creatures. An ethereal creature can see and hear events and creatures on the Material Plane but everything looks gray and ephemeral. Sight and hearing on the Material Plane are limited to 60 feet and many kinds of senses (such as blindsense and blindsight) don't work across the planar boundary. Force effects and abjurations affect an ethereal creature normally but force effects originating on the Ethereal Plane don't affect targets on the Material Plane. An ethereal creature can't attack material creatures and spells you cast while ethereal affect only other ethereal things. Certain material creatures and objects have attacks or effects that work on the Ethereal Plane. Treat other ethereal creatures and ethereal objects as you would if you were both on the Material Plane. If you end the spell and become material while inside a material object (such as a solid wall) you are shunted to the nearest open space and take 1d6 damage per 5 feet that you so travel.",
    Range: "Personal",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.354"
  },
  "Explosive Blast": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 3 }],
    SpellListDescription:
      "Deal 9d6 fire damage to creatures in a 20-foot radius.",
    Descriptor: [SpellDescriptor.Fire],
    Duration: "Instantaneous",
    Level: 3,
    Description:
      "You magically transform a used battery into a powerful explosive device propelling it in a straight line to a grid intersection within range at which point it detonates dealing 9d6 fire damage to all creatures and objects in the area. If you send the battery through a narrow opening you must make a ranged attack (usually against an Armor Class of 10 for a narrow opening or an Armor Class of 15 for an extremely narrow opening) to avoid hitting the side and detonating it prematurely.",
    Range: "Medium",
    SavingThrow: "Reflex half",
    School: SpellSchool.Evocation,
    Source: "Core Rulebook",
    PageNumber: "p.354",
    SpellResistance: "Yes",
    TargetsEffectArea: "20-ft.-radius burst"
  },
  Fatigue: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 0 }],
    SpellListDescription: "Touched creature is fatigued.",
    Duration: "(CASTERLEVEL) rounds",
    Level: 0,
    Description:
      "You make a melee attack against a single target's EAC adding your key ability score modifier to the attack roll instead of your Strength modifier if it is higher. The target must succeed at a Fortitude save or be fatigued for the spell's duration. This spell has no effect on a creature that is already fatigued. Casting this spell doesn't provoke attacks of opportunity.",
    Range: "Touch",
    SavingThrow: "Fortitude negates",
    School: SpellSchool.Necromancy,
    Source: "Core Rulebook",
    PageNumber: "p.354",
    SpellResistance: "Yes",
    TargetsEffectArea: "One creature"
  },
  Fear: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: [1, 2, 3, 4] }],
    Level: [1, 2, 3, 4],
    SpellListDescription:
      "All targets within a cone are panicked for 1 minute.",
    Descriptor: [
      SpellDescriptor.Emotion,
      SpellDescriptor.Fear,
      SpellDescriptor.MindAffecting
    ],
    Duration: "See text",
    Description:
      "With a single mental nudge you can unlock one or more targets' deepest nightmares. A target that succeeds at its Will saving throw against this spell is shaken for 1 round. [1st] When you cast fear as a 1st-level spell it affects one living creature of CR 4 or lower at close range ((25+5*CASTERLEVEL/2) feet). The target must succeed at a Will saving throw or be frightened for 1d4 rounds. [2nd] When you cast fear as a 2nd-level spell it affects (CASTERLEVEL/3) living creatures of CR 4 or lower per 3 caster levels at medium range ((100+CASTERLEVEL*10) feet) no two of which can be more than 30 feet apart. Each target must succeed at a Will saving throw or be frightened for 1 minute. [3rd] When you cast fear as 3rd-level spell it affects all living creatures of CR 8 or lower in 30-foot cone-shaped burst. Each target must succeed at a Will save or become panicked for 1 minute. If cornered a panicked creature begins cowering. [4th] When you cast fear as 4th-level spell it affects all living creatures in 30-foot cone-shaped burst regardless of CR. Each target must succeed at a Will save or become panicked for 1 minute. If cornered a panicked creature begins cowering.",
    Range: "See text",
    SavingThrow: "Will partial",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.354",
    SpellResistance: "Yes",
    TargetsEffectArea: "See text"
  },
  "Fear (Level 1)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 1 }],
    SpellListDescription:
      "Frighten a single living creature that's of CR 4 or lower for 1d4 rounds.",
    Descriptor: [
      SpellDescriptor.Emotion,
      SpellDescriptor.Fear,
      SpellDescriptor.MindAffecting
    ],
    Duration: "See text",
    Level: 1,
    Description:
      "With a single mental nudge you can unlock one target's deepest nightmares. A target that succeeds at its Will saving throw against this spell is shaken for 1 round.  When you cast fear as a 1st-level spell it affects one living creature of CR 4 or lower at close range ((25+5*CASTERLEVEL/2) feet). The target must succeed at a Will saving throw or be frightened for 1d4 rounds.",
    Range: "See text",
    SavingThrow: "Will partial",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.354",
    SpellResistance: "Yes",
    TargetsEffectArea: "See text"
  },
  "Fear (Level 2)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 2 }],
    SpellListDescription:
      "Frighten multiple creatures of CR 4 or lower for 1 minute.",
    Descriptor: [
      SpellDescriptor.Emotion,
      SpellDescriptor.Fear,
      SpellDescriptor.MindAffecting
    ],
    Duration: "See text",
    Level: 2,
    Description:
      "With a single mental nudge you can unlock one or more targets' deepest nightmares. A target that succeeds at its Will saving throw against this spell is shaken for 1 round.  When you cast fear as a 2nd-level spell it affects (CASTERLEVEL/3) living creatures of CR 4 or lower at medium range ((100+CASTERLEVEL*10) feet) no two of which can be more than 30 feet apart. Each target must succeed at a Will saving throw or be frightened for 1 minute.",
    Range: "See text",
    SavingThrow: "Will partial",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.354",
    SpellResistance: "Yes",
    TargetsEffectArea: "See text"
  },
  "Fear (Level 3)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 3 }],
    SpellListDescription:
      "Targets of CR 8 or lower within a cone are panicked for 1 minute.",
    Descriptor: [
      SpellDescriptor.Emotion,
      SpellDescriptor.Fear,
      SpellDescriptor.MindAffecting
    ],
    Duration: "See text",
    Level: 3,
    Description:
      "With a single mental nudge you can unlock one or more targets' deepest nightmares. A target that succeeds at its Will saving throw against this spell is shaken for 1 round.  When you cast fear as 3rd-level spell it affects all living creatures of CR 8 or lower in 30-foot cone-shaped burst. Each target must succeed at a Will save or become panicked for 1 minute. If cornered a panicked creature begins cowering.",
    Range: "See text",
    SavingThrow: "Will partial",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.354",
    SpellResistance: "Yes",
    TargetsEffectArea: "See text"
  },
  "Fear (Level 4)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 4 }],
    SpellListDescription:
      "All targets within a cone are panicked for 1 minute.",
    Descriptor: [
      SpellDescriptor.Emotion,
      SpellDescriptor.Fear,
      SpellDescriptor.MindAffecting
    ],
    Duration: "See text",
    Level: 4,
    Description:
      "With a single mental nudge you can unlock one or more targets' deepest nightmares. A target that succeeds at its Will saving throw against this spell is shaken for 1 round.  When you cast fear as 4th-level spell it affects all living creatures in 30-foot cone-shaped burst regardless of CR. Each target must succeed at a Will save or become panicked for 1 minute. If cornered a panicked creature begins cowering.",
    Range: "See text",
    SavingThrow: "Will partial",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.354",
    SpellResistance: "Yes",
    TargetsEffectArea: "See text"
  },
  Feeblemind: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 5 }],
    SpellListDescription:
      "Target's Intelligence and Charisma scores drop to 1.",
    Descriptor: [SpellDescriptor.Compulsion, SpellDescriptor.MindAffecting],
    Duration: "Instantaneous",
    Level: 5,
    Description:
      "You fire a scintillating ray at your target making a ranged attack against your target's EAC but you can add your key ability score bonus to this attack instead of your Dexterity modifier if it is higher. If you hit and your target fails its Will saving throw the target creature's Intelligence and Charisma scores each drop to 1 (a modifier of -5). The affected creature is unable to use Intelligence- or Charisma-based skills cast spells understand language or communicate coherently. It still knows who its friends are and can follow them and even protect them. The target remains in this state until a miracle psychic surgery wish or similar spell is used to cancel the effect. It can't be removed by effects like break enchantment.",
    Range: "Medium",
    SavingThrow: "Will negates",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.354",
    SpellResistance: "Yes",
    TargetsEffectArea: "One creature"
  },
  "Flesh to Stone": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 6 }],
    SpellListDescription: "Turn a creature into a statue.",
    Duration: "Instantaneous",
    Level: 6,
    Description:
      "You fire a dull gray ray at your target making a ranged attack against your target's EAC but you can add your key ability score bonus to this attack instead of your Dexterity modifier if it is higher. If you hit and the target fails its Fortitude save the target along with all its carried gear turns into a mindless inert statue. If the statue resulting from this spell is broken or damaged the target (if ever returned to its original state) has similar damage or deformities. The creature is not dead but it gives off no sign of life even upon close inspection. Only creatures made of flesh are affected by this spell. If this spell is cast upon a stone creature that was once flesh it reverses the petrification.",
    Range: "Close",
    SavingThrow: "Fortitude negates",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.355",
    SpellResistance: "Yes",
    TargetsEffectArea: "One creature"
  },
  "Flight (Level 1)": {
    CastingTime: "1 standard action; see text",
    Classes: [{ class: Class.Technomancer, level: 1 }],
    SpellListDescription: "(CASTERLEVEL) creatures or objects fall slowly.",
    Duration: "See text",
    Level: 1,
    Description:
      "You tinker with the particles of magic surrounding one or more targets to either allow them to slow a fall gently rise or descend or fly short or vast distances.  When you cast flight as a 1st-level spell you can target (CASTERLEVEL) Medium or smaller falling objects or creatures at close range ((25+5*CASTERLEVEL/2) feet). The targets must all be within 20 feet of each other. A Large creature or object counts as two Medium creatures or objects a Huge creature or object counts as four Medium creatures or objects and so on. The affected targets instantly fall slower at a rate of just 60 feet per round (equivalent to the end of a fall from a few feet). The targets take no damage upon landing while the spell is in effect. This spell doesn't affect charging or flying creatures. For each target this casting of the spell lasts until that target lands or (CASTERLEVEL) rounds (whichever happens first). This spell can be cast as a reaction but when you do so you can't take a standard action on your next round.",
    Range: "See text",
    SavingThrow: "Will negates (harmless)",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.355",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "See text"
  },
  "Flight (Level 2)": {
    CastingTime: "1 standard action; see text",
    Classes: [{ class: Class.Technomancer, level: 2 }],
    SpellListDescription: "Target moves up and down at your direction.",
    Duration: "See text",
    Level: 2,
    Description:
      "You tinker with the particles of magic surrounding one or more targets to either allow them to slow a fall gently rise or descend or fly short or vast distances.  When you cast flight as a 2nd-level spell you can target yourself or one willing or unconscious creature or unattended object (total weight up to (CASTERLEVEL*100) pounds or (CASTERLEVEL*10) bulk) at close range. The spell allows you to move the target up or down as you wish. Each round as a move action you can mentally direct the target up or down as much as 20 feet. You can't move the target horizontally. A levitating creature that attacks with a melee or ranged weapon finds itself increasingly unstable; the first attack takes a -1 penalty to attack rolls the second a -2 penalty and so on to a maximum of -5. A full round spent stabilizing allows the creature to begin again at -1. This casting of the spell lasts (CASTERLEVEL) minutes and is dismissible.",
    Range: "See text",
    SavingThrow: "Will negates (harmless)",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.355",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "See text"
  },
  "Flight (Level 3)": {
    CastingTime: "1 standard action; see text",
    Classes: [{ class: Class.Technomancer, level: 3 }],
    SpellListDescription: "Target flies at a speed of 60 feet.",
    Duration: "See text",
    Level: 3,
    Description:
      "You tinker with the particles of magic surrounding one or more targets to either allow them to slow a fall gently rise or descend or fly short or vast distances.  When you cast flight as a 3rd-level spell you can target one willing or unconscious touched creature and give it the power of flight. The target can fly at a speed of 60 feet with average maneuverability. Flying while under this spell's effects takes no more concentration than walking so the target can attack or cast spells normally. The target can charge but not run and it can't carry aloft more weight than its normal bulk limit. The target gains a +(CASTERLEVEL/2) bonus to Acrobatics checks to fly. If this spell expires or is dispelled while the target is aloft the target floats downward 60 feet per round for 1d6 rounds. If it reaches the ground in that amount of time it lands safely. If not it falls the rest of the distance taking 1d6 damage per 10 feet fallen. The spell lasts for (CASTERLEVEL) minutes.",
    Range: "See text",
    SavingThrow: "Will negates (harmless)",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.355",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "See text"
  },
  "Flight (Level 4)": {
    CastingTime: "1 standard action; see text",
    Classes: [{ class: Class.Technomancer, level: 4 }],
    SpellListDescription: "Target flies at a speed of 70 feet.",
    Duration: "See text",
    Level: 4,
    Description:
      "You tinker with the particles of magic surrounding one or more targets to either allow them to slow a fall gently rise or descend or fly short or vast distances.  When you cast flight as a 4th-level spell you can target one willing or unconscious touched creature and affect it as per the 3rd-level version of the spell except the target's fly speed is increased by 10 feet and the spell lasts for (CASTERLEVEL*10) minutes.",
    Range: "See text",
    SavingThrow: "Will negates (harmless)",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.355",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "See text"
  },
  "Flight (Level 5)": {
    CastingTime: "1 standard action; see text",
    Classes: [{ class: Class.Technomancer, level: 5 }],
    SpellListDescription:
      "You can fly at a speed of 70 feet and can hustle over long distances.",
    Duration: "See text",
    Level: 5,
    Description:
      "You tinker with the particles of magic surrounding one or more targets to either allow them to slow a fall gently rise or descend or fly short or vast distances.  When you cast flight as a 5th-level spell you can target yourself and be affected as per the 4th-level version of the spell except the spell lasts for (CASTERLEVEL) hours. When you use this flight speed for long-distance movement you can hustle without taking nonlethal damage (a forced march still requires Constitution checks). You can cover 140 miles in an 8-hour period of flight (or 80 miles at a speed of 50 feet).",
    Range: "See text",
    SavingThrow: "Will negates (harmless)",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.355",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "See text"
  },
  "Flight (Level 6)": {
    CastingTime: "1 standard action; see text",
    Classes: [{ class: Class.Technomancer, level: 6 }],
    SpellListDescription: "Multiple targets can fly at a speed of 60 feet.",
    Duration: "See text",
    Level: 6,
    Description:
      "You tinker with the particles of magic surrounding one or more targets to either allow them to slow a fall gently rise or descend or fly short or vast distances.  When you cast flight as a 6th-level spell you can target multiple willing or unconscious creatures at close range (%1 feet) and affect them as per the 3rd-level version of the spell. You can target (CASTERLEVEL) creatures all of which must be within 30 feet of each other. This casting of the spell lasts (CASTERLEVEL*10) minutes.",
    Range: "See text",
    SavingThrow: "Will negates (harmless)",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.355",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "See text"
  },
  "Fog Cloud": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 2 },
      { class: Class.Technomancer, level: 2 }
    ],
    SpellListDescription: "Create a fog that obscures vision.",
    Descriptor: [SpellDescriptor.Creation],
    Duration: "(CASTERLEVEL*10) minutes",
    Level: 2,
    Description:
      "A bank of fog billows out from the point you designate. The fog obscures all sight including darkvision beyond 5 feet. A creature within 5 feet has concealment (attacks have a 20% miss chance) against its attacker. Creatures farther away have total concealment (50% miss chance and the attacker can't use sight to locate the target) against their attackers. A moderate wind (11+ mph) disperses the fog in 4 rounds; a strong wind (21+ mph) disperses the fog in 1 round. This spell doesn't function underwater or in a vacuum.",
    Range: "Medium",
    SavingThrow: "None",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.356",
    SpellResistance: "No",
    TargetsEffectArea: "20-ft.-radius spread"
  },
  "Force Blast": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 2 }],
    SpellListDescription:
      "Cone deals 2d6 force damage and bull rushes creatures.",
    Descriptor: [SpellDescriptor.Force],
    Duration: "Instantaneous",
    Level: 2,
    Description:
      "You gather mystical energy and blast it outward in a mighty wave originating from your fingertips damaging and potentially knocking back your enemies. This spell deals 2d6 force damage to each creature in the area unless it succeeds at a Reflex saving throw for half damage. Additionally the force from this spell effectively attempts to bull rush all creatures in the area. Attempt a single bull rush combat maneuver using your caster level + your key ability score modifier as your attack bonus. Compare the result to each target's KAC + 8. If you're successful that creature is knocked back 5 feet plus 5 additional feet for every 5 by which your attack exceeds the creature's KAC + 8. If there is an obstacle in the way the creature stops at the obstacle instead.",
    Range: "30 ft.",
    SavingThrow: "Reflex partial see text",
    School: SpellSchool.Evocation,
    Source: "Core Rulebook",
    PageNumber: "p.356",
    SpellResistance: "Yes",
    TargetsEffectArea: "Cone-shaped burst"
  },
  "Ghost Sound": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 0 },
      { class: Class.Technomancer, level: 0 }
    ],
    SpellListDescription: "Create minor illusory sounds.",
    Duration: "(CASTERLEVEL) rounds (D)",
    Level: 0,
    Description:
      "You create a volume of sound that rises falls recedes approaches or remains fixed. You choose what type of sound this spell creates when casting it and cannot thereafter change the sound's basic character. The volume of sound created can produce as much noise as 20 normal humans. Thus you can create shouting singing talking marching running or walking sounds as well as sounds of battle or small explosions. You can make noises that sound like machines the general chatter of distant conversation or the roar of an alien predator but you can't make specific sounds such as intelligible speech or the exact hum of a particular starship's engines.",
    Range: "Close",
    SavingThrow: "Will disbelief",
    School: SpellSchool.Illusion,
    Source: "Core Rulebook",
    PageNumber: "p.356",
    SpellResistance: "No",
    TargetsEffectArea: "Illusory sounds"
  },
  "Grave Words": {
    CastingTime: "1 minute",
    Classes: [{ class: Class.Mystic, level: 0 }],
    SpellListDescription: "Force a corpse to babble.",
    Descriptor: [SpellDescriptor.LanguageDependent],
    Duration: "1 round",
    Level: 0,
    Description:
      "You can force a touched corpse talk to you but you can't ask it specific questions or communicate with it at all. The corpse utters random sentences for 1 round with a 10% chance this information is of some use to you. Useful information might include warnings about dangers in a wrecked starship the password to unlock a computer or the name of a supernatural creature seeking you or your allies. The GM makes the d% roll in secret and decides what information useful or not the corpse spews out in its babbling. Once a corpse has been subjected to grave words by any caster any new attempt to cast grave words on that corpse fails. A corpse must have a mouth or means to speak in order for this spell to function and the spell doesn't affect a corpse that has been turned into an undead creature.",
    Range: "Touch",
    SavingThrow: "None",
    School: SpellSchool.Necromancy,
    Source: "Core Rulebook",
    PageNumber: "p.357",
    SpellResistance: "No",
    TargetsEffectArea: "One dead creature"
  },
  "Gravitational Singularity": {
    CastingTime: "1 round",
    Classes: [{ class: Class.Mystic, level: 6 }],
    SpellListDescription:
      "Particle with infinite density pulls creatures and objects into it dealing 12d6 damage each round to those inside.",
    Descriptor: [SpellDescriptor.Creation],
    Duration: "(CASTERLEVEL) rounds (D)",
    Level: 6,
    Description:
      "You call into being a tiny particle of mass with infinite density. You must conjure the singularity in a square that is unoccupied by any creatures or objects. When you finish casting this spell the singularity immediately draws all Medium and smaller creatures and unattended objects of no more than light bulk within 30 feet toward it. Each round on your turn the singularity makes a single special combat maneuver against creatures within 30 feet with an attack bonus equal to 4 + your caster level + your key ability modifier. Compare the result to each creature's KAC + 8. If the singularity is successful that creature is moved 5 feet toward the singularity plus 5 additional feet for every 5 by which the result exceeds a target's KAC + 8. Unattended objects are automatically moved 10 feet toward the singularity each round. If a creature or object is moved into the square that contains the singularity it is sucked inside it and takes 12d6 damage at the end of its turn each round it remains within that space. A creature drawn into the singularity can take no actions except a full action to try to escape (it still takes damage during the rounds it attempts to escape). A creature must succeed at either an Athletics check (DC (CASTERLEVEL+CASTERLEVEL/2+15)) or a DC 22 Strength check to escape the singularity. The singularity can hold up to four Medium creatures or objects (two Small creatures or objects count as one Medium creature and so on); if it would pull in additional creatures those creatures are simply pulled into a square adjacent to the singularity. A creature within 50 feet of the singularity has its speed reduced by half when it moves away from the singularity. However it can move at double its normal speed when moving toward the singularity. If a creature moves within 30 feet of the singularity at any point in its movement it is subject to the combat maneuver described above. A creature that moves neither toward nor away from the singularity moves at its normal speed. When this spell ends the singularity disappears and creatures and objects that were sucked into the singularity appear in the space where you conjured it (or as close as possible to that space if they can't all fit within it).",
    Range: "Medium",
    SavingThrow: "None",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.357",
    SpellResistance: "No",
    TargetsEffectArea: "5-ft.-cube gravitational singularity; see text"
  },
  Grease: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 1 }],
    SpellListDescription: "Make a 10-ft. square or one object slippery.",
    Descriptor: [SpellDescriptor.Creation],
    Duration: "(CASTERLEVEL) minutes (D)",
    Level: 1,
    Description:
      "You cover a solid surface with a layer of slippery grease. Any creature in the area when the spell is cast must succeed at a Reflex save or fall prone. A creature can walk within or through the area of grease at half normal speed with a successful DC 10 Acrobatics check. Failure means the creature can't move that round and must then succeed at a Reflex save or fall prone while failure by 5 or more means it falls prone (see the Acrobatics skill on page 135 for details). A creature that doesn't move on its turn doesn't need to attempt this check and isn't considered flat-footed. The spell can also be used to create a greasy coating on an item. Unattended material objects are always affected by this spell. If you attempt to affect an object in a creature's possession the creature can attempt a Reflex save to negate the effect. If the creature fails the initial saving throw it immediately drops the item and must attempt a new save each round it attempts to pick up hold or use the item. A creature wearing greased armor or clothing gains a +5 circumstance bonus to Acrobatics checks to escape a grapple and a +2 circumstance bonus to its AC against grapple combat maneuvers.",
    Range: "Close",
    SavingThrow: "Reflex partial see text",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.357",
    SpellResistance: "No",
    TargetsEffectArea: "One 10-ft. square or one object"
  },
  "Handy Junkbot": {
    CastingTime: "1 round",
    Classes: [{ class: Class.Technomancer, level: 3 }],
    SpellListDescription:
      "Create a temporary robot made of junk to perform Computers Engineering Piloting and Sleight of Hand tasks.",
    Duration: "(CASTERLEVEL) rounds",
    Level: 3,
    Description:
      "You turn a pile of technological junk into a robot that can accomplish helpful tasks. You must target inert nonworking electronic equipment of at least 1 bulk. Valid targets include a large broken computer system nonworking or unconnected computer or robot parts a destroyed robot or another such trashed mechanical system or any related electronic components or combination of the above as long as the junk is found in a large enough quantity. While casting this spell you use your magic and technological know-how to rearrange the junked parts and infuse them with energy and helpful programming. A handy junkbot is Small its KAC and EAC are each (CASTERLEVEL+10) and it has a number of Hit Points equal to one-quarter of your own (but no Stamina Points). It has a land speed of 30 feet and a fly speed of 15 feet with average maneuverability. It can accomplish all tasks described in the Computers Engineering Piloting and Sleight of Hand skills is considered trained in those skills and has a total skill bonus in each of (CASTERLEVEL+3). The junkbot is treated as if it is using a hacker's kit when using the Computers skill and an engineering kit when using the Engineering skill. A handy junkbot can never attack. The junkbot uses your saving throw bonuses if it is the target of a spell or another targeted effect. For purposes of spells and effects that target the junkbot it is treated as a construct with the technological and magical subtypes. You can give new basic commands to your handy junkbot telepathically on your turn as a move action and the junkbot can take actions as if it were a normal creature. You are aware when the junkbot has succeeded at or failed a skill check as well as when it has been attacked or destroyed but you can perceive nothing else through this basic telepathic link. When the handy junkbot is destroyed or this spell ends the electronic equipment you used to create it falls apart into refuse its circuitry fried beyond anything recognizable. You can't use this refuse as a target to create another junkbot.",
    Range: "Touch",
    SavingThrow: "None",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.357",
    SpellResistance: "No",
    TargetsEffectArea: "1 bulk of inert electronic equipment; see text"
  },
  Haste: {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 3 },
      { class: Class.Technomancer, level: 3 }
    ],
    SpellListDescription: "(CASTERLEVEL) creatures move and act faster.",
    Duration: "(CASTERLEVEL) rounds",
    Level: 3,
    Description:
      "The targeted creatures move and act more quickly than normal. This extra speed has several effects. When making a full attack a hasted creature can also take a separate move action in order to move. The movement can occur before after or between the attacks from the full attack. All movement must occur at the same time. All of the hasted creature's modes of movement (including base burrow climb fly and swim speeds) increase by 30 feet to a maximum of twice the target's normal speed using that form of movement. This increase counts as an enhancement bonus and it affects the creature's jumping distance as normal for increased speed. Multiple haste effects don't stack. Haste counters and negates slow.",
    Range: "Close",
    SavingThrow: "Fortitude negates (harmless)",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.358",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea:
      "Up to (CASTERLEVEL) creatures no two of which can be more than 30 ft. apart"
  },
  "Healing Junkbot": {
    CastingTime: "1 round",
    Classes: [{ class: Class.Technomancer, level: 3 }],
    SpellListDescription:
      "Robot made of junk can perform Medicine tasks and drag unconscious creature to safety.",
    Duration: "(CASTERLEVEL) rounds",
    Level: 3,
    Description:
      "You turn a pile of technological junk into a robot that can perform basic healing tasks. You must target inert nonworking electronic equipment of at least 1 bulk. Valid targets include a large broken computer system nonworking or unconnected computer or robot parts a destroyed robot or another such trashed mechanical system or any related electronic components or combination of the above as long as the junk is found in a large enough quantity. While casting this spell you use your magic and technological know-how to rearrange the junked parts and infuse them with energy and medical skills. A healing junkbot is Small its KAC and EAC are each equal to (10+CASTERLEVEL) and it has a number of Hit Points equal to one-quarter of your own (but no Stamina Points). It has a land speed of 30 feet and a fly speed of 15 feet with average maneuverability. It is considered trained in the Medicine skill and can perform first aid treat deadly wounds and treat drugs or poison as if it had a medkit (though it can't provide long-term care or treat disease). The junkbot has a total skill bonus for Medicine checks of (CASTERLEVEL+3). A healing junkbot can drag or fly one unconscious creature at a time to any spot you designate. It can drag or fly a Small Medium or Large creature at half speed. It can drag or fly smaller creatures at normal speed but it can't move creatures bigger than Large. A healing junkbot can never attack. The junkbot uses your saving throw bonuses if it is the target of a spell or another targeted effect. For purposes of spells and effects that target it the junkbot is treated as a construct with the technological and magical subtypes. You can give new basic commands to your healing junkbot telepathically on your turn as a move action and the junkbot can take actions as if it were a normal creature. You are aware when the bot has succeeded at or failed a skill check as well as when it has been attacked or destroyed but you can perceive nothing else through this basic telepathic link. When the healing junkbot is destroyed or this spell ends the electronic equipment you used to create it falls apart into refuse its components and circuitry fried beyond anything recognizable. You can't use this refuse as a target to create another junkbot.",
    Range: "Touch",
    SavingThrow: "None",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.358",
    SpellResistance: "No",
    TargetsEffectArea: "1 bulk of inert electronic equipment; see text"
  },
  "Heat Leech": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 5 }],
    SpellListDescription: "Deal 13d8 cold damage to creatures in a cone.",
    Descriptor: [SpellDescriptor.Cold],
    Duration: "Instantaneous; see text",
    Level: 5,
    Description:
      "You drain the heat from all creatures and objects in the area dealing 13d8 cold damage. You can store the gathered heat energy in a used battery. If you do so and use that battery when casting explosive blast within 1 minute that spell deals 2d6 additional fire damage destroying the used battery. Otherwise the energy dissipates normally.",
    Range: "60 ft.",
    SavingThrow: "Reflex half",
    School: SpellSchool.Evocation,
    Source: "Core Rulebook",
    PageNumber: "p.359",
    SpellResistance: "Yes",
    TargetsEffectArea: "Cone-shaped burst"
  },
  "Hold Monster": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 4 }],
    SpellListDescription: "Paralyze one creature.",
    Descriptor: [SpellDescriptor.Compulsion, SpellDescriptor.MindAffecting],
    Duration: "(CASTERLEVEL) rounds (D)",
    Level: 4,
    Description:
      "The target becomes paralyzed and freezes in place. It is aware and breathes normally but can't take any physical actions even speech. A held creature can't cast spells. Each round on its turn the target can spend a full action to attempt a new saving throw to end the effect. This does not provoke attacks of opportunity. A winged creature that is paralyzed can't flap its wings and falls. A swimmer can't swim and may drown.",
    Range: "Medium",
    SavingThrow: "Will negates see text",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.359",
    SpellResistance: "Yes",
    TargetsEffectArea: "One living creature"
  },
  "Hold Person": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 2 }],
    SpellListDescription: "Paralyze one humanoid.",
    Descriptor: [SpellDescriptor.Compulsion, SpellDescriptor.MindAffecting],
    Duration: "(CASTERLEVEL) rounds (D)",
    Level: 2,
    Description:
      "The target becomes paralyzed and freezes in place. It is aware and breathes normally but can't take any physical actions even speech. A held creature can't cast spells. Each round on its turn the target can spend a full action to attempt a new saving throw to end the effect. This does not provoke attacks of opportunity. A winged creature that is paralyzed can't flap its wings and falls. A swimmer can't swim and may drown.",
    Range: "Medium",
    SavingThrow: "Will negates see text",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.359",
    SpellResistance: "Yes",
    TargetsEffectArea: "One humanoid creature"
  },
  "Hold Portal": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 1 }],
    SpellListDescription: "Hold a door shut.",
    Duration: "(CASTERLEVEL) minutes (D)",
    Level: 1,
    Description:
      "This spell magically holds shut a door gate shutter or window of any standard material (metal plastic stone wood and so on) or it reinforces an electronic lock. The magic affects the portal just as if it were securely closed and normally locked. A knock spell or a successful dispel magic spell can negate a hold portal spell. Add 5 to the normal DC for forcing open a portal or hacking an electronic lock affected by this spell.",
    Range: "Medium",
    SavingThrow: "None",
    School: SpellSchool.Abjuration,
    Source: "Core Rulebook",
    PageNumber: "p.359",
    SpellResistance: "No",
    TargetsEffectArea: "One portal up to (CASTERLEVEL*20) sq. ft."
  },
  "Hologram Memory": {
    CastingTime: "1 full action",
    Classes: [{ class: Class.Mystic, level: 3 }],
    SpellListDescription:
      "Extract a creature's memory and replay it as a hologram.",
    Duration: "Instantaneous",
    Level: 3,
    Description:
      "You reach into the target's mind extract a specific memory and project that memory into a small hologram that plays in front of you and is visible to all creatures who can see it. The hologram memory can be no longer than 1 minute; if the extracted memory is longer than this the hologram simply ends. The hologram includes audio as well as visual components but it does not contain haptic olfactory or other components. The hologram typically plays a memory that takes place in a single scene though it can cut to multiple scenes if they are accurate to the memory and its length allows. The hologram plays the memory exactly as the target experienced it and from the target's perspective so it often lacks context. The target creature must remain quiet and still while the hologram plays or the spell and hologram end. This spell can target any living unconscious or deceased sentient creature with an Intelligence score of 3 or higher (or a modifier of -4 or higher). If the target is deceased it cannot have been dead for longer than 1 week or this spell fails; once a corpse has been subjected to hologram memory by any caster any subsequent attempts to cast hologram memory on that corpse fail. If the target is unwilling to share this memory (or if it would be unable to share the memory in the case of an unconscious or deceased target) it can attempt a Will saving throw with a +4 bonus to negate this spell and its effects.",
    Range: "Touch",
    SavingThrow: "Will negates see text",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.359",
    SpellResistance: "No",
    TargetsEffectArea: "One living or deceased sentient creature; see text"
  },
  "Holographic Image (Level 1)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 1 }],
    SpellListDescription: "Create a silent hologram of your design.",
    Duration: "See text",
    Level: 1,
    Description:
      "You weave nearby photons into illusory holograms that can take almost any form you can imagine. These holograms are usually effective against cameras robots and living creatures.  When you cast holographic image as a 1st-level spell it produces a purely visual hologram at long range ((400+CASTERLEVEL*40) feet). The image has no sound smell texture or temperature. The image can't extend beyond (CASTERLEVEL+4) 10-foot cubes. The image lasts for as long as you concentrate. You can move the image within the limits of the size of the effect.",
    Range: "See text",
    SavingThrow: "Will disbelief",
    School: SpellSchool.Illusion,
    Source: "Core Rulebook",
    PageNumber: "p.360",
    SpellResistance: "No",
    TargetsEffectArea: "See text"
  },
  "Holographic Image (Level 2)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 2 }],
    SpellListDescription: "Create a hologram with some sound of your design.",
    Duration: "See text",
    Level: 2,
    Description:
      "You weave nearby photons into illusory holograms that can take almost any form you can imagine. These holograms are usually effective against cameras robots and living creatures.  When you cast holographic image as a 2nd-level spell it produces a hologram as per the 1st-level version of the spell except the hologram can include minor sounds but not understandable speech. The image lasts for as long as you concentrate plus 2 additional rounds.",
    Range: "See text",
    SavingThrow: "Will disbelief",
    School: SpellSchool.Illusion,
    Source: "Core Rulebook",
    PageNumber: "p.360",
    SpellResistance: "No",
    TargetsEffectArea: "See text"
  },
  "Holographic Image (Level 3)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 3 }],
    SpellListDescription:
      "Create a hologram with sound smell and thermal effects of your design that lasts as long as you concentrate plus 3 additional rounds.",
    Duration: "See text",
    Level: 3,
    Description:
      "You weave nearby photons into illusory holograms that can take almost any form you can imagine. These holograms are usually effective against cameras robots and living creatures.  When you cast holographic image as a 3rd-level spell it produces a hologram as per the 1st-level version of the spell except the hologram can include sound smell and thermal illusions (but not speech). The image disappears when it is struck by an opponent unless you cause the hologram to react appropriately. The image lasts for as long as you concentrate plus 3 additional rounds.",
    Range: "See text",
    SavingThrow: "Will disbelief",
    School: SpellSchool.Illusion,
    Source: "Core Rulebook",
    PageNumber: "p.360",
    SpellResistance: "No",
    TargetsEffectArea: "See text"
  },
  "Holographic Image (Level 4)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 4 }],
    SpellListDescription:
      "Create a hologram with sound smell and thermal effects that follows a script determined by you.",
    Duration: "See text",
    Level: 4,
    Description:
      "You weave nearby photons into illusory holograms that can take almost any form you can imagine. These holograms are usually effective against cameras robots and living creatures.  When you cast holographic image as a 4th-level spell it produces a hologram as per the 3rd-level version of the spell except the hologram follows a script determined by you. It follows that script for (CASTERLEVEL) minutes without you having to concentrate on it. The hologram can include intelligible speech if you wish.",
    Range: "See text",
    SavingThrow: "Will disbelief",
    School: SpellSchool.Illusion,
    Source: "Core Rulebook",
    PageNumber: "p.360",
    SpellResistance: "No",
    TargetsEffectArea: "See text"
  },
  "Holographic Image (Level 5)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 5 }],
    SpellListDescription:
      "Create a detailed hologram that is permanent or is triggered by conditions you set.",
    Duration: "See text",
    Level: 5,
    Description:
      "You weave nearby photons into illusory holograms that can take almost any form you can imagine. These holograms are usually effective against cameras robots and living creatures.  When you cast holographic image as a 5th-level spell it produces a hologram as per the 4th-level version of the spell except the size of the hologram can't extend beyond a (20+CASTERLEVEL*10)-foot cube. You can choose to make the hologram permanent at the time of casting. By concentrating you can move the image within the limits of the range but it is static while you are not concentrating. Alternatively you can have the hologram activate when a specific condition (which you set at the time of casting) occurs. The event that triggers the hologram can be as general or as specific and detailed as desired but it must be based on an audible olfactory tactile or visual trigger. The trigger can't be based on some quality not normally obvious to the senses such as alignment. The spell lasts until it is triggered and then the hologram lasts for (CASTERLEVEL) rounds.",
    Range: "See text",
    SavingThrow: "Will disbelief",
    School: SpellSchool.Illusion,
    Source: "Core Rulebook",
    PageNumber: "p.360",
    SpellResistance: "No",
    TargetsEffectArea: "See text"
  },
  "Holographic Image (Level 6)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 6 }],
    SpellListDescription:
      "Illusory double of your likeness can talk and cast spells.",
    Duration: "See text",
    Level: 6,
    Description:
      "You weave nearby photons into illusory holograms that can take almost any form you can imagine. These holograms are usually effective against cameras robots and living creatures.  When you cast holographic image as a 6th-level spell it creates a quasi-real illusory version of yourself at medium range ((100+CASTERLEVEL*10) feet). This hologram looks sounds and smells like you but it is intangible. The hologram mimics your actions (including speech) unless you use a move action to direct it to act differently. You can see through its eyes and hear through its ears as if you were standing where it is and during your turn you can switch from using its senses to using your own or back again as a move action. While you are using its senses your body is considered blinded and deafened. If you desire any spell you cast with a range of touch or greater can originate from the hologram instead of from you. The hologram can't cast spells on itself except for illusion spells. Spells cast in this manner affect other targets normally despite originating from the hologram. An object isn't deceived by illusions (treat as if it had succeeded at its Will saving throw). The hologram remains for (CASTERLEVEL) rounds and you must maintain line of effect to the hologram at all times. If your line of effect is obstructed the spell ends. If you use dimension door plane shift teleport or a similar spell that breaks your line of effect even momentarily the spell ends. This casting of the spell is a shadow effect.",
    Range: "See text",
    SavingThrow: "Will disbelief",
    School: SpellSchool.Illusion,
    Source: "Core Rulebook",
    PageNumber: "p.360",
    SpellResistance: "No",
    TargetsEffectArea: "See text"
  },
  "Holographic Terrain": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 5 }],
    SpellListDescription:
      "Create a large hologram that depicts terrain and structures.",
    Duration: "(CASTERLEVEL*2) hours (D)",
    Level: 5,
    Description:
      "You make terrain look sound and smell like some other sort of terrain. Equipment structures and vehicles within the area can be hidden or changed in appearance. The illusion includes audible olfactory tactile and visual elements and is effective against cameras living creatures robots and scrying spells. This spell can't disguise or add creatures nor can it make them invisible (though creatures within the area might hide themselves within the illusion just as they can hide themselves within a real location).",
    Range: "Long",
    SavingThrow: "Will disbelief",
    School: SpellSchool.Illusion,
    Source: "Core Rulebook",
    PageNumber: "p.360",
    SpellResistance: "No",
    TargetsEffectArea: "(CASTERLEVEL) twenty-foot cubes [S]"
  },
  "Hurl Forcedisk": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 2 }],
    SpellListDescription:
      "Disc deals 3d6 force damage to one target then ricochets to other targets dealing 2d6 force damage.",
    Descriptor: [SpellDescriptor.Force],
    Duration: "Instantaneous",
    Level: 2,
    Description:
      "You create a spinning disk made of pure shimmering force and hurl it at one opponent within range potentially striking other nearby enemies as the disk ricochets. Choose the initial target and make a ranged attack against its EAC. If the attack hits the disk deals 3d6 force damage. The disk then ricochets to hit up to four more creatures of your choice each no more than 15 feet from the last target. Make a ranged attack against each successive target's EAC in turn; the disk deals 2d6 force damage to each secondary target struck (this damage is rolled separately for each target). The disk continues to ricochet in this way until it has attempted to strike five creatures or until there are no more valid targets or until you voluntarily end the spell. A creature can take damage only once from a single casting of this spell. The forcedisk is subject to spell resistance so you must attempt a caster level check (1d20 + your caster level) against each target with spell resistance before determining whether the target might take damage. If you fail this check the spell ends. The exact shape of the forcedisk is superficially changeable; as part of casting this spell a spellcaster can decide to make it shaped differently from a traditional disk. For example using this spell to create a starknife made of force is popular among Desna's followers. The spell still deals the amount of damage described above regardless of the disk's shape.",
    Range: "Medium",
    SavingThrow: "None",
    School: SpellSchool.Evocation,
    Source: "Core Rulebook",
    PageNumber: "p.360",
    SpellResistance: "Yes",
    TargetsEffectArea: "Up to five creatures; see text"
  },
  Identify: {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 1 },
      { class: Class.Technomancer, level: 1 }
    ],
    SpellListDescription:
      "Gain a +10 bonus to identify items of a magic or technological nature.",
    Duration: "(CASTERLEVEL) rounds (D)",
    Level: 1,
    Description:
      "This spell allows you to attempt to identify the function of a magic item (with Mysticism) or technological device (with Engineering) each round. You gain a +10 insight bonus to skill checks to identify the properties and command words or passwords of items targeted when using this spell. This spell does not allow you to identify artifacts.",
    Range: "5 ft.",
    SavingThrow: "None",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.361",
    SpellResistance: "No",
    TargetsEffectArea: "One magic or technological object"
  },
  "Implant Data": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 2 }],
    SpellListDescription:
      "Embed one piece of data per level in a target computer or system.",
    Duration: "(CASTERLEVEL) hours or until triggered; see text",
    Level: 2,
    Description:
      "You subtly rearrange the internal circuitry of a computer system or module programming it to convey a certain dataset when accessed (either normally or if it is hacked). You can implant up to (CASTERLEVEL) pieces of data. A piece of data consists of a simple fact such as a creature or object's location or physical description a creature or object's tangible or intangible value or another simple statement. When an affected computer system or module is accessed this implanted data is the first data the accessing individual gains regardless of what data the individual is actually looking for though the accessing individual can access the system or module's actual information if it looks beyond the implanted data. The implanted data vanishes from the system or module once the accessing individual has reviewed it. If this spell's duration ends before an individual accesses the implanted data the implanted data vanishes. The implanted data can be made permanent with a special ritual which takes 1 hour and requires materials worth 5000 credits. Once it's made permanent the implanted data temporarily vanishes after it is accessed but it returns 1 hour later.",
    Range: "Touch",
    SavingThrow: "None",
    School: SpellSchool.Illusion,
    Source: "Core Rulebook",
    PageNumber: "p.361",
    SpellResistance: "No",
    TargetsEffectArea: "One computer system or module"
  },
  "Inflict Pain": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 2 }],
    SpellListDescription:
      "Wracking pain imposes -2 penalty to ability checks attack rolls and skill checks on one target.",
    Descriptor: [SpellDescriptor.MindAffecting, SpellDescriptor.Pain],
    Duration: "(CASTERLEVEL) rounds",
    Level: 2,
    Description:
      "You telepathically rack the target's mind and body with agonizing pain that imposes a -2 penalty to ability checks attack rolls and skill checks. A target that succeeds at a Will saving throw reduces the duration to 1 round.",
    Range: "Close",
    SavingThrow: "Will partial see text",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.361",
    SpellResistance: "Yes",
    TargetsEffectArea: "One creature"
  },
  "Inflict Pain (Mass)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 6 }],
    SpellListDescription:
      "Wracking pain imposes -2 penalty to ability checks attack rolls and skill checks on (CASTERLEVEL) targets.",
    Descriptor: [SpellDescriptor.MindAffecting, SpellDescriptor.Pain],
    Duration: "(CASTERLEVEL) rounds",
    Level: 6,
    Description:
      "You telepathically rack the targets' minds and bodies with agonizing pain that imposes a -2 penalty to ability checks attack rolls and skill checks. A target that succeeds at a Will saving throw reduces the duration to 1 round.",
    Range: "Close",
    SavingThrow: "Will partial see text",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.361",
    SpellResistance: "Yes",
    TargetsEffectArea:
      "Up to (CASTERLEVEL) creatures no two of which can be more than 30 ft. apart"
  },
  "Inject Nanobots": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 2 }],
    SpellListDescription:
      "Touch deals 4d8 damage to target and causes the confused condition.",
    Duration: "Instantaneous and (CASTERLEVEL) rounds; see text",
    Level: 2,
    Description:
      "You concentrate key particles in your blood into tiny biological nanobots that you can inject into a foe with a touch disrupting and damaging its natural processes. Make a melee attack against the target's EAC; if you hit the nanobots deal 4d8 damage and swarm through the target's biological or mechanical systems causing the creature to be confused as per confusion for (CASTERLEVEL) rounds. If the target succeeds at a Fortitude save it takes only half damage and negates the confusion effect. A confused target can attempt a Will saving throw at the beginning of its turn each round to end the confusion effect. Casting this spell doesn't provoke attacks of opportunity.",
    Range: "Touch",
    SavingThrow: "Fortitude partial and Will partial see text",
    School: SpellSchool.Necromancy,
    Source: "Core Rulebook",
    PageNumber: "p.361",
    SpellResistance: "Yes",
    TargetsEffectArea: "One living creature or construct"
  },
  "Instant Virus": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 3 }],
    SpellListDescription: "Inflict technological construct with disease.",
    Duration: "Instantaneous; see text",
    Level: 3,
    Description:
      "You overwhelm your target's programming installing a dangerous self-replicating programming virus. This works like a physical or mental disease (your choice) except it ignores the target's immunity to diseases. The programming virus has a frequency of 1 hour and requires two consecutive saving throws to cure. Detect affliction can reveal the existence of this virus in a construct (the virus is considered a disease for purposes of that spell). Additionally remove affliction can remove this virus.",
    Range: "Touch",
    SavingThrow: "Fortitude negates see text",
    School: SpellSchool.Necromancy,
    Source: "Core Rulebook",
    PageNumber: "p.361",
    SpellResistance: "Yes",
    TargetsEffectArea: "One construct with the technological subtype"
  },
  "Interplanetary Teleport": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 6 }],
    SpellListDescription: "Teleport between planets.",
    Descriptor: [SpellDescriptor.Teleportation],
    Duration: "Instantaneous",
    Level: 6,
    Description:
      "This spell functions as teleport except there is no hard range limit and you don't need to have seen your destination. You can teleport to anywhere you are familiar with on the planet you are on while casting the spell or you can teleport to any other planet in the same solar system. You must have an unambiguous idea of which world you wish to travel to (the third planet from the sun is an acceptable destination but a habitable world with oceans is not). If you have a specific location on a planet in mind you arrive there without a chance of failure; otherwise you arrive at a location that would not immediately be life threatening. If no such safe landing zone exists on the world such as someone attempting to travel into the sun without the proper precautions in place the spell simply fails. You can also attempt to teleport to planets in different solar systems that you have visited before. This increases the casting time to 1 hour and costs a number of Resolve Points equal to the number of days it would take to reach the planet through Drift travel (assume a base engine with a Drift rating of 1; the GM rolls this randomly after you begin casting the spell). If you don't have enough Resolve Points you spend all the Resolve Points you have available and the spell fails.",
    Range: "Solar system or plane; see text",
    SavingThrow: "None Will negates (object)",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.362",
    SpellResistance: "No yes (object)",
    TargetsEffectArea:
      "You and touched objects or touched willing or unconscious creatures"
  },
  Invisibility: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 2 }],
    SpellListDescription:
      "Target is invisible for (CASTERLEVEL) minutes or until it attacks.",
    Duration: "(CASTERLEVEL) minutes (D)",
    Level: 2,
    Description:
      "The creature or object touched becomes invisible (see page 264). If the target is a creature any gear it is carrying vanishes as well. If you cast the spell on someone else neither you nor your allies can see the target unless you can normally see invisible things or you employ magic to do so. The spell ends if the target attacks any creature. For purposes of this spell an attack includes any spell or harmful effect targeting a foe or whose area or effect includes a foe. Actions directed at unattended objects don't break the spell. Spells that specifically affect allies but not foes are not attacks for this purpose even when they include foes in their area. Causing harm indirectly is not an attack. Thus an invisible being can open doors talk eat climb stairs summon security forces and have them attack start a trash compactor with foes inside remotely trigger traps and so forth.",
    Range: "Touch",
    SavingThrow: "Will negates (harmless object) see text",
    School: SpellSchool.Illusion,
    Source: "Core Rulebook",
    PageNumber: "p.362",
    SpellResistance: "Yes (harmless object)",
    TargetsEffectArea:
      "One creature or object no more than (CASTERLEVEL*10) bulk"
  },
  "Invisibility (Greater)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 4 }],
    SpellListDescription:
      "Target is invisible for (CASTERLEVEL) rounds even if it attacks.",
    Duration: "(CASTERLEVEL) rounds (D)",
    Level: 4,
    Description:
      "The creature or object touched becomes invisible (see page 264). If the target is a creature any gear it is carrying vanishes as well. If you cast the spell on someone else neither you nor your allies can see the target unless you can normally see invisible things or you employ magic to do so. This spell doesn't end if the target attacks.",
    Range: "Touch",
    SavingThrow: "Will negates (harmless)",
    School: SpellSchool.Illusion,
    Source: "Core Rulebook",
    PageNumber: "p.362",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "One creature"
  },
  "Invisibility (Mass)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 6 }],
    SpellListDescription:
      "Multiple targets are invisible for (CASTERLEVEL) minuts or until one target attacks or moves away from other targets affected by spell.",
    Duration: "(CASTERLEVEL) minutes (D)",
    Level: 6,
    Description:
      "This spell functions like invisibility except the effect moves with the group and is broken when anyone in the group attacks. Individuals in the group can't see one another. Any individual who moves more than 180 feet from the nearest member of the group loses the benefit of this spell. If only two individuals are affected the one moving away from the other one loses its invisibility. If both are moving away from each other they both become visible when the distance between them exceeds 180 feet.",
    Range: "Long",
    SavingThrow: "Will negates (harmless object) see text",
    School: SpellSchool.Illusion,
    Source: "Core Rulebook",
    PageNumber: "p.362",
    SpellResistance: "Yes (harmless object)",
    TargetsEffectArea:
      "Any number of creatures no two of which can be more than 180 ft. apart"
  },
  Irradiate: {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 3 },
      { class: Class.Technomancer, level: 3 }
    ],
    SpellListDescription: "Flood area with dangerous radiation.",
    Descriptor: [
      SpellDescriptor.Creation,
      SpellDescriptor.Disease,
      SpellDescriptor.Poison,
      SpellDescriptor.Radiation
    ],
    Duration: "Instantaneous",
    Level: 3,
    Description:
      "This spell floods the area of effect with dangerous radiation. The strength of the radiation you create depends on your caster level as detailed below. The central irradiated area is always a 10-foot-radius spread that expands normally per the rules for radiation areas of effect (see page 403). Creatures within the area are exposed to the radiation only once; the radiation does not linger in the area. The saving throw to resist the radiation effects is set by the spell rather than the standard save DC for radiation. Caster Level - 6th or lower Low Radiation Level; 7th-9th - Medium Radiation Level; 10th-16th - High Radiation Level; 17th or higher - Severe Radiation Level",
    Range: "Medium",
    SavingThrow: "Fortitude partial see text",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.362",
    SpellResistance: "No",
    TargetsEffectArea: "10-ft.-radius spread; see text"
  },
  "Jolting Surge": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 1 }],
    SpellListDescription: "Touch deals 4d6 electricity damage.",
    Descriptor: [SpellDescriptor.Electricity],
    Duration: "Instantaneous",
    Level: 1,
    Description:
      "You touch a target with a device you're holding that uses electricity requiring a melee attack against the target's EAC. Alternatively you can instead touch an electrical device a target is wearing (or a target that is an electrical device such as a robot) with your hand gaining a +2 bonus to your attack roll. Either way if your attack hits the electrical device surges out of control dealing 4d6 electricity damage to your target. Casting this spell doesn't provoke attacks of opportunity.",
    Range: "Touch",
    SavingThrow: "None",
    School: SpellSchool.Evocation,
    Source: "Core Rulebook",
    PageNumber: "p.363",
    SpellResistance: "Yes",
    TargetsEffectArea: "One creature or object"
  },
  "Keen Senses": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 1 },
      { class: Class.Technomancer, level: 1 }
    ],
    SpellListDescription:
      "Target gains low-light vision and a +2 bonus to Perception checks.",
    Duration: "(CASTERLEVEL) minutes (D)",
    Level: 1,
    Description:
      "The target gains a +2 insight bonus to Perception checks and gains low-light vision. Targets that have low-light vision double the distance they can see under the effects of this spell.",
    Range: "Touch",
    SavingThrow: "Will negates (harmless)",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.363",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "One creature"
  },
  Knock: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 2 }],
    SpellListDescription: "Opens a locked or magically sealed door.",
    Duration: "Instantaneous; see text",
    Level: 2,
    Description:
      "Knock opens barred computer-sealed locked or stuck doors as well as those subject to hold portal or security seal. When you complete the casting of this spell attempt a caster level check (1d20 + your caster level) against the DC of the lock or computer seal with a +10 bonus. If successful knock opens up to two means of closure. This spell opens secret doors (but doesn't identify secret doors you haven't found) as well as locked or trick-opening containers starship doors and similar secured entryways. It also loosens chains shackles or welds (provided they serve to hold something shut). If used to open a door closed with security seal the spell doesn't remove the seal but simply suspends its functioning for 10 minutes. In all other cases the door does not relock itself or become stuck again on its own. Knock does not raise barred gates or similar impediments (such as a force field barrier) or open any door or container larger than the spell's area nor does it affect ropes webs and the like.",
    Range: "Medium",
    SavingThrow: "None",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.363",
    SpellResistance: "No",
    TargetsEffectArea:
      "One door container or portal with an area of up to (CASTERLEVEL*10) sq. ft."
  },
  "Life Bubble": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 1 },
      { class: Class.Technomancer, level: 1 }
    ],
    SpellListDescription:
      "Encase targeted creatures with a shell of tolerable atmosphere.",
    Duration: "(CASTERLEVEL) days",
    Level: 1,
    Description:
      "You surround the target creatures with a constant and movable 1-inch shell of tolerable living conditions customized for each creature. This shell enables the targets to breathe freely in a variety of atmospheric conditions (including in corrosive thick thin and toxic atmospheres) as well as underwater or in a vacuum. It also makes the targets immune to harmful gases and vapors including inhaled diseases and poisons as well as spells with a harmful gaseous effect. In addition the shell protects targets (and their equipment) from extreme temperatures (between -50 and 140 F) without having to attempt Fortitude saving throws as well as extreme pressures. Life bubble doesn't provide protection from energy damage negative or positive energy (such as found on the Negative and Positive Energy Planes) or radiation; it also doesn't provide the ability to see in conditions of poor visibility (such as in smoke or fog) or the ability to move or act normally in conditions that impede movement (such as underwater).",
    Range: "Medium",
    SavingThrow: "Will negates (harmless)",
    School: SpellSchool.Abjuration,
    Source: "Core Rulebook",
    PageNumber: "p.363",
    SpellResistance: "Yes",
    TargetsEffectArea:
      "Up to (CASTERLEVEL) creatures no two of which can be more than 30 ft. apart"
  },
  "Logic Bomb": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 2 }],
    SpellListDescription:
      "Target computer deals 6d6 energy damage to the first creature that tries and fails to use it.",
    Duration: "(CASTERLEVEL) days or until triggered",
    Level: 2,
    Description:
      "You infuse one computer system or module with protective energy inuring it against attempts to access it. As long as this spell is in effect the first time a creature unsuccessfully attempts to access destroy or manipulate the affected computer system or module (using the Computers skill or otherwise) it takes 6d6 damage (either cold electricity or fire damage; you choose when casting the spell and the spell gains the appropriate descriptor). The creature can attempt a Fortitude saving throw for half damage and spell resistance applies. This damage is in addition to any negative effects the creature suffers due to the system's other countermeasures.",
    Range: "Touch",
    SavingThrow: "See text",
    School: SpellSchool.Abjuration,
    Source: "Core Rulebook",
    PageNumber: "p.364",
    SpellResistance: "See text",
    TargetsEffectArea: "One computer system or module"
  },
  "Magic Missile": {
    CastingTime: "1 standard action; see text",
    Classes: [{ class: Class.Technomancer, level: 1 }],
    SpellListDescription: "Two missiles deal 1d4+1 force damage.",
    Descriptor: [SpellDescriptor.Force],
    Duration: "Instantaneous",
    Level: 1,
    Description:
      "You fire two missiles of magical energy that strike targets unerringly (the creatures must still be valid targets) and deal 1d4+1 force damage each. You can't target specific parts of a creature and objects are not damaged by the spell. You can target a single creature or several creatures but each missile can strike only one creature. You must designate targets before you attempt to overcome spell resistance or roll damage. You can cast this spell as a full action. If you do you fire three missiles instead of two.",
    Range: "Medium",
    SavingThrow: "None",
    School: SpellSchool.Evocation,
    Source: "Core Rulebook",
    PageNumber: "p.364",
    SpellResistance: "Yes",
    TargetsEffectArea:
      "Up to three creatures no two of which can be more than 15 ft. apart; see text"
  },
  "Make Whole": {
    CastingTime: "10 minutes",
    Classes: [{ class: Class.Technomancer, level: 2 }],
    SpellListDescription: "Restore 5d6 Hit Points to an object or construct.",
    Duration: "Instantaneous",
    Level: 2,
    Description:
      "This spell functions as mending except it restores 5d6 Hit Points when cast on an object or construct creature. Make whole can fix destroyed magic items and it restores the magic properties of the item if your technomancer level is at least twice the item's level. Items with charges (such as batteries) and single-use items (such as potions and grenades) can't be repaired in this way. When you cast make whole on a construct the spell bypasses any immunity to magic as if the spell did not allow spell resistance.",
    Range: "Close",
    SavingThrow: "Will negates (harmless object)",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.364",
    SpellResistance: "Yes (harmless object)",
    TargetsEffectArea:
      "One object of up to (CASTERLEVEL) bulk or one construct of any size"
  },
  Mending: {
    CastingTime: "10 minutes",
    Classes: [{ class: Class.Technomancer, level: 0 }],
    SpellListDescription: "Restore 1d4 Hit Points to an object or construct.",
    Duration: "Instantaneous",
    Level: 0,
    Description:
      "This spell repairs damaged objects and constructs restoring 1d4 Hit Points. If the object has the broken condition this condition is removed if the object is restored to at least half its original Hit Points. All of the pieces of an object must be present for this spell to function. A construct can benefit from this spell only once per day. Magic items can be repaired by this spell but magic items that are destroyed don't have their magic abilities restored. This spell doesn't reverse effects that warp or otherwise transmute items but it can still repair damage dealt to such items.",
    Range: "10 ft.",
    SavingThrow: "Will negates (harmless object)",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.364",
    SpellResistance: "Yes (harmless object)",
    TargetsEffectArea: "One object of up to 1 bulk"
  },
  "Microbot Assault": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 2 }],
    SpellListDescription: "Cloud of tiny robots harasses creatures within it.",
    Descriptor: [SpellDescriptor.Creation],
    Duration: "Concentration + 1 round",
    Level: 2,
    Description:
      "You pull latent technological energy from the air to form a cloud of fist-sized hindering microbots that fill an area you designate. The microbots begin in a 10-foot-square area when you create them and you can create the cloud so that it shares the space of other creatures. If no creatures are within the cloud's area the microbots pursue and harass the nearest creature that is hostile to you as best they can each round. Although the microbots generally know which creatures are your enemies you have no control over their targets or direction of travel. If there are multiple valid targets the microbots can harass the cloud will split into a maximum of four 5-foot-square segments and pursue different targets. The cloud (and any segments thereof) has a fly speed of 20 feet. Each round on your turn the microbot cloud grants harrying fire (see page 247) against the foes in its spaces. In addition the cloud grants covering fire (see page 246) to anyone attacked by foes in its spaces. The microbots constantly repair themselves and the cloud generates new microbots every few seconds so any attack against them is essentially ineffective.",
    Range: "Close",
    SavingThrow: "None",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.364",
    SpellResistance: "No",
    TargetsEffectArea: "Distracting cloud of microbots"
  },
  "Mind Link": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 1 }],
    SpellListDescription:
      "Instantly and telepathically communicate information to a creature.",
    Descriptor: [SpellDescriptor.MindAffecting],
    Duration: "Instantaneous",
    Level: 1,
    Description:
      "You link your mind to that of a touched creature to swiftly communicate a large amount of complex information in an instant. You decide what the target learns limited to any amount of information that otherwise could be communicated in 10 minutes. This information comes in a series of visual images and emotional sensations and it isn't language dependent.",
    Range: "Touch",
    SavingThrow: "Will negates (harmless)",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.365",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "One creature"
  },
  "Mind Probe": {
    CastingTime: "1 minute",
    Classes: [{ class: Class.Mystic, level: 4 }],
    SpellListDescription:
      "Potentially access a target creature's memories and its knowledge.",
    Descriptor: [SpellDescriptor.MindAffecting],
    Duration: "(CASTERLEVEL) rounds (D)",
    Level: 4,
    Description:
      "You gain access to the target's memories and knowledge and you can pry the information you want from them involuntarily. You can attempt to learn the answer to one question of your choice per round; after each question the target can attempt a Will saving throw to end the spell. If it fails the creature can attempt a Bluff check with a DC equal to 11 + your Sense Motive modifier. If it fails its Bluff check you gain the answer you desire. If it succeeds at its check you gain no information. If it succeeds by 5 or more it answers however it chooses and you believe that wrong answer to be the truth. Your questions are purely telepathic inquiries and the answers to those questions are imparted directly into your mind. You and the target don't need to speak the same language though less intelligent creatures may yield up only appropriate sensory images in answer to your questions.",
    Range: "Close",
    SavingThrow: "Will negates see text",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.365",
    SpellResistance: "Yes",
    TargetsEffectArea: "One creature"
  },
  "Mind Thrust (Level 1)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 1 }],
    SpellListDescription: "Mentally deal 2d10 damage to one target.",
    Descriptor: [SpellDescriptor.MindAffecting],
    Duration: "Instantaneous",
    Level: 1,
    Description:
      "You divine the most vulnerable portion of your opponent's mind and overload it with a glut of psychic information. The target can attempt a Will saving throw to halve the damage dealt by this spell. This spell has no effect on creatures without an Intelligence score.  When you cast mind thrust as a 1st-level spell it deals 2d10 damage to the target.",
    Range: "Close",
    SavingThrow: "Will half",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.365",
    SpellResistance: "Yes",
    TargetsEffectArea: "One creature"
  },
  "Mind Thrust (Level 2)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 2 }],
    SpellListDescription: "Mentally deal 4d10 damage to one target.",
    Descriptor: [SpellDescriptor.MindAffecting],
    Duration: "Instantaneous",
    Level: 2,
    Description:
      "You divine the most vulnerable portion of your opponent's mind and overload it with a glut of psychic information. The target can attempt a Will saving throw to halve the damage dealt by this spell. This spell has no effect on creatures without an Intelligence score.  When you cast mind thrust as a 2nd-level spell it deals 4d10 damage to the target.",
    Range: "Close",
    SavingThrow: "Will half",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.365",
    SpellResistance: "Yes",
    TargetsEffectArea: "One creature"
  },
  "Mind Thrust (Level 3)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 3 }],
    SpellListDescription: "Mentally deal 7d10 damage to one target.",
    Descriptor: [SpellDescriptor.MindAffecting],
    Duration: "Instantaneous",
    Level: 3,
    Description:
      "You divine the most vulnerable portion of your opponent's mind and overload it with a glut of psychic information. The target can attempt a Will saving throw to halve the damage dealt by this spell. This spell has no effect on creatures without an Intelligence score.  When you cast mind thrust as a 3rd-level spell it deals 7d10 damage to the target.",
    Range: "Close",
    SavingThrow: "Will half",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.365",
    SpellResistance: "Yes",
    TargetsEffectArea: "One creature"
  },
  "Mind Thrust (Level 4)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 4 }],
    SpellListDescription:
      "Mentally deal 10d10 damage to and fatigue a single target.",
    Descriptor: [SpellDescriptor.MindAffecting],
    Duration: "Instantaneous",
    Level: 4,
    Description:
      "You divine the most vulnerable portion of your opponent's mind and overload it with a glut of psychic information. The target can attempt a Will saving throw to halve the damage dealt by this spell. This spell has no effect on creatures without an Intelligence score.  When you cast mind thrust as a 4th-level spell it deals 10d10 damage to the target and the target is fatigued for 1 round if it fails its saving throw.",
    Range: "Close",
    SavingThrow: "Will half",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.365",
    SpellResistance: "Yes",
    TargetsEffectArea: "One creature"
  },
  "Mind Thrust (Level 5)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 5 }],
    SpellListDescription:
      "Mentally deal 15d10 damage to and exhaust one target.",
    Descriptor: [SpellDescriptor.MindAffecting],
    Duration: "Instantaneous",
    Level: 5,
    Description:
      "You divine the most vulnerable portion of your opponent's mind and overload it with a glut of psychic information. The target can attempt a Will saving throw to halve the damage dealt by this spell. This spell has no effect on creatures without an Intelligence score.  When you cast mind thrust as a 5th-level spell it deals 15d10 damage to the target. The target is exhausted for 1 round if it fails its save and it is fatigued for 1 round if it succeeds at its saving throw.",
    Range: "Close",
    SavingThrow: "Will half",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.365",
    SpellResistance: "Yes",
    TargetsEffectArea: "One creature"
  },
  "Mind Thrust (Level 6)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 6 }],
    SpellListDescription:
      "Mentally deal 17d10 damage to exhaust and stun one target.",
    Descriptor: [SpellDescriptor.MindAffecting],
    Duration: "Instantaneous",
    Level: 6,
    Description:
      "You divine the most vulnerable portion of your opponent's mind and overload it with a glut of psychic information. The target can attempt a Will saving throw to halve the damage dealt by this spell. This spell has no effect on creatures without an Intelligence score.  When you cast mind thrust as a 6th-level spell it deals 17d10 damage to the target. The target is exhausted and stunned for 1 round if it fails its save and it is fatigued for 1 round if it succeeds at its saving throw.",
    Range: "Close",
    SavingThrow: "Will half",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.365",
    SpellResistance: "Yes",
    TargetsEffectArea: "One creature"
  },
  Miracle: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic }],
    SpellListDescription: "Requests a deity's intercession.",
    Duration: "See text",
    Description:
      "When you cast miracle you state what you would like to have happen and request that the power to which you are connected intercede. A request that is out of line with the power's nature is refused. A miracle can do any of the following things - Duplicate any mystic spell of 6th level or lower; Duplicate any other spell of 5th level or lower; Undo the harmful effects of certain spells such as feeblemind; Produce any effect whose power level is in line with the above effects. At the GM's discretion you may try to use a miracle to produce greater effects than these but doing so may be dangerous or the spell may have only a partial effect. A duplicated spell allows saving throws and spell resistance as normal but the save DCs are the same as for a 7th-level spell. For the purpose of other effects that depend on spell level miracle counts as a 9th-level spell.",
    Range: "See text",
    SavingThrow: "See text",
    School: SpellSchool.Evocation,
    Source: "Core Rulebook",
    PageNumber: "p.366",
    SpellResistance: "Yes",
    TargetsEffectArea: "See text"
  },
  "Mirror Image": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 2 }],
    SpellListDescription: "Create decoy duplicates of yourself.",
    Duration: "(CASTERLEVEL) minutes",
    Level: 2,
    Description:
      "This spell creates a number of illusory doubles of you that inhabit your square. These doubles make it difficult for enemies to precisely locate and attack you. When you cast mirror image it creates 1d4 figment images. These images remain in your space and move with you mimicking your movements sounds and actions exactly. Whenever you are attacked or are the target of a spell that requires an attack roll there is a possibility that the attack targets one of your images instead. If the attack hits roll randomly to see whether the selected target is real or a figment. If it is a figment the figment is destroyed. If the attack misses by 5 or less one of your figments is destroyed by the near miss and an attack that misses you due to a miss chance also destroys an image. Area spells and effects that don't require an attack roll affect you normally and don't destroy any of your figments. Spells with a range of touch are harmlessly discharged if used to destroy a figment. An attacker must be able to see the figments to be fooled. If you are invisible or the attacker is blind the spell has no effect. Blindsense doesn't help distinguish the figments from the real you but blindsight is sufficient to do so.",
    Range: "Personal",
    School: SpellSchool.Illusion,
    Source: "Core Rulebook",
    PageNumber: "p.366"
  },
  Mislead: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 5 }],
    SpellListDescription:
      "Make yourself invisible and create an illusory double of your likeness.",
    Duration: "(CASTERLEVEL) rounds (D) and concentration + 3 rounds; see text",
    Level: 5,
    Description:
      "You become invisible (as greater invisibility) and at the same time a figment double of you (as per a 3rd-level casting of holographic image) appears. The double appears within close range ((25+5*CASTERLEVEL/2) feet) but thereafter moves as you direct it (which requires concentration beginning on the first round after the casting). You can make the figment appear superimposed perfectly over your own body so that observers don't notice an image appearing and you turning invisible. You and the figment can then move in different directions. The double moves at your speed and can talk and gesture as if it were real but it can't attack or cast spells though it can pretend to do so. The illusory double lasts as long as you concentrate upon it plus 3 additional rounds. After you cease concentration the illusory double continues to carry out the same activity until the duration expires. The invisibility lasts for (CASTERLEVEL) rounds regardless of concentration.",
    Range: "Personal; see text",
    SavingThrow: "None or Will disbelief see text",
    School: SpellSchool.Illusion,
    Source: "Core Rulebook",
    PageNumber: "p.366",
    SpellResistance: "No",
    TargetsEffectArea: "One illusory double"
  },
  "Modify Memory": {
    CastingTime: "1 round; see text",
    Classes: [{ class: Class.Mystic, level: 5 }],
    SpellListDescription: "Change 5 minutes of target's memories.",
    Descriptor: [SpellDescriptor.Compulsion, SpellDescriptor.MindAffecting],
    Duration: "Permanent",
    Level: 5,
    Description:
      "You reach into the target's mind and modify up to 5 minutes of its memories in one of the following ways - Eliminate all memory of an event the target actually experienced. This spell cannot negate charm person suggestion or similar spells; Allow the target to recall with perfect clarity an event it actually experienced; Change the details of an event the target actually experienced; Implant a memory of an event the target never experienced. - Casting the spell takes 1 round. If the target fails its saving throw you proceed with the spell by spending as much as 5 minutes (a period of time equal to the amount of memory you want to modify) visualizing the memory you wish to modify in the target. If your concentration is disturbed before the visualization is complete or if the target moves beyond the spell's range at any point during this time the spell fails. A modified memory does not necessarily affect the target's actions particularly if it contradicts the creature's natural inclinations. An illogical modified memory is usually dismissed as a bad dream a hallucination or another similar excuse.",
    Range: "Close",
    SavingThrow: "Will negates",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.366",
    SpellResistance: "Yes",
    TargetsEffectArea: "One living creature"
  },
  "Mystic Cure (Level 1)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 1 }],
    SpellListDescription:
      "Restore 1d8 + your Wisdom modifier Hit Points to a living creature.",
    Descriptor: [SpellDescriptor.Healing],
    Duration: "Instantaneous",
    Level: 1,
    Description:
      "With a touch you heal and invigorate your target restoring a number of Hit Points. If the target regains all of its Hit Points as a result of this healing you can apply the remaining healing to yourself as long as you are a living creature. On the other hand if this isn't enough to restore all the target's Hit Points you can transfer any number of your own Hit Points to the target healing the target that amount. You can't transfer more Hit Points than you have or more Hit Points than the target is missing. Mystic cure restores a number of Hit Points to your target depending on the spell's level.  1d8 + your Wisdom modifier",
    Range: "Touch",
    SavingThrow: "Will half (harmless)",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.367",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "One living creature"
  },
  "Mystic Cure (Level 2)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 2 }],
    SpellListDescription:
      "Restore 3d8 + your Wisdom modifier Hit Points to a living creature.",
    Descriptor: [SpellDescriptor.Healing],
    Duration: "Instantaneous",
    Level: 2,
    Description:
      "With a touch you heal and invigorate your target restoring a number of Hit Points. If the target regains all of its Hit Points as a result of this healing you can apply the remaining healing to yourself as long as you are a living creature. On the other hand if this isn't enough to restore all the target's Hit Points you can transfer any number of your own Hit Points to the target healing the target that amount. You can't transfer more Hit Points than you have or more Hit Points than the target is missing. Mystic cure restores a number of Hit Points to your target depending on the spell's level.  3d8 + your Wisdom modifier",
    Range: "Touch",
    SavingThrow: "Will half (harmless)",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.367",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "One living creature"
  },
  "Mystic Cure (Level 3)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 3 }],
    SpellListDescription:
      "Restore 5d8 + your Wisdom modifier Hit Points to a living creature.",
    Descriptor: [SpellDescriptor.Healing],
    Duration: "Instantaneous",
    Level: 3,
    Description:
      "With a touch you heal and invigorate your target restoring a number of Hit Points. If the target regains all of its Hit Points as a result of this healing you can apply the remaining healing to yourself as long as you are a living creature. On the other hand if this isn't enough to restore all the target's Hit Points you can transfer any number of your own Hit Points to the target healing the target that amount. You can't transfer more Hit Points than you have or more Hit Points than the target is missing. Mystic cure restores a number of Hit Points to your target depending on the spell's level.  5d8 + your Wisdom modifier",
    Range: "Touch",
    SavingThrow: "Will half (harmless)",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.367",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "One living creature"
  },
  "Mystic Cure (Level 4)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 4 }],
    SpellListDescription:
      "Restore 12d8 + your Wisdom modifier Hit Points to a living creature or restore life to a recently slain creature.",
    Descriptor: [SpellDescriptor.Healing],
    Duration: "Instantaneous",
    Level: 4,
    Description:
      "With a touch you heal and invigorate your target restoring a number of Hit Points. If the target regains all of its Hit Points as a result of this healing you can apply the remaining healing to yourself as long as you are a living creature. On the other hand if this isn't enough to restore all the target's Hit Points you can transfer any number of your own Hit Points to the target healing the target that amount. You can't transfer more Hit Points than you have or more Hit Points than the target is missing. Mystic cure restores a number of Hit Points to your target depending on the spell's level.  7d8 + your Wisdom modifier. In addition unlike most healing when you cast mystic cure as a spell of 4th-level or higher you have two options to enhance its effects. The first option is to restore an extra 5d8 Hit Points with a 4th-level mystic cure spell an extra 7d8 Hit Points with a 5th-level mystic cure spell or an extra 9d8 Hit Points with a 6th-level mystic cure spell. The second option is to bring a target that died within 2 rounds back to life. In addition to healing such a creature the spell returns the target to life and the target takes a temporary negative level for 24 hours. This spell can't resuscitate creatures slain by death effects creatures turned into undead or creatures whose bodies were destroyed significantly mutilated disintegrated and so on. Casting this spell doesn't provoke attacks of opportunity.",
    Range: "Touch",
    SavingThrow: "Will half (harmless)",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.367",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "One living creature"
  },
  "Mystic Cure (Level 5)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 5 }],
    SpellListDescription:
      "Restore 16d8 + your Wisdom modifier Hit Points to a living creature or restore life to a recently slain creature.",
    Descriptor: [SpellDescriptor.Healing],
    Duration: "Instantaneous",
    Level: 5,
    Description:
      "With a touch you heal and invigorate your target restoring a number of Hit Points. If the target regains all of its Hit Points as a result of this healing you can apply the remaining healing to yourself as long as you are a living creature. On the other hand if this isn't enough to restore all the target's Hit Points you can transfer any number of your own Hit Points to the target healing the target that amount. You can't transfer more Hit Points than you have or more Hit Points than the target is missing. Mystic cure restores a number of Hit Points to your target depending on the spell's level.  9d8 + your Wisdom modifier. In addition unlike most healing when you cast mystic cure as a spell of 4th-level or higher you have two options to enhance its effects. The first option is to restore an extra 5d8 Hit Points with a 4th-level mystic cure spell an extra 7d8 Hit Points with a 5th-level mystic cure spell or an extra 9d8 Hit Points with a 6th-level mystic cure spell. The second option is to bring a target that died within 2 rounds back to life. In addition to healing such a creature the spell returns the target to life and the target takes a temporary negative level for 24 hours. This spell can't resuscitate creatures slain by death effects creatures turned into undead or creatures whose bodies were destroyed significantly mutilated disintegrated and so on. Casting this spell doesn't provoke attacks of opportunity.",
    Range: "Touch",
    SavingThrow: "Will half (harmless)",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.367",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "One living creature"
  },
  "Mystic Cure (Level 6)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 6 }],
    SpellListDescription:
      "Restore 20d8 + your Wisdom modifier Hit Points to a living creature or restore life to a recently slain creature.",
    Descriptor: [SpellDescriptor.Healing],
    Duration: "Instantaneous",
    Level: 6,
    Description:
      "With a touch you heal and invigorate your target restoring a number of Hit Points. If the target regains all of its Hit Points as a result of this healing you can apply the remaining healing to yourself as long as you are a living creature. On the other hand if this isn't enough to restore all the target's Hit Points you can transfer any number of your own Hit Points to the target healing the target that amount. You can't transfer more Hit Points than you have or more Hit Points than the target is missing. Mystic cure restores a number of Hit Points to your target depending on the spell's level.  11d8 + your Wisdom modifier. In addition unlike most healing when you cast mystic cure as a spell of 4th-level or higher you have two options to enhance its effects. The first option is to restore an extra 5d8 Hit Points with a 4th-level mystic cure spell an extra 7d8 Hit Points with a 5th-level mystic cure spell or an extra 9d8 Hit Points with a 6th-level mystic cure spell. The second option is to bring a target that died within 2 rounds back to life. In addition to healing such a creature the spell returns the target to life and the target takes a temporary negative level for 24 hours. This spell can't resuscitate creatures slain by death effects creatures turned into undead or creatures whose bodies were destroyed significantly mutilated disintegrated and so on. Casting this spell doesn't provoke attacks of opportunity.",
    Range: "Touch",
    SavingThrow: "Will half (harmless)",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.367",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "One living creature"
  },
  "Mystic Cure (Mass)(Level 5)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 5 }],
    SpellListDescription:
      "Restore 3d8 + your Wisdom modifier Hit Points to one living creature per level.",
    Descriptor: [SpellDescriptor.Healing],
    Duration: "Instantaneous",
    Level: 5,
    Description:
      "You restore a number of Hit Points to a number of targets. Choose one of these targets within 10 feet of you; if that target regains all of its Hit Points as a result of this healing you can apply the remaining healing to yourself as long as you are a living creature. On the other hand if this isn't enough to restore all of that target's Hit Points you can transfer any number of your own Hit Points to that target healing the target that amount. You can't transfer more Hit Points than you have or more Hit Points than the target is missing. The number of Hit Points mass mystic cure restores to each target depends on the spell's level.  3d8 + your Wisdom modifier",
    Range: "Close; see text",
    SavingThrow: "Will half (harmless)",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.367",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea:
      "Up to (CASTERLEVEL) creatures no two of which can be more than 30 ft. apart"
  },
  "Mystic Cure (Mass)(Level 6)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 6 }],
    SpellListDescription:
      "Restore 5d8 + your Wisdom modifier Hit Points to one living creature per level.",
    Descriptor: [SpellDescriptor.Healing],
    Duration: "Instantaneous",
    Level: 6,
    Description:
      "You restore a number of Hit Points to a number of targets. Choose one of these targets within 10 feet of you; if that target regains all of its Hit Points as a result of this healing you can apply the remaining healing to yourself as long as you are a living creature. On the other hand if this isn't enough to restore all of that target's Hit Points you can transfer any number of your own Hit Points to that target healing the target that amount. You can't transfer more Hit Points than you have or more Hit Points than the target is missing. The number of Hit Points mass mystic cure restores to each target depends on the spell's level.  5d8 + your Wisdom modifier",
    Range: "Close; see text",
    SavingThrow: "Will half (harmless)",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.367",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea:
      "Up to (CASTERLEVEL) creatures no two of which can be more than 30 ft. apart"
  },
  Nondetection: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 3 }],
    SpellListDescription: "Hide target from divination and surveillance.",
    Duration: "(CASTERLEVEL) hours",
    Level: 3,
    Description:
      "The warded creature or object becomes difficult to detect by divination spells such as clairaudience/clairvoyance and spells with the word detect in their names. Nondetection also prevents location by magic items such as crystal balls and technological items such as cameras and surveillance systems. Casting this spell places significant stress on you and requires you to spend 1 Resolve Point. If a magic divination is attempted against the warded creature or item the caster of the divination must succeed at a caster level check (1d20 + caster level) against a DC equal to 11 + your caster level. If surveillance is attempted with remote cameras or sensors the viewer must succeed at a Perception check against a DC (11+CASTERLEVEL) to see the target. If you cast nondetection on yourself or on an item currently in your possession the DC for each these checks is (15+CASTERLEVEL). If cast on a creature nondetection wards the creature's gear as well as the creature itself. Nondetection protects the target only from discovery by items and remote sensors not by creatures. A camera mounted to a wall and monitored from a security booth is subject to nondetection but a camera in a creature (including constructs) is not.",
    Range: "Touch",
    SavingThrow: "Will negates (harmless object)",
    School: SpellSchool.Abjuration,
    Source: "Core Rulebook",
    PageNumber: "p.367",
    SpellResistance: "Yes (harmless object)",
    TargetsEffectArea: "One creature or object"
  },
  Overheat: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 1 }],
    SpellListDescription: "Deal 2d8 fire damage to creatures in cone.",
    Descriptor: [SpellDescriptor.Fire],
    Duration: "Instantaneous",
    Level: 1,
    Description:
      "You collect the heat generated by nearby bodies and devices and vent it outward in a thermal wave dealing 2d8 fire damage to creatures and objects in the area.",
    Range: "15 ft.",
    SavingThrow: "Reflex half",
    School: SpellSchool.Evocation,
    Source: "Core Rulebook",
    PageNumber: "p.367",
    SpellResistance: "Yes",
    TargetsEffectArea: "Cone-shaped burst"
  },
  "Overload Systems": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 4 }],
    SpellListDescription:
      "Target creature has a 50% chance to lose each action.",
    Descriptor: [SpellDescriptor.Compulsion],
    Duration: "(CASTERLEVEL) rounds",
    Level: 4,
    Description:
      "By touching the target (usually requiring a melee attack roll against the target's EAC but you can add your key ability score modifier instead of your Strength modifier if it is higher) you flood the target's body with random jolts of electricity or other interference. On a failed Fortitude save the target is overwhelmed and potentially unable to perform tasks as normal. While this spell is in effect whenever the target takes any action or reaction there is a 50% chance that the target simply takes no action instead. Roll this chance separately for each action the target would take. For example if the target wishes to move and attack during its turn it would roll d% twice to determine whether it could take those actions-once before each action it wishes to take. Each attack of a full attack action counts as separate action. This spell is effective against living and unliving creatures and casting it doesn't provoke attacks of opportunity.",
    Range: "Touch",
    SavingThrow: "Fortitude negates",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.368",
    SpellResistance: "Yes",
    TargetsEffectArea: "One creature"
  },
  Passwall: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 5 }],
    SpellListDescription: "Create a passage through most walls.",
    Duration: "(CASTERLEVEL) hours (D)",
    Level: 5,
    Description:
      "You can create a passage through metal plaster plastic stone or wooden walls but you can not create one through force fields starship bulkheads or other harder materials. The passage is 30 feet deep. If the wall's thickness is more than the depth of the passage created then a single casting of passwall simply makes a niche or short tunnel. Several castings of passwall can then form a continuing passage to breach very thick walls. When passwall ends creatures within the passage are ejected out the nearest exit. If someone dispels passwall or you dismiss it creatures in the passage are ejected out the far exit if there is more than one or out the sole exit.",
    Range: "Touch",
    SavingThrow: "None",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.368",
    SpellResistance: "No",
    TargetsEffectArea: "5-ft.-by-8-ft. opening"
  },
  "Planar Barrier": {
    CastingTime: "6 rounds",
    Classes: [
      { class: Class.Mystic, level: 6 },
      { class: Class.Technomancer, level: 6 }
    ],
    SpellListDescription:
      "Seal an area against all planar travel into or within it.",
    Duration: "24 hours",
    Level: 6,
    Description:
      "Planar barrier seals an area against all planar travel into or within it. This includes all teleportation spells summoning spells plane shifting astral travel and ethereal travel. Such effects simply fail automatically. Starships cannot enter or emerge from Drift travel in an area affected by this spell. Dispel magic does not dispel your planar barrier effect unless the caster level of the creature attempting to dispel it is at least as high as your own. You can't have multiple overlapping planar barrier effects. If planar barrier effects woulds overlap the more recent effect stops at the boundary of the older effect. A planar barrier can be made permanent with a special ritual which takes 1 hour and requires materials worth 15000 credits per 60-foot cube.",
    Range: "Medium",
    SavingThrow: "None",
    School: SpellSchool.Abjuration,
    Source: "Core Rulebook",
    PageNumber: "p.368",
    SpellResistance: "Yes",
    TargetsEffectArea: "(CASTERLEVEL) sixty-foot cubes [S]"
  },
  "Planar Binding (Level 4)": {
    CastingTime: "10 minutes",
    Classes: [
      { class: Class.Mystic, level: 4 },
      { class: Class.Technomancer, level: 4 }
    ],
    SpellListDescription:
      "Trap an extraplanar creature of CR 4 or lower until it performs a task.",
    Descriptor: [SpellDescriptor.Calling],
    Duration: "Instantaneous; see text",
    Level: 4,
    Description:
      "Casting this spell attempts a dangerous act; to lure a creature from another plane to a specifically prepared trap created by the spell within its range. The called creature is held in the trap until it agrees to perform one service in return for its freedom or breaks free. The kind of creature to be bound must be known and stated. If you wish to call a specific individual you must use that individual's proper name in casting the spell. The CR of the outsider you can call with planar binding depends on the spell's level.  One outsider of CR 4 or lower. The target creature can attempt a Will saving throw. If the creature succeeds at the saving throw it resists the spell. If it fails the creature is immediately drawn to the trap (spell resistance does not keep it from being called). The creature can escape from the trap by successfully using its spell resistance (meaning you fail a caster level check against its spell resistance) by dimensional travel or with a successful Charisma check (DC %1). It can try each method once per day and a natural 20 on this check always succeeds (and a natural 1 on your caster level check always fails). If it breaks loose it can flee or attack you. A planar barrier spell cast in the area prevents the creature from escaping via dimensional travel. If the creature does not break free of the trap you can keep it bound for as long as you dare. You can attempt to convince the creature to perform a task for you in exchange for release and perhaps some sort of reward. The creature decides which terms it is willing to accept and it must willingly agree to the terms; magical compulsion isn't sufficient. This continues until the creature promises to serve until it breaks free or until you decide to get rid of it by means of some other spell. It never agrees to unreasonable commands. Once the requested service has been completed the creature need only to inform you to be instantly sent back to its home plane. The creature might later seek revenge against you for having imprisoned it. If you assign some open-ended task that the creature can't complete through its own actions the spell remains in effect for 10 days and the creature gains an immediate chance to break free. A defined task that will take longer than 10 days usually counts as unreasonable. Note that a clever recipient can subvert some instructions. When you use this spell to call a creature with the air chaotic earth evil fire good lawful or water subtype the spell gains that descriptor.|15+CASTERLEVEL/2+CHA",
    Range: "Close",
    SavingThrow: "Will negates",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.369",
    SpellResistance: "Yes; see text",
    TargetsEffectArea: "See text",
    Variants: [
      "Good",
      "Evil",
      "Lawful",
      "Chaotic",
      "Air",
      "Earth",
      "Fire",
      "Water"
    ]
  },
  "Planar Binding (Level 5)": {
    CastingTime: "10 minutes",
    Classes: [
      { class: Class.Mystic, level: 5 },
      { class: Class.Technomancer, level: 5 }
    ],
    SpellListDescription:
      "Trap an extraplanar creature of CR 7 or lower until it performs a task.",
    Descriptor: [SpellDescriptor.Calling],
    Duration: "Instantaneous; see text",
    Level: 5,
    Description:
      "Casting this spell attempts a dangerous act; to lure a creature from another plane to a specifically prepared trap created by the spell within its range. The called creature is held in the trap until it agrees to perform one service in return for its freedom or breaks free. The kind of creature to be bound must be known and stated. If you wish to call a specific individual you must use that individual's proper name in casting the spell. The CR of the outsider you can call with planar binding depends on the spell's level.  One outsider of CR 7 or lower. The target creature can attempt a Will saving throw. If the creature succeeds at the saving throw it resists the spell. If it fails the creature is immediately drawn to the trap (spell resistance does not keep it from being called). The creature can escape from the trap by successfully using its spell resistance (meaning you fail a caster level check against its spell resistance) by dimensional travel or with a successful Charisma check (DC %1). It can try each method once per day and a natural 20 on this check always succeeds (and a natural 1 on your caster level check always fails). If it breaks loose it can flee or attack you. A planar barrier spell cast in the area prevents the creature from escaping via dimensional travel. If the creature does not break free of the trap you can keep it bound for as long as you dare. You can attempt to convince the creature to perform a task for you in exchange for release and perhaps some sort of reward. The creature decides which terms it is willing to accept and it must willingly agree to the terms; magical compulsion isn't sufficient. This continues until the creature promises to serve until it breaks free or until you decide to get rid of it by means of some other spell. It never agrees to unreasonable commands. Once the requested service has been completed the creature need only to inform you to be instantly sent back to its home plane. The creature might later seek revenge against you for having imprisoned it. If you assign some open-ended task that the creature can't complete through its own actions the spell remains in effect for 10 days and the creature gains an immediate chance to break free. A defined task that will take longer than 10 days usually counts as unreasonable. Note that a clever recipient can subvert some instructions. When you use this spell to call a creature with the air chaotic earth evil fire good lawful or water subtype the spell gains that descriptor.|15+CASTERLEVEL/2+CHA",
    Range: "Close",
    SavingThrow: "Will negates",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.369",
    SpellResistance: "Yes; see text",
    TargetsEffectArea: "See text",
    Variants: [
      "Good",
      "Evil",
      "Lawful",
      "Chaotic",
      "Air",
      "Earth",
      "Fire",
      "Water"
    ]
  },
  "Planar Binding (Level 6)": {
    CastingTime: "10 minutes",
    Classes: [
      { class: Class.Mystic, level: 6 },
      { class: Class.Technomancer, level: 6 }
    ],
    SpellListDescription:
      "Trap an extraplanar creature of CR 10 or lower until it performs a task.",
    Descriptor: [SpellDescriptor.Calling],
    Duration: "Instantaneous; see text",
    Level: 6,
    Description:
      "Casting this spell attempts a dangerous act; to lure a creature from another plane to a specifically prepared trap created by the spell within its range. The called creature is held in the trap until it agrees to perform one service in return for its freedom or breaks free. The kind of creature to be bound must be known and stated. If you wish to call a specific individual you must use that individual's proper name in casting the spell. The CR of the outsider you can call with planar binding depends on the spell's level.  One outsider of CR 10 or lower. The target creature can attempt a Will saving throw. If the creature succeeds at the saving throw it resists the spell. If it fails the creature is immediately drawn to the trap (spell resistance does not keep it from being called). The creature can escape from the trap by successfully using its spell resistance (meaning you fail a caster level check against its spell resistance) by dimensional travel or with a successful Charisma check (DC %1). It can try each method once per day and a natural 20 on this check always succeeds (and a natural 1 on your caster level check always fails). If it breaks loose it can flee or attack you. A planar barrier spell cast in the area prevents the creature from escaping via dimensional travel. If the creature does not break free of the trap you can keep it bound for as long as you dare. You can attempt to convince the creature to perform a task for you in exchange for release and perhaps some sort of reward. The creature decides which terms it is willing to accept and it must willingly agree to the terms; magical compulsion isn't sufficient. This continues until the creature promises to serve until it breaks free or until you decide to get rid of it by means of some other spell. It never agrees to unreasonable commands. Once the requested service has been completed the creature need only to inform you to be instantly sent back to its home plane. The creature might later seek revenge against you for having imprisoned it. If you assign some open-ended task that the creature can't complete through its own actions the spell remains in effect for 10 days and the creature gains an immediate chance to break free. A defined task that will take longer than 10 days usually counts as unreasonable. Note that a clever recipient can subvert some instructions. When you use this spell to call a creature with the air chaotic earth evil fire good lawful or water subtype the spell gains that descriptor.|15+CASTERLEVEL/2+CHA",
    Range: "Close",
    SavingThrow: "Will negates",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.369",
    SpellResistance: "Yes; see text",
    TargetsEffectArea: "See text",
    Variants: [
      "Good",
      "Evil",
      "Lawful",
      "Chaotic",
      "Air",
      "Earth",
      "Fire",
      "Water"
    ]
  },
  "Plane Shift": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 6 },
      { class: Class.Technomancer, level: 6 }
    ],
    SpellListDescription:
      "As many as eight creatures travel to another plane you choose.",
    Descriptor: [SpellDescriptor.Teleportation],
    Duration: "Instantaneous",
    Level: 6,
    Description:
      "You move yourself or some other creature to another plane of existence or alternate dimension. If several willing or unconscious creatures are linked by hand in a circle as many as eight can be affected by a single casting of plane shift. Arriving at a precise location on the intended plane is nigh impossible. From the Material Plane you can reach any other plane (except for the Drift) though you appear 5 to 500 miles (5d%) from the last place one of the targets (your choice) was located last time that target traveled to that plane. If it's the first time traveling to a particular plane for all targets you appear at a random location on the plane though you can use other means of transit such as interplanetary teleport to travel on the new plane. Mystics must have an object attuned to a specific plane or native to that plane in order to use plane shift to travel to a plane. A technomancer requires a planar navigational program for a specific plane in order to travel to that plane with plane shift. Special rituals jealously hoarded by powerful technomancers and mystics can allow you to travel to specific locations on the chosen plane or even to unknown worlds.",
    Range: "Touch",
    SavingThrow: "Will negates",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.369",
    SpellResistance: "Yes",
    TargetsEffectArea:
      "One creature or up to eight willing or unconscious creatures"
  },
  "Private Sanctum": {
    CastingTime: "10 minutes",
    Classes: [{ class: Class.Technomancer, level: 5 }],
    SpellListDescription:
      "Prevent anyone from viewing or scrying an area for 24 hours.",
    Duration: "24 hours (D)",
    Level: 5,
    Description:
      "This spell ensures privacy. Anyone looking into the area from outside sees only a dark foggy mass. Darkvision cannot penetrate it. No sounds no matter how loud can escape the area so nobody can eavesdrop from outside. Those inside can see out normally. Divination (scrying) spells can't perceive anything within the area and those within are immune to detect thoughts. The ward prevents speech between those inside and those outside (because it blocks sound) and technological communication (as it blocks broadcasts) but it doesn't prevent other magic communication such as a telepathic message spell or telepathic communication. The spell does not prevent creatures or objects from moving into and out of the area.",
    Range: "Close",
    SavingThrow: "None",
    School: SpellSchool.Abjuration,
    Source: "Core Rulebook",
    PageNumber: "p.369",
    SpellResistance: "No",
    TargetsEffectArea: "(CASTERLEVEL) thirty-foot cubes [S]"
  },
  "Probability Prediction": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 3 }],
    SpellListDescription: "Reroll one attack roll save or check.",
    Duration: "(CASTERLEVEL) rounds (D); see text",
    Level: 3,
    Description:
      "You open your mind to read the underlying probability of the universe. At any point during the duration of this spell you can discharge it to reroll any d20 roll (attack roll saving throw skill check etc.; see page 243). This takes no action but you must choose to do it before you learn the results of the first roll. You must take the result of the second roll even if it is worse.",
    Range: "Personal",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.369"
  },
  "Prying Eyes": {
    CastingTime: "1 minute",
    Classes: [{ class: Class.Technomancer, level: 5 }],
    SpellListDescription: "Twenty floating eyes scout for you.",
    Duration: "(CASTERLEVEL) hours (D); see text",
    Level: 5,
    Description:
      "You create 20 semitangible visible magical orbs called eyes. These eyes move out scout around and return as you direct them when casting the spell. Each eye can see 120 feet (normal vision only) in all directions. While the individual eyes are quite fragile they're small and difficult to spot. Each eye is a Fine construct (about the size of a small apple) with the magical subtype. They each have 1 Hit Point and EAC and KAC of 18 and they fly at a speed of 30 feet with a +20 bonus to Acrobatics checks to fly and a +16 bonus to Stealth checks. An eye has a +20 Perception bonus and is subject to darkness fog illusions and any other factors that affect your ability to receive visual information about your surroundings. An eye traveling in darkness must find its way by touch. When you create the eyes you specify instructions you want them to follow in a command of no more than 25 words. The eyes know anything you know. In order to report their findings the eyes must return to your hand. Each eye replays in your mind all that it has seen during its existence. It takes an eye 1 round to replay 1 hour of recorded images. After relaying all of its findings an eye simply disappears. If an eye ever gets more than 1 mile away from you it instantly ceases to exist. However your link with the eye is such that you won't know if the eye was destroyed because it wandered out of range or because of some other event. The eyes exist for up to (CASTERLEVEL) hours or until they return to you. Dispel magic can destroy the eyes. Roll separately for each eye caught in an area dispel.",
    Range: "1 mile",
    SavingThrow: "None",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.370",
    SpellResistance: "No",
    TargetsEffectArea: "20 magical sensors"
  },
  "Psychic Surgery": {
    CastingTime: "10 minutes",
    Classes: [{ class: Class.Mystic, level: 6 }],
    SpellListDescription:
      "Cure all Intelligence Wisdom and Charisma damage and drain plus remove other mental afflictions and conditions.",
    Descriptor: [SpellDescriptor.MindAffecting],
    Duration: "Instantaneous",
    Level: 6,
    Description:
      "Psychic surgery heals the target of all Intelligence Wisdom and Charisma damage and it restores all points permanently drained from the target's Intelligence Wisdom and Charisma scores. It also eliminates all ongoing confusion fear and insanity effects. Psychic surgery also removes any mental afflictions that could be removed with dispel magic as well as mental diseases. Psychic surgery removes all effects magically altering the target's memory even instantaneous effects and it can restore a memory to perfect clarity (even if the memory loss is due to the mundane passage of time).",
    Range: "Touch",
    SavingThrow: "None",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.370",
    SpellResistance: "No",
    TargetsEffectArea: "One willing or unconscious living creature"
  },
  "Psychokinetic Hand": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 0 },
      { class: Class.Technomancer, level: 0 }
    ],
    SpellListDescription: "Telekinetically move an object of 1 bulk or less.",
    Duration: "Concentration",
    Level: 0,
    Description:
      "You point your finger at the target object gaining the ability to lift it and move it at will from a distance. As a move action you can propel the object as far as 15 feet in any direction though the spell ends if the distance between you and the object ever exceeds the spell's range. You can't perform complex operations such as firing a gun or using a computer but you can shut a mechanical door or lid and work simple buttons to open or close automated doors or trigger an alarm.",
    Range: "Close",
    SavingThrow: "None",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.370",
    SpellResistance: "No",
    TargetsEffectArea: "One unattended object of no more than 10 lbs. or 1 bulk"
  },
  "Psychokinetic Strangulation": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 3 }],
    SpellListDescription:
      "Concentrate to immobilize target and deal 3d8 damage per round.",
    Duration: "Concentration up to (CASTERLEVEL) rounds",
    Level: 3,
    Description:
      "You manipulate the mystical energy around a creature's throat into a viselike grip potentially choking the life out of your victim. Each round you concentrate on this spell it deals 3d8 bludgeoning damage and immobilizes the target. A creature immobilized in this way cannot move and must hold its breath (see page 404). The creature can still attack with any of its weapons (except any bite attacks) cast spells and so on. Each round the spell affects the target the target can attempt a Fortitude saving throw to halve the damage and avoid being immobilized.",
    Range: "Close",
    SavingThrow: "Fortitude partial see text",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.370",
    SpellResistance: "Yes",
    TargetsEffectArea: "One creature that breathes"
  },
  "Raise Dead": {
    CastingTime: "1 minute",
    Classes: [{ class: Class.Mystic, level: 5 }],
    SpellListDescription:
      "Restore life to a creature that died no more than (CASTERLEVEL) days ago.",
    Descriptor: [SpellDescriptor.Healing],
    Duration: "Instantaneous",
    Level: 5,
    Description:
      "You restore life to a deceased creature. You can raise a creature that has been dead for no longer than (CASTERLEVEL) days. In addition the target's soul must be free and willing to return. If the target's soul is not willing to return the spell fails; therefore a target that wants to return to life receives no saving throw against this spell. Casting this spell requires you to create a complex representation of the target deceased creature worth at least 5000 credits to serve as a beacon for the creature's soul. This object is consumed when you cast the spell. Coming back from the dead is an ordeal. The target of the spell gains 2 permanent negative levels when it is raised just as if it had been hit by a creature's ability that bestows permanent negative levels. If the target is 1st level it takes 2 Constitution drain instead (if this would reduce its Constitution to 0 or less it can't be raised). A raised creature returns with no Resolve Points no Stamina Points and no spell slots (until it rests to recover them normally). It has 5 Hit Points. Any ability scores reduced to 0 are raised to 1. Normal poison and normal disease are cured in the process of raising the target but magical diseases and curses are not undone. While the spell closes mortal wounds and repairs lethal damage of most kinds the body of the creature to be raised must be whole. Otherwise missing parts are still missing when the creature is brought back to life. The spell can't bring back a creature that has died of old age. Constructs elementals and outsiders can't be raised by this spell. It is possible to bring back a creature that has been turned into an undead creature but the beacon for the creature's soul must be more powerful and must be worth at least 15000 credits.",
    Range: "Touch",
    SavingThrow: "None see text",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.370",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "One dead creature"
  },
  "Rapid Repair": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 5 }],
    SpellListDescription:
      "Construct or weapon regains 2d8 Hit Points per round for 1 minute.",
    Duration: "1 minute",
    Level: 5,
    Description:
      "On each round the target construct or weapon regains 2d8 Hit Points. This does not stack with any fast healing the construct or weapon already has. You can't target a construct or weapon that has been brought to 0 Hit Points or destroyed.",
    Range: "Touch",
    SavingThrow: "Fortitude negates (harmless object)",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.371",
    SpellResistance: "Yes (harmless object)",
    TargetsEffectArea: "One construct or weapon"
  },
  "Ray of Exhaustion": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 3 }],
    SpellListDescription: "Ray makes target exhausted.",
    Duration: "(CASTERLEVEL) minutes",
    Level: 3,
    Description:
      "You create an enervating ray of magic. You must make a ranged attack against your opponent's EAC. On a hit the target is immediately exhausted for the spell's duration. A creature that succeeds at a Fortitude saving throw is only fatigued unless it is already fatigued in which case it instead becomes exhausted despite the saving throw. This spell has no effect on a creature that is already exhausted. Unlike normal exhaustion or fatigue the effect ends as soon as the spell's duration expires.",
    Range: "Close",
    SavingThrow: "Fortitude partial see text",
    School: SpellSchool.Necromancy,
    Source: "Core Rulebook",
    PageNumber: "p.371",
    SpellResistance: "Yes",
    TargetsEffectArea: "One creature"
  },
  Recharge: {
    CastingTime: "1 round",
    Classes: [{ class: Class.Technomancer, level: 2 }],
    SpellListDescription:
      "Replenish charges in a battery or item capable of holding charges.",
    Duration: "Instantaneous",
    Level: 2,
    Description:
      "You restore up to 10 charges to a battery or 5 charges to a technological item capable of being charged by a battery. Since this spell takes your personal energy you must spend 1 Resolve Point to cast it. If you recharge a battery there is a 20% chance the battery is destroyed by the attempt. If you restore more charges than the item can hold the item must succeed at a Fortitude saving throw or take 1d6 electricity damage for each excess charge. This spell provides no knowledge of how many charges an item can safely hold but you can choose to bestow fewer charges than the maximum allowed to reduce the risk; you must declare how many charges you are restoring before casting this spell.",
    Range: "Touch",
    SavingThrow: "Fortitude negates (object)",
    School: SpellSchool.Evocation,
    Source: "Core Rulebook",
    PageNumber: "p.372",
    SpellResistance: "Yes (object)",
    TargetsEffectArea: "One object"
  },
  "Reflecting Armor": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 1 }],
    SpellListDescription:
      "Sheath of mystical force can reflect damage back on foe.",
    Descriptor: [SpellDescriptor.Force],
    Duration: "(CASTERLEVEL*10) minutes or until dismissed (D); see text",
    Level: 1,
    Description:
      "You create a shimmering skin-like coating of mystical force that covers your body allowing you to reflect damage you take back against your attacker. At any time during this spell's duration when you take Hit Point damage from an attack made with a weapon by a foe within 100 feet you can choose to dismiss the spell as a reaction. If you do the armor crackles with energy as it disappears arcing through the air to strike the attacking creature which takes an amount of force damage equal to the damage dealt to you at the time this spell was dismissed (maximum 10). The target can attempt a Reflex save for half damage.",
    Range: "Personal",
    School: SpellSchool.Abjuration,
    Source: "Core Rulebook",
    PageNumber: "p.372"
  },
  Regenerate: {
    CastingTime: "3 rounds",
    Classes: [{ class: Class.Mystic, level: 6 }],
    SpellListDescription:
      "Grow back target's severed limbs restore 12d8 Hit Points and remove exhaustion and fatigue.",
    Descriptor: [SpellDescriptor.Healing],
    Duration: "Instantaneous",
    Level: 6,
    Description:
      "The target's severed body members (fingers toes hands feet arms legs tails or even heads of multiheaded creatures) broken bones and ruined organs (including eyes) grow back. After the spell is cast the physical regeneration is complete in 1 round if the severed members are present and touching the creature. It takes 2d10 rounds otherwise. Regenerate also restores 12d8 Hit Points rids the target of exhaustion and fatigue and eliminates all nonlethal damage the target has taken. It has no effect on nonliving creatures (including undead).",
    Range: "Touch",
    SavingThrow: "Fortitude negates (harmless)",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.372",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "One living creature"
  },
  Reincarnate: {
    CastingTime: "10 minutes",
    Classes: [{ class: Class.Mystic, level: 4 }],
    SpellListDescription:
      "Bring a target dead creature back to life in a random body.",
    Duration: "Instantaneous; see text",
    Level: 4,
    Description:
      "When you cast this spell you bring back a dead creature in another body provided that its death occurred no more than 1 week before the casting of the spell and the target's soul is free and willing to return. If the target's soul is not willing to return the spell fails; therefore a target that wants to return receives no saving throw. Casting this spell requires a special monument worth at least 1000 credits to serve as a beacon for the departed creature's soul. This object is consumed when you cast the spell. Since the dead creature is returning in a new body all physical ills and afflictions are removed. The condition of the creature's remains is not a factor. So long as some small portion of the creature's body still exists it can be reincarnated but the portion receiving the spell must have been part of the creature's body at the time of death. The magic of the spell creates an entirely new young adult body for the soul to inhabit from the natural elements at hand. This process takes 1 hour to complete. When the body is ready the target is reincarnated. A reincarnated creature recalls the majority of its former life and form. It retains any class features feats and skill ranks it formerly had. Its class base attack bonus base save bonuses and Hit Points are unchanged. The creature should recalculate its ability scores from scratch as a member of its new race (remembering to include any ability score increases from leveling up). The target of the spell gains 2 permanent negative levels when it is reincarnated. If the target is 1st level it takes 2 Constitution drain instead (if the Constitution drain would reduce its Constitution to 0 or less the creature cannot be reincarnated). The target creature can decide whether its new body retains any of the implants it had in its former body. A spellcasting creature has a 50% chance of losing any given unused spell slot as if it had been used to cast a spell. For a humanoid creature the new incarnation is determined using the table on the facing page. For nonhumanoid creatures a similar table of creatures of the same type should be created. Elementals outsiders and undead creatures can't be reincarnated. Any creature that can't benefit from the mystic cure spell cannot be reincarnated. The spell can bring back a creature that has died of old age. The reincarnated creature gains all abilities associated with its new form including any forms of movement and speeds natural attacks extraordinary abilities and the like but it does not automatically speak the language of the new form it takes. [D%] 1-6 Android; 7-14 Dwarf; 15-22 Elf; 23-30 Gnome; 31-34 Half-elf; 35-38 Half-orc; 39-46 Halfling; 47-55 Human; 56-64 Lashunta; 65-73 Kasatha; 74-81 Shirren; 82-90 Vesk; 91-99 Ysoki; 100 Other (GM's choice). A miracle or wish spell can restore a reincarnated creature to its original form.",
    Range: "Touch",
    SavingThrow: "None see text",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.372",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "One dead creature"
  },
  "Remove Affliction": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 3 }],
    SpellListDescription:
      "Neutralize curses diseases infestations poisons and other harmful conditions affecting a creature.",
    Descriptor: [SpellDescriptor.Healing],
    Duration: "Instantaneous or (CASTERLEVEL*10) minutes; see text",
    Level: 3,
    Description:
      "You remove impurities from a creature or object potentially neutralizing the curses diseases infestations poisons and other harmful conditions affecting it. If the target is a creature you must attempt a caster level check (1d20 + your caster level) for each curse disease infestation and poison affecting it (DC = 4 + the DC of the affliction). Success means that affliction is removed. Additionally if the target is blind or deaf due to an affliction or damage remove affliction restores vision and hearing unless the appropriate organ has been entirely removed from the creature's body. A creature that is cured with remove affliction takes no additional effects from the curses diseases infestations or poisons removed and any temporary effects are ended but the spell does not reverse instantaneous effects such as Hit Point damage temporary ability damage or effects that don't go away on their own (such as poison states). This spell cannot remove the curse from a cursed item though a successful caster level check enables the creature afflicted with any such cursed item to remove the curse and get rid of it. Since the spell's duration is instantaneous it does not prevent the target from suffering from the same curse disease infestation or poison after a new exposure at a later date. You can instead cast this spell to neutralize the poison in a poisonous creature or object for (CASTERLEVEL*10) minutes. If you cast it on a creature the creature can attempt a Will saving throw to negate the effect. Remove affliction counters bestow curse.",
    Range: "Touch",
    SavingThrow: "Will negates (harmless object)",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.373",
    SpellResistance: "Yes (harmless object)",
    TargetsEffectArea: "One creature or object"
  },
  "Remove Condition": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 2 }],
    SpellListDescription:
      "Remove one moderate harmful condition affecting a creature.",
    Descriptor: [SpellDescriptor.Healing],
    Duration: "Instantaneous",
    Level: 2,
    Description:
      "You remove any one of the following conditions affecting the target; frightened nauseated shaken sickened or staggered. If the condition is the result of a disease or another ongoing effect this spell removes the condition but does not cure the disease or ongoing effect and the target can regain the condition from that effect as normal potentially immediately. Lesser remove condition also doesn't cure or remove other damage or conditions the target is suffering from any source even the same source that caused the removed condition. Since this spell's duration is instantaneous it does not prevent the target from gaining the condition again. Casting this spell doesn't provoke attacks of opportunity.",
    Range: "Touch",
    SavingThrow: "Fortitude negates (harmless)",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.373",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "One creature"
  },
  "Remove Condition (Greater)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 5 }],
    SpellListDescription: "Remove all harmful conditions affecting a creature.",
    Descriptor: [SpellDescriptor.Healing],
    Duration: "Instantaneous",
    Level: 5,
    Description:
      "You remove all one of the following conditions affecting the target; cowering dazed frightened nauseated panicked paralyzed shaken sickened staggered and stunned. If the condition is the result of a disease or another ongoing effect this spell removes the condition but does not cure the disease or ongoing effect and the target can regain the condition from that effect as normal potentially immediately. Lesser remove condition also doesn't cure or remove other damage or conditions the target is suffering from any source even the same source that caused the removed condition. Since this spell's duration is instantaneous it does not prevent the target from gaining the condition again. Casting this spell doesn't provoke attacks of opportunity.",
    Range: "Touch",
    SavingThrow: "Fortitude negates (harmless)",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.373",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "One creature"
  },
  "Remove Condition (Lesser)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 1 }],
    SpellListDescription:
      "Remove one minor harmful condition affecting a creature.",
    Descriptor: [SpellDescriptor.Healing],
    Duration: "Instantaneous",
    Level: 1,
    Description:
      "You remove any one of the following conditions affecting the target; shaken sickened or staggered. If the condition is the result of a disease or another ongoing effect this spell removes the condition but does not cure the disease or ongoing effect and the target can regain the condition from that effect as normal potentially immediately. Lesser remove condition also doesn't cure or remove other damage or conditions the target is suffering from any source even the same source that caused the removed condition. Since this spell's duration is instantaneous it does not prevent the target from gaining the condition again. Casting this spell doesn't provoke attacks of opportunity.",
    Range: "Touch",
    SavingThrow: "Fortitude negates (harmless)",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.373",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "One creature"
  },
  "Remove Radioactivity": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 4 },
      { class: Class.Technomancer, level: 4 }
    ],
    SpellListDescription:
      "Remove ongoing radiation effects from a creature or object.",
    Descriptor: [SpellDescriptor.Healing],
    Duration: "Instantaneous",
    Level: 4,
    Description:
      "You remove all ongoing effects of radiation from a single target if you succeed at a caster level check (DC = the DC associated with the radiation effect). The target is cured of both the radiation's poison effects and the radiation sickness disease moving the target to the healthy state on both tracks. When cast on an area a single casting of remove radioactivity removes radiation from a 20-foot-radius area around the point you touch. This spell has no power to negate naturally radioactive materials and as long as such materials remain in an area the radiation that was removed may return.",
    Range: "Touch",
    SavingThrow: "Fortitude negates (harmless object)",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.374",
    SpellResistance: "Yes (harmless object)",
    TargetsEffectArea: "One creature or object or one 20-ft.-radius area"
  },
  "Resilient Sphere": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 4 }],
    SpellListDescription: "Force globe protects but traps one target.",
    Descriptor: [SpellDescriptor.Force],
    Duration: "(CASTERLEVEL) minutes (D)",
    Level: 4,
    Description:
      "A 10-foot-diameter globe of shimmering force encloses the target creature. The sphere contains the target for the spell's duration. The sphere functions in the same way as a wall of force except it can be negated by dispel magic. A target inside the sphere can breathe normally. The sphere can't be physically moved either by creatures outside it or by the struggles of those within.",
    Range: "Close",
    SavingThrow: "Reflex negates",
    School: SpellSchool.Evocation,
    Source: "Core Rulebook",
    PageNumber: "p.374",
    SpellResistance: "Yes",
    TargetsEffectArea: "One Large or smaller creature"
  },
  "Resistant Aegis": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 5 },
      { class: Class.Technomancer, level: 5 }
    ],
    SpellListDescription:
      "Grant up to 10 creatures DR 5/- or energy resistance 5 to all energy types.",
    Duration: "(CASTERLEVEL) minutes",
    Level: 5,
    Description:
      "This spell functions as lesser resistant armor except as indicated above and the wearers and their gear gain DR 5/- or energy resistance 5 that protects against all five energy types.",
    Range: "30 ft.",
    SavingThrow: "Fortitude negates (harmless)",
    School: SpellSchool.Abjuration,
    Source: "Core Rulebook",
    PageNumber: "p.374",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "Up to 10 creatures wearing armor within range"
  },
  "Resistant Armor": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 4 },
      { class: Class.Technomancer, level: 4 }
    ],
    SpellListDescription:
      "Grant DR 5/- or energy resistance 5 against two energy types.",
    Duration: "(CASTERLEVEL*10) minutes",
    Level: 4,
    Description:
      "Resistant armor grants the target (and its gear) protection from your choice of either kinetic damage or energy damage. If you choose kinetic damage the target and her gear gain DR 10/- that protects against bludgeoning piercing and slashing damage. If you choose energy damage pick any three of acid cold electricity fire and sonic damage. The target and her gear gain energy resistance 10 that protects against the chosen types of energy. This damage reduction or energy resistance doesn't stack with any damage reduction or energy resistance the target already has and multiple castings of this spell don't stack.",
    Range: "Touch",
    SavingThrow: "Fortitude negates (harmless)",
    School: SpellSchool.Abjuration,
    Source: "Core Rulebook",
    PageNumber: "p.374",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "One creature wearing armor"
  },
  "Resistant Armor (Greater)": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 6 },
      { class: Class.Technomancer, level: 6 }
    ],
    SpellListDescription:
      "Grant DR 10/- or energy resistance 10 against three energy types.",
    Duration: "(CASTERLEVEL*10) minutes",
    Level: 6,
    Description:
      "Greater resistant armor grants the target (and its gear) protection from your choice of either kinetic damage or energy damage. If you choose kinetic damage the target and her gear gain DR 15/- that protects against bludgeoning piercing and slashing damage. If you choose energy damage pick any four of acid cold electricity fire and sonic damage. The target and her gear gain energy resistance 15 that protects against the chosen types of energy. This damage reduction or energy resistance doesn't stack with any damage reduction or energy resistance the target already has and multiple castings of this spell don't stack.",
    Range: "Touch",
    SavingThrow: "Fortitude negates (harmless)",
    School: SpellSchool.Abjuration,
    Source: "Core Rulebook",
    PageNumber: "p.374",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "One creature wearing armor"
  },
  "Resistant Armor (Lesser)": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 3 },
      { class: Class.Technomancer, level: 3 }
    ],
    SpellListDescription:
      "Grant DR 15/- or energy resistance 15 against four energy types.",
    Duration: "(CASTERLEVEL*10) minutes",
    Level: 3,
    Description:
      "Lesser resistant armor grants the target (and its gear) protection from your choice of either kinetic damage or energy damage. If you choose kinetic damage the target and her gear gain DR 5/- that protects against bludgeoning piercing and slashing damage. If you choose energy damage pick any two of acid cold electricity fire and sonic damage. The target and her gear gain energy resistance 5 that protects against the chosen types of energy. This damage reduction or energy resistance doesn't stack with any damage reduction or energy resistance the target already has and multiple castings of this spell don't stack.",
    Range: "Touch",
    SavingThrow: "Fortitude negates (harmless)",
    School: SpellSchool.Abjuration,
    Source: "Core Rulebook",
    PageNumber: "p.374",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "One creature wearing armor"
  },
  Restoration: {
    CastingTime: "3 rounds",
    Classes: [{ class: Class.Mystic, level: 4 }],
    SpellListDescription: "Restores ability score drain and negative levels.",
    Descriptor: [SpellDescriptor.Healing],
    Duration: "Instantaneous",
    Level: 4,
    Description:
      "This spell functions as lesser restoration except it also removes temporary negative levels or 1 permanent negative level. You must spend 5 Resolve Points when casting this spell to remove a permanent negative level. This spell can't be used to remove more than 1 permanent negative level from a target in a 1-week period. Restoration heals all temporary ability damage and it restores all points permanently drained from a single ability score (your choice if more than one is drained). It also eliminates any fatigue or exhaustion suffered by the target but it doesn't remove any underlying source of fatigue or exhaustion. A target that has benefited from the removal of fatigue or exhaustion from this spell can't benefit from either effect again for 24 hours.",
    Range: "Touch",
    SavingThrow: "Will negates (harmless)",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.374",
    SpellResistance: "Yes",
    TargetsEffectArea: "One creature"
  },
  "Restoration (Lesser)": {
    CastingTime: "3 rounds",
    Classes: [{ class: Class.Mystic, level: 2 }],
    SpellListDescription:
      "Dispel magical ability penalty or cure 1d4 ability damage.",
    Descriptor: [SpellDescriptor.Healing],
    Duration: "Instantaneous",
    Level: 2,
    Description:
      "Lesser restoration dispels any magical effects reducing one of the target's ability scores or it heals 1d4 temporary ability damage to one of the target's ability scores. It also eliminates any fatigue suffered by the creature or improves an exhausted condition to fatigued but it doesn't remove any underlying source of fatigue or exhaustion. It also doesn't heal permanent ability drain. A target that has benefited from the removal of fatigue or the reduction of exhaustion from lesser restoration can't benefit from either effect again for 24 hours.",
    Range: "Touch",
    SavingThrow: "Will negates (harmless)",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.374",
    SpellResistance: "Yes",
    TargetsEffectArea: "One creature"
  },
  Retrocognition: {
    CastingTime: "1 minute",
    Classes: [{ class: Class.Mystic, level: 5 }],
    SpellListDescription:
      "Gain psychic impressions of past events in a certain location.",
    Duration: "Concentration up to (CASTERLEVEL) minutes",
    Level: 5,
    Description:
      "This spell allows you to gain psychic impressions from past events that occurred in your current location. Retrocognition reveals psychic impressions from events that occurred over the course of the last hour throughout the first minute of the spell's duration followed by impressions from the next hour back throughout the next minute you concentrate and so on. If a psychically traumatic or turbulent event happened during that period you must succeed at a Will saving throw (DC = 15 20 or 25 depending on the severity of the traumatic or turbulent event) or lose your concentration on the spell. If you fail this saving throw the spell ends. At mystic level 16th and higher you can choose to collect impressions from over the course of a longer interval of time than an hour beginning at 1 week per minute of concentration (as listed below). The amount of detail you receive diminishes so this eventually makes it harder to distinguish impressions left by anything but the most major events. In most circumstances you can't glean information about what occurred during the Gap with this spell. [Mystic Level] 16th-17th 1 week per minute; 18th-19th 1 year per minute; 20th 1 decade per minute.",
    Range: "Personal",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.375"
  },
  "Rewire Flesh": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 4 }],
    SpellListDescription:
      "Turn target partially into a robot dealing 3d6 damage per round and reducing speed.",
    Duration: "(CASTERLEVEL) rounds (D); see text",
    Level: 4,
    Description:
      "Like rewriting the code that makes up a computer program you manipulate the target's DNA to painfully rewire that target's biological functions to mimic the cold and rigid processes of a robot. The target must succeed at a Will saving throw or all of its movement speeds are halved and it takes 3d6 slashing damage per round on its turn as its internal organs shift and transform to become more like the inner components of a robot. Each round the target can attempt a Fortitude saving throw to halve the damage this spell causes. While this spell is in effect the target's body becomes visibly more robotic; its voice is tinny and halting its movements are jerky and its face is unmoving and emotionless. The target has the flat-footed condition and it takes a -2 penalty to all Sense Motive checks as well as to all Charisma-based and Dexterity-based skill and ability checks.",
    Range: "Medium",
    SavingThrow: "Will negates and Fortitude half see text",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.375",
    SpellResistance: "Yes",
    TargetsEffectArea: "One living creature"
  },
  "Rewire Flesh (Mass)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 6 }],
    SpellListDescription:
      "Deal 3d6 damage per round and reducing targets' speed during that time.",
    Duration: "(CASTERLEVEL) rounds (D); see text",
    Level: 6,
    Description:
      "Like rewriting the code that makes up a computer program you manipulate the targets' DNA to painfully rewire their biological functions to mimic the cold and rigid processes of a robot. The targets must succeed at a Will saving throw or all their movement speeds are halved and they take 3d6 slashing damage per round on their turn as their internal organs shift and transform to become more like the inner components of a robot. Each round the targets can attempt a Fortitude saving throw to halve the damage this spell causes. While this spell is in effect the targets' bodies becomes visibly more robotic; their voices are tinny and halting their movements are jerky and their faces are unmoving and emotionless. The targets have the flat-footed condition and take a -2 penalty to all Sense Motive checks as well as to all Charisma-based and Dexterity-based skill and ability checks.",
    Range: "Medium",
    SavingThrow: "Will negates and Fortitude half see text",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.376",
    SpellResistance: "Yes",
    TargetsEffectArea:
      "Up to (CASTERLEVEL) living creatures no two of which can be more than 30 ft. apart"
  },
  "Security Seal": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 2 }],
    SpellListDescription:
      "Magically lock a portal a container or a security system.",
    Duration: "24 hours",
    Level: 2,
    Description:
      "A security seal spell magically locks a single door container with a lid or latch portal or computer system. Casting this spell requires you to spend 1 Resolve Point. You can freely bypass your own security seal without affecting it. If the sealed object has a lock the DC to open that lock increases by 5 while it remains attached to the object. If the object doesn't have a lock this spell creates one that can only be opened with a successful DC 20 Engineering check to disable devices. If the sealed object has computer security the DC to bypass that security increases by 5. A door or object secured with this spell can be opened only by breaking in or with a successful dispel magic or knock spell. Add 5 to the normal DC to break open a door or portal affected by this spell. A knock spell removes the security seal automatically counting as one means of closure.",
    Range: "Touch",
    SavingThrow: "None",
    School: SpellSchool.Abjuration,
    Source: "Core Rulebook",
    PageNumber: "p.376",
    SpellResistance: "No",
    TargetsEffectArea:
      "One door container or portal up to (CASTERLEVEL*30) sq. ft. in size"
  },
  "See Invisibility": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 2 },
      { class: Class.Technomancer, level: 2 }
    ],
    SpellListDescription: "See invisible creatures or objects.",
    Duration: "(CASTERLEVEL*10) minutes (D)",
    Level: 2,
    Description:
      "You can see any invisible or ethereal objects or beings within your range of vision as if they were normally visible. Such creatures are visible to you as translucent shapes allowing you easily to discern the difference between visible and invisible or ethereal creatures. The spell doesn't reveal the method used to obtain invisibility doesn't reveal illusions or enable you to see through opaque objects and doesn't reveal creatures that are simply concealed hiding or otherwise hard to see.",
    Range: "Personal",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.376"
  },
  "Shadow Walk": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 6 },
      { class: Class.Technomancer, level: 6 }
    ],
    SpellListDescription:
      "Step into a shadowy realm to travel to a destination rapidly.",
    Descriptor: [SpellDescriptor.Shadow],
    Duration: "(CASTERLEVEL) hours (D)",
    Level: 6,
    Description:
      "To use shadow walk you must be in an area of dim light. You and any creature or vehicle you touch are then transported along a coiling path of shadowstuff to the edge of the Material Plane where it borders the Plane of Shadow. The effect is largely illusory but the path is quasi-real. All targets affected must be in direct contact with one another. A Large target counts as two Medium targets a Huge target counts as four Medium targets and so forth. Creatures you transport this way can opt to follow you wander off through the plane or stumble back into the Material Plane (50% chance for either of the latter results if the creatures are lost or abandoned by you). Creatures unwilling to accompany you into the Plane of Shadow can attempt a Will saving throw to negate the effect. In the region of shadow you move at a rate of 200 miles per hour. Because of the blurring of reality between the Plane of Shadow and the Material Plane you can't make out details of the terrain or areas you pass over during transit nor can you predict perfectly where your travel will end. It's impossible to judge distances accurately making the spell virtually useless for scouting or spying. Furthermore when the spell effect ends you are shunted 1d10 * 100 feet in a random horizontal direction from your desired endpoint. If this would place you within a solid object you (and any creatures with you) are shunted to the nearest empty space available but the strain of this activity renders each creature fatigued (no saving throw). Shadow walk can also be used to travel to other planes that border on the Plane of Shadow (except for the Drift) but this usage requires you to travel across the Plane of Shadow to arrive at a border with another plane of reality which takes 1d4 hours.",
    Range: "Touch",
    SavingThrow: "Will negates (object)",
    School: SpellSchool.Illusion,
    Source: "Core Rulebook",
    PageNumber: "p.376",
    SpellResistance: "Yes (object)",
    TargetsEffectArea: "Up to (CASTERLEVEL) Medium creatures or vehicles"
  },
  "Shadowy Fleet": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 6 }],
    SpellListDescription:
      "Illusion of starships deals 3d6 piercing damage and 3d6 fire damage to all creatures in the affected area.",
    Descriptor: [SpellDescriptor.Shadow],
    Duration: "(CASTERLEVEL) rounds",
    Level: 6,
    Description:
      "You create a powerful vision of a fleet of hostile starships overhead that appears to rain fiery laser shots mercilessly at your enemies. The ships appear to be 1000 feet overhead and target a 60-foot-radius area that you designate on the ground. You can't cast this spell indoors unless you are within a structure that a fleet of starships could believably fit within. Each round this spell is in effect the starships deal 3d6 piercing damage and 3d6 fire damage to all hostile creatures in the area as the ships appear to shoot lasers at your enemies. If a creature interacts with the illusion (such as by taking damage) it can attempt a Will saving throw to take only half of this damage per round for the remainder of the spell. Regardless of whether a creature disbelieves the illusion each round it takes damage from this spell it can attempt a Reflex saving throw to instead take half damage; thus if a creature that succeeded at its Will saving throw also succeeds at its Reflex save in a given round it takes one-quarter the spell's damage that round.",
    Range: "Long",
    SavingThrow: "Will disbelief and Reflex half see text",
    School: SpellSchool.Illusion,
    Source: "Core Rulebook",
    PageNumber: "p.376",
    SpellResistance: "Yes",
    TargetsEffectArea: "60-ft. radius"
  },
  "Share Language": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 1 }],
    SpellListDescription: "Target understands chosen languages.",
    Duration: "24 hours",
    Level: 1,
    Description:
      "For 24 hours the target can read understand and communicate to the best of its ability in up to three languages that you already know. This doesn't change the physical nature of the creature (if it lacks a means of speech it still can't talk) or its attitude toward you. It does however allow intelligent creatures that normally have no language to understand and (if physically capable) communicate in the languages granted by this spell.",
    Range: "Touch",
    SavingThrow: "Will negates (harmless)",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.377",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "One creature"
  },
  "Shield Other": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 2 }],
    SpellListDescription: "You take half of the target's Hit Point damage.",
    Duration: "(CASTERLEVEL) hours (D)",
    Level: 2,
    Description:
      "This spell wards the target and creates a mystic connection between you and the target so that some of its wounds are transferred to you. Casting this spell requires you to spend 1 Resolve Point. The target takes only half damage from all wounds and attacks (including those dealt by special abilities) that deal Hit Point damage and you take the amount of damage not taken by the target. Only Hit Point damage is transferred in this manner; the target's Stamina Points are damaged as normal. If you still have Stamina Points you take the damage to your Stamina Points before Hit Points as with normal damage. Forms of harm that do not involve Hit Points such as charm effects temporary ability damage ability drain permanent negative levels and death effects are not affected. When the spell ends subsequent damage is no longer divided between the target and you but damage already split is not reassigned to the target. If you and the target of the spell move out of range of each other the spell ends.",
    Range: "Close",
    SavingThrow: "Will negates (harmless)",
    School: SpellSchool.Abjuration,
    Source: "Core Rulebook",
    PageNumber: "p.377",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "One creature"
  },
  Slow: {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 3 },
      { class: Class.Technomancer, level: 3 }
    ],
    SpellListDescription: "(CASTERLEVEL) creatures move and act slower.",
    Duration: "(CASTERLEVEL) rounds",
    Level: 3,
    Description:
      "An affected creature moves and attacks at a drastically slowed rate. Creatures affected by this spell are staggered (see page 277) and can take only a single move action or standard action each turn but not both and it can't take full actions. A slowed creature moves at half its normal speed (round down to the next 5-foot increment). Multiple slow effects don't stack. Slow counters and negates haste.",
    Range: "Close",
    SavingThrow: "Will negates",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.377",
    SpellResistance: "Yes",
    TargetsEffectArea:
      "Up to (CASTERLEVEL) creatures no two of which can be more than 30 ft. apart"
  },
  "Snuff Life": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 6 }],
    SpellListDescription:
      "Instantly kill or massively damage (CASTERLEVEL/2) creatures depending on targets' CRs.",
    Descriptor: [SpellDescriptor.Death],
    Duration: "Instantaneous",
    Level: 6,
    Description:
      "You twist the essence of life that flows through your targets snuffing the spark out of weaker creatures and debilitating or disabling others. This spell's effects depend on each target's CR. A creature of CR 5 or lower is slain by this spell. If it succeeds at a Fortitude saving throw it is instead reduced to 1 Hit Point. A creature of CR 6-10 takes 10d20 damage and is stunned for 3 rounds. If it succeeds at a Fortitude saving throw it takes half damage and negates the stunned effect. A creature of CR 11-14 takes 8d20 damage and is staggered for 3 rounds. If it succeeds at a Fortitude saving throw it takes half damage and negates the staggered effect. A creature of CR 15 or higher takes 6d20 damage. If it succeeds at a Fortitude saving throw it takes half damage. Regardless of whether the target succeeds at its saving throw it still might die from the damage this spell deals though in this case the spell is not a death effect.",
    Range: "Medium",
    SavingThrow: "Fortitude partial see text",
    School: SpellSchool.Necromancy,
    Source: "Core Rulebook",
    PageNumber: "p.377",
    SpellResistance: "Yes",
    TargetsEffectArea:
      "Up to (CASTERLEVEL/2) creatures no two of which can be more than 30 ft. apart"
  },
  "Soothing Protocol": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 4 }],
    SpellListDescription: "Calm a target hostile technological construct.",
    Duration: "(CASTERLEVEL*10) minutes",
    Level: 4,
    Description:
      "Waves of calming programming ebb from your touch potentially stabilizing a construct's harmful intentions toward you and your allies. The target construct must have a CR lower than (CASTERLEVEL); if it does the construct is convinced that you and your allies pose no threat. It can't take violent actions against you or your allies and it can't do anything that would otherwise harm or threaten you (though it continues to carry out orders to take actions that do not harm or threaten you). Any aggressive action or damage dealt by you or your allies to a construct soothed in this way or its allies immediately ends this spell's effects (and could cause the construct to attack you if it was doing so previously). If an affected construct is under the control of a spellcaster or another creature the controlling creature can spend a full\\ action to remove soothing protocol as long as it can either touch the construct or give it an order.",
    Range: "Touch",
    SavingThrow: "None",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.377",
    SpellResistance: "Yes",
    TargetsEffectArea: "One construct with the technological subtype; see text"
  },
  "Speak with Dead": {
    CastingTime: "10 minutes",
    Classes: [{ class: Class.Mystic, level: 3 }],
    SpellListDescription: "Corpse answers up to six questions.",
    Descriptor: [SpellDescriptor.LanguageDependent],
    Duration: "(CASTERLEVEL) minute",
    Level: 3,
    Description:
      "You grant the semblance of life to a corpse allowing it to answer questions. You can ask up to six questions. The corpse's knowledge is limited to what it knew during life including the languages it spoke. Answers are brief cryptic or repetitive especially if the creature would have opposed you in life. If the dead creature was friendly or helpful toward you in life the spell works automatically. Otherwise the corpse can attempt a Will saving throw to resist the spell as if it were alive. On a successful save the corpse can refuse to answer your questions or attempt to deceive you using its Bluff skill. The target can speak only about what it knew in life. It can't answer any questions that pertain to events that occurred after its death. If the corpse has been subjected to speak with dead within the past week this spell fails. You can cast this spell on a corpse that has been deceased for any amount of time but the body must be mostly intact to be able to respond. A damaged corpse might be able to give partial answers or partially correct answers but it must have at least a mouth in order to speak at all. This spell does not affect a corpse that has been turned into an undead creature.",
    Range: "10 ft.",
    SavingThrow: "Will negates see text",
    School: SpellSchool.Necromancy,
    Source: "Core Rulebook",
    PageNumber: "p.378",
    SpellResistance: "No",
    TargetsEffectArea: "One dead creature"
  },
  "Spider Climb": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 2 },
      { class: Class.Technomancer, level: 2 }
    ],
    SpellListDescription: "Grant ability to walk on walls and ceilings.",
    Duration: "(CASTERLEVEL*10) minutes",
    Level: 2,
    Description:
      "The target can climb and travel on vertical surfaces or even traverse ceilings as well as a spider does. An affected creature with four limbs must have three limbs free (not holding equipment or being used to perform skills and so on) to climb in this manner. A creature with six limbs needs only four available. In general other creatures must have 75% of their limbs available to benefit from this spell. The target gains a climb speed of 20 feet (and the +8 racial bonus to Athletics checks to climb granted by that climb speed); furthermore it doesn't need to attempt Athletics checks to climb to traverse a vertical or horizontal surface (even upside down). An affected creature climbing in this way is not flat-footed while climbing and opponents get no special bonus to their attacks against it. The creature however can't use the run action while climbing.",
    Range: "Touch",
    SavingThrow: "Will negates (harmless)",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.378",
    SpellResistance: "Yes",
    TargetsEffectArea: "One creature"
  },
  Stabilize: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 0 }],
    SpellListDescription: "Cause a dying creature to stabilize.",
    Descriptor: [SpellDescriptor.Healing],
    Duration: "Instantaneous",
    Level: 0,
    Description:
      "If the target of this spell has 0 Hit Points and is dying it automatically stabilizes. If the creature later takes damage it is no longer stable.",
    Range: "Close",
    SavingThrow: "Will negates (harmless)",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.378",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "One living creature"
  },
  Status: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 2 }],
    SpellListDescription: "Monitor condition and position of allies.",
    Duration: "(CASTERLEVEL) hours",
    Level: 2,
    Description:
      "When you need to keep track of comrades who get separated status allows you to mentally monitor their relative positions and general conditions. You are aware of the direction of and distance to the creatures and any conditions or states affecting them; confused diseased dying nauseated panicked poisoned staggered stunned unconscious unharmed wounded wounded and out of Stamina points and the like. Once the spell has been cast upon the targets the distance between them and the caster does not affect the spell as long as they are on the same plane of existence. If a target leaves the plane (including via Drift travel) or dies the spell ceases to function for that creature.",
    Range: "Touch",
    SavingThrow: "Will negates (harmless)",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.379",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "Up to (CASTERLEVEL/3) living creatures touched"
  },
  "Subjective Reality": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 6 }],
    SpellListDescription:
      "You convince yourself one creature or object is an illusion.",
    Descriptor: [SpellDescriptor.MindAffecting],
    Duration: "(CASTERLEVEL) rounds (D)",
    Level: 6,
    Description:
      "Choose one object or creature you can see within long range ((400+CASTERLEVEL*40) feet). You alter your perceptions to become convinced the target is an illusion. For you the target becomes transparent and does not create sound or smell. Until the spell ends you can move through the target unimpeded and the target can move through you. The target's nonmagical attacks can't harm you and the target's magical attacks deal half damage to you. The target's non-damaging magical abilities have only a 50% chance of affecting you and you are immune to all its sonic language-dependent and scent-based attacks. However your attacks deal no damage to the target and your magical abilities don't affect the target at all. You or the target can affect each other normally through intermediaries. For instance while the target would be immune to the direct effects of your charm monster spell if you charmed another creature that then attacked the target creature the target would not be immune to the damage from that attack.",
    Range: "Personal",
    School: SpellSchool.Illusion,
    Source: "Core Rulebook",
    PageNumber: "p.379"
  },
  Suggestion: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 3 }],
    SpellListDescription: "Compel a target to follow stated course of action.",
    Descriptor: [
      SpellDescriptor.Compulsion,
      SpellDescriptor.LanguageDependent,
      SpellDescriptor.MindAffecting
    ],
    Duration: "(CASTERLEVEL) hours or until completed",
    Level: 3,
    Description:
      "You influence the actions of the target creature by suggesting a course of activity (limited to a sentence or two). The suggestion must be worded in such a manner as to make the activity sound reasonable. Asking the creature to do some obviously harmful act automatically negates the effect of the spell. The suggested course of activity can continue for the entire duration of the spell. If the suggested activity can be completed in a shorter time the spell ends when the target finishes what it was asked to do. You can instead specify conditions that will trigger a special activity during the duration. If the condition is not met before the spell's duration expires the activity is not performed. A very reasonable suggestion imparts a penalty (such as -1 or -2) to the target's saving throw.",
    Range: "Close",
    SavingThrow: "Will negates",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.379",
    SpellResistance: "Yes",
    TargetsEffectArea: "One living creature"
  },
  "Suggestion (Mass)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 6 }],
    SpellListDescription:
      "Compel (CASTERLEVEL) targets to follow stated course of action.",
    Descriptor: [
      SpellDescriptor.Compulsion,
      SpellDescriptor.LanguageDependent,
      SpellDescriptor.MindAffecting
    ],
    Duration: "(CASTERLEVEL) hours or until completed",
    Level: 6,
    Description:
      "You influence the actions of the target creatures by suggesting a course of activity (limited to a sentence or two). The suggestion must be worded in such a manner as to make the activity sound reasonable. Asking the creatures to do some obviously harmful act automatically negates the effect of the spell. The suggested course of activity can continue for the entire duration of the spell. If the suggested activity can be completed in a shorter time the spell ends when the target finishes what it was asked to do. You can instead specify conditions that will trigger a special activity during the duration. If the condition is not met before the spell's duration expires the activity is not performed. A very reasonable suggestion imparts a penalty (such as -1 or -2) to the target's saving throw. All of the affected creatures are subject to the same suggestion.",
    Range: "Medium",
    SavingThrow: "Will negates",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.379",
    SpellResistance: "Yes",
    TargetsEffectArea:
      "Up to (CASTERLEVEL) creatures no two of which can be more than 30 ft. apart"
  },
  "Supercharge Weapon": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 1 }],
    SpellListDescription: "Touched weapon deals extra damage.",
    Duration: "See text",
    Level: 1,
    Description:
      "You supercharge the target weapon. If the weapon's next attack hits (provided it is made before the end of the next round) the attack deals 4d6 additional damage if the weapon is a single target attack or 2d6 additional damage if the weapon attacks all creatures in an area. This bonus damage is of the same type as the weapon's normal damage.",
    Range: "Touch",
    SavingThrow: "None",
    School: SpellSchool.Evocation,
    Source: "Core Rulebook",
    PageNumber: "p.379",
    SpellResistance: "No",
    TargetsEffectArea: "One weapon"
  },
  "Sympathetic Vibration": {
    CastingTime: "10 minutes",
    Classes: [{ class: Class.Technomancer, level: 6 }],
    SpellListDescription:
      "Deal 2d10 damage per round to freestanding structure.",
    Descriptor: [SpellDescriptor.Sonic],
    Duration: "Up to (CASTERLEVEL) rounds",
    Level: 6,
    Description:
      "By attuning yourself to a freestanding structure or vehicle (this doesn't include starships) you can create a damaging vibration within it. Once it begins the vibration deals 2d10 sonic damage per round to the target bypassing hardness. You can choose at the time of casting to limit the duration of the spell; otherwise it lasts for (CASTERLEVEL) rounds. If the spell is cast upon a target that is not freestanding the surrounding material dissipates the effect and no damage occurs. Sympathetic vibration can't affect creatures (even if they are constructs).",
    Range: "Touch",
    SavingThrow: "None",
    School: SpellSchool.Evocation,
    Source: "Core Rulebook",
    PageNumber: "p.379",
    SpellResistance: "Yes",
    TargetsEffectArea: "One freestanding structure or vehicle"
  },
  "Synapse Overload": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 5 }],
    SpellListDescription:
      "Target takes 18d8 damage and is staggered for 1 minute.",
    Descriptor: [SpellDescriptor.MindAffecting],
    Duration: "Instantaneous",
    Level: 5,
    Description:
      "To affect the target you must hit with a melee attack against its EAC; you can add your key ability score modifier to this attack roll instead of your Strength modifier if it is higher. You then overload the target's mind causing the target's synapses to violently trigger. The target takes 18d8 damage and is staggered for 1 minute. A target can negate the staggered effect with a successful Fortitude saving throw but still takes full damage. Casting this spell doesn't provoke attacks of opportunity.",
    Range: "Touch",
    SavingThrow: "Fortitude partial",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.380",
    SpellResistance: "Yes",
    TargetsEffectArea: "One living creature"
  },
  "Synaptic Pulse": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 3 }],
    SpellListDescription: "Stun all creatures within 20 feet for 1 round.",
    Descriptor: [SpellDescriptor.Compulsion, SpellDescriptor.MindAffecting],
    Duration: "1 round",
    Level: 3,
    Description: "You stun all creatures in range for 1 round.",
    Range: "20 ft.",
    SavingThrow: "Will negates",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.380",
    SpellResistance: "Yes",
    TargetsEffectArea: "20-ft.-radius spread centered on you"
  },
  "Synaptic Pulse (Greater)": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 5 }],
    SpellListDescription: "Stun all creatures within 20 feet for 1d4 rounds.",
    Descriptor: [SpellDescriptor.Compulsion, SpellDescriptor.MindAffecting],
    Duration: "1d4 rounds",
    Level: 5,
    Description:
      "You stun all creatures in range for 1d4 rounds. With a successful Will saving throw a creature is instead sickened for 1 round.",
    Range: "20 ft.",
    SavingThrow: "Will partial",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.380",
    SpellResistance: "Yes",
    TargetsEffectArea: "20-ft.-radius spread centered on you"
  },
  Telekinesis: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 5 }],
    SpellListDescription:
      "Move an object attack creatures or hurl objects or creatures with your mind.",
    Duration:
      "Concentration (up to (CASTERLEVEL) rounds) or instantaneous; see text",
    Level: 5,
    Description:
      "You move objects or creatures by concentrating on them. Depending on your desired effect (choose one from below) the spell can perform a variety of combat maneuvers provide a gentle sustained force or exert a single short violent thrust. [Combat Maneuver] Once per round you can use telekinesis to perform a ranged attack that acts as a bull rush disarm grapple (including pin) or trip combat maneuver. Resolve these attempts as normal but use your caster level plus your key ability score modifier as your attack bonus. No saving throw is allowed against these attempts but spell resistance applies normally. This version of the spell can last (CASTERLEVEL) rounds but it ends if you cease concentrating. [Sustained Force] A sustained force moves an object of no more than (CASTERLEVEL*25) pounds or (CASTERLEVEL*2) bulk up to 20 feet per round in any direction (including up or down). A creature can negate the effect on an object it holds with a successful Will save or with spell resistance. This version of the spell lasts (CASTERLEVEL) rounds but it ends if you cease concentrating. The spell ends if the object is forced beyond the spell's range. You can telekinetically manipulate an object as if with one hand. For example a lever can be pulled a key turned a button pushed an object rotated and so on if the force required is within the weight limitation. You might even be able to untie simple knots though a delicate activity such as this requires a successful DC 15 Intelligence check. [Violent Thrust] The spell energy can be spent in a single round. You can hurl up to 15 objects or creatures that are within range (no two of which can be more than 10 feet apart) toward any target within 150 feet of all the objects. You can hurl up to a total weight of 400 pounds or 40 bulk. You must make attack rolls (one per creature or object thrown) to hit the target with the items using your base attack bonus plus your key ability score modifier as your attack bonus. All objects cause damage ranging from 1 damage per 25 pounds or 2 bulk (for less dangerous objects) to 1d10 damage per 25 pounds or 2 bulk (for extremely dangerous objects such as weapons or bladed or spiked objects). Objects and creatures that miss the target land in a square adjacent to the target. Creatures that fall within the weight capacity of the spell can be hurled but they can attempt Will saving throws (or rely on spell resistance) to negate the effect as can those whose held possessions are targeted by the spell. If a thrown creature is hurled against a solid surface it takes 1d6 damage as if it had fallen 10 feet.",
    Range: "Long",
    SavingThrow: "None Will negates (object) see text",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.380",
    SpellResistance: "Yes (object) see text",
    TargetsEffectArea: "See text"
  },
  "Telekinetic Projectile": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 0 }],
    SpellListDescription:
      "Telekinetically hurl an object dealing 1d6 damage to the target and object.",
    Duration: "Instantaneous",
    Level: 0,
    Description:
      "You fling an object weighing up to 5 pounds (less than 1 bulk) at the target making a ranged attack against its KAC. If you hit you deal 1d6 bludgeoning damage to both the target and the object. The type of object thrown doesn't change the damage type or any other properties of the attack.",
    Range: "Close",
    SavingThrow: "None",
    School: SpellSchool.Evocation,
    Source: "Core Rulebook",
    PageNumber: "p.380",
    SpellResistance: "No",
    TargetsEffectArea: "One object and one creature"
  },
  "Telepathic Bond": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 4 }],
    SpellListDescription: "Link allows allies to communicate.",
    Duration: "(CASTERLEVEL*10) minutes (D)",
    Level: 4,
    Description:
      "You forge a telepathic bond between yourself and a number of willing creatures each of which must have an Intelligence score of 3 or higher (or a modifier of -4 or higher). Each creature included in the link is linked to all the others. The creatures can communicate telepathically through the bond regardless of language. No special power or influence is established as a result of the bond. Once the bond is formed it works over any distance (although not from one plane to another). If desired you can leave yourself out of the telepathic bond forged. This decision must be made at the time of casting.",
    Range: "Close",
    SavingThrow: "None",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.381",
    SpellResistance: "No",
    TargetsEffectArea:
      "You plus up to (CASTERLEVEL/3) willing creatures no two of which can be more than 30 ft. apart"
  },
  "Telepathic Jaunt": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 6 }],
    SpellListDescription:
      "Use your telepathic bond with a creature to teleport to its location.",
    Descriptor: [SpellDescriptor.Teleportation],
    Duration: "Instantaneous",
    Level: 6,
    Description:
      "Telepathic jaunt thrums along the mental connection you have with a creature with which you currently have an active telepathic bond via your mystic telepathic bond class feature (but not via the telepathic bond spell) and it instantly teleports you to that creature. This spell teleports you to a random unoccupied square adjacent to the creature with which you have the telepathic bond. If no such square is available you teleport to the closest eligible square; if the nearest eligible square is more than 50 feet away from the creature this spell fails. You can be transported any distance within a plane even across the galaxy but you can't travel between planes and you can't transport yourself to a creature if one of you is traveling via Drift travel and the other isn't. In addition to yourself you can transport any objects you carry as long as their weight doesn't exceed your maximum load. You can also bring up to six additional willing or unconscious Medium or smaller creatures (each carrying gear or objects up to its maximum load) or their equivalent. A Large creature counts as two Medium creatures and a Huge creature counts as two Large creatures. All creatures to be transported must be in contact with one another and at least one of those creatures must be in contact with you. Exceeding this limit causes the spell to fail. There must be sufficient space near the creature with which you have the telepathic bond for all the creatures you are teleporting or this spell fails.",
    Range: "Touch",
    SavingThrow: "None Will negates (object)",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.381",
    SpellResistance: "No yes (object)",
    TargetsEffectArea:
      "You and touched objects and other touched willing or unconscious creatures"
  },
  "Telepathic Message": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 0 },
      { class: Class.Technomancer, level: 0 }
    ],
    SpellListDescription:
      "Send a short telepathic message and hear simple telepathic replies.",
    Descriptor: [
      SpellDescriptor.LanguageDependent,
      SpellDescriptor.MindAffecting
    ],
    Duration: "(CASTERLEVEL*10) minutes",
    Level: 0,
    Description:
      "You can send a short telepathic message and hear simple telepathic replies. Any living creature within 10 feet of you or an intended recipient also receives your telepathic message if it succeeds at a DC 25 Perception check. You must be able to see or hear each recipient. The creatures that receive the message can reply telepathically but no more than a single message can be sent each round and each message cannot exceed 10 words. A technomancer casting this spell can also use it to send a message to a computer or a construct with the technological subtype if the receiving target is designed to receive messages.",
    Range: "Medium",
    SavingThrow: "None",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.381",
    SpellResistance: "No",
    TargetsEffectArea: "Up to (CASTERLEVEL) creatures"
  },
  Telepathy: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 5 }],
    SpellListDescription:
      "Communicate mentally with any creatures within 100 feet.",
    Descriptor: [SpellDescriptor.MindAffecting],
    Duration: "(CASTERLEVEL*10) minutes",
    Level: 5,
    Description:
      "You can mentally communicate with any other creature within 100 feet that has a language. It is possible to address multiple creatures at once telepathically although maintaining a telepathic conversation with more than one creature at a time is just as difficult as speaking and listening to multiple people simultaneously. You can't use telepathy to locate creatures to communicate with them but once you've established telepathic communication you don't require line of effect to maintain it.",
    Range: "Personal",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.381"
  },
  Teleport: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 5 }],
    SpellListDescription: "Instantly teleport as far as 2000 miles.",
    Descriptor: [SpellDescriptor.Teleportation],
    Duration: "Instantaneous",
    Level: 5,
    Description:
      "This spell instantly transports you to a designated destination within 2000 miles. Interplanar and interplanetary travel is not possible and neither is travel between two moving starships during combat though you might be able to teleport to a planet's surface from an orbiting starship. You can bring along objects as long as their weight doesn't exceed your maximum bulk limit. You can also bring up to five additional willing or unconscious Medium or smaller creatures (carrying gear or objects up to its maximum load) or their equivalent. A Large creature counts as two Medium creatures and a Huge creature counts as four Medium creatures. All creatures to be transported must be in contact with one another and at least one of those creatures must be in contact with you. As the caster you need not attempt a saving throw nor is spell resistance applicable to you. Only objects held or in use by another creature receive saving throws and benefit from spell resistance. You must have some clear idea of the location and layout of the destination. The clearer your mental image the more likely the teleportation works. Areas of strong physical or magical energy can make teleportation more hazardous or even impossible. To see how well the teleportation works roll d% and consult Table 10-1. Refer to the following information for definitions of the terms on the table. [Familiarity] Very familiar describes a place you have been very often and where you feel at home. Studied carefully describes a place you know well either because you can currently physically see it or because you've been there often. Seen casually describes a place you have been to more than once but with which you are not very familiar. Viewed once describes a place you have seen once in person or have extensively studied through scrying magic remote cameras or recorded images (for a remote-viewed location you still need to have a clear idea of the location; you can't teleport to an unknown location that you've seen in a holovid). False destination describes a place that doesn't truly exist or if you are teleporting to an otherwise familiar location it is a place that no longer exists as such or has been so completely altered as to no longer be familiar to you. When traveling to a false destination roll 1d20+80 to obtain results on the table rather than rolling d% since there is no real destination for you to hope to arrive at or even be off target from. {On Target] You appear where you want to be. [Off Target] You appear safely a random distance away from the destination in a random direction. The distance off target is d% of the distance that was to be traveled. The direction off target is determined randomly. [Similar Area] You wind up in an area that's visually or thematically similar to the target area. Generally you appear in the closest similar place within range. If no such area exists within the spell's range the spell simply fails instead. [Mishap] You and anyone else teleporting with you have gotten scrambled. You each take 2d10 damage and you reroll on the chart to see where you wind up. For these rerolls roll 1d20+80. Each time mishap comes up the creatures take more damage and must reroll. [TELEPORTATION RESULTS] Very familiar - 1-97 On Target 98-99 Off Target 100 Similar Area; Studied Carefully - 1-94 On Target 95-97 Off Target 98-99 Similar Area 100 Mishap; Seen Casually - 1-88 On Target 89-94 Off Target 95-98 Similar Area 99-100 Mishap; Viewed Once - 1-76 On Target 77-88 Off Target 89-96 Similar Area 97-100 Mishap; False Destination - 81-92 Similar Area 93-100 Mishap;",
    Range: "2000 miles",
    SavingThrow: "None Will negates (object)",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.381",
    SpellResistance: "No yes (object)",
    TargetsEffectArea:
      "You and touched objects and other touched willing or unconscious creatures"
  },
  Terraform: {
    CastingTime: "1 hour",
    Classes: [{ class: Class.Technomancer, level: 6 }],
    SpellListDescription: "Alter terrain and climate.",
    Duration: "(CASTERLEVEL) days; see text",
    Level: 6,
    Description:
      "You alter the area's terrain and climate to a new terrain and climate type appropriate to the planet or plane. For example you might transform a desert into plains. To cast this spell you must spend 10 Resolve Points along with technological gear worth 30000 credits (which is magically augmented to do much of the terraforming then consumed by the spell). A xenodruid mystic instead uses crystals and incenses worth 30000 credits. This magically alters the area's climate and normal plants to those appropriate to the new terrain but it doesn't affect creatures or the configuration of the ground. Transforming rocky hills into forested areas converts grasses into shrubs and small trees but it doesn't flatten the hills or change the animals to suit the new environment. You can alter the climate by one step (cold temperate or warm). The maximum extent of the terrain change is up to the GM but in general it changes to a similar terrain type or by one step within that terrain type (such as from a typical forest to a forest with massive trees or light undergrowth from a shallow bog to a deep bog and so on). Multiple castings of the spell in the same area can create an area with radically different terrain and climate than the surrounding land. The GM can decide that certain terrain shifts are unsustainable and shorten the duration or that some are suitable for the area and extend the duration. This spell could have many secondary effects based on the nature of the change the type of bordering terrain and so on; these should be determined by the GM on a case-by-case basis. For example transforming a desert requires drawing water up from underground to sustain the plants which could deplete the water table in nearby areas.",
    Range: "100 ft.",
    SavingThrow: "None",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.382",
    SpellResistance: "No",
    TargetsEffectArea: "100-ft.-radius emanation centered on you"
  },
  "Token Spell": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 0 },
      { class: Class.Technomancer, level: 0 }
    ],
    SpellListDescription: "Perform simple magical effects.",
    Duration: "1 hour",
    Level: 0,
    Description:
      "Token spells are often some of the first minor changes that spellcasters produce when they begin experimenting with magic. Once cast token spell enables you to perform simple magical effects for 1 hour. The effects are minor and have severe limitations. You can slowly lift one item of light bulk. You can alter items in a 1-foot cube each round coloring cleaning soiling cooling warming or flavoring them. You can create small objects but they look artificial and are extremely fragile (they can't be used as tools or weapons). You can illuminate an object to shed dim light in a 30-foot radius. Token spell lacks the power to duplicate any other spell effects. Any actual change to an object (beyond moving cleaning or soiling it) persists for only 1 hour.",
    Range: "10 ft.",
    SavingThrow: "None",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.382",
    SpellResistance: "Yes",
    TargetsEffectArea: "See text"
  },
  Tongues: {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 3 },
      { class: Class.Technomancer, level: 3 }
    ],
    SpellListDescription: "Target can speak and understand any language.",
    Duration: "(CASTERLEVEL*10) minutes",
    Level: 3,
    Description:
      "This spell grants the creature touched the ability to speak and understand the spoken or signed language of any intelligent creature whether it is a racial tongue or a regional dialect. The target can speak only one language at a time although it may be able to understand several languages. Tongues does not enable the target to speak with creatures who don't speak. The target can make itself understood as far as its voice carries.",
    Range: "Touch",
    SavingThrow: "Will negates (harmless)",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.383",
    SpellResistance: "No",
    TargetsEffectArea: "One creature"
  },
  "Transfer Charge": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 0 }],
    SpellListDescription:
      "Move charges from one power source to another source of the same type.",
    Duration: "Instantaneous",
    Level: 0,
    Description:
      "You can transfer any number of charges from one battery to another battery or from one power cell to another power cell. You can only transfer charges using two objects of the exact same type (two batteries of the same size two identical power cells or the like); you transfer charges from the source object to the receiving object. You must declare how many charges you are transferring before casting this spell. If you transfer more charges from the source than the receiving item can hold the receiving item must succeed at a Fortitude saving throw or take 1d6 electricity damage. This spell provides no knowledge of how many charges a receiving item can safely hold but you can choose to transfer fewer charges than the maximum allowed to reduce the risk.",
    Range: "Touch",
    SavingThrow: "Fortitude negates (object)",
    School: SpellSchool.Transmutation,
    Source: "Core Rulebook",
    PageNumber: "p.383",
    SpellResistance: "Yes (object)",
    TargetsEffectArea: "Two objects of the same type; see text"
  },
  "True Seeing": {
    CastingTime: "1 standard action",
    Classes: [
      { class: Class.Mystic, level: 6 },
      { class: Class.Technomancer, level: 6 }
    ],
    SpellListDescription: "Target can see things as they really are.",
    Duration: "(CASTERLEVEL) minutes",
    Level: 6,
    Description:
      "You confer upon the target the ability to see all things within 120 feet as they actually are. The target sees through normal and magical darkness notices secret doors hidden by magic sees the exact locations of creatures or objects that are invisible or displaced sees through illusions and sees the true form of changed or transmuted things. Further the target can focus its vision to see into the Ethereal Plane (but not into extradimensional spaces). True seeing however does not penetrate solid objects. It in no way confers X-ray vision or its equivalent. It does not negate concealment including that caused by fog and the like. True seeing does not help the viewer see through mundane disguises spot creatures who are simply hiding or notice secret doors hidden by mundane means.",
    Range: "Touch",
    SavingThrow: "Will negates (harmless)",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.383",
    SpellResistance: "Yes (harmless)",
    TargetsEffectArea: "One creature"
  },
  "Unseen Servant": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 1 }],
    SpellListDescription: "Invisible force obeys your commands.",
    Descriptor: [SpellDescriptor.Creation],
    Duration: "(CASTERLEVEL) hours",
    Level: 1,
    Description:
      "The spell conjures an invisible mindless shapeless force that performs simple tasks at your command (a move action). It can run and fetch things open unstuck doors and hold chairs as well as clean and mend. The servant can perform only one activity at a time but it repeats the same activity over and over again if told to do so as long as you remain within range. It has an effective Strength score of 2 (so it can lift up to 20 pounds or 2 bulk or drag up to 100 pounds or 10 bulk). It can trigger traps and such but it can't exert enough force to activate certain pressure plates and other devices. It can't perform any task that requires a skill check with a DC higher than 10 or that requires a check using a skill that can't be used untrained. This servant can't fly climb or swim (though it can walk on water). Its land speed is 15 feet. The servant can't attack in any way; it is never allowed to make attack rolls. It can't be killed but it dissipates if it takes 6 or more damage from area attacks; it gets no saving throws against attacks.",
    Range: "Close",
    SavingThrow: "None",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.383",
    SpellResistance: "No",
    TargetsEffectArea: "One invisible mindless shapeless servant"
  },
  "Unwilling Guardian": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 5 }],
    SpellListDescription: "Charm a target into protecting you during combat.",
    Descriptor: [SpellDescriptor.Compulsion, SpellDescriptor.MindAffecting],
    Duration: "(CASTERLEVEL) rounds (D)",
    Level: 5,
    Description:
      "Your overwhelming presence bores into the target's mind cowing its will. This turns it into an automaton-like guardian that protects you at all costs. As soon as it is able the target mindlessly moves along the most direct route toward you and stops when it is within 10 feet of you (provoking attacks of opportunity for movement as normal). If you are being attacked in melee by a creature within 10 feet the target instead takes the quickest route to intercept that creature from a square within 10 feet of you and attack it on your behalf. While this spell is in effect the target attacks any creature that attacks you in melee though it can't move more than 10 feet from you to do so. If multiple creatures are attacking you in melee you can choose which creature the target attacks on your behalf as part of combat banter. If you are the target of ranged attacks and your guardian is not attacking a melee assailant on your behalf it moves to provide cover against the ranged attacks. Due to the strong momentary connection between you and your unwilling guardian if you are the single target of a hostile creature's spell or effect the creature must succeed at a caster level check (DC = 6 + your caster level) or the spell or effect instead targets your guardian. This spell has no effect on area of effect or multi-target spells or other effects that include you as a target. When this spell ends the target regains control of its faculties entirely and it knows and remembers that you used magic to control it. Once a creature has been the target of unwilling guardian it can't be targeted with this spell again for 24 hours if cast by the same spellcaster.",
    Range: "Close",
    SavingThrow: "Will negates",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.383",
    SpellResistance: "Yes",
    TargetsEffectArea: "One creature with CR lower than (CASTERLEVEL); see text"
  },
  Veil: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 6 }],
    SpellListDescription: "Change appearance of a group of creatures.",
    Duration: "Concentration + (CASTERLEVEL) hours (D)",
    Level: 6,
    Description:
      "You instantly change the appearance of the targets and then maintain that appearance for the spell's duration. You can make the targets appear to be anything you wish. The targets look feel and smell just like what the spell makes them resemble. Affected creatures return to their normal appearances if slain. You must succeed at a Disguise check to duplicate the appearance of a specific individual. This spell gives you a +10 bonus to such a check (since it counts as altering your form). An unwilling target can negate the spell's effect on it by succeeding at a Will saving throw or by relying on spell resistance. Those who interact with the targets can attempt Will saving throws to disbelieve the illusion but spell resistance doesn't help pierce the illusion.",
    Range: "Long",
    SavingThrow: "Will negates or disbelief see text",
    School: SpellSchool.Illusion,
    Source: "Core Rulebook",
    PageNumber: "p.384",
    SpellResistance: "Yes see text",
    TargetsEffectArea:
      "Up to one or more creatures no two of which can be more than 30 ft. apart"
  },
  Vision: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 6 }],
    SpellListDescription: "Answer a question about a person place or object.",
    Duration: "See text",
    Level: 6,
    Description:
      "You pose a question about some person place or object while casting this spell. If the person or object is at hand or if you are in the place in question and you succeed at a caster level check (1d20 + your caster level DC 20) you receive a vision about that person place or object. The information gained includes everything available about the target that could be discovered by spending weeks in dedicated research with excellent-quality but standard reference works. If the person or object is not at hand or you are not in the place and you know only detailed information about the person place or object the DC of the caster level check is 25 and the information gained is incomplete (though it often provides enough information to help you find the person place or thing thus allowing a better vision result next time). If you know only rumors the DC is 30 and the information gained is vague (though it often directs you to more detailed information thus allowing a better vision result next time). In most circumstances you can't glean information about what occurred during the Gap with this spell. Casting this spell requires access to a computer or similar device which displays the information gained. Additionally casting this spell places considerable strain on you requiring you to spend 1 Resolve Point.",
    Range: "Personal",
    School: SpellSchool.Divination,
    Source: "Core Rulebook",
    PageNumber: "p.384"
  },
  "Wall of Fire": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 4 }],
    SpellListDescription:
      "Blazing curtain deals 2d6 fire damage out to 10 feet and 1d6 fire damage out to 20 feet; passing through the wall deals 5d6 fire damage.",
    Descriptor: [SpellDescriptor.Fire],
    Duration: "Concentration + (CASTERLEVEL) rounds",
    Level: 4,
    Description:
      "An immobile blazing curtain of opaque shimmering violet fire springs into existence. One side of the wall selected by you sends forth waves of heat dealing 2d6 fire damage to creatures within 10 feet and 1d6 fire damage to those beyond 10 feet but within 20 feet. The wall deals this damage when it appears and on your turn each subsequent round. In addition the wall deals 5d6 fire damage to any creature passing through it. The wall deals double damage to undead creatures. If you evoke the wall so that it appears where creatures are each creature takes damage as if passing through the wall. If any 5-foot length of wall takes 20 or more cold damage in 1 round that length goes away.",
    Range: "Medium",
    SavingThrow: "None",
    School: SpellSchool.Evocation,
    Source: "Core Rulebook",
    PageNumber: "p.384",
    SpellResistance: "Yes",
    TargetsEffectArea:
      "Wall up to (CASTERLEVEL*20) ft. long or a ring with a radius up to (CASTERLEVEL/2*5) ft.; either form 20 ft. high"
  },
  "Wall of Force": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 5 }],
    SpellListDescription: "Invisible wall is difficult to destroy.",
    Descriptor: [SpellDescriptor.Force],
    Duration: "(CASTERLEVEL) rounds (D)",
    Level: 5,
    Description:
      "Wall of force creates an invisible wall of pure force. You can form the wall into a flat vertical plane whose area is up to (CASTERLEVEL) ten-foot squares. The wall must be continuous and unbroken when formed. If its surface is broken by any object or creature the spell fails. This counts as a force field for effects that can't penetrate a force field. The wall can't move and is not easily destroyed. A wall of force is immune to dispel magic. A greater dispel magic specifically targeting the wall of force can dispel it but treat the wall of force's caster level as being 5 higher than the actual caster level. A wall of force can be damaged by spells and attacks as normal but a wall of force has hardness 30 and 300 Hit Points. Disintegrate instantly destroys a wall of force. Breath weapons and spells can't pass through a wall of force in either direction though dimension door teleport and similar effects can bypass the barrier. The wall blocks ethereal creatures as well as material ones (though ethereal creatures can usually circumvent the wall by going around it through material floors and ceilings). Gaze attacks operate normally through a wall of force.",
    Range: "Close",
    SavingThrow: "None",
    School: SpellSchool.Evocation,
    Source: "Core Rulebook",
    PageNumber: "p.384",
    SpellResistance: "No",
    TargetsEffectArea: "Wall with area up to (CASTERLEVEL) ten-foot squares"
  },
  "Wall of Steel": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer, level: 6 }],
    SpellListDescription:
      "Wall has 45 Hit Points per inch of thickness and hardness 15.",
    Descriptor: [SpellDescriptor.Creation],
    Duration: "Instantaneous",
    Level: 6,
    Description:
      "You cause a flat vertical steel wall to spring into existence. The stress of casting this spell requires you to spend 1 Resolve Point. The wall can fit into any space of surrounding nonliving material if its area is sufficient to do so. The wall can't be conjured so that it occupies the same space as a creature or another object. It must always be a flat plane though you can shape its edges to fit the available space. A wall of steel is 4 inches thick. You can double the wall's area by halving its thickness. Each 5-foot square of the wall has hardness 15 and 45 Hit Points per inch of thickness. A section of wall that is reduced to 0 Hit Points is breached. The DC of the Strength check for a creature to break through the wall with a single attack is 30. The wall is firmly anchored to its surroundings and it doesn't easily tip over; it can't be summoned into any area where it is likely to fall or collapse. Like any steel wall this wall is subject to perforation and other natural phenomena though it doesn't rust or corrode under typical circumstances. The metal created by this spell is not suitable for use in the creation of other objects and can't be sold.",
    Range: "Medium",
    SavingThrow: "None",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.385",
    SpellResistance: "No",
    TargetsEffectArea:
      "Steel wall with area up to (CASTERLEVEL*5) five-foot squares; see text"
  },
  "Waves of Fatigue": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 5 }],
    SpellListDescription: "Several targets become fatigued.",
    Duration: "Instantaneous",
    Level: 5,
    Description:
      "Waves of negative energy render all living creatures in the spell's area fatigued. This spell has no effect on a creature that is already fatigued.",
    Range: "30 ft.",
    SavingThrow: "None",
    School: SpellSchool.Necromancy,
    Source: "Core Rulebook",
    PageNumber: "p.385",
    SpellResistance: "Yes",
    TargetsEffectArea: "Cone-shaped burst"
  },
  Wish: {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Technomancer }],
    SpellListDescription: "Alters reality (within limits).",
    Duration: "See text",
    Description:
      "By simply speaking aloud you can alter reality to better suit you. Even wish however has its limits. A wish spell can produce any one of the following effects - Duplicate any technomancer spell of 6th level or lower; Duplicate any other spell of 5th level or lower; Undo the harmful effects of certain spells such as feeblemind; Produce any effect whose power level is in line with the above effects. At the GM's discretion you may try to use a wish to produce greater effects than these but doing so may be dangerous or the spell may have only a partial effect. A duplicated spell allows saving throws and spell resistance as normal but the save DCs are the same as for a 7th-level spell. For the purpose of other effects that depend on spell level wish counts as a 9th-level spell.",
    Range: "See text",
    SavingThrow: "See text",
    School: SpellSchool.Universal,
    Source: "Core Rulebook",
    PageNumber: "p.385",
    SpellResistance: "See text",
    TargetsEffectArea: "See text"
  },
  "Wisp Ally": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 1 }],
    SpellListDescription:
      "Create wisp of energy that shines light and distracts an enemy.",
    Descriptor: [SpellDescriptor.Creation],
    Duration: "(CASTERLEVEL) rounds",
    Level: 1,
    Description:
      "You draw forth otherworldly energy to create a small spherical floating wisp that can distract your enemies in combat. This wisp can move 60 feet per round in any direction and you can direct it as a move action on your turn. If the wisp occupies the same space as an enemy the wisp provides your choice of either harrying fire or covering fire (see pages 246-247) against the enemy each round on your turn and it follows that enemy within range automatically unless you direct it to change targets. The wisp is made of pure light and energy and can't be damaged in combat though it can be dispelled as normal. In addition to the function described above the wisp sheds light in a 20-foot radius in a color of your choice (chosen when you cast the spell).",
    Range: "Close",
    SavingThrow: "None",
    School: SpellSchool.Conjuration,
    Source: "Core Rulebook",
    PageNumber: "p.385",
    SpellResistance: "No",
    TargetsEffectArea: "One distracting glowing servant"
  },
  "Zone of Truth": {
    CastingTime: "1 standard action",
    Classes: [{ class: Class.Mystic, level: 2 }],
    SpellListDescription: "Creatures within range can't lie.",
    Descriptor: [SpellDescriptor.Compulsion, SpellDescriptor.MindAffecting],
    Duration: "(CASTERLEVEL) minutes",
    Level: 2,
    Description:
      "Creatures within the emanation area can't speak any deliberate and intentional lies. Each potentially affected creature can attempt a Will saving throw to avoid the effect when the spell is cast or when that creature first enters the emanation area. Affected creatures are aware of this enchantment and they can therefore avoid answering questions to which they would normally respond with a lie or they can be evasive as long as they remain within the boundaries of the truth. Creatures who leave the area are free to speak as they choose.",
    Range: "Close",
    SavingThrow: "Will negates",
    School: SpellSchool.Enchantment,
    Source: "Core Rulebook",
    PageNumber: "p.385",
    SpellResistance: "Yes",
    TargetsEffectArea: "20-ft.-radius emanation"
  }
};
export default spells;
