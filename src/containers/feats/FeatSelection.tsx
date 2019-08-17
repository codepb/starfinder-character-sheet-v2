import * as React from "react";
import { useState } from "react";
import useFeats from "../../character/useFeats";
import feats, { FeatName } from "../../rules/feats";
import Select from "../../components/form/Select";
import FeatsContainer from "../characterDetails/FeatsContainer";
import { Button } from "@material-ui/core";
import FeatDetails from "../../components/characterDetails/FeatDetails";

const FeatSelection: React.FC = () => {
  const { addFeat } = useFeats();
  const [selectedFeat, setSelectedFeat] = useState(null as FeatName | null);

  return (
    <>
      <FeatsContainer />
      <div>
        <Select
          id="feat-select"
          label="Feat"
          options={feats.map(f => f.name)}
          value={selectedFeat || ""}
          onChange={e => setSelectedFeat(e.target.value as FeatName)}
        />
      </div>
      {selectedFeat && (
        <>
          <div>
            <FeatDetails feat={feats.find(f => f.name === selectedFeat)!} />
          </div>
          <Button
            color="primary"
            onClick={() => addFeat(selectedFeat!)}
            disabled={selectedFeat == null}
          >
            Add Feat
          </Button>
        </>
      )}
    </>
  );
};

export default FeatSelection;
