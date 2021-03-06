const L = 0.1;

export enum ArmorWeight {
  light,
  heavy
}

export interface Armor {
  model: string;
  level: number;
  price: number;
  eacBonus: number;
  kacBonus: number;
  maxDexBonus: number;
  armorCheckPenalty: number;
  speedAdjustment: number;
  upgradeSlots: number;
  bulk: number;
  type: ArmorWeight;
}

const armors: Armor[] = [
  {
    model: "Estex suit I",
    level: 1,
    price: 410,
    eacBonus: 0,
    kacBonus: 1,
    maxDexBonus: 5,
    armorCheckPenalty: -1,
    speedAdjustment: 0,
    upgradeSlots: 2,
    bulk: 1,
    type: ArmorWeight.light
  },
  {
    model: "Second skin",
    level: 1,
    price: 250,
    eacBonus: 1,
    kacBonus: 2,
    maxDexBonus: 5,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 1,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "Stationwear, flight suit",
    level: 1,
    price: 95,
    eacBonus: 0,
    kacBonus: 1,
    maxDexBonus: 6,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 0,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "Freebooter armor I",
    level: 2,
    price: 750,
    eacBonus: 2,
    kacBonus: 3,
    maxDexBonus: 4,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 0,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "Kasatha microcord I",
    level: 2,
    price: 460,
    eacBonus: 1,
    kacBonus: 3,
    maxDexBonus: 3,
    armorCheckPenalty: -1,
    speedAdjustment: 0,
    upgradeSlots: 0,
    bulk: 1,
    type: ArmorWeight.light
  },
  {
    model: "Carbon skin, graphite",
    level: 3,
    price: 1220,
    eacBonus: 3,
    kacBonus: 4,
    maxDexBonus: 4,
    armorCheckPenalty: -1,
    speedAdjustment: 0,
    upgradeSlots: 1,
    bulk: 1,
    type: ArmorWeight.light
  },
  {
    model: "Stationwear, casual",
    level: 3,
    price: 1300,
    eacBonus: 1,
    kacBonus: 2,
    maxDexBonus: 6,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 0,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "Defrex hide",
    level: 4,
    price: 2250,
    eacBonus: 5,
    kacBonus: 5,
    maxDexBonus: 4,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 1,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "Lashunta tempweave, basic",
    level: 4,
    price: 1950,
    eacBonus: 4,
    kacBonus: 4,
    maxDexBonus: 5,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 1,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "D-suit I",
    level: 5,
    price: 2980,
    eacBonus: 5,
    kacBonus: 6,
    maxDexBonus: 5,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 1,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "Estex suit II",
    level: 5,
    price: 2700,
    eacBonus: 4,
    kacBonus: 5,
    maxDexBonus: 5,
    armorCheckPenalty: -1,
    speedAdjustment: 0,
    upgradeSlots: 3,
    bulk: 1,
    type: ArmorWeight.light
  },
  {
    model: "Stationwear, business",
    level: 5,
    price: 2600,
    eacBonus: 2,
    kacBonus: 3,
    maxDexBonus: 6,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 0,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "Freebooter armor II",
    level: 6,
    price: 4720,
    eacBonus: 6,
    kacBonus: 8,
    maxDexBonus: 5,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 1,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "Kasatha microcord II",
    level: 6,
    price: 3670,
    eacBonus: 6,
    kacBonus: 8,
    maxDexBonus: 4,
    armorCheckPenalty: -1,
    speedAdjustment: 0,
    upgradeSlots: 1,
    bulk: 1,
    type: ArmorWeight.light
  },
  {
    model: "Stationwear, elite",
    level: 6,
    price: 4100,
    eacBonus: 4,
    kacBonus: 5,
    maxDexBonus: 7,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 0,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "Ysoki refractor suit",
    level: 6,
    price: 4120,
    eacBonus: 7,
    kacBonus: 7,
    maxDexBonus: 5,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 2,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "Red Tang Spice Guild travel suit, silver",
    level: 7,
    price: 7250,
    eacBonus: 6,
    kacBonus: 7,
    maxDexBonus: 7,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 0,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "D-suit II",
    level: 7,
    price: 6900,
    eacBonus: 8,
    kacBonus: 9,
    maxDexBonus: 5,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 2,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "Estex suit III",
    level: 7,
    price: 5500,
    eacBonus: 7,
    kacBonus: 8,
    maxDexBonus: 5,
    armorCheckPenalty: -1,
    speedAdjustment: 0,
    upgradeSlots: 4,
    bulk: 1,
    type: ArmorWeight.light
  },
  {
    model: "Kasatha microcord III",
    level: 8,
    price: 9000,
    eacBonus: 9,
    kacBonus: 11,
    maxDexBonus: 5,
    armorCheckPenalty: -1,
    speedAdjustment: 0,
    upgradeSlots: 2,
    bulk: 1,
    type: ArmorWeight.light
  },
  {
    model: "Lashunta tempweave, advanced",
    level: 8,
    price: 8500,
    eacBonus: 9,
    kacBonus: 10,
    maxDexBonus: 6,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 3,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "Red Tang Spice Guild travel suit, gold",
    level: 9,
    price: 12100,
    eacBonus: 9,
    kacBonus: 10,
    maxDexBonus: 8,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 0,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "D-suit III",
    level: 9,
    price: 13300,
    eacBonus: 11,
    kacBonus: 12,
    maxDexBonus: 6,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 3,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "Carbon skin, white carbon",
    level: 10,
    price: 19650,
    eacBonus: 12,
    kacBonus: 14,
    maxDexBonus: 5,
    armorCheckPenalty: -1,
    speedAdjustment: 0,
    upgradeSlots: 3,
    bulk: 1,
    type: ArmorWeight.light
  },
  {
    model: "Freebooter armor III",
    level: 10,
    price: 16900,
    eacBonus: 12,
    kacBonus: 13,
    maxDexBonus: 6,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 3,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "Kasatha microcord IV",
    level: 11,
    price: 23800,
    eacBonus: 13,
    kacBonus: 15,
    maxDexBonus: 5,
    armorCheckPenalty: -1,
    speedAdjustment: 0,
    upgradeSlots: 3,
    bulk: 1,
    type: ArmorWeight.light
  },
  {
    model: "Red Tang Spice Guild travel suit, platinum",
    level: 12,
    price: 34600,
    eacBonus: 12,
    kacBonus: 13,
    maxDexBonus: 8,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 0,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "Hardlight series, squad",
    level: 12,
    price: 30750,
    eacBonus: 15,
    kacBonus: 15,
    maxDexBonus: 6,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 4,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "D-suit IV",
    level: 13,
    price: 45800,
    eacBonus: 16,
    kacBonus: 17,
    maxDexBonus: 6,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 4,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "Estex suit IV",
    level: 13,
    price: 49250,
    eacBonus: 15,
    kacBonus: 16,
    maxDexBonus: 6,
    armorCheckPenalty: -1,
    speedAdjustment: 0,
    upgradeSlots: 6,
    bulk: 1,
    type: ArmorWeight.light
  },
  {
    model: "Echelon fashion, ready to wear",
    level: 14,
    price: 71300,
    eacBonus: 15,
    kacBonus: 16,
    maxDexBonus: 8,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 0,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "Freebooter armor IV",
    level: 14,
    price: 60600,
    eacBonus: 17,
    kacBonus: 18,
    maxDexBonus: 6,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 4,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "Carbon skin, diamond",
    level: 15,
    price: 126400,
    eacBonus: 17,
    kacBonus: 19,
    maxDexBonus: 7,
    armorCheckPenalty: -1,
    speedAdjustment: 0,
    upgradeSlots: 4,
    bulk: 1,
    type: ArmorWeight.light
  },
  {
    model: "Hardlight series, elite",
    level: 15,
    price: 123500,
    eacBonus: 18,
    kacBonus: 18,
    maxDexBonus: 7,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 4,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "Swarmsuit",
    level: 15,
    price: 95200,
    eacBonus: 18,
    kacBonus: 19,
    maxDexBonus: 6,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 4,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "Shotalashu armor",
    level: 16,
    price: 149500,
    eacBonus: 19,
    kacBonus: 20,
    maxDexBonus: 7,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 5,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "D-suit V",
    level: 17,
    price: 244300,
    eacBonus: 20,
    kacBonus: 21,
    maxDexBonus: 7,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 5,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "Echelon fashion, bespoke",
    level: 17,
    price: 285000,
    eacBonus: 18,
    kacBonus: 19,
    maxDexBonus: 8,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 0,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "Freebooter armor V",
    level: 18,
    price: 367650,
    eacBonus: 20,
    kacBonus: 21,
    maxDexBonus: 8,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 5,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "D-suit VI",
    level: 19,
    price: 552000,
    eacBonus: 21,
    kacBonus: 22,
    maxDexBonus: 8,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 6,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "Carbon skin, nanotube",
    level: 20,
    price: 825000,
    eacBonus: 21,
    kacBonus: 23,
    maxDexBonus: 8,
    armorCheckPenalty: -1,
    speedAdjustment: 0,
    upgradeSlots: 6,
    bulk: 1,
    type: ArmorWeight.light
  },
  {
    model: "Hardlight series, specialist",
    level: 20,
    price: 928000,
    eacBonus: 22,
    kacBonus: 22,
    maxDexBonus: 8,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 6,
    bulk: L,
    type: ArmorWeight.light
  },
  {
    model: "Ceremonial plate, troop",
    level: 1,
    price: 110,
    eacBonus: 1,
    kacBonus: 3,
    maxDexBonus: 2,
    armorCheckPenalty: -3,
    speedAdjustment: -10,
    upgradeSlots: 3,
    bulk: 3,
    type: ArmorWeight.heavy
  },
  {
    model: "Golemforged plating I",
    level: 1,
    price: 250,
    eacBonus: 2,
    kacBonus: 5,
    maxDexBonus: 0,
    armorCheckPenalty: -3,
    speedAdjustment: -10,
    upgradeSlots: 0,
    bulk: 3,
    type: ArmorWeight.heavy
  },
  {
    model: "Lashunta ringwear I",
    level: 1,
    price: 415,
    eacBonus: 2,
    kacBonus: 4,
    maxDexBonus: 2,
    armorCheckPenalty: -2,
    speedAdjustment: -5,
    upgradeSlots: 0,
    bulk: 2,
    type: ArmorWeight.heavy
  },
  {
    model: "Hidden soldier armor",
    level: 2,
    price: 465,
    eacBonus: 3,
    kacBonus: 5,
    maxDexBonus: 2,
    armorCheckPenalty: -2,
    speedAdjustment: -5,
    upgradeSlots: 1,
    bulk: 2,
    type: ArmorWeight.heavy
  },
  {
    model: "Iridishell, basic",
    level: 2,
    price: 755,
    eacBonus: 3,
    kacBonus: 6,
    maxDexBonus: 2,
    armorCheckPenalty: -2,
    speedAdjustment: -5,
    upgradeSlots: 0,
    bulk: 2,
    type: ArmorWeight.heavy
  },
  {
    model: "Thinplate",
    level: 2,
    price: 1000,
    eacBonus: 4,
    kacBonus: 6,
    maxDexBonus: 2,
    armorCheckPenalty: -3,
    speedAdjustment: -10,
    upgradeSlots: 1,
    bulk: 3,
    type: ArmorWeight.heavy
  },
  {
    model: "Defiance series, squad",
    level: 3,
    price: 1220,
    eacBonus: 5,
    kacBonus: 8,
    maxDexBonus: 1,
    armorCheckPenalty: -4,
    speedAdjustment: -10,
    upgradeSlots: 1,
    bulk: 3,
    type: ArmorWeight.heavy
  },
  {
    model: "Golemforged plating II",
    level: 3,
    price: 1610,
    eacBonus: 5,
    kacBonus: 7,
    maxDexBonus: 2,
    armorCheckPenalty: -2,
    speedAdjustment: -10,
    upgradeSlots: 1,
    bulk: 3,
    type: ArmorWeight.heavy
  },
  {
    model: "Ceremonial plate, officer",
    level: 4,
    price: 2275,
    eacBonus: 6,
    kacBonus: 8,
    maxDexBonus: 2,
    armorCheckPenalty: -2,
    speedAdjustment: -5,
    upgradeSlots: 1,
    bulk: 2,
    type: ArmorWeight.heavy
  },
  {
    model: "Lashunta ringwear II",
    level: 5,
    price: 2970,
    eacBonus: 8,
    kacBonus: 10,
    maxDexBonus: 2,
    armorCheckPenalty: -2,
    speedAdjustment: -5,
    upgradeSlots: 1,
    bulk: 2,
    type: ArmorWeight.heavy
  },
  {
    model: "Vesk overplate I",
    level: 6,
    price: 3910,
    eacBonus: 9,
    kacBonus: 11,
    maxDexBonus: 3,
    armorCheckPenalty: -2,
    speedAdjustment: -5,
    upgradeSlots: 1,
    bulk: 2,
    type: ArmorWeight.heavy
  },
  {
    model: "Ceremonial plate, commander",
    level: 7,
    price: 7350,
    eacBonus: 10,
    kacBonus: 12,
    maxDexBonus: 2,
    armorCheckPenalty: -3,
    speedAdjustment: -10,
    upgradeSlots: 5,
    bulk: 3,
    type: ArmorWeight.heavy
  },
  {
    model: "Defiance series, elite",
    level: 7,
    price: 6300,
    eacBonus: 10,
    kacBonus: 13,
    maxDexBonus: 2,
    armorCheckPenalty: -4,
    speedAdjustment: -10,
    upgradeSlots: 2,
    bulk: 3,
    type: ArmorWeight.heavy
  },
  {
    model: "Golemforged plating III",
    level: 7,
    price: 5500,
    eacBonus: 10,
    kacBonus: 12,
    maxDexBonus: 3,
    armorCheckPenalty: -2,
    speedAdjustment: -5,
    upgradeSlots: 2,
    bulk: 2,
    type: ArmorWeight.heavy
  },
  {
    model: "Lashunta ringwear III",
    level: 8,
    price: 8420,
    eacBonus: 12,
    kacBonus: 14,
    maxDexBonus: 3,
    armorCheckPenalty: -2,
    speedAdjustment: -5,
    upgradeSlots: 3,
    bulk: 2,
    type: ArmorWeight.heavy
  },
  {
    model: "Vesk overplate II",
    level: 8,
    price: 10250,
    eacBonus: 13,
    kacBonus: 15,
    maxDexBonus: 2,
    armorCheckPenalty: -3,
    speedAdjustment: -10,
    upgradeSlots: 3,
    bulk: 3,
    type: ArmorWeight.heavy
  },
  {
    model: "Iridishell, advanced",
    level: 9,
    price: 13100,
    eacBonus: 13,
    kacBonus: 15,
    maxDexBonus: 3,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 3,
    bulk: 2,
    type: ArmorWeight.heavy
  },
  {
    model: "Starfire armor, pinion",
    level: 9,
    price: 14200,
    eacBonus: 14,
    kacBonus: 16,
    maxDexBonus: 3,
    armorCheckPenalty: -2,
    speedAdjustment: -5,
    upgradeSlots: 4,
    bulk: 2,
    type: ArmorWeight.heavy
  },
  {
    model: "Defiance series, specialist",
    level: 10,
    price: 16950,
    eacBonus: 15,
    kacBonus: 18,
    maxDexBonus: 2,
    armorCheckPenalty: -4,
    speedAdjustment: -10,
    upgradeSlots: 3,
    bulk: 3,
    type: ArmorWeight.heavy
  },
  {
    model: "Golemforged plating IV",
    level: 11,
    price: 24800,
    eacBonus: 15,
    kacBonus: 17,
    maxDexBonus: 3,
    armorCheckPenalty: -3,
    speedAdjustment: -10,
    upgradeSlots: 6,
    bulk: 3,
    type: ArmorWeight.heavy
  },
  {
    model: "Lashunta ringwear IV",
    level: 11,
    price: 27100,
    eacBonus: 16,
    kacBonus: 18,
    maxDexBonus: 4,
    armorCheckPenalty: -3,
    speedAdjustment: -5,
    upgradeSlots: 4,
    bulk: 2,
    type: ArmorWeight.heavy
  },
  {
    model: "Vesk overplate III",
    level: 11,
    price: 23400,
    eacBonus: 16,
    kacBonus: 18,
    maxDexBonus: 3,
    armorCheckPenalty: -2,
    speedAdjustment: -5,
    upgradeSlots: 4,
    bulk: 2,
    type: ArmorWeight.heavy
  },
  {
    model: "Aegis series, squad",
    level: 12,
    price: 45200,
    eacBonus: 17,
    kacBonus: 19,
    maxDexBonus: 3,
    armorCheckPenalty: -5,
    speedAdjustment: -10,
    upgradeSlots: 5,
    bulk: 3,
    type: ArmorWeight.heavy
  },
  {
    model: "Iridishell, superior",
    level: 12,
    price: 42250,
    eacBonus: 17,
    kacBonus: 18,
    maxDexBonus: 4,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 4,
    bulk: 2,
    type: ArmorWeight.heavy
  },
  {
    model: "Vesk monolith I",
    level: 12,
    price: 39650,
    eacBonus: 16,
    kacBonus: 18,
    maxDexBonus: 4,
    armorCheckPenalty: -2,
    speedAdjustment: -5,
    upgradeSlots: 5,
    bulk: 2,
    type: ArmorWeight.heavy
  },
  {
    model: "Starfire armor, exident",
    level: 13,
    price: 53600,
    eacBonus: 18,
    kacBonus: 20,
    maxDexBonus: 4,
    armorCheckPenalty: -2,
    speedAdjustment: -5,
    upgradeSlots: 5,
    bulk: 2,
    type: ArmorWeight.heavy
  },
  {
    model: "Golemforged plating V",
    level: 14,
    price: 63750,
    eacBonus: 18,
    kacBonus: 20,
    maxDexBonus: 4,
    armorCheckPenalty: -3,
    speedAdjustment: -10,
    upgradeSlots: 7,
    bulk: 3,
    type: ArmorWeight.heavy
  },
  {
    model: "Vesk overplate IV",
    level: 14,
    price: 71850,
    eacBonus: 19,
    kacBonus: 21,
    maxDexBonus: 4,
    armorCheckPenalty: -2,
    speedAdjustment: -5,
    upgradeSlots: 5,
    bulk: 2,
    type: ArmorWeight.heavy
  },
  {
    model: "Enginerunner",
    level: 15,
    price: 120900,
    eacBonus: 21,
    kacBonus: 22,
    maxDexBonus: 4,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 5,
    bulk: 2,
    type: ArmorWeight.heavy
  },
  {
    model: "Lashunta ringwear V",
    level: 15,
    price: 94200,
    eacBonus: 20,
    kacBonus: 22,
    maxDexBonus: 4,
    armorCheckPenalty: -2,
    speedAdjustment: -5,
    upgradeSlots: 5,
    bulk: 2,
    type: ArmorWeight.heavy
  },
  {
    model: "Steelbones",
    level: 16,
    price: 145500,
    eacBonus: 21,
    kacBonus: 23,
    maxDexBonus: 4,
    armorCheckPenalty: -3,
    speedAdjustment: -5,
    upgradeSlots: 6,
    bulk: 2,
    type: ArmorWeight.heavy
  },
  {
    model: "Vesk monolith II",
    level: 16,
    price: 163400,
    eacBonus: 22,
    kacBonus: 24,
    maxDexBonus: 4,
    armorCheckPenalty: -3,
    speedAdjustment: -5,
    upgradeSlots: 6,
    bulk: 2,
    type: ArmorWeight.heavy
  },
  {
    model: "Aegis series, elite",
    level: 17,
    price: 209000,
    eacBonus: 23,
    kacBonus: 27,
    maxDexBonus: 3,
    armorCheckPenalty: -5,
    speedAdjustment: -10,
    upgradeSlots: 6,
    bulk: 3,
    type: ArmorWeight.heavy
  },
  {
    model: "Vesk overplate V",
    level: 18,
    price: 415800,
    eacBonus: 24,
    kacBonus: 26,
    maxDexBonus: 4,
    armorCheckPenalty: -3,
    speedAdjustment: -5,
    upgradeSlots: 7,
    bulk: 2,
    type: ArmorWeight.heavy
  },
  {
    model: "Vitrum plate",
    level: 18,
    price: 365650,
    eacBonus: 23,
    kacBonus: 24,
    maxDexBonus: 5,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    upgradeSlots: 4,
    bulk: 1,
    type: ArmorWeight.heavy
  },
  {
    model: "Voidshield armor",
    level: 19,
    price: 610250,
    eacBonus: 25,
    kacBonus: 26,
    maxDexBonus: 5,
    armorCheckPenalty: -3,
    speedAdjustment: -5,
    upgradeSlots: 7,
    bulk: 2,
    type: ArmorWeight.heavy
  },
  {
    model: "Aegis series, specialist",
    level: 20,
    price: 932000,
    eacBonus: 25,
    kacBonus: 28,
    maxDexBonus: 4,
    armorCheckPenalty: -4,
    speedAdjustment: -10,
    upgradeSlots: 7,
    bulk: 3,
    type: ArmorWeight.heavy
  },
  {
    model: "Vesk monolith III",
    level: 20,
    price: 827250,
    eacBonus: 26,
    kacBonus: 27,
    maxDexBonus: 5,
    armorCheckPenalty: -2,
    speedAdjustment: -5,
    upgradeSlots: 7,
    bulk: 2,
    type: ArmorWeight.heavy
  }
];

export default armors;
