import * as React from "react";
import useDetails from "../../character/useDetails";
import {
  withStyles,
  List,
  ListItem,
  ListItemText,
  Button
} from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import Container from "../../components/layout/Container";
import DisplayValue from "../../components/layout/DisplayValue";
import useExperience from "../../character/useExperience";
import { sendAlert, closeAlert } from "../../components/layout/Alert";
import AddExperienceContainer from "./AddExperienceContainer";

type Classes = "description";

const styles: Record<Classes, CSSProperties> = {
  description: {
    whiteSpace: "pre-wrap"
  }
};

interface DisplayCharacterDetailsProps {
  classes: Record<Classes, string>;
  onAddLevel(): void;
}

const DisplayCharacterDetails: React.FC<DisplayCharacterDetailsProps> = ({
  classes,
  onAddLevel
}) => {
  const { details } = useDetails();
  const { experience, experienceToNextLevel } = useExperience();
  const readyToLevelUp = experience >= experienceToNextLevel;

  return (
    <Container>
      <section>
        <div>
          <Button
            onClick={() =>
              sendAlert(<AddExperienceContainer onSubmit={closeAlert} />)
            }
          >
            Add Experience
          </Button>
          <Button
            onClick={onAddLevel}
            variant={readyToLevelUp ? "contained" : "text"}
            color={readyToLevelUp ? "primary" : "default"}
          >
            Add Level
          </Button>
        </div>
        <DisplayValue label="Experience">
          {experience}/{experienceToNextLevel}
        </DisplayValue>
      </section>
      <section>
        <DisplayValue label="Size">{details.size}</DisplayValue>
        <DisplayValue label="Home World">{details.homeWorld}</DisplayValue>
        <DisplayValue label="Deity">{details.deity}</DisplayValue>
        <DisplayValue label="Alignment">{details.alignment}</DisplayValue>
        <DisplayValue label="Languages">
          {(details.languages || []).join(", ")}
        </DisplayValue>
      </section>
      <section className={classes.description}>
        <DisplayValue label="Description">{details.description}</DisplayValue>
      </section>
    </Container>
  );
};

export default withStyles(styles)(DisplayCharacterDetails);
