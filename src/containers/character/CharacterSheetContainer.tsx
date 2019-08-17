import * as React from "react";
import AbilityScoresContainer from "../abilities/AbilityScoresContainer";
import ThemeSelection from "../theme/ThemeSelection";
import RaceSelection from "../race/RaceSelection";
import ClassSelection from "../class/ClassSelection";
import AssignSkillsContainer from "../skills/AssignSkillsContainer";
import CharacterDetails from "../characterDetails/CharacterDetails";
import CharacterDisplayContainer from "./CharacterDisplayContainer";
import { useState, useContext } from "react";
import CharacterContext from "../../character/CharacterContext";
import {
  Button,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography
} from "@material-ui/core";
import Container from "../../components/layout/Container";
import StepperButtons from "../../components/characterCreation/StepperButtons";
import FeatsContainer from "../characterDetails/FeatsContainer";
import FeatSelection from "../feats/FeatSelection";
import UploadButton from "./UploadButton";

enum Page {
  theme = 0,
  race = 1,
  class = 2,
  abilityScores = 3,
  skills = 4,
  feats = 5,
  characterDetails = 6,
  start = 7,
  sheet = 8
}

const CharacterSheetContainer: React.FC = () => {
  const [character] = useContext(CharacterContext);
  const [page, setPage] = useState(
    character.characterCreated ? Page.sheet : Page.start
  );
  switch (page) {
    case Page.start:
      return (
        <>
          <Button onClick={() => setPage(Page.theme)}>Create Character</Button>
          <UploadButton />
        </>
      );
    case Page.sheet:
      return (
        <>
          <CharacterDisplayContainer />
        </>
      );
    default:
      const activeStep = Number(page);
      return (
        <Container>
          <Typography variant="h4">Create Character</Typography>
          <Stepper activeStep={activeStep} orientation="vertical">
            <Step>
              <StepLabel>Theme</StepLabel>
              <StepContent>
                <ThemeSelection onNext={() => setPage(Page.race)} />
              </StepContent>
            </Step>
            <Step>
              <StepLabel>Race</StepLabel>
              <StepContent>
                <RaceSelection
                  onNext={() => setPage(Page.class)}
                  onPrevious={() => setPage(Page.theme)}
                />
              </StepContent>
            </Step>
            <Step>
              <StepLabel>Class</StepLabel>
              <StepContent>
                <ClassSelection
                  onNext={() => setPage(Page.abilityScores)}
                  onPrevious={() => setPage(Page.race)}
                />
              </StepContent>
            </Step>
            <Step>
              <StepLabel>Abilities</StepLabel>
              <StepContent>
                <AbilityScoresContainer />
                <StepperButtons
                  onNext={() => setPage(Page.skills)}
                  onPrevious={() => setPage(Page.class)}
                />
              </StepContent>
            </Step>
            <Step>
              <StepLabel>Skills</StepLabel>
              <StepContent>
                <AssignSkillsContainer />
                <StepperButtons
                  onNext={() => setPage(Page.feats)}
                  onPrevious={() => setPage(Page.abilityScores)}
                />
              </StepContent>
            </Step>
            <Step>
              <StepLabel>Feats</StepLabel>
              <StepContent>
                <FeatSelection />
                <StepperButtons
                  onNext={() => setPage(Page.characterDetails)}
                  onPrevious={() => setPage(Page.skills)}
                />
              </StepContent>
            </Step>
            <Step>
              <StepLabel>Details</StepLabel>
              <StepContent>
                <CharacterDetails />
                <StepperButtons
                  onNext={() => setPage(Page.sheet)}
                  onPrevious={() => setPage(Page.feats)}
                  final
                />
              </StepContent>
            </Step>
          </Stepper>
        </Container>
      );
  }
};

export default CharacterSheetContainer;
