import * as React from "react";
import { TextField } from "@material-ui/core";

interface DescriptionInputProps {
  value: string;
  onChange?: (description: string) => void;
}

const DescriptionInput: React.FC<DescriptionInputProps> = ({
  value,
  onChange
}) => (
  <TextField
    id="description-input"
    label="Description"
    multiline
    rowsMax={4}
    value={value}
    onChange={e => onChange && onChange(e.target.value)}
  />
);

export default DescriptionInput;
