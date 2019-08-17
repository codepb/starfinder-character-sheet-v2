import * as React from "react";
import { TextField, Button, IconButton } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";

interface MultipleTextInput {
  value: string[];
  onChange?: (value: string[]) => void;
  label: string;
  id: string;
}

const updateItem = (array: string[], index: number, newItem: string) =>
  array.map((item, i) => (index === i ? newItem : item));

const removeItem = (array: string[], index: number) =>
  array.filter((item, i) => i !== index);

const addEmptyToEnd = (array: string[]) => [...array, ""];

const MultipleTextInput: React.FC<MultipleTextInput> = ({
  value,
  onChange,
  label,
  id
}) => {
  return (
    <>
      {value.map((d, i) => (
        <div key={i}>
          <TextField
            label={label}
            id={`${id}-${i}`}
            value={d}
            onChange={e =>
              onChange && onChange(updateItem(value, i, e.target.value))
            }
          />
          <IconButton
            color="secondary"
            onClick={() => onChange && onChange(removeItem(value, i))}
          >
            <RemoveIcon fontSize="small" />
          </IconButton>
        </div>
      ))}
      <Button
        color="primary"
        onClick={() => onChange && onChange(addEmptyToEnd(value))}
      >
        Add
      </Button>
    </>
  );
};

export default MultipleTextInput;
