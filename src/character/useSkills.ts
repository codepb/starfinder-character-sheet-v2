import * as React from "react";
import CharacterContext, { SkillsLevels } from "./CharacterContext";
import { forEachKey } from "../helpers/objectHelpers";
import useAbilityScores, { AbilityScores } from "./useAbilityScores";
import { useClassSkills } from "../services/classService";

export interface SkillLevels {
  acrobatics?: number;
  athletics?: number;
  bluff?: number;
  computers?: number;
  culture?: number;
  diplomacy?: number;
  disguise?: number;
  engineering?: number;
  intimidate?: number;
  lifeScience?: number;
  medicine?: number;
  mysticism?: number;
  perception?: number;
  physicalScience?: number;
  piloting?: number;
  profession1?: number;
  profession2?: number;
  senseMotive?: number;
  sleightOfHand?: number;
  stealth?: number;
  survival?: number;
}

export interface SkillDefinition {
  ability: keyof AbilityScores;
  trainedOnly?: boolean;
  armorCheckPenaltyApplies?: boolean;
}

interface SkillDefinitions {
  acrobatics: SkillDefinition;
  athletics: SkillDefinition;
  bluff: SkillDefinition;
  computers: SkillDefinition;
  culture: SkillDefinition;
  diplomacy: SkillDefinition;
  disguise: SkillDefinition;
  engineering: SkillDefinition;
  intimidate: SkillDefinition;
  lifeScience: SkillDefinition;
  medicine: SkillDefinition;
  mysticism: SkillDefinition;
  perception: SkillDefinition;
  physicalScience: SkillDefinition;
  piloting: SkillDefinition;
  profession1: SkillDefinition;
  profession2: SkillDefinition;
  senseMotive: SkillDefinition;
  sleightOfHand: SkillDefinition;
  stealth: SkillDefinition;
  survival: SkillDefinition;
}

const skillDefinitions: SkillDefinitions = {
  acrobatics: { ability: "dexterity", armorCheckPenaltyApplies: true },
  athletics: { ability: "strength", armorCheckPenaltyApplies: true },
  bluff: { ability: "charisma" },
  computers: { ability: "intelligence", trainedOnly: true },
  culture: { ability: "intelligence", trainedOnly: true },
  diplomacy: { ability: "charisma" },
  disguise: { ability: "charisma" },
  engineering: { ability: "intelligence", trainedOnly: true },
  intimidate: { ability: "charisma" },
  lifeScience: { ability: "intelligence", trainedOnly: true },
  medicine: { ability: "intelligence", trainedOnly: true },
  mysticism: { ability: "wisdom", trainedOnly: true },
  perception: { ability: "wisdom" },
  physicalScience: { ability: "intelligence", trainedOnly: true },
  piloting: { ability: "dexterity" },
  profession1: { ability: "intelligence", trainedOnly: true },
  profession2: { ability: "intelligence", trainedOnly: true },
  senseMotive: { ability: "wisdom" },
  sleightOfHand: {
    ability: "dexterity",
    trainedOnly: true,
    armorCheckPenaltyApplies: true
  },
  stealth: { ability: "dexterity", armorCheckPenaltyApplies: true },
  survival: { ability: "wisdom" }
};

const getSkillLevel = (skills: SkillLevels[], skill: keyof SkillLevels) => {
  return skills
    .map(s => (s || {})[skill])
    .reduce((rv: number, curr) => rv + (curr || 0), 0);
};

const calculateSkillLevel = (
  skills: SkillsLevels,
  classSkills: (keyof SkillLevels)[],
  abilityModifiers: AbilityScores
) => (skill: keyof SkillLevels) => {
  const classSkillModifier = classSkills.includes(skill) ? 3 : 0;
  const abilityModifier =
    abilityModifiers[skillDefinitions[skill].ability] || 0;
  const totalSkillLevel = getSkillLevel(skills.levels, skill);
  const misc = skills.misc[skill] || 0;
  return totalSkillLevel > 0
    ? totalSkillLevel + classSkillModifier + abilityModifier + misc
    : abilityModifier + misc;
};

const useSkills = () => {
  const [{ skills }, { setSkills }] = React.useContext(CharacterContext);
  const classSkills = useClassSkills();
  const { abilityModifiers } = useAbilityScores();
  const calculateSkill = calculateSkillLevel(
    skills,
    classSkills,
    abilityModifiers
  );
  const skillLevels = <SkillLevels>forEachKey(calculateSkill, skillDefinitions);
  const canIncrement = (k: keyof SkillLevels, level?: number) =>
    (skillLevels[k] || 0) < (level || 1);
  const canDecrement = (k: keyof SkillLevels, level?: number) =>
    ((skills.levels[(level || 1) - 1] || {})[k] || 0) > 0;
  return {
    skillLevels,
    skills: skills.levels,
    baseSkills: skills.levels[0] || {},
    classSkills: classSkills,
    trainedSkills: skills.levels.reduce(
      (rv, curr) => [
        ...rv,
        ...(Object.keys(curr || {}).filter(
          k => curr[k]
        ) as (keyof SkillLevels)[])
      ],
      [] as (keyof SkillLevels)[]
    ),
    miscSkills: skills.misc,
    updateMiscSkill: (key: keyof SkillLevels, value: number) =>
      setSkills(skills => {
        const newMiscSkills = { ...skills.misc, [key]: value };
        return { levels: skills.levels, misc: newMiscSkills };
      }),
    pointsAtLevel: (level: number) =>
      Object.keys(skills.levels[level - 1] || {}).reduce(
        (rv, curr) => rv + skills.levels[level - 1][curr],
        0
      ),
    incrementSkill: (key: keyof SkillLevels, level?: number) => {
      if (!canIncrement(key, level)) {
        return;
      }
      setSkills(skills => {
        const index = (level || 1) - 1;
        const newSkillLevel = skills.levels[index] || {};
        const mapped = {
          ...newSkillLevel,
          [key]: (newSkillLevel[key] || 0) + 1
        };
        const newSkills = Array.from({ length: level || 1 }, (_, k) =>
          k === index ? mapped : skills.levels[k] || {}
        );
        return { levels: newSkills, misc: skills.misc };
      });
    },
    decrementSkill: (key: keyof SkillLevels, level?: number) => {
      if (!canDecrement(key, level)) {
        return;
      }
      setSkills(skills => {
        const index = (level || 1) - 1;
        const newSkillLevel = skills.levels[index] || {};
        const mapped = {
          ...newSkillLevel,
          [key]: (newSkillLevel[key] || 0) - 1
        };
        const newSkills = Array.from({ length: level || 1 }, (_, k) =>
          k === index ? mapped : skills.levels[k] || {}
        );
        return { levels: newSkills, misc: skills.misc };
      });
    },
    canIncrement,
    canDecrement
  };
};

export default useSkills;

export { skillDefinitions };
