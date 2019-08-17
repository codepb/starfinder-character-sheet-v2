import * as React from "react";
import { TextField } from "@material-ui/core";

interface HomeWorldSelectionProps {
  value: string;
  onChange?: (homeWorld: string) => void;
}

const HomeWorldSelection: React.FC<HomeWorldSelectionProps> = ({
  value,
  onChange
}) => (
  <TextField
    id="homeworld-input"
    label="Home World"
    value={value}
    onChange={e => onChange && onChange(e.target.value)}
  />
);

export default HomeWorldSelection;
