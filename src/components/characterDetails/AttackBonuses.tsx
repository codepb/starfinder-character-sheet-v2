import * as React from "react";
import { FC } from "react";
import { alertRoll } from "../../services/dice";
import {
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import MiscTableCell from "../layout/MiscTableCell";
import { AttackBonuses as AttackBonusesType } from "../../character/useAttackBonuses";

interface AttackBonusesProps {
  melee: number;
  ranged: number;
  thrown: number;
  misc: AttackBonusesType;

  onMiscChange(key: keyof AttackBonusesType, value: number);
}

const AttackBonuses: FC<AttackBonusesProps> = ({
  melee,
  ranged,
  thrown,
  misc,
  onMiscChange
}) => {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Melee</TableCell>
          <TableCell>{melee}</TableCell>
          <MiscTableCell
            value={misc.melee}
            onChange={value => onMiscChange("melee", value)}
          />
          <TableCell>
            <Button color="primary" onClick={alertRoll(melee)}>
              Roll
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Ranged</TableCell>
          <TableCell>{ranged}</TableCell>
          <MiscTableCell
            value={misc.ranged}
            onChange={value => onMiscChange("ranged", value)}
          />
          <TableCell>
            <Button color="primary" onClick={alertRoll(ranged)}>
              Roll
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Thrown</TableCell>
          <TableCell>{thrown}</TableCell>
          <MiscTableCell
            value={misc.thrown}
            onChange={value => onMiscChange("thrown", value)}
          />
          <TableCell>
            <Button color="primary" onClick={alertRoll(thrown)}>
              Roll
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default AttackBonuses;
