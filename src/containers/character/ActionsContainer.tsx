import * as React from "react";
import { downloadCharacter } from "../../services/storageService";
import { Button } from "@material-ui/core";
import { useContext } from "react";
import CharacterContext from "../../character/CharacterContext";
import UploadButton from "./UploadButton";

const ActionsContainer: React.FC = () => {
  const [character] = useContext(CharacterContext);

  return (
    <>
      <Button onClick={() => downloadCharacter(character)}>Download</Button>
      <UploadButton />
    </>
  );
};

export default ActionsContainer;
