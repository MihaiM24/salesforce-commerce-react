import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div>
        <div>
            {selectedOption ? (
            <p>{selectedOption}</p>
            ) : (
            <p>Change me!</p>
            )}
        </div>
        <ChildComponent selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
    </div>
  );
}

export default ParentComponent;