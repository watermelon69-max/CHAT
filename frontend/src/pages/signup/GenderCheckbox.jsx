import React from "react";

const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className="flex gap-6">
      <label
        className={`label cursor-pointer gap-2 ${selectedGender === "male" ? "selected" : ""}`}
      >
        <span className="label-text">Male</span>
        <input
          type="radio"
          name="gender"
          value="male"
          className="radio radio-primary"
          checked={selectedGender === "male"}
          onChange={() => onCheckboxChange("male")}
        />
      </label>

      <label
        className={`label cursor-pointer gap-2 ${selectedGender === "female" ? "selected" : ""}`}
      >
        <span className="label-text">Female</span>
        <input
          type="radio"
          name="gender"
          value="female"
          className="radio radio-primary"
          checked={selectedGender === "female"}
          onChange={() => onCheckboxChange("female")}
        />
      </label>
    </div>
  );
};

export default GenderCheckbox;
