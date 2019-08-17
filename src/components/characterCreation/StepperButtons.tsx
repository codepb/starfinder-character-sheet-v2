import * as React from "react";
import { Button } from "@material-ui/core";
import withStyles, { CSSProperties } from "@material-ui/core/styles/withStyles";

const styles: Record<string, CSSProperties> = {
  container: {
    position: "relative",
    marginTop: 10
  },
  next: {},
  previous: {
    marginRight: 10
  }
};

interface StepperButtonsProps {
  onNext?(): void;
  onPrevious?(): void;
  final?: boolean;
  classes: Record<string, string>;
}

const StepperButtons: React.FC<StepperButtonsProps> = ({
  onPrevious,
  onNext,
  final,
  classes
}) => (
  <div className={classes.container}>
    {onPrevious && (
      <Button
        className={classes.previous}
        variant="contained"
        onClick={onPrevious}
      >
        Back
      </Button>
    )}
    {onNext && (
      <Button
        className={classes.next}
        variant="contained"
        color="primary"
        onClick={onNext}
      >
        {final ? "Finish" : "Next"}
      </Button>
    )}
  </div>
);

export default withStyles(styles)(StepperButtons);
