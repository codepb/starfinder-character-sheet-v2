import * as React from "react";
import { TextField, Button } from "@material-ui/core";
import { Equipment } from "../../character/CharacterContext";

interface AddEquipmentProps {
  equipment: Equipment;
  onChange(equipment: Equipment): void;
  onSubmit(): void;
}

const AddEquipment: React.FC<AddEquipmentProps> = ({
  equipment,
  onChange,
  onSubmit
}) => (
  <>
    <TextField
      label="Name"
      value={equipment.name}
      onChange={e => {
        onChange({ ...equipment, name: e.target.value });
      }}
    />
    <TextField
      label="Level"
      type="number"
      value={equipment.level}
      onChange={e => {
        onChange({ ...equipment, level: Number(e.target.value) });
      }}
    />
    <TextField
      label="Price"
      type="number"
      value={equipment.price}
      onChange={e => {
        onChange({ ...equipment, price: Number(e.target.value) });
      }}
    />
    <TextField
      label="Bulk"
      type="number"
      value={equipment.bulk}
      onChange={e => {
        onChange({ ...equipment, bulk: Number(e.target.value) });
      }}
    />
    <Button onClick={onSubmit}>Add Equipment</Button>
  </>
);

export default AddEquipment;
