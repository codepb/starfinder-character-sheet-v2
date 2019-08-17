import { Character } from "../character/CharacterContext";
import lzString from "lz-string";
import { saveAs } from "file-saver";
import { SkillLevels } from "../character/useSkills";

export interface SkillsV1 {
  acrobatics?: boolean;
  athletics?: boolean;
  bluff?: boolean;
  computers?: boolean;
  culture?: boolean;
  diplomacy?: boolean;
  disguise?: boolean;
  engineering?: boolean;
  intimidate?: boolean;
  lifeScience?: boolean;
  medicine?: boolean;
  mysticism?: boolean;
  perception?: boolean;
  physicalScience?: boolean;
  piloting?: boolean;
  profession1?: boolean;
  profession2?: boolean;
  senseMotive?: boolean;
  sleightOfHand?: boolean;
  stealth?: boolean;
  survival?: boolean;
}

export interface SkillsLevelsV1 {
  levels: SkillsV1[];
  misc: SkillLevels;
}

interface CharacterStorageV1
  extends Omit<Character, "skills">,
    CharacterStorageVersion {
  skills: SkillsLevelsV1;
}

interface CharacterStorageVersion {
  version: string;
}

interface CharacterStorage extends Character, CharacterStorageVersion {}

const version = "2";

const key = "character";

const FILE_EXTENSION = "sfsheet";

const save = (characterState: Character) => {
  localStorage.setItem(key, JSON.stringify({ ...characterState, version }));
};

const load = () => {
  const storedCharacterJSON = localStorage.getItem("character");
  if (storedCharacterJSON == null) {
    return null;
  }
  const storedCharacterVersion = JSON.parse(
    storedCharacterJSON
  ) as CharacterStorageVersion;
  return processVersion(storedCharacterVersion);
};

const processVersion = (characterStorageVersion: CharacterStorageVersion) => {
  if (characterStorageVersion.version === version) {
    const characterStorage = characterStorageVersion as CharacterStorage;
    const { version, ...character } = characterStorage;
    return character as Character;
  }
  if (characterStorageVersion.version === "1") {
    const characterStorage = characterStorageVersion as CharacterStorageV1;
    const { version, ...character } = characterStorage;
    const newSkills = character.skills.levels.map(
      s =>
        Object.keys(s).reduce(
          (rv, curr) => ({ ...rv, [curr]: s[curr] ? 1 : 0 }),
          {}
        ) as SkillLevels
    );
    return {
      ...character,
      skills: { levels: newSkills, misc: character.skills.misc }
    } as Character;
  }
  throw new Error("unknown version");
};

const downloadCharacter = (characterState: Character) => {
  const serializedState = JSON.stringify({ ...characterState, version });
  const compressed = lzString.compressToUTF16(serializedState);
  const blob = new Blob([compressed], { type: "text/plain;charset=utf-16" });
  saveAs(
    blob,
    `${
      characterState.details.name
        ? characterState.details.name
        : "StarfinderCharacter"
    }.${FILE_EXTENSION}`
  );
};

const uploadChracter = (file: File): Promise<Character> => {
  return new Promise(resolve => {
    const reader = new FileReader();
    function processFileContents() {
      const fileContents = reader.result as string;
      const uncompressed = lzString.decompressFromUTF16(fileContents);
      const deserialized = JSON.parse(uncompressed) as CharacterStorageVersion;
      const character = processVersion(deserialized);
      resolve(character);
    }

    reader.onloadend = processFileContents;
    reader.readAsText(file);
  });
};

export { save, load, downloadCharacter, uploadChracter, FILE_EXTENSION };
