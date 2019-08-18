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
    pointsAtLevel,
    incrementSkill,
    decrementSkill,
    canDecrement,
    canIncrement,
    skills
  } = useSkills();
  return (
    <AssignSkills
      skillLevels={skillLevels}
      skills={skills[level - 1] || {}}
      pointsSpent={pointsAtLevel(level)}
      onIncrement={key => {
        incrementSkill(key, level);
      }}
      onDecrement={key => {
        decrementSkill(key, level);
      }}
      canDecrement={key => canDecrement(key, level)}
      canIncrement={key => canIncrement(key, level)}
      classSkills={classSkills}
    />
  );
};

export default AssignSkillsContainer;
