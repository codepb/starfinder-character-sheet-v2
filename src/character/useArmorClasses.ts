import useAbilityScores from "./useAbilityScores";
import { useContext } from "react";
import CharacterContext from "./CharacterContext";
import useArmor from "./useArmor";
import { sum } from "../services/mathService";

export interface ArmorClasses {
  kinetic: number;
  energy: number;
  combatManeuvers: number;
}

interface ArmorClassesWithMisc extends ArmorClasses {
  misc: ArmorClasses;

  setMiscArmorClasses(key: keyof ArmorClasses, value: number): void;
}

const useArmorClasses = (): ArmorClassesWithMisc => {
  const { abilityModifiers } = useAbilityScores();
  const [
    {
      misc: { armorClasses }
    },
    { setMisc }
  ] = useContext(CharacterContext);
  const { equippedArmor } = useArmor();

  const totalEquippedKAC = equippedArmor.map(a => a.kacBonus).reduce(sum, 0);
  const totalEquippedEAC = equippedArmor.map(a => a.eacBonus).reduce(sum, 0);

  const kinetic =
    10 +
    (abilityModifiers.dexterity || 0) +
    armorClasses.kinetic +
    totalEquippedKAC;
  const energy =
    10 +
    (abilityModifiers.dexterity || 0) +
    armorClasses.energy +
    totalEquippedEAC;
  const combatManeuvers = kinetic + 8;

  return {
    kinetic,
    energy,
    combatManeuvers,
    misc: armorClasses,
    setMiscArmorClasses: (key: keyof ArmorClasses, value: number) => {
      setMisc(previous => ({
        ...previous,
        armorClasses: {
          ...previous.armorClasses,
          [key]: value
        }
      }));
    }
  };
};

export default useArmorClasses;
