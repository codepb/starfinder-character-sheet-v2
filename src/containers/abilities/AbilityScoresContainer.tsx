import * as React from "react";
import AbilitiyScores from "../../components/abilities/AbilityScoresAdjustment";
import useAbilityScores from "../../character/useAbilityScores";
import Container from "../../components/layout/Container";

const AbilityScoresContainer: React.FC = () => {
  const {
    abilityScores,
    abilityModifiers,
    baseAbilityScores,
    pointsRemaining,
    increment,
    decrement,
    canDecrement,
    canIncrement
  } = useAbilityScores();
  return (
    <AbilitiyScores
      abilityScores={abilityScores}
      abilityModifiers={abilityModifiers}
      baseAbilityScores={baseAbilityScores}
      pointsRemaining={pointsRemaining}
      onIncrement={increment}
      onDecrement={decrement}
      canIncrement={canIncrement}
      canDecrement={canDecrement}
    />
  );
};

export default AbilityScoresContainer;
