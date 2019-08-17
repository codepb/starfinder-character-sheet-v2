import * as React from "react";
import { OwnedWeapon } from "../../character/CharacterContext";
import { Typography, Button, Card, CardContent } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import DisplayValue from "../layout/DisplayValue";

interface WeaponProps {
  weapon: OwnedWeapon;

  onRemoveWeapon(): void;
  onFire(): void;
  onReload(): void;
}

const Weapon: React.FC<WeaponProps> = ({
  weapon,
  onRemoveWeapon,
  onFire,
  onReload
}) => (
  <Card style={{ height: "100%" }}>
    <CardContent>
      <Typography variant="subtitle1">
        {weapon.name}{" "}
        <Button
          aria-label="Delete"
          color="secondary"
          onClick={e => {
            e.stopPropagation();
            onRemoveWeapon();
          }}
        >
          <DeleteIcon fontSize="small" />
        </Button>
      </Typography>
      {weapon.powered && (
        <>
          <DisplayValue label="Charge">
            {weapon.currentCharge}/{weapon.capacity}{" "}
          </DisplayValue>
        </>
      )}
      <DisplayValue label="Damage">
        {weapon.damage} {weapon.damageType}
      </DisplayValue>
      <DisplayValue label="Range">{weapon.range}</DisplayValue>
      <DisplayValue label="Critical">{weapon.critical}</DisplayValue>
      <DisplayValue label="Special">{weapon.special}</DisplayValue>
      <DisplayValue label="Level">{weapon.level}</DisplayValue>
      {weapon.powered && (
        <>
          <Button
            onClick={e => {
              e.stopPropagation();
              onFire();
            }}
          >
            Fire
          </Button>
          <Button
            onClick={e => {
              e.stopPropagation();
              onReload();
            }}
          >
            Reload
          </Button>
        </>
      )}
    </CardContent>
  </Card>
);

export default Weapon;
