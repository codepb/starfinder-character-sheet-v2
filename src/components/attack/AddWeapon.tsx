import * as React from "react";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Button
} from "@material-ui/core";
import { OwnedWeapon, WeaponType } from "../../character/CharacterContext";
import Select from "../form/Select";

const stringIsNumber = value => isNaN(Number(value)) === false;

interface AddWeaponProps {
  weapon: OwnedWeapon;
  onChange(weapon: OwnedWeapon): void;
  onSubmit(): void;
}

const AddWeapon: React.FC<AddWeaponProps> = ({
  weapon,
  onChange,
  onSubmit
}) => (
  <>
    <Select
      id="type-select"
      label="Type"
      options={Object.keys(WeaponType).filter(k => !stringIsNumber(k))}
      value={WeaponType[weapon.type]}
      onChange={e => {
        onChange({ ...weapon, type: WeaponType[e.target.value] });
      }}
    />
    <TextField
      label="Name"
      value={weapon.name}
      onChange={e => {
        onChange({ ...weapon, name: e.target.value });
      }}
    />
    <TextField
      label="Level"
      type="number"
      value={weapon.level}
      onChange={e => {
        onChange({ ...weapon, level: Number(e.target.value) });
      }}
    />
    <TextField
      label="Price"
      type="number"
      value={weapon.price}
      onChange={e => {
        onChange({ ...weapon, price: Number(e.target.value) });
      }}
    />
    <TextField
      label="Damage"
      value={weapon.damage}
      onChange={e => {
        onChange({ ...weapon, damage: e.target.value });
      }}
    />
    <TextField
      label="Damage Type"
      value={weapon.damageType}
      onChange={e => {
        onChange({ ...weapon, damageType: e.target.value });
      }}
    />
    <TextField
      label="Range"
      type="number"
      value={weapon.range}
      onChange={e => {
        onChange({ ...weapon, range: Number(e.target.value) });
      }}
    />
    <TextField
      label="Critical"
      value={weapon.critical}
      onChange={e => {
        onChange({ ...weapon, critical: e.target.value });
      }}
    />
    <FormControlLabel
      control={
        <Checkbox
          checked={weapon.powered}
          onChange={e => onChange({ ...weapon, powered: e.target.checked })}
          value="powered"
        />
      }
      label="Powered"
    />
    {weapon.powered && (
      <>
        <TextField
          label="Capacity"
          type="number"
          value={weapon.capacity}
          onChange={e => {
            onChange({ ...weapon, capacity: Number(e.target.value) });
          }}
        />
        <TextField
          label="Usage"
          type="number"
          value={weapon.usage}
          onChange={e => {
            onChange({ ...weapon, usage: Number(e.target.value) });
          }}
        />
      </>
    )}
    <TextField
      label="Bulk"
      type="number"
      value={weapon.bulk}
      onChange={e => {
        onChange({ ...weapon, bulk: Number(e.target.value) });
      }}
    />
    <TextField
      label="Special"
      value={weapon.special}
      onChange={e => {
        onChange({ ...weapon, special: e.target.value });
      }}
    />
    <Button onClick={onSubmit}>Add Weapon</Button>
  </>
);

export default AddWeapon;
