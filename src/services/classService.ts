import useBasicStats from "../character/useBasicStats";
import { SavingThrow } from "../rules/savingThrows";
import { classDefinitions, Class } from "../rules/classes";
import { SavingThrows } from "../character/useSavingThrows";
import { Skills } from "../character/useSkills";
import useAbilityScores from "../character/useAbilityScores";

const getLevelModifiers = (className: Class, level: number) => {
  return classDefinitions[className].levelModifiers[level - 1];
};

const getHealthAndStamina = (className: Class, level: number) => {
  return {
    hp: classDefinitions[className].hp * level,
    stamina: classDefinitions[className].stamina * level
  };
};

const useClassSavingThrows = (): SavingThrows => {
  return useLevels().reduce(
    (rv, [currClass, currLevel]) => {
      const levelModifiers = getLevelModifiers(currClass as Class, currLevel);
      return {
        [SavingThrow.FORTITUDE]:
          rv[SavingThrow.FORTITUDE] +
          levelModifiers.savingThrows[SavingThrow.FORTITUDE],
        [SavingThrow.REFLEX]:
          rv[SavingThrow.REFLEX] +
          levelModifiers.savingThrows[SavingThrow.REFLEX],
        [SavingThrow.WILL]:
          rv[SavingThrow.WILL] + levelModifiers.savingThrows[SavingThrow.WILL]
      };
    },
    {
      [SavingThrow.FORTITUDE]: 0,
      [SavingThrow.REFLEX]: 0,
      [SavingThrow.WILL]: 0
    }
  );
};

const useBaseAttackBonus = (): number => {
  return useLevels().reduce((rv, [currClass, currLevel]) => {
    const levelModifiers = getLevelModifiers(currClass as Class, currLevel);
    return rv + levelModifiers.baseAttackBonus;
  }, 0);
};

const useLevels = (): [Class, number][] => {
  const { basicStats } = useBasicStats();
  if (!basicStats.classLevels) {
    return [];
  }
  const filteredClasses = Object.entries(basicStats.classLevels).filter(
    ([, value]) => value > 0
  ) as [Class, number][];
  return filteredClasses;
};

const useClassHealthAndStamina = () => {
  const levels = useLevels();
  return levels.reduce(
    (rv, [currClass, currLevel]) => {
      const healthAndStamina = getHealthAndStamina(currClass, currLevel);
      return {
        hp: rv.hp + healthAndStamina.hp,
        stamina: rv.stamina + healthAndStamina.stamina
      };
    },
    { hp: 0, stamina: 0 }
  );
};

const useKeyAbilityScore = () => {
  const { abilityModifiers } = useAbilityScores();
  const levels = useLevels();
  return levels.reduce((rv, [currClass]) => {
    return Math.max(
      rv,
      abilityModifiers[classDefinitions[currClass].keyAbility]!
    );
  }, -10);
};

const useClassSkills = () => {
  const levels = useLevels();
  return levels.reduce(
    (rv, [currClass]) => {
      return [...new Set([...rv, ...classDefinitions[currClass].classSkills])];
    },
    [] as (keyof Skills)[]
  );
};

export {
  useLevels,
  useBaseAttackBonus,
  useClassSavingThrows,
  useClassHealthAndStamina,
  useKeyAbilityScore,
  useClassSkills
};
