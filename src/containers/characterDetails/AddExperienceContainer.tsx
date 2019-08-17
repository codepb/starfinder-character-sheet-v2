import * as React from "react";
import { TextField, Button } from "@material-ui/core";
import { useState } from "react";
import useExperience from "../../character/useExperience";

const AddExperienceContainer: React.FC<{ onSubmit: () => void }> = ({
  onSubmit
}) => {
  const [amount, setAmount] = useState("");
  const { addExperience } = useExperience();
  return (
    <>
      <TextField
        label="How Much?"
        type="number"
        value={amount}
        onChange={e => {
          setAmount(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          addExperience(Number(amount));
          setAmount("");
          onSubmit();
        }}
      >
        Add Experience
      </Button>
    </>
  );
};

export default AddExperienceContainer;
