import * as React from "react";
import Alignment from "../../rules/alignments";
import Select from "../form/Select";

interface AlignmentSelectionProps {
  value: Alignment;
  onChange?: (alignment: Alignment) => void;
}

const AlignmentSelection: React.FC<AlignmentSelectionProps> = ({
  value,
  onChange
}) => (
  <Select
    id="alignment-select"
    label="Alignment"
    options={Object.values(Alignment)}
    value={value}
    onChange={e => onChange && onChange(e.target.value as Alignment)}
  />
);

export default AlignmentSelection;
