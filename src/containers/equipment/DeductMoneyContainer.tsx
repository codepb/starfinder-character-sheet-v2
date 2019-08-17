import * as React from "react";
import { TextField, Button } from "@material-ui/core";
import { useState } from "react";
import useMoney from "../../character/useMoney";

const DeductMoneyContainer: React.FC<{ onSubmit: () => void }> = ({
  onSubmit
}) => {
  const [amount, setAmount] = useState("");
  const { debit } = useMoney();
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
          debit(Number(amount));
          setAmount("");
          onSubmit();
        }}
      >
        Debit
      </Button>
    </>
  );
};

export default DeductMoneyContainer;
