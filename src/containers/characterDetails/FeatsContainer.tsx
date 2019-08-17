import * as React from "react";
import useFeats from "../../character/useFeats";
import Feats from "../../components/characterDetails/Feats";

const FeatsContainer: React.FC = () => {
  const { feats, removeFeat } = useFeats();

  return <Feats selectedFeats={feats} onRemoveFeat={removeFeat} />;
};

export default FeatsContainer;
