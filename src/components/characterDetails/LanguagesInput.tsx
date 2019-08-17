import * as React from "react";
import MultipleTextInput from "../form/MultipleTextInput";

interface LanguagesInputProps {
  value: string[];
  onChange?: (languages: string[]) => void;
}

const LanguagesInput: React.FC<LanguagesInputProps> = ({ value, onChange }) => (
  <MultipleTextInput
    label="Language"
    id="language-input"
    value={value}
    onChange={onChange}
  />
);

export default LanguagesInput;
