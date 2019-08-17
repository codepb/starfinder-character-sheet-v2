import * as React from "react";
import { TableCell, TextField } from "@material-ui/core";
import withStyles, { CSSProperties } from "@material-ui/core/styles/withStyles";

type Classes = "misc" | "miscInput";

const styles: Record<Classes, CSSProperties> = {
  misc: {
    width: 40,
    margin: 0
  },
  miscInput: {
    fontSize: "0.8125rem"
  }
};

interface MiscTableCellProps {
  classes: Record<Classes, string>;
  value: number;

  onChange(value: number): void;
}

const MiscTableCell: React.FC<MiscTableCellProps> = ({
  classes,
  value,
  onChange
}) => (
  <TableCell>
    <TextField
      className={classes.misc}
      type="number"
      value={value}
      onChange={e => onChange(Number(e.target.value))}
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
);

export default withStyles(styles)(MiscTableCell);
