import { useContext } from "react";
import CharacterContext, { KnownSpells } from "./CharacterContext";

const useSpells = () => {
  const [{ spells }, { setSpells }] = useContext(CharacterContext);

  return {
    spells,
    addMysticSpell: (spell: string, level: 0 | 1 | 2 | 3 | 4 | 5 | 6) => {
      setSpells(
        prev =>
          prev.map((p, i) =>
            i === level
              ? {
                  ...p,
                  mystic: {
                    knownSpells: [...p.mystic.knownSpells, spell],
                    spellsCast: p.mystic.spellsCast
                  }
                }
              : p
          ) as KnownSpells
      );
    },
    removeMysticSpell: (spell: string) => {
      setSpells(
        prev =>
          prev.map(p => ({
            ...p,
            mystic: {
              knownSpells: p.mystic.knownSpells.filter(s => s !== spell),
              spellsCast: p.mystic.spellsCast
            }
          })) as KnownSpells
      );
    },
    addTechnomancerSpell: (spell: string, level: 0 | 1 | 2 | 3 | 4 | 5 | 6) => {
      setSpells(
        prev =>
          prev.map((p, i) =>
            i === level
              ? {
                  ...p,
                  technomancer: {
                    knownSpells: [...p.technomancer.knownSpells, spell],
                    spellsCast: p.technomancer.spellsCast
                  }
                }
              : p
          ) as KnownSpells
      );
    },
    removeTechnomancerSpell: (spell: string) => {
      setSpells(
        prev =>
          prev.map(p => ({
            ...p,
            mystic: {
              knownSpells: p.technomancer.knownSpells.filter(s => s !== spell),
              spellsCast: p.technomancer.spellsCast
            }
          })) as KnownSpells
      );
    },
    incrementMysticSpellsCast: (level: number) => {
      setSpells(
        prev =>
          prev.map((p, i) =>
            i === level
              ? {
                  ...p,
                  mystic: {
                    knownSpells: p.mystic.knownSpells,
                    spellsCast: p.mystic.spellsCast + 1
                  }
                }
              : { ...p }
          ) as KnownSpells
      );
    },
    incrementTechnomancerSpellsCast: (level: number) => {
      setSpells(
        prev =>
          prev.map((p, i) =>
            i === level
              ? {
                  ...p,
                  technomancer: {
                    knownSpells: p.technomancer.knownSpells,
                    spellsCast: p.technomancer.spellsCast + 1
                  }
                }
              : { ...p }
          ) as KnownSpells
      );
    },
    resetSpellsCast: () => {
      setSpells(
        prev =>
          prev.map(p => ({
            mystic: {
              knownSpells: p.mystic.knownSpells,
              spellsCast: 0
            },
            technomancer: {
              knownSpells: p.technomancer.knownSpells,
              spellsCast: 0
            }
          })) as KnownSpells
      );
    }
  };
};

export default useSpells;
