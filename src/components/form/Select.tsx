import * as React from "react";
import {
  FormControl,
  InputLabel,
  Select as MaterialSelect,
  MenuItem
} from "@material-ui/core";

interface SelectProps {
  id: string;
  label: string;
  options: string[];
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({
  id,
  label,
  options,
  value,
  onChange
}) => (
  <FormControl>
    <InputLabel htmlFor={id}>{label}</InputLabel>
    <MaterialSelect
      onChange={onChange}
      value={value}
      inputProps={{
        name: id,
        id: id
      }}
    >
      {options.map(r => (
        <MenuItem value={r} key={r}>
          {r}
        </MenuItem>
      ))}
    </MaterialSelect>
  </FormControl>
);

export default Select;
