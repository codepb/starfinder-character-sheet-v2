import * as React from "react";
import SkillsDisplay from "../../components/skills/SkillsDisplay";
import useSkills from "../../character/useSkills";

const DisplaySkillsContainer: React.FC = () => {
  const {
    skillLevels,
    classSkills,
    trainedSkills,
    miscSkills,
    updateMiscSkill
  } = useSkills();
  return (
    <SkillsDisplay
      skillLevels={skillLevels}
      classSkills={classSkills}
      trainedSkills={trainedSkills}
      miscSkills={miscSkills}
      updateMiscSkill={updateMiscSkill}
    />
  );
};

export default DisplaySkillsContainer;
