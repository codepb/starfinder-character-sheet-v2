import * as React from "react";
import { useState } from "react";
import { Equipment } from "../../character/CharacterContext";
import useEquipment from "../../character/useEquipment";
import AddEquipment from "../../components/equipment/AddEquipment";

interface AddEquipmentContainerProps {
  onAdd(): void;
}

const AddEquipmentContainer: React.FC<AddEquipmentContainerProps> = ({
  onAdd
}) => {
  const { addEquipment } = useEquipment();
  const initialEquipment: Equipment = {
    id: "",
    name: "",
    level: 1,
    price: 0,
    bulk: 0.1
  };
  const [equipment, setEquipment] = useState(initialEquipment);

  return (
    <AddEquipment
      equipment={equipment}
      onChange={setEquipment}
      onSubmit={() => {
        addEquipment(equipment);
        setEquipment(initialEquipment);
        onAdd();
      }}
    />
  );
};

export default AddEquipmentContainer;
