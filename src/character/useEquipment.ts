import { useContext } from "react";
import CharacterContext, { Equipment } from "./CharacterContext";
import { generateGuid } from "../services/guidService";
import { sum } from "../services/mathService";
import useAbilityScores from "./useAbilityScores";

const useEquipment = () => {
  const [{ weapons, armor, equipment }, { setEquipment }] = useContext(
    CharacterContext
  );
  const {
    abilityScores: { strength }
  } = useAbilityScores();

  const totalBulk = Math.floor(
    [...weapons, ...armor, ...equipment].map(i => i.bulk).reduce(sum, 0)
  );
  const encumberedBulk = Math.floor((strength || 0) / 2);
  const overburdenedBulk = strength || 0;

  return {
    equipment,
    totalBulk,
    encumberedBulk,
    overburdenedBulk,
    isEncumbered: totalBulk > encumberedBulk,
    isOverburdened: totalBulk > overburdenedBulk,
    addEquipment: (equipment: Equipment) => {
      const id = generateGuid();
      const newEquipment = { ...equipment, id: id };

      setEquipment(previous => [...previous, newEquipment]);
    },
    removeEquipment: (id: string) => {
      setEquipment(previous => previous.filter(a => a.id !== id));
    }
  };
};

export default useEquipment;
