import * as React from "react";
import CharacterContext from "./CharacterContext";
import { forEachKey } from "../helpers/objectHelpers";
import {
  calculateAbilityScore,
  calculateAbilityModifier
} from "../rules/abilities";

export interface AbilityScores {
  strength?: number;
  dexterity?: number;
  constitution?: number;
  intelligence?: number;
  wisdom?: number;
  charisma?: number;
}

export interface AbilityScoreModifiers extends AbilityScores {
  unspecified?: number;
}

const sumOfPositive = (a: number, b: number) => a + (b > 0 ? b : 0);
const sumPositiveObjectValues = (obj: AbilityScores) =>
  Object.values(obj).reduce(sumOfPositive);

const useAbilityScores = (): {
  abilityScores: AbilityScores;
  abilityModifiers: AbilityScores;
  baseAbilityScores: AbilityScores;
  miscAbilityScores: AbilityScores;
  abilityLevels: AbilityScores[];
  canIncrement: (keyof AbilityScores)[];
  canDecrement: (keyof AbilityScores)[];
  pointsRemaining: number;
  increment: (key: keyof AbilityScores) => void;
  decrement: (key: keyof AbilityScores) => void;
  setMisc: (key: keyof AbilityScores, value: number) => void;
  setLevelAbility: (
    key: keyof AbilityScores,
    selected: boolean,
    level: number
  ) => void;
} => {
  const [
    {
      abilityLevels,
      basicStats: { race, theme }
    },
    { setAbilityLevels }
  ] = React.useContext(CharacterContext);
  const abilityScores = <AbilityScores>(
    forEachKey(
      calculateAbilityScore(abilityLevels, race, theme),
      abilityLevels.misc
    )
  );
  const abilityModifiers = <AbilityScores>(
    forEachKey(
      calculateAbilityModifier(abilityLevels, race, theme),
      abilityLevels.misc
    )
  );

  const canIncrement = (key: keyof AbilityScores) =>
    abilityScores[key]! < 18 &&
    (sumPositiveObjectValues(abilityLevels.levels[0]) < 10 ||
      abilityLevels.levels[0][key]! < 0);
  const canDecrement = (key: keyof AbilityScores) => abilityScores[key]! > 0;
  const abilityKeys = Object.keys(
    abilityLevels.misc
  ) as (keyof AbilityScores)[];
  const baseAbilityScores = abilityLevels.levels[0];
  return {
    abilityScores,
    abilityModifiers,
    baseAbilityScores,
    miscAbilityScores: abilityLevels.misc,
    abilityLevels: abilityLevels.levels,
    canIncrement: abilityKeys.filter(canIncrement),
    canDecrement: abilityKeys.filter(canDecrement),
    pointsRemaining: 10 - <number>sumPositiveObjectValues(baseAbilityScores),
    increment: (key: keyof AbilityScores) =>
      setAbilityLevels(abilityLevels => {
        if (canIncrement(key)) {
          const newLevels = [...abilityLevels.levels];
          newLevels[0] = {
            ...(abilityLevels.levels[0] || {
              strength: 0,
              charisma: 0,
              constitution: 0,
              dexterity: 0,
              intelligence: 0,
              wisdom: 0
            }),
            [key]: abilityLevels.levels[0][key]! + 1
          };
          return {
            levels: newLevels,
            misc: abilityLevels.misc
          };
        }
        return abilityLevels;
      }),
    decrement: (key: keyof AbilityScores) =>
      setAbilityLevels(abilityLevels => {
        if (canDecrement(key)) {
          const newLevels = [...abilityLevels.levels];
          newLevels[0] = {
            ...(abilityLevels.levels[0] || {
              strength: 0,
              charisma: 0,
              constitution: 0,
              dexterity: 0,
              intelligence: 0,
              wisdom: 0
            }),
            [key]: abilityLevels.levels[0][key]! - 1
          };
          return {
            levels: newLevels,
            misc: { ...abilityLevels.misc }
          };
        }
        return abilityLevels;
      }),
    setMisc: (key: keyof AbilityScores, value: number) => {
      setAbilityLevels(abilityLevels => ({
        levels: [...abilityLevels.levels],
        misc: {
          ...abilityLevels.misc,
          [key]: value
        }
      }));
    },
    setLevelAbility: (
      key: keyof AbilityScores,
      selected: boolean,
      level: number
    ) => {
      const index = Math.floor(level / 5);
      setAbilityLevels(abilityLevels => {
        const abilityScore =
          calculateAbilityScore(abilityLevels, race, theme)(key) -
          (abilityLevels.misc[key] || 0);

        const amountToIncrease = abilityScore > 16 ? 1 : 2;

        const newLevels = [...abilityLevels.levels];
        newLevels[index] = {
          ...(abilityLevels.levels[index] || {}),
          [key]: selected ? amountToIncrease : 0
        };

        return {
          levels: newLevels,
          misc: {
            ...abilityLevels.misc
          }
        };
      });
    }
  };
};

export default useAbilityScores;
