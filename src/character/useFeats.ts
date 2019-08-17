import { useContext } from "react";
import CharacterContext from "./CharacterContext";
import { FeatName } from "../rules/feats";
import { distinct, remove } from "../services/arrayService";

const useFeats = () => {
  const [{ feats }, { setFeats }] = useContext(CharacterContext);

  return {
    feats,
    addFeat: (feat: FeatName) => {
      setFeats(previous => distinct([...previous, feat]));
    },
    removeFeat: (feat: FeatName) => {
      setFeats(previous => remove(previous)(feat));
    }
  };
};

export default useFeats;
