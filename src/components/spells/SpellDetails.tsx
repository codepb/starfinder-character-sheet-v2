import * as React from "react";
import spells from "../../rules/spells";
import { Typography } from "@material-ui/core";
import DisplayValue from "../layout/DisplayValue";
import withStyles, { CSSProperties } from "@material-ui/core/styles/withStyles";

type Classes = "properties";

const styles: Record<Classes, CSSProperties> = {
  properties: {
    marginTop: 10
  }
};

interface SpellDetailsProps {
  spell: string;
  classes: Record<Classes, string>;
}

const SpellDetails: React.FC<SpellDetailsProps> = ({ spell, classes }) => {
  const spellDetails = spells[spell];

  return (
    <>
      <Typography variant="h6">{spell}</Typography>
      <Typography>
        {spellDetails.Classes.map(c => `${c.class} (${c.level})`).join(" / ")}
      </Typography>
      <Typography>{spellDetails.Description}</Typography>
      <div className={classes.properties}>
        <DisplayValue label="Casting Time">
          {spellDetails.CastingTime}
        </DisplayValue>
        <DisplayValue label="Duration">{spellDetails.Duration}</DisplayValue>
        <DisplayValue label="Range">{spellDetails.Range}</DisplayValue>
        <DisplayValue label="Saving Throw">
          {spellDetails.SavingThrow}
        </DisplayValue>
        <DisplayValue label="School">{spellDetails.School}</DisplayValue>
        <DisplayValue label="Spell Resistance">
          {spellDetails.SpellResistance}
        </DisplayValue>
        <DisplayValue label="Targets Effect Area">
          {spellDetails.TargetsEffectArea}
        </DisplayValue>
        {spellDetails.Descriptor && (
          <DisplayValue label="Descriptors">
            {spellDetails.Descriptor.join(",")}
          </DisplayValue>
        )}
        {spellDetails.Variants && (
          <DisplayValue label="Variants">
            {spellDetails.Variants.join(", ")}
          </DisplayValue>
        )}
      </div>
    </>
  );
};

export default withStyles(styles)(SpellDetails);
