import * as React from "react";
import { Feat } from "../../rules/feats";
import { Typography } from "@material-ui/core";
import CheckboxIcon from "@material-ui/icons/CheckBox";
import CheckboxBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import DisplayValue from "../layout/DisplayValue";

const FeatDetails: React.FC<{ feat: Feat }> = ({ feat }) => (
  <>
    <Typography variant="h5">{feat.name}</Typography>
    <DisplayValue label="Prerequisites">{feat.prerequisites}</DisplayValue>
    <DisplayValue label="Combat Feat">
      {feat.isCombatFeat ? <CheckboxIcon /> : <CheckboxBlankIcon />}
    </DisplayValue>
    <DisplayValue label="Benefit">{feat.benefit}</DisplayValue>
  </>
);

export default FeatDetails;
