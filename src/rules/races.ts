import { AbilityScoreModifiers } from "../character/useAbilityScores";
import Size from "./Size";

export enum Race {
  ANDROID = "Android",
  HUMAN = "Human",
  KASATHA = "Kasatha",
  KORSHA_LASHUNTA = "Korshar Lashunta",
  DAMAYA_LASHUNTA = "Damaya Lashunta",
  SHIRREN = "Shirren",
  VESK = "Vesk",
  YSOKI = "Ysoki",
  DWARF = "Dwarf",
  ELF = "Elf",
  FEYCHILD_GNOME = "Feychild Gnome",
  BLEACHLING_GNOME = "Bleachling Gnome",
  HALF_ELF = "Half-Elf",
  HALF_ORC = "Half-Orc",
  HALFLING = "Halfling"
}

interface RaceDetails {
  name: Race;
  hp: number;
  size: Size;
  hasUnspecifiedModifiers?: boolean;
  abilityModifiers: AbilityScoreModifiers;
}

const ANDROID_RACE: RaceDetails = {
  name: Race.ANDROID,
  hp: 4,
  size: Size.medium,
  abilityModifiers: {
    dexterity: 2,
    intelligence: 2,
    charisma: -2
  }
};
const HUMAN_RACE: RaceDetails = {
  name: Race.HUMAN,
  hp: 4,
  size: Size.medium,
  hasUnspecifiedModifiers: true,
  abilityModifiers: {
    unspecified: 2
  }
};
const KASATHA_RACE: RaceDetails = {
  name: Race.KASATHA,
  hp: 4,
  size: Size.medium,
  abilityModifiers: {
    strength: 2,
    wisdom: 2,
    intelligence: -2
  }
};
const KORSHA_LASHUNTA_RACE: RaceDetails = {
  name: Race.KORSHA_LASHUNTA,
  hp: 4,
  size: Size.medium,
  abilityModifiers: {
    strength: 2,
    charisma: 2,
    wisdom: -2
  }
};
const DAMAYA_LASHUNTA_RACE: RaceDetails = {
  name: Race.DAMAYA_LASHUNTA,
  hp: 4,
  size: Size.medium,
  abilityModifiers: {
    intelligence: 2,
    charisma: 2,
    constitution: -2
  }
};
const SHIRREN_RACE: RaceDetails = {
  name: Race.SHIRREN,
  hp: 6,
  size: Size.medium,
  abilityModifiers: {
    constitution: 2,
    wisdom: 2,
    charisma: -2
  }
};
const VESK_RACE: RaceDetails = {
  name: Race.VESK,
  hp: 6,
  size: Size.medium,
  abilityModifiers: {
    constitution: 2,
    strength: 2,
    intelligence: -2
  }
};
const YSOKI_RACE: RaceDetails = {
  name: Race.YSOKI,
  hp: 2,
  size: Size.small,
  abilityModifiers: {
    dexterity: 2,
    intelligence: 2,
    strength: -2
  }
};

const DWARF_RACE: RaceDetails = {
  name: Race.DWARF,
  hp: 6,
  size: Size.medium,
  abilityModifiers: {
    constitution: 2,
    wisdom: 2,
    charisma: -2
  }
};

const ELF_RACE: RaceDetails = {
  name: Race.ELF,
  hp: 4,
  size: Size.medium,
  abilityModifiers: {
    dexterity: 2,
    intelligence: 2,
    constitution: -2
  }
};

const FEYCHILD_GNOME_RACE: RaceDetails = {
  name: Race.FEYCHILD_GNOME,
  hp: 4,
  size: Size.small,
  abilityModifiers: {
    constitution: 2,
    charisma: 2,
    strength: -2
  }
};

const BLEACHLING_GNOME_RACE: RaceDetails = {
  name: Race.BLEACHLING_GNOME,
  hp: 4,
  size: Size.small,
  abilityModifiers: {
    constitution: 2,
    intelligence: 2,
    strength: -2
  }
};

const HALF_ELF_RACE: RaceDetails = {
  name: Race.HALF_ELF,
  hp: 4,
  size: Size.medium,
  hasUnspecifiedModifiers: true,
  abilityModifiers: {
    unspecified: 2
  }
};

const HALF_ORC_RACE: RaceDetails = {
  name: Race.HALF_ORC,
  hp: 6,
  size: Size.medium,
  hasUnspecifiedModifiers: true,
  abilityModifiers: {
    unspecified: 2
  }
};

const HALFLING_RACE: RaceDetails = {
  name: Race.HALFLING,
  hp: 2,
  size: Size.small,
  abilityModifiers: {
    dexterity: 2,
    charisma: 2,
    strength: -2
  }
};

const raceDetails = {
  [Race.ANDROID]: ANDROID_RACE,
  [Race.HUMAN]: HUMAN_RACE,
  [Race.KASATHA]: KASATHA_RACE,
  [Race.KORSHA_LASHUNTA]: KORSHA_LASHUNTA_RACE,
  [Race.DAMAYA_LASHUNTA]: DAMAYA_LASHUNTA_RACE,
  [Race.SHIRREN]: SHIRREN_RACE,
  [Race.VESK]: VESK_RACE,
  [Race.YSOKI]: YSOKI_RACE,
  [Race.DWARF]: DWARF_RACE,
  [Race.ELF]: ELF_RACE,
  [Race.FEYCHILD_GNOME]: FEYCHILD_GNOME_RACE,
  [Race.BLEACHLING_GNOME]: BLEACHLING_GNOME_RACE,
  [Race.HALF_ELF]: HALF_ELF_RACE,
  [Race.HALF_ORC]: HALF_ORC_RACE,
  [Race.HALFLING]: HALFLING_RACE
};

export { raceDetails };
