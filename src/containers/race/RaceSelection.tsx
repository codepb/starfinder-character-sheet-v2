import * as React from "react";
import SelectionPage from "../../components/characterCreation/SelectionPage";
import useBasicStats from "../../character/useBasicStats";
import { Race } from "../../rules/races";
import Container from "../../components/layout/Container";

interface RaceSelectionProps {
  onNext(): void;
  onPrevious(): void;
}

const RaceSelection: React.FC<RaceSelectionProps> = ({
  onNext,
  onPrevious
}) => {
  const {
    basicStats: { race },
    setRace
  } = useBasicStats();
  return (
    <SelectionPage
      id="race-select"
      label="Race"
      options={Object.values(Race)}
      value={race}
      onChange={event => setRace(event.target.value as Race)}
      onNext={onNext}
      onPrevious={onPrevious}
    />
  );
};

export default RaceSelection;
