import * as React from "react";
import injectSheet from "react-jss";
import {
  AbilityScores as AbilityScoresType,
  AbilityScores
} from "../../character/useAbilityScores";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Button,
  TextField
} from "@material-ui/core";
import { alertRoll } from "../../services/dice";

const styles = {
  modifier: {
    fontWeight: "bold",
    width: 15,
    paddingRight: 10
  },
  ability: {
    width: 100,
    paddingRight: 10
  },
  misc: {
    width: 40,
    margin: 0
  },
  miscInput: {
    fontSize: "0.8125rem"
  }
};

interface AbilityScoreModifiersProps {
  abilityScores: AbilityScoresType;
  abilityModifiers: AbilityScoresType;
  classes: any;
  miscScores: AbilityScores;

  onMiscChange(key: keyof AbilityScores, value: number): void;
}

const formatModifier = modifier => (modifier >= 0 ? "+" + modifier : modifier);

const AbilityScoreModifiers: React.FC<AbilityScoreModifiersProps> = ({
  abilityScores,
  abilityModifiers,
  miscScores,
  classes,
  onMiscChange
}) => (
  <Table>
    <TableBody>
      {Object.entries(abilityScores).map(([key, value]) => (
        <TableRow key={key}>
          <TableCell className={classes.ability}>{key}</TableCell>
          <TableCell className={classes.modifier}>
            {formatModifier(abilityModifiers[key])}
          </TableCell>
          <TableCell>{value}</TableCell>
          <TableCell>
            <TextField
              className={classes.misc}
              type="number"
              value={miscScores[key] || 0}
              onChange={e =>
                onMiscChange(key as keyof AbilityScores, Number(e.target.value))
              }
              InputLabelProps={{
                shrink: true
              }}
              InputProps={{
                disableUnderline: true,
                className: classes.miscInput
              }}
              margin="normal"
            />
          </TableCell>
          <TableCell>
            <Button color="primary" onClick={alertRoll(abilityModifiers[key])}>
              Roll
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default injectSheet(styles)(AbilityScoreModifiers);
