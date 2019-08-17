import * as React from "react";
import { Dialog, Typography } from "@material-ui/core";
import { ReactNode, useState, useEffect } from "react";
import Container from "./Container";

let callback = (_node: ReactNode) => {};

let closeCallback = () => {};

const sendAlert = (node: ReactNode | string) => {
  if (callback) {
    callback(node);
  }
};

const closeAlert = () => {
  if (closeCallback) {
    closeCallback();
  }
};

const Alert: React.FC = () => {
  const [children, setChildren] = useState(null as ReactNode);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    callback = (node: ReactNode | string) => {
      setChildren(node);
      setOpen(true);
    };
    closeCallback = () => setOpen(false);
    return () => {
      callback = (_node: ReactNode | string) => {};
      closeCallback = () => {};
    };
  });
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <Container>
        {typeof children === "string" ? (
          <Typography>{children}</Typography>
        ) : (
          children
        )}
      </Container>
    </Dialog>
  );
};

export default Alert;

export { sendAlert, closeAlert };
