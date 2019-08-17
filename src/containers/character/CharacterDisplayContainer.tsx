import * as React from "react";
import useBasicStats from "../../character/useBasicStats";
import { Typography, Button, AppBar, Tabs, Tab } from "@material-ui/core";
import useDetails from "../../character/useDetails";
import { useLevels } from "../../services/classService";
import { useState } from "react";
import AddLevel from "../../components/levels/AddLevel";
import { Class } from "../../rules/classes";
import NotesContainer from "../notes/NotesContainer";
import AssignSkillsContainer from "../skills/AssignSkillsContainer";
import DisplaySkillsContainer from "../skills/DisplaySkillsContainer";
import Container from "../../components/layout/Container";
import DisplayAbilityScoresContainer from "../abilities/DisplayAbilityScoresContainer";
import DisplayCharacterDetails from "../characterDetails/DisplayCharacterDetails";
import LevelUpAbilityScoresContainer from "../abilities/LevelUpAbilityScoresContainer";
import SavingThrowsContainer from "../characterDetails/SavingThrowsContainer";
import InitiativeContainer from "../characterDetails/InitiativeContainer";
import AttackBonusesContainer from "../characterDetails/AttackBonusesContainer";
import ArmorClassesContainer from "../characterDetails/ArmorClassesContainer";
import HealthAndResolveContainer from "../characterDetails/HealthAndResolveContainer";
import FeatsContainer from "../characterDetails/FeatsContainer";
import ArmorContainer from "../defense/ArmorContainer";
import WeaponsContainer from "../attack/WeaponsContainer";
import EquipmentContainer from "../equipment/EquipmentContainer";
import SpellsContainer from "../spells/SpellsContainer";
import ActionsContainer from "./ActionsContainer";

enum Page {
  Sheet,
  AddLevel,
  AddAbilities,
  AddSkills
}

const tabs = [
  (setPage: React.Dispatch<React.SetStateAction<Page>>) => (
    <DisplayCharacterDetails onAddLevel={() => setPage(Page.AddLevel)} />
  ),
  <Container>
    <Typography variant="h6">Ability Scores</Typography>
    <DisplayAbilityScoresContainer />
    <Typography variant="h6">Saving Throws</Typography>
    <SavingThrowsContainer />
  </Container>,
  <DisplaySkillsContainer />,
  <Container>
    <Typography variant="h6">Initiative</Typography>
    <InitiativeContainer />
    <Typography variant="h6">Attack Bonuses</Typography>
    <AttackBonusesContainer />
    <Typography variant="h6">Weapons</Typography>
    <WeaponsContainer />
  </Container>,
  <Container>
    <Typography variant="h6">Health and Resolve</Typography>
    <HealthAndResolveContainer />
    <Typography variant="h6">Armor Classes</Typography>
    <ArmorClassesContainer />
    <Typography variant="h6">Armor</Typography>
    <ArmorContainer />
  </Container>,
  <Container>
    <SpellsContainer />
  </Container>,
  <Container>
    <EquipmentContainer />
  </Container>,
  <Container>
    <FeatsContainer />
  </Container>,
  <NotesContainer />,
  <Container>
    <ActionsContainer />
  </Container>
];

const CharacterDisplayContainer: React.FC = () => {
  const [page, setPage] = useState(Page.Sheet);
  const [tab, setTab] = useState(0);
  const { details, race, theme } = useDetails();
  const levels = useLevels();
  const [levelClass, setLevelClass] = useState(levels[0][0]);
  const { addClassLevel } = useBasicStats();

  const currentLevel = levels.reduce((rv, curr) => curr[1] + rv, 0);
  if (page === Page.AddLevel) {
    const levelIsMultipleOfFive = (currentLevel + 1) % 5 === 0;
    console.log(currentLevel);
    return (
      <AddLevel
        classes={Object.values(Class)}
        currentClass={levelClass}
        onChange={(selectedClass: string) =>
          setLevelClass(selectedClass as Class)
        }
        onConfirm={() => {
          addClassLevel(levelClass);
          setPage(levelIsMultipleOfFive ? Page.AddAbilities : Page.AddSkills);
        }}
        onGoBack={() => setPage(Page.Sheet)}
      />
    );
  }

  if (page === Page.AddAbilities) {
    return (
      <>
        <LevelUpAbilityScoresContainer level={currentLevel} />
        <Button onClick={() => setPage(Page.AddSkills)}>Next</Button>
      </>
    );
  }

  if (page === Page.AddSkills) {
    return (
      <>
        <AssignSkillsContainer level={currentLevel} />
        <Button onClick={() => setPage(Page.Sheet)}>Finish</Button>
      </>
    );
  }

  return (
    <>
      <Typography variant="h3" align="center">
        {details.name}
      </Typography>
      <Typography align="center">
        {race}, {theme},{" "}
        {levels
          .map(([characterClass, level]) => `${characterClass}(${level})`)
          .join("/")}
      </Typography>

      <AppBar position="static" color="default">
        <Tabs
          value={tab}
          onChange={(_, value) => setTab(value)}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Details" />
          <Tab label="Abilities" />
          <Tab label="Skills" />
          <Tab label="Attack" />
          <Tab label="Health &amp; Defense" />
          <Tab label="Spells" />
          <Tab label="Equipment" />
          <Tab label="Feats" />
          <Tab label="Notes" />
          <Tab label="Actions" />
        </Tabs>
      </AppBar>
      {typeof tabs[tab] === "function"
        ? (tabs[tab] as ((
            setPage: React.Dispatch<React.SetStateAction<Page>>
          ) => JSX.Element))(setPage)
        : tabs[tab]}
    </>
  );
};

export default CharacterDisplayContainer;
