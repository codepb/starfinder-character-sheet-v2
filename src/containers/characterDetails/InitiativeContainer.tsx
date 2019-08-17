import * as React from "react";
import Initiative from "../../components/characterDetails/Initiative";
import useInitiative from "../../character/useInitiative";

const InitiativeContainer: React.FC = () => {
  const { initiative, misc, updateMisc } = useInitiative();

  return (
    <Initiative initiative={initiative} misc={misc} onMiscChange={updateMisc} />
  );
};

export default InitiativeContainer;
