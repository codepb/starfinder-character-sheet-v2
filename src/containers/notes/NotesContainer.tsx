import * as React from "react";
import { Typography, TextField } from "@material-ui/core";
import useNotes from "../../character/useNotes";
import Container from "../../components/layout/Container";
import withStyles, { CSSProperties } from "@material-ui/core/styles/withStyles";
import HasClasses from "../../interfaces/HasClasses";

type Classes = "notesInput";

const styles: Record<Classes, CSSProperties> = {
  notesInput: {
    width: "100%"
  }
};

const NotesContainer: React.FC<HasClasses<Classes>> = ({ classes }) => {
  const [notes, setNotes] = useNotes();

  return (
    <Container>
      <TextField
        id="notes-text-input"
        value={notes}
        onChange={e => {
          setNotes(e.target.value);
        }}
        className={classes.notesInput}
        InputProps={{ disableUnderline: true }}
        multiline
        margin="normal"
      />
    </Container>
  );
};

export default withStyles(styles)(NotesContainer);
