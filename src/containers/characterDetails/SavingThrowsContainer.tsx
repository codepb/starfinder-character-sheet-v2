import * as React from "react";
import SavingThrows from "../../components/characterDetails/SavingThrows";
import useSavingThrows from "../../character/useSavingThrows";

const SavingThrowsContainer: React.FC = () => {
  const {
    fortitude,
    reflex,
    will,
    misc,
    setMiscSavingThrow
  } = useSavingThrows();

  return (
    <SavingThrows
      fortitude={fortitude}
      reflex={reflex}
      will={will}
      misc={misc}
      onMiscChange={setMiscSavingThrow}
    />
  );
};

export default SavingThrowsContainer;
