import * as React from "react";
import CharacterContext, { SkillsLevels } from "./CharacterContext";
import { forEachKey } from "../helpers/objectHelpers";
import useAbilityScores, { AbilityScores } from "./useAbilityScores";
import { useClassSkills } from "../services/classService";

export interface Skills {
  acrobatics?: boolean;
  athletics?: boolean;
  bluff?: boolean;
  computers?: boolean;
  culture?: boolean;
  diplomacy?: boolean;
  disguise?: boolean;
  engineering?: boolean;
  intimidate?: boolean;
  lifeScience?: boolean;
  medicine?: boolean;
  mysticism?: boolean;
  perception?: boolean;
  physicalScience?: boolean;
  piloting?: boolean;
  profession1?: boolean;
  profession2?: boolean;
  senseMotive?: boolean;
  sleightOfHand?: boolean;
  stealth?: boolean;
  survival?: boolean;
}

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

const getSkillLevel = (skills: Skills[], skill: keyof Skills) => {
  return skills
    .map(s => (s || {})[skill])
    .reduce((rv, curr) => rv + (curr ? 1 : 0), 0);
};

const calculateSkillLevel = (
  skills: SkillsLevels,
  classSkills: (keyof Skills)[],
  abilityModifiers: AbilityScores
) => (skill: keyof Skills) => {
  const classSkillModifier = classSkills.includes(skill) ? 3 : 0;
  const abilityModifier =
    abilityModifiers[skillDefinitions[skill].ability] || 0;
  console.log(skills);
  const totalSkillLevel = getSkillLevel(skills.levels, skill);
  const misc = skills.misc[skill] || 0;
  return totalSkillLevel > 0
    ? totalSkillLevel + classSkillModifier + abilityModifier + misc
    : abilityModifier + misc;
};

const useSkills = (): {
  skillLevels: SkillLevels;
  skills: Skills[];
  baseSkills: Skills;
  classSkills: (keyof Skills)[];
  trainedSkills: (keyof Skills)[];
  miscSkills: SkillLevels;
  updateMiscSkill(key: keyof Skills, value: number): void;
  checkSkill(key: keyof Skills, level?: number): void;
  uncheckSkill(key: keyof Skills, level?: number): void;
} => {
  const [{ skills }, { setSkills }] = React.useContext(CharacterContext);
  const classSkills = useClassSkills();
  const updateSkill = (key: keyof Skills, newValue: boolean, level: number) => {
    setSkills(skills => {
      const newSkills = [...skills.levels];
      newSkills[level - 1] = { ...newSkills[level - 1], [key]: newValue };
      return { levels: newSkills, misc: skills.misc };
    });
  };
  const { abilityModifiers } = useAbilityScores();
  const calculateSkill = calculateSkillLevel(
    skills,
    classSkills,
    abilityModifiers
  );
  const skillLevels = <SkillLevels>forEachKey(calculateSkill, skillDefinitions);
  return {
    skillLevels,
    skills: skills.levels,
    baseSkills: skills.levels[0] || {},
    classSkills: classSkills,
    trainedSkills: skills.levels.reduce(
      (rv, curr) => [
        ...rv,
        ...(Object.keys(curr || {}).filter(k => curr[k]) as (keyof Skills)[])
      ],
      [] as (keyof Skills)[]
    ),
    miscSkills: skills.misc,
    updateMiscSkill: (key: keyof Skills, value: number) =>
      setSkills(skills => {
        const newMiscSkills = { ...skills.misc, [key]: value };
        return { levels: skills.levels, misc: newMiscSkills };
      }),
    checkSkill: (key: keyof Skills, level?: number) =>
      updateSkill(key, true, level || 1),
    uncheckSkill: (key: keyof Skills, level?: number) =>
      updateSkill(key, false, level || 1)
  };
};

export default useSkills;

export { skillDefinitions };
