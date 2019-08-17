import * as React from "react";
import SelectionPage from "../../components/characterCreation/SelectionPage";
import useBasicStats from "../../character/useBasicStats";
import { Theme } from "../../rules/themes";

interface ThemeSelectionProps {
  onNext?(): void;
}

const ThemeSelection: React.FC<ThemeSelectionProps> = ({ onNext }) => {
  const {
    basicStats: { theme },
    setTheme
  } = useBasicStats();
  return (
    <SelectionPage
      id="theme-select"
      label="Theme"
      options={Object.values(Theme)}
      value={theme}
      onChange={event => setTheme(event.target.value as Theme)}
      onNext={onNext}
    />
  );
};

export default ThemeSelection;
