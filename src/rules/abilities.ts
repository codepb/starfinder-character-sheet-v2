import { AbilityScores } from "../character/useAbilityScores";
import { raceDetails, Race } from "./races";
import { themeDetails, Theme } from "./themes";
import { AbilityLevels } from "../character/CharacterContext";

const calculateAbilityScore = (
  abilityLevels: AbilityLevels,
  race: Race,
  theme: Theme
) => (key: keyof AbilityScores) => {
  const raceDetail = raceDetails[race];
  const themeDetail = themeDetails[theme];

  return (
    abilityLevels.levels
      .map(l => l[key] || 0)
      .reduce((rv, curr) => rv + curr, 0) +
    (abilityLevels.misc[key] || 0) +
    10 +
    (raceDetail.abilityModifiers[key] || 0) +
    (themeDetail.abilityModifiers[key] || 0)
  );
};

const calculateAbilityModifier = (
  abilityLevels: AbilityLevels,
  race: Race,
  theme: Theme
) => (key: keyof AbilityScores) =>
  Math.floor(calculateAbilityScore(abilityLevels, race, theme)(key) / 2) - 5;

export { calculateAbilityModifier, calculateAbilityScore };
