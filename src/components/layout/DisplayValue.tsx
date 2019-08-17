import * as React from "react";
import { Typography } from "@material-ui/core";

interface DisplayValueProps {
  label: string;
}

const DisplayValue: React.FC<DisplayValueProps> = ({ label, children }) => (
  <Typography component="div">
    <strong>{label}:</strong> {children}
  </Typography>
);

export default DisplayValue;
