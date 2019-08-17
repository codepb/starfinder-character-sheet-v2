import { AbilityScores } from "../character/useAbilityScores";
import { Skills } from "../character/useSkills";
import { SavingThrowModifiers, SavingThrow } from "./savingThrows";

export enum Class {
  Envoy = "Envoy",
  Mechanic = "Mechanic",
  Mystic = "Mystic",
  Operative = "Operative",
  SOLARIAN = "Solarian",
  SoldierDex = "Soldier(DEX)",
  SoldierStr = "Soldier(STR)",
  Technomancer = "Technomancer"
}

interface levelModifiers {
  baseAttackBonus: number;
  savingThrows: SavingThrowModifiers;
}

export interface ClassDefinition {
  name: Class;
  hp: number;
  stamina: number;
  keyAbility: keyof AbilityScores;
  skillRanksPerLevel: number;
  classSkills: (keyof Skills)[];
  levelModifiers: levelModifiers[];
}

const ENVOY_CLASS: ClassDefinition = {
  name: Class.Envoy,
  hp: 6,
  stamina: 6,
  keyAbility: "charisma",
  skillRanksPerLevel: 8,
  classSkills: [
    "acrobatics",
    "athletics",
    "bluff",
    "computers",
    "culture",
    "diplomacy",
    "disguise",
    "engineering",
    "intimidate",
    "medicine",
    "perception",
    "piloting",
    "profession1",
    "senseMotive",
    "sleightOfHand",
    "stealth"
  ],
  levelModifiers: [
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 0,
        [SavingThrow.REFLEX]: 2,
        [SavingThrow.WILL]: 2
      },
      baseAttackBonus: 0
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 0,
        [SavingThrow.REFLEX]: 3,
        [SavingThrow.WILL]: 3
      },
      baseAttackBonus: 1
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 1,
        [SavingThrow.REFLEX]: 3,
        [SavingThrow.WILL]: 3
      },
      baseAttackBonus: 2
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 1,
        [SavingThrow.REFLEX]: 4,
        [SavingThrow.WILL]: 4
      },
      baseAttackBonus: 3
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 1,
        [SavingThrow.REFLEX]: 4,
        [SavingThrow.WILL]: 4
      },
      baseAttackBonus: 3
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 2,
        [SavingThrow.REFLEX]: 5,
        [SavingThrow.WILL]: 5
      },
      baseAttackBonus: 4
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 2,
        [SavingThrow.REFLEX]: 5,
        [SavingThrow.WILL]: 5
      },
      baseAttackBonus: 5
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 2,
        [SavingThrow.REFLEX]: 6,
        [SavingThrow.WILL]: 6
      },
      baseAttackBonus: 6
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 3,
        [SavingThrow.REFLEX]: 6,
        [SavingThrow.WILL]: 6
      },
      baseAttackBonus: 6
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 3,
        [SavingThrow.REFLEX]: 7,
        [SavingThrow.WILL]: 7
      },
      baseAttackBonus: 7
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 3,
        [SavingThrow.REFLEX]: 7,
        [SavingThrow.WILL]: 7
      },
      baseAttackBonus: 8
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 4,
        [SavingThrow.REFLEX]: 8,
        [SavingThrow.WILL]: 8
      },
      baseAttackBonus: 9
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 4,
        [SavingThrow.REFLEX]: 8,
        [SavingThrow.WILL]: 8
      },
      baseAttackBonus: 9
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 4,
        [SavingThrow.REFLEX]: 9,
        [SavingThrow.WILL]: 9
      },
      baseAttackBonus: 10
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 5,
        [SavingThrow.REFLEX]: 9,
        [SavingThrow.WILL]: 9
      },
      baseAttackBonus: 11
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 5,
        [SavingThrow.REFLEX]: 10,
        [SavingThrow.WILL]: 10
      },
      baseAttackBonus: 12
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 5,
        [SavingThrow.REFLEX]: 10,
        [SavingThrow.WILL]: 10
      },
      baseAttackBonus: 12
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 6,
        [SavingThrow.REFLEX]: 11,
        [SavingThrow.WILL]: 11
      },
      baseAttackBonus: 13
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 6,
        [SavingThrow.REFLEX]: 11,
        [SavingThrow.WILL]: 11
      },
      baseAttackBonus: 14
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 6,
        [SavingThrow.REFLEX]: 12,
        [SavingThrow.WILL]: 12
      },
      baseAttackBonus: 15
    }
  ]
};

const MECHANIC_CLASS: ClassDefinition = {
  name: Class.Mechanic,
  hp: 6,
  stamina: 6,
  keyAbility: "intelligence",
  skillRanksPerLevel: 4,
  classSkills: [
    "athletics",
    "computers",
    "engineering",
    "medicine",
    "physicalScience",
    "piloting",
    "profession1"
  ],
  levelModifiers: [
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 2,
        [SavingThrow.REFLEX]: 2,
        [SavingThrow.WILL]: 0
      },
      baseAttackBonus: 0
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 3,
        [SavingThrow.REFLEX]: 3,
        [SavingThrow.WILL]: 0
      },
      baseAttackBonus: 1
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 3,
        [SavingThrow.REFLEX]: 3,
        [SavingThrow.WILL]: 1
      },
      baseAttackBonus: 2
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 4,
        [SavingThrow.REFLEX]: 4,
        [SavingThrow.WILL]: 1
      },
      baseAttackBonus: 3
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 4,
        [SavingThrow.REFLEX]: 4,
        [SavingThrow.WILL]: 1
      },
      baseAttackBonus: 3
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 5,
        [SavingThrow.REFLEX]: 5,
        [SavingThrow.WILL]: 2
      },
      baseAttackBonus: 4
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 5,
        [SavingThrow.REFLEX]: 5,
        [SavingThrow.WILL]: 2
      },
      baseAttackBonus: 5
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 6,
        [SavingThrow.REFLEX]: 6,
        [SavingThrow.WILL]: 2
      },
      baseAttackBonus: 6
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 6,
        [SavingThrow.REFLEX]: 6,
        [SavingThrow.WILL]: 3
      },
      baseAttackBonus: 6
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 7,
        [SavingThrow.REFLEX]: 7,
        [SavingThrow.WILL]: 3
      },
      baseAttackBonus: 7
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 7,
        [SavingThrow.REFLEX]: 7,
        [SavingThrow.WILL]: 3
      },
      baseAttackBonus: 8
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 8,
        [SavingThrow.REFLEX]: 8,
        [SavingThrow.WILL]: 4
      },
      baseAttackBonus: 9
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 8,
        [SavingThrow.REFLEX]: 8,
        [SavingThrow.WILL]: 4
      },
      baseAttackBonus: 9
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 9,
        [SavingThrow.REFLEX]: 9,
        [SavingThrow.WILL]: 4
      },
      baseAttackBonus: 10
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 9,
        [SavingThrow.REFLEX]: 9,
        [SavingThrow.WILL]: 5
      },
      baseAttackBonus: 11
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 10,
        [SavingThrow.REFLEX]: 10,
        [SavingThrow.WILL]: 5
      },
      baseAttackBonus: 12
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 10,
        [SavingThrow.REFLEX]: 10,
        [SavingThrow.WILL]: 5
      },
      baseAttackBonus: 12
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 11,
        [SavingThrow.REFLEX]: 11,
        [SavingThrow.WILL]: 6
      },
      baseAttackBonus: 13
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 11,
        [SavingThrow.REFLEX]: 11,
        [SavingThrow.WILL]: 6
      },
      baseAttackBonus: 14
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 12,
        [SavingThrow.REFLEX]: 12,
        [SavingThrow.WILL]: 6
      },
      baseAttackBonus: 15
    }
  ]
};

const MYSTIC_CLASS: ClassDefinition = {
  name: Class.Mystic,
  hp: 6,
  stamina: 6,
  keyAbility: "wisdom",
  skillRanksPerLevel: 6,
  classSkills: [
    "bluff",
    "culture",
    "diplomacy",
    "disguise",
    "intimidate",
    "lifeScience",
    "medicine",
    "mysticism",
    "perception",
    "profession1",
    "senseMotive",
    "survival"
  ],
  levelModifiers: [
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 0,
        [SavingThrow.REFLEX]: 0,
        [SavingThrow.WILL]: 2
      },
      baseAttackBonus: 0
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 0,
        [SavingThrow.REFLEX]: 0,
        [SavingThrow.WILL]: 3
      },
      baseAttackBonus: 1
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 1,
        [SavingThrow.REFLEX]: 1,
        [SavingThrow.WILL]: 3
      },
      baseAttackBonus: 2
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 1,
        [SavingThrow.REFLEX]: 1,
        [SavingThrow.WILL]: 4
      },
      baseAttackBonus: 3
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 1,
        [SavingThrow.REFLEX]: 1,
        [SavingThrow.WILL]: 4
      },
      baseAttackBonus: 3
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 2,
        [SavingThrow.REFLEX]: 2,
        [SavingThrow.WILL]: 5
      },
      baseAttackBonus: 4
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 2,
        [SavingThrow.REFLEX]: 2,
        [SavingThrow.WILL]: 5
      },
      baseAttackBonus: 5
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 2,
        [SavingThrow.REFLEX]: 2,
        [SavingThrow.WILL]: 6
      },
      baseAttackBonus: 6
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 3,
        [SavingThrow.REFLEX]: 3,
        [SavingThrow.WILL]: 6
      },
      baseAttackBonus: 6
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 3,
        [SavingThrow.REFLEX]: 3,
        [SavingThrow.WILL]: 7
      },
      baseAttackBonus: 7
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 3,
        [SavingThrow.REFLEX]: 3,
        [SavingThrow.WILL]: 7
      },
      baseAttackBonus: 8
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 4,
        [SavingThrow.REFLEX]: 4,
        [SavingThrow.WILL]: 8
      },
      baseAttackBonus: 9
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 4,
        [SavingThrow.REFLEX]: 4,
        [SavingThrow.WILL]: 8
      },
      baseAttackBonus: 9
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 4,
        [SavingThrow.REFLEX]: 4,
        [SavingThrow.WILL]: 9
      },
      baseAttackBonus: 10
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 5,
        [SavingThrow.REFLEX]: 5,
        [SavingThrow.WILL]: 9
      },
      baseAttackBonus: 11
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 5,
        [SavingThrow.REFLEX]: 5,
        [SavingThrow.WILL]: 10
      },
      baseAttackBonus: 12
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 5,
        [SavingThrow.REFLEX]: 5,
        [SavingThrow.WILL]: 10
      },
      baseAttackBonus: 12
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 6,
        [SavingThrow.REFLEX]: 6,
        [SavingThrow.WILL]: 11
      },
      baseAttackBonus: 13
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 6,
        [SavingThrow.REFLEX]: 6,
        [SavingThrow.WILL]: 11
      },
      baseAttackBonus: 14
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 6,
        [SavingThrow.REFLEX]: 6,
        [SavingThrow.WILL]: 12
      },
      baseAttackBonus: 15
    }
  ]
};

const OPERATIVE_CLASS: ClassDefinition = {
  name: Class.Operative,
  hp: 6,
  stamina: 6,
  keyAbility: "dexterity",
  skillRanksPerLevel: 8,
  classSkills: [
    "acrobatics",
    "athletics",
    "bluff",
    "computers",
    "culture",
    "disguise",
    "engineering",
    "intimidate",
    "medicine",
    "perception",
    "piloting",
    "profession1",
    "senseMotive",
    "sleightOfHand",
    "stealth",
    "survival"
  ],
  levelModifiers: [
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 0,
        [SavingThrow.REFLEX]: 2,
        [SavingThrow.WILL]: 2
      },
      baseAttackBonus: 0
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 0,
        [SavingThrow.REFLEX]: 3,
        [SavingThrow.WILL]: 3
      },
      baseAttackBonus: 1
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 1,
        [SavingThrow.REFLEX]: 3,
        [SavingThrow.WILL]: 3
      },
      baseAttackBonus: 2
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 1,
        [SavingThrow.REFLEX]: 4,
        [SavingThrow.WILL]: 4
      },
      baseAttackBonus: 3
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 1,
        [SavingThrow.REFLEX]: 4,
        [SavingThrow.WILL]: 4
      },
      baseAttackBonus: 3
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 2,
        [SavingThrow.REFLEX]: 5,
        [SavingThrow.WILL]: 5
      },
      baseAttackBonus: 4
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 2,
        [SavingThrow.REFLEX]: 5,
        [SavingThrow.WILL]: 5
      },
      baseAttackBonus: 5
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 2,
        [SavingThrow.REFLEX]: 6,
        [SavingThrow.WILL]: 6
      },
      baseAttackBonus: 6
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 3,
        [SavingThrow.REFLEX]: 6,
        [SavingThrow.WILL]: 6
      },
      baseAttackBonus: 6
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 3,
        [SavingThrow.REFLEX]: 7,
        [SavingThrow.WILL]: 7
      },
      baseAttackBonus: 7
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 3,
        [SavingThrow.REFLEX]: 7,
        [SavingThrow.WILL]: 7
      },
      baseAttackBonus: 8
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 4,
        [SavingThrow.REFLEX]: 8,
        [SavingThrow.WILL]: 8
      },
      baseAttackBonus: 9
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 4,
        [SavingThrow.REFLEX]: 8,
        [SavingThrow.WILL]: 8
      },
      baseAttackBonus: 9
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 4,
        [SavingThrow.REFLEX]: 9,
        [SavingThrow.WILL]: 9
      },
      baseAttackBonus: 10
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 5,
        [SavingThrow.REFLEX]: 9,
        [SavingThrow.WILL]: 9
      },
      baseAttackBonus: 11
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 5,
        [SavingThrow.REFLEX]: 10,
        [SavingThrow.WILL]: 10
      },
      baseAttackBonus: 12
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 5,
        [SavingThrow.REFLEX]: 10,
        [SavingThrow.WILL]: 10
      },
      baseAttackBonus: 12
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 6,
        [SavingThrow.REFLEX]: 11,
        [SavingThrow.WILL]: 11
      },
      baseAttackBonus: 13
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 6,
        [SavingThrow.REFLEX]: 11,
        [SavingThrow.WILL]: 11
      },
      baseAttackBonus: 14
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 6,
        [SavingThrow.REFLEX]: 12,
        [SavingThrow.WILL]: 12
      },
      baseAttackBonus: 15
    }
  ]
};

const SOLARIAN_CLASS: ClassDefinition = {
  name: Class.SOLARIAN,
  hp: 7,
  stamina: 7,
  keyAbility: "charisma",
  skillRanksPerLevel: 4,
  classSkills: [
    "acrobatics",
    "athletics",
    "diplomacy",
    "intimidate",
    "mysticism",
    "perception",
    "physicalScience",
    "profession1",
    "senseMotive",
    "stealth"
  ],
  levelModifiers: [
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 2,
        [SavingThrow.REFLEX]: 0,
        [SavingThrow.WILL]: 2
      },
      baseAttackBonus: 1
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 3,
        [SavingThrow.REFLEX]: 0,
        [SavingThrow.WILL]: 3
      },
      baseAttackBonus: 2
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 3,
        [SavingThrow.REFLEX]: 1,
        [SavingThrow.WILL]: 3
      },
      baseAttackBonus: 3
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 4,
        [SavingThrow.REFLEX]: 1,
        [SavingThrow.WILL]: 4
      },
      baseAttackBonus: 4
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 4,
        [SavingThrow.REFLEX]: 1,
        [SavingThrow.WILL]: 4
      },
      baseAttackBonus: 5
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 5,
        [SavingThrow.REFLEX]: 2,
        [SavingThrow.WILL]: 5
      },
      baseAttackBonus: 6
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 5,
        [SavingThrow.REFLEX]: 2,
        [SavingThrow.WILL]: 5
      },
      baseAttackBonus: 7
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 6,
        [SavingThrow.REFLEX]: 2,
        [SavingThrow.WILL]: 6
      },
      baseAttackBonus: 8
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 6,
        [SavingThrow.REFLEX]: 3,
        [SavingThrow.WILL]: 6
      },
      baseAttackBonus: 9
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 7,
        [SavingThrow.REFLEX]: 3,
        [SavingThrow.WILL]: 7
      },
      baseAttackBonus: 10
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 7,
        [SavingThrow.REFLEX]: 3,
        [SavingThrow.WILL]: 7
      },
      baseAttackBonus: 11
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 8,
        [SavingThrow.REFLEX]: 4,
        [SavingThrow.WILL]: 8
      },
      baseAttackBonus: 12
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 8,
        [SavingThrow.REFLEX]: 4,
        [SavingThrow.WILL]: 8
      },
      baseAttackBonus: 13
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 9,
        [SavingThrow.REFLEX]: 4,
        [SavingThrow.WILL]: 9
      },
      baseAttackBonus: 14
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 9,
        [SavingThrow.REFLEX]: 5,
        [SavingThrow.WILL]: 9
      },
      baseAttackBonus: 15
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 10,
        [SavingThrow.REFLEX]: 5,
        [SavingThrow.WILL]: 10
      },
      baseAttackBonus: 16
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 10,
        [SavingThrow.REFLEX]: 5,
        [SavingThrow.WILL]: 10
      },
      baseAttackBonus: 17
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 11,
        [SavingThrow.REFLEX]: 6,
        [SavingThrow.WILL]: 11
      },
      baseAttackBonus: 18
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 11,
        [SavingThrow.REFLEX]: 6,
        [SavingThrow.WILL]: 11
      },
      baseAttackBonus: 19
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 12,
        [SavingThrow.REFLEX]: 6,
        [SavingThrow.WILL]: 12
      },
      baseAttackBonus: 20
    }
  ]
};

const SOLDIER_DEX_CLASS: ClassDefinition = {
  name: Class.SoldierDex,
  hp: 7,
  stamina: 7,
  keyAbility: "dexterity",
  skillRanksPerLevel: 4,
  classSkills: [
    "acrobatics",
    "athletics",
    "engineering",
    "intimidate",
    "medicine",
    "piloting",
    "profession1",
    "survival"
  ],
  levelModifiers: [
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 2,
        [SavingThrow.REFLEX]: 0,
        [SavingThrow.WILL]: 2
      },
      baseAttackBonus: 1
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 3,
        [SavingThrow.REFLEX]: 0,
        [SavingThrow.WILL]: 3
      },
      baseAttackBonus: 2
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 3,
        [SavingThrow.REFLEX]: 1,
        [SavingThrow.WILL]: 3
      },
      baseAttackBonus: 3
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 4,
        [SavingThrow.REFLEX]: 1,
        [SavingThrow.WILL]: 4
      },
      baseAttackBonus: 4
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 4,
        [SavingThrow.REFLEX]: 1,
        [SavingThrow.WILL]: 4
      },
      baseAttackBonus: 5
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 5,
        [SavingThrow.REFLEX]: 2,
        [SavingThrow.WILL]: 5
      },
      baseAttackBonus: 6
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 5,
        [SavingThrow.REFLEX]: 2,
        [SavingThrow.WILL]: 5
      },
      baseAttackBonus: 7
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 6,
        [SavingThrow.REFLEX]: 2,
        [SavingThrow.WILL]: 6
      },
      baseAttackBonus: 8
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 6,
        [SavingThrow.REFLEX]: 3,
        [SavingThrow.WILL]: 6
      },
      baseAttackBonus: 9
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 7,
        [SavingThrow.REFLEX]: 3,
        [SavingThrow.WILL]: 7
      },
      baseAttackBonus: 10
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 7,
        [SavingThrow.REFLEX]: 3,
        [SavingThrow.WILL]: 7
      },
      baseAttackBonus: 11
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 8,
        [SavingThrow.REFLEX]: 4,
        [SavingThrow.WILL]: 8
      },
      baseAttackBonus: 12
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 8,
        [SavingThrow.REFLEX]: 4,
        [SavingThrow.WILL]: 8
      },
      baseAttackBonus: 13
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 9,
        [SavingThrow.REFLEX]: 4,
        [SavingThrow.WILL]: 9
      },
      baseAttackBonus: 14
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 9,
        [SavingThrow.REFLEX]: 5,
        [SavingThrow.WILL]: 9
      },
      baseAttackBonus: 15
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 10,
        [SavingThrow.REFLEX]: 5,
        [SavingThrow.WILL]: 10
      },
      baseAttackBonus: 16
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 10,
        [SavingThrow.REFLEX]: 5,
        [SavingThrow.WILL]: 10
      },
      baseAttackBonus: 17
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 11,
        [SavingThrow.REFLEX]: 6,
        [SavingThrow.WILL]: 11
      },
      baseAttackBonus: 18
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 11,
        [SavingThrow.REFLEX]: 6,
        [SavingThrow.WILL]: 11
      },
      baseAttackBonus: 19
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 12,
        [SavingThrow.REFLEX]: 6,
        [SavingThrow.WILL]: 12
      },
      baseAttackBonus: 20
    }
  ]
};

const SOLDIER_STR_CLASS: ClassDefinition = {
  name: Class.SoldierStr,
  hp: 7,
  stamina: 7,
  keyAbility: "strength",
  skillRanksPerLevel: 4,
  classSkills: [
    "acrobatics",
    "athletics",
    "engineering",
    "intimidate",
    "medicine",
    "piloting",
    "profession1",
    "survival"
  ],
  levelModifiers: [
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 2,
        [SavingThrow.REFLEX]: 0,
        [SavingThrow.WILL]: 2
      },
      baseAttackBonus: 1
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 3,
        [SavingThrow.REFLEX]: 0,
        [SavingThrow.WILL]: 3
      },
      baseAttackBonus: 2
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 3,
        [SavingThrow.REFLEX]: 1,
        [SavingThrow.WILL]: 3
      },
      baseAttackBonus: 3
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 4,
        [SavingThrow.REFLEX]: 1,
        [SavingThrow.WILL]: 4
      },
      baseAttackBonus: 4
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 4,
        [SavingThrow.REFLEX]: 1,
        [SavingThrow.WILL]: 4
      },
      baseAttackBonus: 5
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 5,
        [SavingThrow.REFLEX]: 2,
        [SavingThrow.WILL]: 5
      },
      baseAttackBonus: 6
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 5,
        [SavingThrow.REFLEX]: 2,
        [SavingThrow.WILL]: 5
      },
      baseAttackBonus: 7
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 6,
        [SavingThrow.REFLEX]: 2,
        [SavingThrow.WILL]: 6
      },
      baseAttackBonus: 8
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 6,
        [SavingThrow.REFLEX]: 3,
        [SavingThrow.WILL]: 6
      },
      baseAttackBonus: 9
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 7,
        [SavingThrow.REFLEX]: 3,
        [SavingThrow.WILL]: 7
      },
      baseAttackBonus: 10
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 7,
        [SavingThrow.REFLEX]: 3,
        [SavingThrow.WILL]: 7
      },
      baseAttackBonus: 11
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 8,
        [SavingThrow.REFLEX]: 4,
        [SavingThrow.WILL]: 8
      },
      baseAttackBonus: 12
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 8,
        [SavingThrow.REFLEX]: 4,
        [SavingThrow.WILL]: 8
      },
      baseAttackBonus: 13
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 9,
        [SavingThrow.REFLEX]: 4,
        [SavingThrow.WILL]: 9
      },
      baseAttackBonus: 14
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 9,
        [SavingThrow.REFLEX]: 5,
        [SavingThrow.WILL]: 9
      },
      baseAttackBonus: 15
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 10,
        [SavingThrow.REFLEX]: 5,
        [SavingThrow.WILL]: 10
      },
      baseAttackBonus: 16
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 10,
        [SavingThrow.REFLEX]: 5,
        [SavingThrow.WILL]: 10
      },
      baseAttackBonus: 17
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 11,
        [SavingThrow.REFLEX]: 6,
        [SavingThrow.WILL]: 11
      },
      baseAttackBonus: 18
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 11,
        [SavingThrow.REFLEX]: 6,
        [SavingThrow.WILL]: 11
      },
      baseAttackBonus: 19
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 12,
        [SavingThrow.REFLEX]: 6,
        [SavingThrow.WILL]: 12
      },
      baseAttackBonus: 20
    }
  ]
};

const TECHNOMANCER_CLASS: ClassDefinition = {
  name: Class.Technomancer,
  hp: 5,
  stamina: 5,
  keyAbility: "intelligence",
  skillRanksPerLevel: 4,
  classSkills: [
    "computers",
    "engineering",
    "lifeScience",
    "mysticism",
    "physicalScience",
    "piloting",
    "profession1",
    "sleightOfHand"
  ],
  levelModifiers: [
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 0,
        [SavingThrow.REFLEX]: 0,
        [SavingThrow.WILL]: 2
      },
      baseAttackBonus: 0
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 0,
        [SavingThrow.REFLEX]: 0,
        [SavingThrow.WILL]: 3
      },
      baseAttackBonus: 1
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 1,
        [SavingThrow.REFLEX]: 1,
        [SavingThrow.WILL]: 3
      },
      baseAttackBonus: 2
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 1,
        [SavingThrow.REFLEX]: 1,
        [SavingThrow.WILL]: 4
      },
      baseAttackBonus: 3
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 1,
        [SavingThrow.REFLEX]: 1,
        [SavingThrow.WILL]: 4
      },
      baseAttackBonus: 3
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 2,
        [SavingThrow.REFLEX]: 2,
        [SavingThrow.WILL]: 5
      },
      baseAttackBonus: 4
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 2,
        [SavingThrow.REFLEX]: 2,
        [SavingThrow.WILL]: 5
      },
      baseAttackBonus: 5
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 2,
        [SavingThrow.REFLEX]: 2,
        [SavingThrow.WILL]: 6
      },
      baseAttackBonus: 6
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 3,
        [SavingThrow.REFLEX]: 3,
        [SavingThrow.WILL]: 6
      },
      baseAttackBonus: 6
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 3,
        [SavingThrow.REFLEX]: 3,
        [SavingThrow.WILL]: 7
      },
      baseAttackBonus: 7
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 3,
        [SavingThrow.REFLEX]: 3,
        [SavingThrow.WILL]: 7
      },
      baseAttackBonus: 8
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 4,
        [SavingThrow.REFLEX]: 4,
        [SavingThrow.WILL]: 8
      },
      baseAttackBonus: 9
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 4,
        [SavingThrow.REFLEX]: 4,
        [SavingThrow.WILL]: 8
      },
      baseAttackBonus: 9
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 4,
        [SavingThrow.REFLEX]: 4,
        [SavingThrow.WILL]: 9
      },
      baseAttackBonus: 10
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 5,
        [SavingThrow.REFLEX]: 5,
        [SavingThrow.WILL]: 9
      },
      baseAttackBonus: 11
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 5,
        [SavingThrow.REFLEX]: 5,
        [SavingThrow.WILL]: 10
      },
      baseAttackBonus: 12
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 5,
        [SavingThrow.REFLEX]: 5,
        [SavingThrow.WILL]: 10
      },
      baseAttackBonus: 12
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 6,
        [SavingThrow.REFLEX]: 6,
        [SavingThrow.WILL]: 11
      },
      baseAttackBonus: 13
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 6,
        [SavingThrow.REFLEX]: 6,
        [SavingThrow.WILL]: 11
      },
      baseAttackBonus: 14
    },
    {
      savingThrows: {
        [SavingThrow.FORTITUDE]: 6,
        [SavingThrow.REFLEX]: 6,
        [SavingThrow.WILL]: 12
      },
      baseAttackBonus: 15
    }
  ]
};

const classDefinitions = {
  [Class.Envoy]: ENVOY_CLASS,
  [Class.Mechanic]: MECHANIC_CLASS,
  [Class.Mystic]: MYSTIC_CLASS,
  [Class.Operative]: OPERATIVE_CLASS,
  [Class.SOLARIAN]: SOLARIAN_CLASS,
  [Class.SoldierDex]: SOLDIER_DEX_CLASS,
  [Class.SoldierStr]: SOLDIER_STR_CLASS,
  [Class.Technomancer]: TECHNOMANCER_CLASS
};

export { classDefinitions };
