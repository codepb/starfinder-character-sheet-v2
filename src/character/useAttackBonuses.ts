import useAbilityScores from "./useAbilityScores";
import { useBaseAttackBonus } from "../services/classService";
import CharacterContext from "./CharacterContext";
import { useContext } from "react";

export interface AttackBonuses {
  ranged: number;
  melee: number;
  thrown: number;
}

interface AttackBonusesWithMisc extends AttackBonuses {
  baseAttackBonus: number;
  misc: AttackBonuses;

  setMiscAttackBonuses(key: keyof AttackBonuses, value: number): void;
}

const useAttackBonuses = (): AttackBonusesWithMisc => {
  const { abilityModifiers } = useAbilityScores();
  const baseAttackBonus = useBaseAttackBonus();
  const [
    {
      misc: { attackBonuses }
    },
    { setMisc }
  ] = useContext(CharacterContext);
  return {
    ranged:
      baseAttackBonus +
      (abilityModifiers.dexterity || 0) +
      attackBonuses.ranged,
    melee:
      baseAttackBonus + (abilityModifiers.strength || 0) + attackBonuses.melee,
    thrown:
      baseAttackBonus + (abilityModifiers.strength || 0) + attackBonuses.thrown,
    baseAttackBonus,
    misc: attackBonuses,
    setMiscAttackBonuses: (key: keyof AttackBonuses, value: number) => {
      setMisc(previous => ({
        ...previous,
        attackBonuses: {
          ...previous.attackBonuses,
          [key]: value
        }
      }));
    }
  };
};

export default useAttackBonuses;
