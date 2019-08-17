import { useContext } from "react";
import CharacterContext, { OwnedArmor } from "./CharacterContext";
import { generateGuid } from "../services/guidService";

const useArmor = () => {
  const [{ armor }, { setArmor }] = useContext(CharacterContext);

  return {
    armor,
    equippedArmor: armor.filter(a => a.equipped),
    addArmor: (armor: OwnedArmor) => {
      const id = generateGuid();
      const newArmor = { ...armor, id: id };

      setArmor(previous => [...previous, newArmor]);
    },
    removeArmor: (id: string) => {
      setArmor(previous => previous.filter(a => a.id !== id));
    },
    equipArmor: (id: string) => {
      setArmor(previous =>
        previous.map(a => (a.id === id ? { ...a, equipped: true } : a))
      );
    },
    unequipArmor: (id: string) => {
      setArmor(previous =>
        previous.map(a => (a.id === id ? { ...a, equipped: false } : a))
      );
    }
  };
};

export default useArmor;
