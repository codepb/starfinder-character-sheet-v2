import useAbilityScores from "./useAbilityScores";
import { useClassSavingThrows } from "../services/classService";
import CharacterContext from "./CharacterContext";
import { useContext } from "react";

export interface SavingThrows {
  fortitude: number;
  reflex: number;
  will: number;
}

interface SavingThrowsWithSetter extends SavingThrows {
  misc: SavingThrows;
  setMiscSavingThrow(key: keyof SavingThrows, value: number): void;
}

const useSavingThrows = (): SavingThrowsWithSetter => {
  const { abilityModifiers } = useAbilityScores();
  const savingThrows = useClassSavingThrows();
  const [
    {
      misc: { savingThrows: miscSavingThrows }
    },
    { setMisc }
  ] = useContext(CharacterContext);

  return {
    fortitude:
      savingThrows.fortitude +
      (abilityModifiers.constitution || 0) +
      miscSavingThrows.fortitude,
    reflex:
      savingThrows.reflex +
      (abilityModifiers.dexterity || 0) +
      miscSavingThrows.reflex,
    will:
      savingThrows.will +
      (abilityModifiers.wisdom || 0) +
      miscSavingThrows.will,
    misc: miscSavingThrows,
    setMiscSavingThrow: (key: keyof SavingThrows, value: number) => {
      setMisc(previous => ({
        ...previous,
        savingThrows: {
          ...previous.savingThrows,
          [key]: value
        }
      }));
    }
  };
};

export default useSavingThrows;
