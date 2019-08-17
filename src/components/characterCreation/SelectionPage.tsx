import * as React from "react";
import Select from "../form/Select";
import { Button } from "@material-ui/core";
import StepperButtons from "./StepperButtons";

interface SelectionPageProps {
  id: string;
  label: string;
  options: string[];
  value: string;
  onNext?(): void;
  onPrevious?(): void;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectionPage: React.FC<SelectionPageProps> = ({
  id,
  label,
  options,
  value,
  onNext,
  onPrevious,
  onChange
}) => (
  <>
    <Select
      id={id}
      label={label}
      options={options}
      value={value}
      onChange={onChange}
    />
    <StepperButtons onNext={onNext} onPrevious={onPrevious} />
  </>
);

export default SelectionPage;
