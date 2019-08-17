import * as React from "react";
import { AbilityScores as AbilityScoresType } from "../../character/useAbilityScores";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

interface AbilityScoresAdjustmentProps {
  abilityScores: AbilityScoresType;
  abilityModifiers: AbilityScoresType;
  baseAbilityScores: AbilityScoresType;
  pointsRemaining: number;
  onIncrement: (abilityScore: keyof AbilityScoresType) => void;
  onDecrement: (abilityScore: keyof AbilityScoresType) => void;
  canIncrement: (keyof AbilityScoresType)[];
  canDecrement: (keyof AbilityScoresType)[];
}

const AbilityScoresAdjustment: React.FC<AbilityScoresAdjustmentProps> = ({
  abilityScores,
  baseAbilityScores,
  abilityModifiers,
  pointsRemaining,
  onIncrement,
  onDecrement,
  canIncrement,
  canDecrement
}) => (
  <>
    <table>
      <tbody>
        {Object.entries(abilityScores).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
            <td>{abilityModifiers[key]}</td>
            <td>
              <IconButton
                onClick={() => onIncrement(key as keyof AbilityScoresType)}
                color="primary"
                aria-label="Add"
                disabled={
                  !canIncrement.includes(key as keyof AbilityScoresType)
                }
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </td>
            <td>
              <IconButton
                onClick={() => onDecrement(key as keyof AbilityScoresType)}
                color="secondary"
                aria-label="Subtract"
                disabled={
                  !canDecrement.includes(key as keyof AbilityScoresType)
                }
              >
                <RemoveIcon fontSize="small" />
              </IconButton>
            </td>
            <td>{baseAbilityScores[key]}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div>Points Remaining: {pointsRemaining}</div>
  </>
);

export default AbilityScoresAdjustment;
