import * as React from "react";
import { sendAlert } from "../components/layout/Alert";

const rollDiceWithSides = (sides: number) => () =>
  Math.floor(Math.random() * sides) + 1;

const rollD20 = rollDiceWithSides(20);

const makeRoll = (modifier: number) => () => {
  const roll = rollD20();
  if (roll === 20) {
    return (
      <>
        <div>
          <strong>NATURAL 20!</strong>
        </div>
        <div>
          <span>
            {roll} + {modifier} = <strong>{roll + modifier}</strong>
          </span>
        </div>
      </>
    );
  }
  return (
    <span>
      {roll} + {modifier} = <strong>{roll + modifier}</strong>
    </span>
  );
};

const alertRoll = (modifier: number) => () => sendAlert(makeRoll(modifier)());

export { rollDiceWithSides, rollD20, makeRoll, alertRoll };
