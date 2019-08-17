import * as React from "react";
import { Button } from "@material-ui/core";
import { FILE_EXTENSION, uploadChracter } from "../../services/storageService";
import CharacterContext from "../../character/CharacterContext";

const UploadButton: React.FC = () => {
  const [, { setCharacter }] = React.useContext(CharacterContext);
  return (
    <Button component="label" style={{ width: 56 }}>
      Upload
      <input
        type="file"
        accept={`.${FILE_EXTENSION}`}
        onChange={async ev => {
          const file = ev.target.files && ev.target.files[0];
          if (
            !file ||
            (file.name
              .split(".")
              .pop()!
              .toLowerCase() !== FILE_EXTENSION)
          ) {
            alert("file not correct format");
            return;
          }
          const character = await uploadChracter(file);
          console.log(character);
          setCharacter(character);
        }}
        style={{ visibility: "hidden", height: 0, width: 0 }}
      />
    </Button>
  );
};

export default UploadButton;
