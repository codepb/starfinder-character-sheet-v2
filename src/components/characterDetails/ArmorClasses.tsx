import * as React from "react";
import { FC } from "react";
import { Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import MiscTableCell from "../layout/MiscTableCell";
import { ArmorClasses as ArmorClassesType } from "../../character/useArmorClasses";

interface ArmorClassesProps {
  kinetic: number;
  energy: number;
  misc: ArmorClassesType;

  onMiscChange(key: keyof ArmorClassesType, value: number): void;
}

const ArmorClasses: FC<ArmorClassesProps> = ({
  kinetic,
  energy,
  misc,
  onMiscChange
}) => {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Kinetic</TableCell>
          <TableCell>{kinetic}</TableCell>
          <MiscTableCell
            value={misc.kinetic}
            onChange={value => onMiscChange("kinetic", value)}
          />
        </TableRow>
        <TableRow>
          <TableCell>Energy</TableCell>
          <TableCell>{energy}</TableCell>
          <MiscTableCell
            value={misc.energy}
            onChange={value => onMiscChange("energy", value)}
          />
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ArmorClasses;
