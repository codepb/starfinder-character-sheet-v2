import * as React from "react";
import {
  List,
  ListItem,
  IconButton,
  Button,
  Typography
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import feats, { FeatName } from "../../rules/feats";
import { sendAlert } from "../layout/Alert";
import FeatDetails from "./FeatDetails";

interface FeatsProps {
  selectedFeats: FeatName[];

  onRemoveFeat(feat: FeatName): void;
}

const Feats: React.FC<FeatsProps> = ({ selectedFeats, onRemoveFeat }) => (
  <List>
    {selectedFeats.map(f => (
      <ListItem
        key={f}
        onClick={() =>
          sendAlert(<FeatDetails feat={feats.find(feat => feat.name === f)!} />)
        }
      >
        <Typography>
          {f}{" "}
          <Button
            aria-label="Delete"
            color="secondary"
            onClick={e => {
              e.stopPropagation();
              onRemoveFeat(f);
            }}
          >
            <DeleteIcon fontSize="small" />
          </Button>
        </Typography>
      </ListItem>
    ))}
  </List>
);

export default Feats;
