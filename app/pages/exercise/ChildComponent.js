import React from "react";
import { Box } from "../../components/shared/ui/index";

function ChildComponent(props) {
  const { selectedOption, setSelectedOption } = props;

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSelectedOption(newValue);
  };

  return (
    <Box>
      <label style={{ marginRight: "10px" }}>
        <input
          type="radio"
          value="1"
          checked={selectedOption === "1"}
          onChange={handleChange}
        />
        First
      </label>
      <label style={{ marginRight: "10px" }}>
        <input
          type="radio"
          value="2"
          checked={selectedOption === "2"}
          onChange={handleChange}
        />
        Second
      </label>
      <label>
        <input
          type="radio"
          value="3"
          checked={selectedOption === "3"}
          onChange={handleChange}
        />
        Third
      </label>
    </Box>
  );
}

export default ChildComponent;
