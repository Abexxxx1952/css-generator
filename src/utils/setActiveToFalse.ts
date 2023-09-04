import { cssPropertyType } from "../page/Tools";

export const setActiveToFalse = (
  allProperty: cssPropertyType,
  propertyName: string
) =>
  allProperty.forEach((elem) => {
    if (elem.propertyName === propertyName) {
      elem.active = false;
    }
  });
