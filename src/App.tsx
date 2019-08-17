import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import { CharacterProvider } from "./character/CharacterContext";
import CharacterSheetContainer from "./containers/character/CharacterSheetContainer";
import Alert from "./components/layout/Alert";
import withStyles, { CSSProperties } from "@material-ui/core/styles/withStyles";

const styles: Record<string, CSSProperties> = {
  container: {
    maxWidth: 1000,
    width: "100%",
    margin: "0 auto"
  }
};

interface AppProps {
  classes: Record<string, string>;
}

const App: React.FC<AppProps> = ({ classes }) => (
  <CharacterProvider>
    <CssBaseline />
    <Alert />
    <div className={classes.container}>
      <CharacterSheetContainer />
    </div>
  </CharacterProvider>
);

export default withStyles(styles)(App);
