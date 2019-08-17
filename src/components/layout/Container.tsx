import * as React from "react";
import { Paper } from "@material-ui/core";
import withStyles, {
  CSSProperties,
  StyleRulesCallback
} from "@material-ui/core/styles/withStyles";

const styles: StyleRulesCallback<string> = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    height: "100%",
    position: "relative"
  }
});

interface ContainerProps {
  classes: Record<string, string>;
}

const Container: React.FC<ContainerProps> = ({ children, classes }) => (
  <Paper className={classes.root}>{children}</Paper>
);

export default withStyles(styles)(Container);
