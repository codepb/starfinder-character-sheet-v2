import * as React from "react";
import ArmorClasses from "../../components/characterDetails/ArmorClasses";
import useArmorClasses from "../../character/useArmorClasses";
import { Typography } from "@material-ui/core";

const ArmorClassesContainer: React.FC = () => {
  const {
    kinetic,
    energy,
    combatManeuvers,
    misc,
    setMiscArmorClasses
  } = useArmorClasses();

  return (
    <>
      <ArmorClasses
        kinetic={kinetic}
        energy={energy}
        misc={misc}
        onMiscChange={setMiscArmorClasses}
      />
      <Typography>
        AC vs Combat Maneuvers: <strong>{combatManeuvers}</strong>
      </Typography>
    </>
  );
};

export default ArmorClassesContainer;
