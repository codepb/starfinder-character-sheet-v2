import * as React from "react";
import useArmor from "../../character/useArmor";
import { Typography, Button, Fab, Theme } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import withStyles, { CSSProperties } from "@material-ui/core/styles/withStyles";
import { sendAlert, closeAlert } from "../../components/layout/Alert";
import armors, { Armor } from "../../rules/armor";
import { useState } from "react";
import Select from "../../components/form/Select";
import DisplayValue from "../../components/layout/DisplayValue";

type Classes = "addButton";

const styles = (theme: Theme): Record<Classes, CSSProperties> => ({
  addButton: {
    position: "absolute",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

const ArmorDetails: React.FC<{ armor: Armor }> = ({ armor }) => (
  <>
    <Typography variant="h5">{armor.model}</Typography>
    <DisplayValue label="Kinetic Armor Class">{armor.kacBonus}</DisplayValue>
    <DisplayValue label="Energy Armor Class">{armor.eacBonus}</DisplayValue>
    <DisplayValue label="Level">{armor.level}</DisplayValue>
    <DisplayValue label="Price">{armor.price}</DisplayValue>
  </>
);

const AddArmor: React.FC<{ onAdd: (armor: Armor) => void }> = ({ onAdd }) => {
  const [selectedArmor, setSelectedArmor] = useState(null as Armor | null);

  return (
    <>
      <div>
        <Select
          id="armor-select"
          label="Armor"
          options={armors.map(a => a.model)}
          value={(selectedArmor && selectedArmor.model) || ""}
          onChange={e =>
            setSelectedArmor(armors.find(a => a.model === e.target.value)!)
          }
        />
      </div>
      {selectedArmor && (
        <>
          <div>
            <ArmorDetails armor={selectedArmor} />
          </div>
          <Button
            color="primary"
            onClick={() => onAdd(selectedArmor)}
            disabled={selectedArmor == null}
          >
            Add Armor
          </Button>
        </>
      )}
    </>
  );
};

const ArmorContainer: React.FC<{ classes: Record<Classes, string> }> = ({
  classes
}) => {
  const { armor, addArmor, equipArmor, unequipArmor } = useArmor();

  return (
    <>
      {armor.map(a => (
        <div key={a.id}>
          <ArmorDetails armor={a} />
          {a.equipped ? (
            <Button color="primary" onClick={() => unequipArmor(a.id)}>
              Unequip
            </Button>
          ) : (
            <Button color="primary" onClick={() => equipArmor(a.id)}>
              Equip
            </Button>
          )}
        </div>
      ))}
      <Fab
        className={classes.addButton}
        color="primary"
        onClick={() =>
          sendAlert(
            <AddArmor
              onAdd={armor => {
                addArmor({ ...armor, equipped: false, id: "" });
                closeAlert();
              }}
            />
          )
        }
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default withStyles(styles)(ArmorContainer);
