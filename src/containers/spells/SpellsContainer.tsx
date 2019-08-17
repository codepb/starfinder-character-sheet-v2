import * as React from "react";
import useSpells from "../../character/useSpells";
import SpellLevelContainer from "./SpellLevelContainer";
import { Button, Grid } from "@material-ui/core";

const SpellsContainer: React.FC = () => {
  const {
    spells,
    addMysticSpell,
    addTechnomancerSpell,
    removeMysticSpell,
    removeTechnomancerSpell,
    resetSpellsCast,
    incrementMysticSpellsCast,
    incrementTechnomancerSpellsCast
  } = useSpells();
  return (
    <>
      <Button onClick={resetSpellsCast}>Reset Spells Cast</Button>
      <Grid container>
        {[...Array(7).keys()].map(i => {
          const level = i as 0 | 1 | 2 | 3 | 4 | 5 | 6;
          return (
            <Grid item xs={12} sm={6} md={4}>
              <SpellLevelContainer
                spells={spells[i]}
                level={level}
                key={level}
                onCast={type =>
                  type === "mystic"
                    ? incrementMysticSpellsCast(level)
                    : incrementTechnomancerSpellsCast(level)
                }
                onRemove={(spell, type) =>
                  type === "mystic"
                    ? removeMysticSpell(spell)
                    : removeTechnomancerSpell(spell)
                }
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default SpellsContainer;
