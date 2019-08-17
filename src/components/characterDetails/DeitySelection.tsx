import * as React from "react";
import { TextField } from "@material-ui/core";

interface DeitySelectionProps {
  value: string;
  onChange?: (deity: string) => void;
}

const DeitySelection: React.FC<DeitySelectionProps> = ({ value, onChange }) => (
  <TextField
    id="deity-input"
    label="Deity"
    value={value}
    onChange={e => onChange && onChange(e.target.value)}
  />
);

export default DeitySelection;
