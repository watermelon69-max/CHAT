import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="flex gap-6">
      <label className="label cursor-pointer gap-2">
        <span className="label-text">Male</span>
        <input
          type="radio"
          name="gender"
          value="male"
          className="radio radio-primary"
        />
      </label>

      <label className="label cursor-pointer gap-2">
        <span className="label-text">Female</span>
        <input
          type="radio"
          name="gender"
          value="female"
          className="radio radio-primary"
        />
      </label>
    </div>
  );
};

export default GenderCheckbox;
