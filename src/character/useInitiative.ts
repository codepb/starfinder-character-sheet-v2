import useAbilityScores from "./useAbilityScores";
import CharacterContext from "./CharacterContext";
import { useContext } from "react";

const useInitiative = (): {
  initiative: number;
  misc: number;
  updateMisc: (value: number) => void;
} => {
  const { abilityModifiers } = useAbilityScores();
  const [{ misc }, { setMisc }] = useContext(CharacterContext);
  return {
    initiative: (abilityModifiers.dexterity || 0) + misc.initiative,
    misc: misc.initiative,
    updateMisc: (value: number) => {
      setMisc(previous => ({
        ...previous,
        initiative: value
      }));
    }
  };
};

export default useInitiative;
