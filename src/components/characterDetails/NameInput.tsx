import * as React from "react";
import { TextField } from "@material-ui/core";

interface NameInputProps {
  value: string;
  onChange?: (name: string) => void;
}

const NameInput: React.FC<NameInputProps> = ({ value, onChange }) => (
  <TextField
    id="name-input"
    label="Name"
    value={value}
    onChange={e => onChange && onChange(e.target.value)}
  />
);

export default NameInput;
