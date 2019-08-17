import * as React from "react";
import { FC } from "react";
import { alertRoll } from "../../services/dice";
import {
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TextField
} from "@material-ui/core";
import withStyles, { CSSProperties } from "@material-ui/core/styles/withStyles";
import { SavingThrows as SavingThrowsType } from "../../character/useSavingThrows";
import MiscTableCell from "../layout/MiscTableCell";

type Classes = "container" | "label" | "total";

const styles: Record<Classes, CSSProperties> = {
  container: {
    textAlign: "center"
  },
  label: {
    width: 100,
    paddingRight: 10
  },
  total: {
    fontWeight: "bold",
    width: 15,
    paddingRight: 10
  }
};

interface SavingThrowsProps {
  fortitude: number;
  reflex: number;
  will: number;
  misc: SavingThrowsType;
  onMiscChange(key: keyof SavingThrowsType, value: number): void;
  classes: Record<Classes, string>;
}

const SavingThrows: FC<SavingThrowsProps> = ({
  fortitude,
  reflex,
  will,
  misc,
  onMiscChange,
  classes
}) => {
  return (
    <div className={classes.container}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className={classes.label}>Fortitude</TableCell>
            <TableCell className={classes.total}>{fortitude}</TableCell>
            <MiscTableCell
              value={misc.fortitude}
              onChange={value => onMiscChange("fortitude", value)}
            />
            <TableCell>
              <Button color="primary" onClick={alertRoll(fortitude)}>
                Roll
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.label}>Reflex</TableCell>
            <TableCell className={classes.total}>{reflex}</TableCell>
            <MiscTableCell
              value={misc.reflex}
              onChange={value => onMiscChange("reflex", value)}
            />
            <TableCell>
              <Button color="primary" onClick={alertRoll(reflex)}>
                Roll
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.label}>Will</TableCell>
            <TableCell className={classes.total}>{will}</TableCell>
            <MiscTableCell
              value={misc.will}
              onChange={value => onMiscChange("will", value)}
            />
            <TableCell>
              <Button color="primary" onClick={alertRoll(will)}>
                Roll
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default withStyles(styles)(SavingThrows);
