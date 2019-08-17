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

interface InitiativeProps {
  initiative: number;
  misc: number;

  onMiscChange(value: number): void;
}

const Initiative: FC<InitiativeProps> = ({
  initiative,
  misc,
  onMiscChange
}) => {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Initiative</TableCell>
          <TableCell>{initiative}</TableCell>
          <MiscTableCell value={misc} onChange={onMiscChange} />
          <TableCell>
            <Button color="primary" onClick={alertRoll(initiative)}>
              Roll
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Initiative;
