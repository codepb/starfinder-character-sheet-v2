import { useContext } from "react";
import CharacterContext from "./CharacterContext";
import { useLevels } from "../services/classService";

const experiencePerLevel = [
  1300,
  3300,
  6000,
  10000,
  15000,
  23000,
  34000,
  50000,
  71000,
  105000,
  145000,
  210000,
  295000,
  425000,
  600000,
  850000,
  1200000,
  1700000,
  2400000
];

const useExperience = () => {
  const [{ experience }, { setExperience }] = useContext(CharacterContext);
  const levels = useLevels();
  const level = levels.reduce((rv, [, level]) => rv + level, 0);

  return {
    experience,
    experienceToNextLevel: experiencePerLevel[level - 1],
    addExperience: (amount: number) => setExperience(prev => prev + amount),
    setExperience
  };
};

export default useExperience;
