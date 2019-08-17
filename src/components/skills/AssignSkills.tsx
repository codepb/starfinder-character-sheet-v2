import * as React from "react";
import {
  Skills,
  skillDefinitions,
  SkillLevels
} from "../../character/useSkills";
import { Checkbox } from "@material-ui/core";

interface AssignSkillsProps {
  skills: Skills;
  skillLevels: SkillLevels;
  classSkills: (keyof Skills)[];
  onSkillChange: (key: keyof Skills, checked: boolean) => void;
}

const AssignSkills: React.FC<AssignSkillsProps> = ({
  skills,
  skillLevels,
  classSkills,
  onSkillChange
}) => (
  <table>
    <tbody>
      {Object.keys(skillDefinitions).map(k => (
        <React.Fragment key={k}>
          <tr key={k}>
            <td>{classSkills.includes(k as keyof Skills) ? "*" : " "}</td>
            <td>
              <label htmlFor={`skill-${k}`}>{k}</label>
            </td>
            <td>{skillLevels[k]}</td>
            <td>
              <Checkbox
                id={`skill-${k}`}
                color="primary"
                value={k}
                checked={skills[k] || false}
                onChange={event => {
                  onSkillChange(k as keyof Skills, event.target.checked);
                }}
              />
            </td>
          </tr>
        </React.Fragment>
      ))}
    </tbody>
  </table>
);

export default AssignSkills;
