import React, { useState } from "react";

const ToggleButton = () => {
  const [isActive, setActive] = useState(false);

  const toggleClassActive = () => {
    setActive(!isActive);
  };

  return (
    <div className="flex mt-5 bg-magnolia justify-center py-4 rounded-lg">
      <span
        className={`font-medium ${
          isActive ? "text-coolGray" : "text-marineBlue"
        }`}
      >
        Monthly
      </span>
      <label className="relative inline-flex items-center cursor-pointer bg-marineBlue rounded-full mx-3">
        <input
          id="checkboxToggle"
          type="checkbox"
          className="sr-only peer"
          onChange={toggleClassActive}
        />
        <div className="w-11 h-6 rounded-full peer-checked:after:translate-x-full after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
      </label>
      <span
        className={`font-medium ${
          isActive ? "text-marineBlue" : "text-coolGray"
        }`}
      >
        Yearly
      </span>
    </div>
  );
};

export default ToggleButton;
