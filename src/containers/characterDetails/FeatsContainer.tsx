import * as React from "react";
import useFeats from "../../character/useFeats";
import Feats from "../../components/characterDetails/Feats";
import FeatSelectionContainer from "../feats/FeatSelectionContainer";

const FeatsContainer: React.FC = () => {
  const { feats, removeFeat } = useFeats();

  return (
    <>
      <Feats selectedFeats={feats} onRemoveFeat={removeFeat} />
      <FeatSelectionContainer />
    </>
  );
};

export default FeatsContainer;
