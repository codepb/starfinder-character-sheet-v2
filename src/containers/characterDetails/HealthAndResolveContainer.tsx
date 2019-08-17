import * as React from "react";
import HealthAndResolve from "../../components/characterDetails/HealthAndResolve";
import useHealth from "../../character/useHealth";
import { useLevels } from "../../services/classService";

const HealthAndResolveContainer: React.FC = () => {
  const levels = useLevels();
  const {
    max,
    damage,
    addDamage,
    restoreHealth,
    restoreStamina,
    tenMinuteRest,
    overnightRest,
    twentyFourHourRest,
    stabilize,
    canStabilize,
    stayInFight,
    canStayInFight
  } = useHealth();

  return (
    <HealthAndResolve
      maxHealth={max.health}
      maxResolve={max.resolve}
      maxStamina={max.stamina}
      damage={damage}
      addDamage={addDamage}
      restoreHealth={restoreHealth}
      restoreStamina={restoreStamina}
      tenMinuteRest={tenMinuteRest}
      overnightRest={overnightRest}
      twentyFourHourRest={twentyFourHourRest}
      stabilize={stabilize}
      canStabilize={canStabilize}
      stayInFight={stayInFight}
      canStayInFight={canStayInFight}
    />
  );
};

export default HealthAndResolveContainer;
