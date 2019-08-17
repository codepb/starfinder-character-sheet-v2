import * as React from "react";
import useAbilityScores from "../../character/useAbilityScores";
import AbilityScoreModifiers from "../../components/abilities/AbilityScoreModifiers";

const DisplayAbilityScoresContainer: React.FC = () => {
  const {
    abilityScores,
    abilityModifiers,
    miscAbilityScores,
    setMisc
  } = useAbilityScores();

  return (
    <AbilityScoreModifiers
      abilityScores={abilityScores}
      abilityModifiers={abilityModifiers}
      miscScores={miscAbilityScores}
      onMiscChange={setMisc}
    />
  );
};

export default DisplayAbilityScoresContainer;
