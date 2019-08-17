import * as React from "react";
import { skillDefinitions, SkillLevels } from "../../character/useSkills";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

interface AssignSkillsProps {
  skills: SkillLevels;
  skillLevels: SkillLevels;
  classSkills: (keyof SkillLevels)[];
  onIncrement(key: keyof SkillLevels): void;
  onDecrement(key: keyof SkillLevels): void;
  canIncrement(key: keyof SkillLevels): boolean;
  canDecrement(key: keyof SkillLevels): boolean;
}

const AssignSkills: React.FC<AssignSkillsProps> = ({
  skills,
  skillLevels,
  classSkills,
  onIncrement,
  onDecrement,
  canIncrement,
  canDecrement
}) => (
  <table>
    <tbody>
      {Object.keys(skillDefinitions).map(k => (
        <React.Fragment key={k}>
          <tr key={k}>
            <td>{classSkills.includes(k as keyof SkillLevels) ? "*" : " "}</td>
            <td>
              <label htmlFor={`skill-${k}`}>{k}</label>
            </td>
            <td>
              <strong>{skillLevels[k]}</strong>
            </td>
            <td>{skills[k] || 0}</td>
            <td>
              <IconButton
                onClick={() => onIncrement(k as keyof SkillLevels)}
                color="primary"
                aria-label="Add"
                disabled={!canIncrement(k as keyof SkillLevels)}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </td>
            <td>
              <IconButton
                onClick={() => onDecrement(k as keyof SkillLevels)}
                color="secondary"
                aria-label="Subtract"
                disabled={!canDecrement(k as keyof SkillLevels)}
              >
                <RemoveIcon fontSize="small" />
              </IconButton>
            </td>
          </tr>
        </React.Fragment>
      ))}
    </tbody>
  </table>
);

export default AssignSkills;
