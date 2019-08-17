import * as React from "react";
import AssignSkills from "../../components/skills/AssignSkills";
import useSkills from "../../character/useSkills";

interface AssignSkillsContainerProps {
  level?: number;
}

const AssignSkillsContainer: React.FC<AssignSkillsContainerProps> = ({
  level = 1
}) => {
  const {
    skillLevels,
    classSkills,
    checkSkill,
    uncheckSkill,
    skills
  } = useSkills();
  return (
    <AssignSkills
      skillLevels={skillLevels}
      skills={skills[level - 1] || {}}
      onSkillChange={(key, value) => {
        value ? checkSkill(key, level) : uncheckSkill(key, level);
      }}
      classSkills={classSkills}
    />
  );
};

export default AssignSkillsContainer;
