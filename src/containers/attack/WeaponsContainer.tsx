import * as React from "react";
import useWeapons from "../../character/useWeapons";
import Weapon from "../../components/attack/Weapon";
import { Fab, Theme, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { sendAlert, closeAlert } from "../../components/layout/Alert";
import withStyles, { CSSProperties } from "@material-ui/core/styles/withStyles";
import AddWeaponContainer from "./AddWeaponContainer";

type Classes = "addButton";

const styles = (theme: Theme): Record<Classes, CSSProperties> => ({
  addButton: {
    position: "absolute",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

interface WeaponsContainerProps {
  classes: Record<Classes, string>;
}

const WeaponsContainer: React.FC<WeaponsContainerProps> = ({ classes }) => {
  const { weapons, removeWeapon, spendCharge, reloadWeapon } = useWeapons();

  return (
    <Grid container spacing={16}>
      {weapons.map(w => (
        <Grid item key={w.id} style={{ height: "100%" }}>
          <Weapon
            weapon={w}
            onRemoveWeapon={() => removeWeapon(w.id)}
            onFire={() => spendCharge(w.id, 1)}
            onReload={() => reloadWeapon(w.id)}
          />
        </Grid>
      ))}
      <Fab
        className={classes.addButton}
        color="primary"
        onClick={() => sendAlert(<AddWeaponContainer onAdd={closeAlert} />)}
      >
        <AddIcon />
      </Fab>
    </Grid>
  );
};

export default withStyles(styles)(WeaponsContainer);
