import * as React from "react";
import useWeapons from "../../character/useWeapons";
import { OwnedWeapon, WeaponType } from "../../character/CharacterContext";
import { useState } from "react";
import AddWeapon from "../../components/attack/AddWeapon";

interface AddWeaponContainerProps {
  onAdd(): void;
}

const AddWeaponContainer: React.FC<AddWeaponContainerProps> = ({ onAdd }) => {
  const { addWeapon } = useWeapons();
  const initialWeapon: OwnedWeapon = {
    id: "",
    type: WeaponType.Ranged,
    name: "",
    level: 1,
    price: 0,
    damage: "1d4",
    damageType: "P",
    range: 30,
    critical: "",
    bulk: 0.1,
    special: "",
    powered: true
  };
  const [weapon, setWeapon] = useState(initialWeapon);

  return (
    <AddWeapon
      weapon={weapon}
      onChange={setWeapon}
      onSubmit={() => {
        addWeapon(weapon);
        setWeapon(initialWeapon);
        onAdd();
      }}
    />
  );
};

export default AddWeaponContainer;
