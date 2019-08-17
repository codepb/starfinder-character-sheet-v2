import * as React from "react";
import useAttackBonuses from "../../character/useAttackBonuses";
import AttackBonuses from "../../components/characterDetails/AttackBonuses";
import { Typography } from "@material-ui/core";

const AttackBonusesContainer: React.FC = () => {
  const {
    melee,
    ranged,
    thrown,
    baseAttackBonus,
    misc,
    setMiscAttackBonuses
  } = useAttackBonuses();

  return (
    <>
      <AttackBonuses
        melee={melee}
        ranged={ranged}
        thrown={thrown}
        misc={misc}
        onMiscChange={setMiscAttackBonuses}
      />
      <Typography component="div">
        Base Attack Bonus: <strong>{baseAttackBonus}</strong>
      </Typography>
    </>
  );
};

export default AttackBonusesContainer;
