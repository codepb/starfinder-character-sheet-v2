import * as React from "react";
import AlignmentSelection from "../../components/characterDetails/AlignmentSelection";
import useDetails from "../../character/useDetails";
import DeitySelection from "../../components/characterDetails/DeitySelection";
import DescriptionInput from "../../components/characterDetails/DescriptionInput";
import HomeWorldSelection from "../../components/characterDetails/HomeWorldSelection";
import LanguagesInput from "../../components/characterDetails/LanguagesInput";
import NameInput from "../../components/characterDetails/NameInput";
import SizeSelection from "../../components/characterDetails/SizeSelection";

const CharacterDetails: React.FC = () => {
  const {
    details,
    setAlignment,
    setDeity,
    setDescription,
    setHomeWorld,
    setLanguages,
    setName,
    setSize
  } = useDetails();
  return (
    <>
      <div>
        <NameInput value={details.name} onChange={setName} />
      </div>
      <div>
        <AlignmentSelection value={details.alignment} onChange={setAlignment} />
      </div>
      <div>
        <DeitySelection value={details.deity} onChange={setDeity} />
      </div>
      <div>
        <DescriptionInput
          value={details.description}
          onChange={setDescription}
        />
      </div>
      <div>
        <HomeWorldSelection value={details.homeWorld} onChange={setHomeWorld} />
      </div>
      <div>
        <LanguagesInput value={details.languages} onChange={setLanguages} />
      </div>
      <div>
        <SizeSelection value={details.size} onChange={setSize} />
      </div>
    </>
  );
};

export default CharacterDetails;
