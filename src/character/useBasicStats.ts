import * as React from "react";
import CharacterContext, { BasicStats } from "./CharacterContext";
import { Class } from "../rules/classes";
import { Theme } from "../rules/themes";
import { Race } from "../rules/races";

const useBasicStats = (): {
  basicStats: BasicStats;
  setInitialClass: (newClass: Class) => void;
  addClassLevel: (newClass: Class) => void;
  setTheme: (newTheme: Theme) => void;
  setRace: (newRace: Race) => void;
} => {
  const [{ basicStats }, { setBasicStats }] = React.useContext(
    CharacterContext
  );
  return {
    basicStats,
    setInitialClass: (newClass: Class) =>
      setBasicStats(prev => {
        return {
          ...prev,
          classLevels: {
            [newClass]: 1
          } as Record<Class, number>
        };
      }),
    addClassLevel: newClass =>
      setBasicStats(prev => ({
        ...prev,
        classLevels: {
          ...prev.classLevels,
          [newClass]: (prev.classLevels[newClass] || 0) + 1
        }
      })),
    setTheme: newTheme => setBasicStats({ ...basicStats, theme: newTheme }),
    setRace: newRace => setBasicStats({ ...basicStats, race: newRace })
  };
};

export default useBasicStats;
