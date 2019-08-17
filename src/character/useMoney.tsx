import CharacterContext from "./CharacterContext";
import { useContext } from "react";

const useMoney = () => {
  const [{ money }, { setMoney }] = useContext(CharacterContext);

  return {
    money,
    debit: (amount: number) => setMoney(prev => prev - amount),
    credit: (amount: number) => setMoney(prev => prev + amount)
  };
};

export default useMoney;
