import useAbilityScores from "./useAbilityScores";
import { raceDetails } from "../rules/races";
import useBasicStats from "./useBasicStats";
import {
  useClassHealthAndStamina,
  useKeyAbilityScore,
  useLevels
} from "../services/classService";
import CharacterContext, { HealthAndResolve } from "./CharacterContext";
import { useContext } from "react";

const getResolveRequiredToStabilize = (maxResolve: number) => {
  const quarterMax = Math.floor(maxResolve / 4);
  const minToRemove = Math.max(quarterMax, 1);
  const totalToRemove = Math.min(minToRemove, 3);
  return totalToRemove;
};

const useHealth = () => {
  const [{ damage }, { setDamage }] = useContext(CharacterContext);
  const { basicStats } = useBasicStats();
  const { abilityModifiers } = useAbilityScores();
  const healthAndStamina = useClassHealthAndStamina();
  const levels = useLevels();
  const totalLevels = levels.reduce((rv, curr) => rv + curr[1], 0);
  const race = raceDetails[basicStats.race];
  const keyAbilityScore = useKeyAbilityScore();

  const maxStamina =
    healthAndStamina.stamina +
    (abilityModifiers.constitution || 0) * totalLevels;
  const maxHealth = healthAndStamina.hp + race.hp;
  const max = {
    stamina: maxStamina,
    health: maxHealth,
    resolve: 1 + keyAbilityScore
  };
  return {
    max,
    damage,
    addDamage: (amount: number) => {
      setDamage(previous => {
        const staminaLeft = maxStamina - previous.stamina;
        if (staminaLeft >= amount) {
          return {
            ...previous,
            stamina: previous.stamina + amount
          };
        }
        const healthToRemove = amount - Math.max(staminaLeft, 0);
        return {
          ...previous,
          stamina: maxStamina,
          health: Math.min(previous.health + healthToRemove, maxHealth)
        };
      });
    },
    restoreHealth: (amount: number) => {
      setDamage(previous => ({
        ...previous,
        health: previous.health - amount
      }));
    },
    spendResolve: (amount: number) => {
      setDamage(previous => ({
        ...previous,
        resolve: previous.resolve + amount
      }));
    },
    restoreStamina: (amount: number) => {
      setDamage(previous => ({
        ...previous,
        stamina: previous.stamina - amount
      }));
    },
    tenMinuteRest: () => {
      setDamage(previous => ({
        ...previous,
        stamina: 0,
        resolve: previous.resolve + 1
      }));
    },
    overnightRest: () => {
      setDamage(previous => ({
        ...previous,
        stamina: 0,
        resolve: 0,
        health: Math.max(0, previous.health - totalLevels)
      }));
    },
    twentyFourHourRest: () => {
      setDamage(previous => ({
        ...previous,
        stamina: 0,
        resolve: 0,
        health: Math.max(0, previous.health - 2 * totalLevels)
      }));
    },
    canStabilize:
      damage.health >= max.health &&
      damage.resolve + getResolveRequiredToStabilize(max.resolve) <=
        max.resolve,
    stabilize: () => {
      setDamage(previous => {
        return {
          ...previous,
          resolve: previous.resolve + getResolveRequiredToStabilize(max.resolve)
        };
      });
    },
    canStayInFight:
      damage.health >= max.health && damage.resolve + 1 <= max.resolve,
    stayInFight: () => {
      setDamage(previous => {
        return {
          ...previous,
          health: previous.health - 1,
          resolve: previous.resolve + 1
        };
      });
    }
  };
};

export default useHealth;
