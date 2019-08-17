import * as React from "react";
import {
  AbilityScores as AbilityScoresType,
  AbilityScores
} from "../../character/useAbilityScores";
import {
  Checkbox,
  Table,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";

interface AbilityScoresLevelUpProps {
  abilityScores: AbilityScoresType;
  abilityModifiers: AbilityScoresType;
  abilitiesRemaining: number;
  checkedAbilities: (keyof AbilityScores)[];
  onAbilityChange(ability: keyof AbilityScores, value: boolean): void;
}

const AbilityScoresLevelUp: React.FC<AbilityScoresLevelUpProps> = ({
  abilityScores,
  abilityModifiers,
  abilitiesRemaining,
  checkedAbilities,
  onAbilityChange
}) => (
  <>
    <Table>
      <TableBody>
        {Object.entries(abilityScores).map(([key, value]) => (
          <TableRow key={key}>
            <TableCell>{key}</TableCell>
            <TableCell>{value}</TableCell>
            <TableCell>{abilityModifiers[key]}</TableCell>
            <TableCell>
              <Checkbox
                id={`ability-${key}`}
                color="primary"
                value={key}
                checked={
                  checkedAbilities &&
                  checkedAbilities.includes(key as keyof AbilityScores)
                }
                onChange={event => {
                  onAbilityChange(
                    key as keyof AbilityScores,
                    event.target.checked
                  );
                }}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <div>Abilities Remaining: {abilitiesRemaining}</div>
  </>
);

export default AbilityScoresLevelUp;
