import * as React from "react";
import Select from "../form/Select";
import { Button } from "@material-ui/core";

interface AddLevelProps {
  classes: string[];
  currentClass: string;
  onChange(characterClass: string): void;
  onConfirm(): void;
  onGoBack(): void;
}

const AddLevel: React.FC<AddLevelProps> = ({
  classes,
  currentClass,
  onChange,
  onConfirm,
  onGoBack
}) => (
  <>
    <Select
      id="class-select"
      label="Class"
      options={classes}
      value={currentClass}
      onChange={e => onChange(e.target.value)}
    />
    <Button onClick={onConfirm}>Add Level</Button>
    <Button onClick={onGoBack}>Go Back</Button>
  </>
);

export default AddLevel;
