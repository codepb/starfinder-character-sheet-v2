import * as React from "react";
import Size from "../../rules/Size";
import Select from "../form/Select";

interface SizeSelectionProps {
  value: Size;
  onChange?: (size: Size) => void;
}

const SizeSelection: React.FC<SizeSelectionProps> = ({ value, onChange }) => (
  <Select
    id="size-select"
    label="Size"
    options={Object.values(Size)}
    value={value}
    onChange={e => onChange && onChange(e.target.value as Size)}
  />
);

export default SizeSelection;
