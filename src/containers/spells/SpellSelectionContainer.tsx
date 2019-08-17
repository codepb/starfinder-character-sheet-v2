import * as React from "react";
import spells from "../../rules/spells";
import Select from "../../components/form/Select";
import { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  Typography,
  Button
} from "@material-ui/core";
import useSpells from "../../character/useSpells";
import SpellDetails from "../../components/spells/SpellDetails";

interface SpellSelectionContainerProps {
  type: "Mystic" | "Technomancer";
  level: 0 | 1 | 2 | 3 | 4 | 5 | 6;

  onSubmit(): void;
}

const SpellSelectionContainer: React.FC<SpellSelectionContainerProps> = ({
  type,
  level,
  onSubmit
}) => {
  const { addMysticSpell, addTechnomancerSpell } = useSpells();
  const [showAllLevels, setShowAllLevels] = useState(false);
  const [spell, setSpell] = useState("");
  const spellsToDisplay = Object.keys(spells).filter(s =>
    spells[s].Classes.some(
      c => c.class === type && (c.level === level || showAllLevels)
    )
  );

  return (
    <>
      <Typography variant="h6">
        {type} - Level {level}
      </Typography>
      <div>
        <Select
          id="spell-select"
          label="Spell"
          options={spellsToDisplay}
          value={spell}
          onChange={e => setSpell(e.target.value)}
        />
      </div>
      <div>
        <FormControlLabel
          control={
            <Checkbox
              checked={showAllLevels}
              onChange={e => setShowAllLevels(e.target.checked)}
              value="showAllLevels"
            />
          }
          label="Show spells from all levels"
        />
      </div>
      {spell && spellsToDisplay.includes(spell) && (
        <div>
          <SpellDetails spell={spell} />
        </div>
      )}
      <div>
        <Button
          onClick={() => {
            type === "Mystic"
              ? addMysticSpell(spell, level)
              : addTechnomancerSpell(spell, level);
            setSpell("");
            setShowAllLevels(false);
            onSubmit();
          }}
        >
          Add Spell
        </Button>
      </div>
    </>
  );
};

export default SpellSelectionContainer;
