export const handleTokenCount = (e, gearCount) => {
  let updatedCount = { ...gearCount };
  if (
    e.target.id === "head" &&
    e.target.value === "Yes" &&
    updatedCount.head < 1
  ) {
    updatedCount.head = 1;
    setGearCount(updatedCount);
  } else if (
    e.target.id === "head" &&
    e.target.value === "No" &&
    updatedCount.head > 0
  ) {
    updatedCount.head = 0;
    setGearCount(updatedCount);
  } else if (
    e.target.id === "shoulders" &&
    e.target.value === "Yes" &&
    updatedCount.shoulders < 1
  ) {
    updatedCount.shoulders = 1;
    setGearCount(updatedCount);
  } else if (
    e.target.id === "shoulders" &&
    e.target.value === "No" &&
    updatedCount.shoulders > 0
  ) {
    updatedCount.shoulders = 0;
    setGearCount(updatedCount);
  } else if (
    e.target.id === "chest" &&
    e.target.value === "Yes" &&
    updatedCount.chest < 1
  ) {
    updatedCount.chest = 1;
    setGearCount(updatedCount);
  } else if (
    e.target.id === "chest" &&
    e.target.value === "No" &&
    updatedCount.chest > 0
  ) {
    updatedCount.chest = 0;
    setGearCount(updatedCount);
  } else if (
    e.target.id === "gloves" &&
    e.target.value === "Yes" &&
    updatedCount.gloves < 1
  ) {
    updatedCount.gloves = 1;
    setGearCount(updatedCount);
  } else if (
    e.target.id === "gloves" &&
    e.target.value === "No" &&
    updatedCount.gloves > 0
  ) {
    updatedCount.gloves = 0;
    setGearCount(updatedCount);
  } else if (
    e.target.id === "legs" &&
    e.target.value === "Yes" &&
    updatedCount.legs < 1
  ) {
    updatedCount.legs = 1;
    setGearCount(updatedCount);
  } else if (
    e.target.id === "legs" &&
    e.target.value === "No" &&
    updatedCount.legs > 0
  ) {
    updatedCount.legs = 0;
    setGearCount(updatedCount);
  }
  console.log(updatedCount);
};
