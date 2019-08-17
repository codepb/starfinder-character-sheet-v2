import * as React from "react";
import useAbilityScores, {
  AbilityScores
} from "../../character/useAbilityScores";
import AbilityScoresLevelUp from "../../components/abilities/AbilityScoresLevelUp";

interface LevelUpAbilityScoresContainerProps {
  level: number;
}

const LevelUpAbilityScoresContainer: React.FC<
  LevelUpAbilityScoresContainerProps
> = ({ level }) => {
  const {
    abilityScores,
    abilityModifiers,
    abilityLevels,
    setLevelAbility
  } = useAbilityScores();
  const index = Math.floor(level / 5);
  const abilitiesForLevel = abilityLevels[index] || {};
  const checkedAbilities = Object.entries(abilitiesForLevel)
    .filter(([, value]) => value > 0)
    .map(([key]) => key as keyof AbilityScores);

  return (
    <AbilityScoresLevelUp
      abilityScores={abilityScores}
      abilityModifiers={abilityModifiers}
      checkedAbilities={checkedAbilities}
      abilitiesRemaining={4 - checkedAbilities.length}
      onAbilityChange={(key, value) => setLevelAbility(key, value, level)}
    />
  );
};

export default LevelUpAbilityScoresContainer;
