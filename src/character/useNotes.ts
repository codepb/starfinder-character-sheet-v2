import CharacterContext from "./CharacterContext";
import { useContext } from "react";

const useNotes = (): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [{ notes }, { setNotes }] = useContext(CharacterContext);
  return [notes, setNotes];
};

export default useNotes;
