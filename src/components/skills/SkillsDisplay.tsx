import * as React from "react";
import injectSheet from "react-jss";
import classnames from "classnames";
import {
  Skills,
  skillDefinitions,
  SkillLevels
} from "../../character/useSkills";
import Container from "../layout/Container";
import {
  Table,
  TableRow,
  TableCell,
  Button,
  TableBody,
  TextField,
  TableHead
} from "@material-ui/core";
import { alertRoll } from "../../services/dice";

const styles = {
  unusable: {
    color: "#999"
  },
  classSkill: {
    width: 10,
    paddingRight: 5
  },
  skillName: {
    paddingLeft: 5,
    fontWeight: "bold"
  },
  skillValue: {
    fontWeight: "bold"
  },
  misc: {
    width: 40,
    margin: 0
  },
  miscInput: {
    fontSize: "0.8125rem"
  }
};

interface SkillsDisplayProps {
  skillLevels: SkillLevels;
  classSkills: (keyof Skills)[];
  trainedSkills: (keyof Skills)[];
  miscSkills: SkillLevels;
  updateMiscSkill(key: keyof Skills, value: number);
  classes: any;
}

const SkillsDisplay: React.FC<SkillsDisplayProps> = ({
  skillLevels,
  classSkills,
  trainedSkills,
  miscSkills,
  updateMiscSkill,
  classes
}) => {
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="dense" />
            <TableCell padding="dense" />
            <TableCell padding="dense">Total</TableCell>
            <TableCell padding="dense">Misc.</TableCell>
            <TableCell padding="dense" />
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(skillDefinitions).map(k => {
            const unusable =
              skillDefinitions[k].trainedOnly &&
              !trainedSkills.includes(k as keyof Skills);
            return (
              <TableRow
                key={k}
                className={classnames({
                  [classes.unusable]: unusable
                })}
              >
                <TableCell className={classes.classSkill} padding="dense">
                  {classSkills.includes(k as keyof Skills) ? "*" : ""}
                </TableCell>
                <TableCell className={classes.skillName} padding="dense">
                  {k}
                </TableCell>
                <TableCell padding="dense" className={classes.skillValue}>
                  {unusable ? "" : skillLevels[k]}
                </TableCell>
                <TableCell padding="dense">
                  <TextField
                    className={classes.misc}
                    type="number"
                    value={miscSkills[k] || 0}
                    onChange={e =>
                      updateMiscSkill(k as keyof Skills, Number(e.target.value))
                    }
                    InputLabelProps={{
                      shrink: true
                    }}
                    InputProps={{
                      disableUnderline: true,
                      className: classes.miscInput
                    }}
                    margin="normal"
                  />
                </TableCell>
                <TableCell padding="dense">
                  {unusable ? (
                    ""
                  ) : (
                    <Button color="primary" onClick={alertRoll(skillLevels[k])}>
                      Roll
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Container>
  );
};

export default injectSheet(styles)(SkillsDisplay);
