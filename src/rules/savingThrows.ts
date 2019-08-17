import { AbilityScores } from "../character/useAbilityScores";

export enum SavingThrow {
  FORTITUDE = "fortitude",
  REFLEX = "reflex",
  WILL = "will"
}

export interface SavingThrowModifiers {
  [SavingThrow.FORTITUDE]: number;
  [SavingThrow.REFLEX]: number;
  [SavingThrow.WILL]: number;
}

interface SavingThrowDefinition {
  name: SavingThrow;
  associatedAbility: keyof AbilityScores;
}

const SavingThrowDefinitions = {
  [SavingThrow.FORTITUDE]: <SavingThrowDefinition>{
    name: SavingThrow.FORTITUDE,
    associatedAbility: "constitution"
  },
  [SavingThrow.REFLEX]: <SavingThrowDefinition>{
    name: SavingThrow.REFLEX,
    associatedAbility: "dexterity"
  },
  [SavingThrow.WILL]: <SavingThrowDefinition>{
    name: SavingThrow.WILL,
    associatedAbility: "wisdom"
  }
};

export { SavingThrowDefinitions };
