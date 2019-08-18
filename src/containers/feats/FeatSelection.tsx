import * as React from "react";
import FeatsContainer from "../characterDetails/FeatsContainer";
import FeatSelectionContainer from "./FeatSelectionContainer";

const FeatSelection: React.FC = () => {
  return (
    <>
      <FeatsContainer />
      <FeatSelectionContainer />
    </>
  );
};

export default FeatSelection;
