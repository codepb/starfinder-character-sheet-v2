import * as React from "react";
import { TextField, Button } from "@material-ui/core";
import { useState } from "react";
import useMoney from "../../character/useMoney";

const AddMoneyContainer: React.FC<{ onSubmit: () => void }> = ({
  onSubmit
}) => {
  const [amount, setAmount] = useState("");
  const { credit } = useMoney();
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
          credit(Number(amount));
          setAmount("");
          onSubmit();
        }}
      >
        Credit
      </Button>
    </>
  );
};

export default AddMoneyContainer;
