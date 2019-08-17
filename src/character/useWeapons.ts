import { useContext } from "react";
import CharacterContext, { OwnedWeapon } from "./CharacterContext";
import { generateGuid } from "../services/guidService";

const useWeapons = () => {
  const [{ weapons }, { setWeapons }] = useContext(CharacterContext);

  return {
    weapons,
    addWeapon: (weapon: OwnedWeapon) => {
      const id = generateGuid();
      const newWeapon = { ...weapon, id: id, currentCharge: weapon.capacity };

      setWeapons(previous => [...previous, newWeapon]);
    },
    removeWeapon: (id: string) => {
      setWeapons(previous => previous.filter(a => a.id !== id));
    },
    spendCharge: (id: string, charge: number) => {
      setWeapons(previous =>
        previous.map(p =>
          p.id === id
            ? {
                ...p,
                currentCharge: (p.currentCharge || p.capacity || 0) - charge
              }
            : p
        )
      );
    },
    reloadWeapon: (id: string, maxAmount?: number) => {
      setWeapons(previous =>
        previous.map(p =>
          p.id === id
            ? {
                ...p,
                currentCharge:
                  maxAmount != null
                    ? Math.min(maxAmount, p.capacity || 0)
                    : p.capacity
              }
            : p
        )
      );
    }
  };
};

export default useWeapons;
