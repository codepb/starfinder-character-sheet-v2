import * as React from "react";
import { SpellLevel } from "../../character/CharacterContext";
import {
  Typography,
  List,
  ListItem,
  Button,
  ListItemText
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Class } from "../../rules/classes";
import SpellSelectionContainer from "./SpellSelectionContainer";
import { closeAlert, sendAlert } from "../../components/layout/Alert";
import SpellDetails from "../../components/spells/SpellDetails";

interface SpellLevelContainerProps {
  spells: SpellLevel;
  level: 0 | 1 | 2 | 3 | 4 | 5 | 6;

  onCast(type: "mystic" | "technomancer"): void;
  onRemove(spell: string, type: "mystic" | "technomancer"): void;
}

const SpellLevelContainer: React.FC<SpellLevelContainerProps> = ({
  spells,
  level,
  onCast,
  onRemove
}) => {
  return (
    <>
      <Typography variant="h6">Level {level}</Typography>
      <Typography>
        <strong>Mystic</strong> cast {spells.mystic.spellsCast}
      </Typography>
      <List dense>
        {spells.mystic.knownSpells.map(s => (
          <ListItem
            key={s}
            onClick={() => sendAlert(<SpellDetails spell={s} />)}
          >
            <ListItemText primary={s} />
            <Button
              size="small"
              onClick={ev => {
                ev.stopPropagation();
                onCast("mystic");
              }}
            >
              Cast
            </Button>
            <Button
              aria-label="Delete"
              color="secondary"
              onClick={ev => {
                ev.stopPropagation();
                onRemove(s, "mystic");
              }}
            >
              <DeleteIcon fontSize="small" />
            </Button>
          </ListItem>
        ))}
      </List>
      <Button
        onClick={ev => {
          ev.stopPropagation();
          sendAlert(
            <SpellSelectionContainer
              type={Class.Mystic}
              level={level}
              onSubmit={closeAlert}
            />
          );
        }}
      >
        Add
      </Button>
      <Typography>
        <strong>Technomancer</strong> cast {spells.technomancer.spellsCast}
      </Typography>
      <List dense>
        {spells.technomancer.knownSpells.map(s => (
          <ListItem
            key={s}
            onClick={() => sendAlert(<SpellDetails spell={s} />)}
          >
            <ListItemText primary={s} />
            <Button size="small" onClick={() => onCast("technomancer")}>
              Cast
            </Button>
            <Button
              aria-label="Delete"
              color="secondary"
              onClick={ev => {
                ev.stopPropagation();
                onRemove(s, "technomancer");
              }}
            >
              <DeleteIcon fontSize="small" />
            </Button>
          </ListItem>
        ))}
        <Button
          onClick={ev => {
            ev.stopPropagation();
            sendAlert(
              <SpellSelectionContainer
                type={Class.Technomancer}
                level={level}
                onSubmit={closeAlert}
              />
            );
          }}
        >
          Add
        </Button>
      </List>
    </>
  );
};

export default SpellLevelContainer;
