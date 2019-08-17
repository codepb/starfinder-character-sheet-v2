import { AbilityScoreModifiers } from "../character/useAbilityScores";
import { Skills } from "../character/useSkills";

export enum Theme {
  ACE_PILOT = "Ace Pilot",
  BOUNTY_HUNTER = "Bounty Hunter",
  ICON = "Icon",
  MERCENARY = "Mercenary",
  OUTLAW = "Outlaw",
  PRIEST = "Priest",
  SCHOLAR_LIFE_SCIENCE = "Scholar (Life)",
  SCHOLAR_PHYSICAL_SCIENCE = "Scholar (Physical)",
  SPACEFARER = "Spacefarer",
  XENOSEEKER = "Xenoseeker",
  THEMELESS = "Themeless"
}

interface ThemeDetails {
  name: Theme;
  abilityModifiers: AbilityScoreModifiers;
  classSkills: (keyof Skills)[];
  hasUnspecifiedModifiers?: boolean;
}

const ACE_PILOT_THEME: ThemeDetails = {
  name: Theme.ACE_PILOT,
  abilityModifiers: {
    dexterity: 1
  },
  classSkills: ["piloting"]
};
const BOUNTY_HUNTER_THEME: ThemeDetails = {
  name: Theme.BOUNTY_HUNTER,
  abilityModifiers: {
    constitution: 1
  },
  classSkills: ["survival"]
};
const ICON_THEME: ThemeDetails = {
  name: Theme.ICON,
  abilityModifiers: {
    charisma: 1
  },
  classSkills: ["culture"]
};
const MERCENARY_THEME: ThemeDetails = {
  name: Theme.MERCENARY,
  abilityModifiers: {
    strength: 1
  },
  classSkills: ["athletics"]
};
const OUTLAW_THEME: ThemeDetails = {
  name: Theme.OUTLAW,
  abilityModifiers: {
    dexterity: 1
  },
  classSkills: ["sleightOfHand"]
};
const PRIEST_THEME: ThemeDetails = {
  name: Theme.PRIEST,
  abilityModifiers: {
    wisdom: 1
  },
  classSkills: ["mysticism"]
};
const SCHOLAR_LIFE_SCIENCE_THEME: ThemeDetails = {
  name: Theme.SCHOLAR_LIFE_SCIENCE,
  abilityModifiers: {
    intelligence: 1
  },
  classSkills: ["lifeScience"]
};
const SCHOLAR_PHYSICAL_SCIENCE_THEME: ThemeDetails = {
  name: Theme.SCHOLAR_PHYSICAL_SCIENCE,
  abilityModifiers: {
    intelligence: 1
  },
  classSkills: ["physicalScience"]
};
const SPACEFARER_THEME: ThemeDetails = {
  name: Theme.SPACEFARER,
  abilityModifiers: {
    constitution: 1
  },
  classSkills: ["physicalScience"]
};
const XENOSEEKER_THEME: ThemeDetails = {
  name: Theme.XENOSEEKER,
  abilityModifiers: {
    charisma: 1
  },
  classSkills: ["lifeScience"]
};
const THEMELESS_THEME: ThemeDetails = {
  name: Theme.THEMELESS,
  hasUnspecifiedModifiers: true,
  abilityModifiers: {},
  classSkills: []
};

const themeDetails = {
  [Theme.ACE_PILOT]: ACE_PILOT_THEME,
  [Theme.BOUNTY_HUNTER]: BOUNTY_HUNTER_THEME,
  [Theme.ICON]: ICON_THEME,
  [Theme.MERCENARY]: MERCENARY_THEME,
  [Theme.OUTLAW]: OUTLAW_THEME,
  [Theme.PRIEST]: PRIEST_THEME,
  [Theme.SCHOLAR_LIFE_SCIENCE]: SCHOLAR_LIFE_SCIENCE_THEME,
  [Theme.SCHOLAR_PHYSICAL_SCIENCE]: SCHOLAR_PHYSICAL_SCIENCE_THEME,
  [Theme.SPACEFARER]: SPACEFARER_THEME,
  [Theme.XENOSEEKER]: XENOSEEKER_THEME,
  [Theme.THEMELESS]: THEMELESS_THEME
};

export { themeDetails };
