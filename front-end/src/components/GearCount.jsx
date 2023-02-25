import React from "react";

const GearCount = ({ gearCount }) => {
  let newGear = { ...gearCount };
  let count = 0;
  Object.keys(newGear).map((item) => (count += newGear[item]));

  return (
    <>
      <input type="number" name="" id="totalTierCount" value={count} readOnly />
    </>
  );
};

export default GearCount;
