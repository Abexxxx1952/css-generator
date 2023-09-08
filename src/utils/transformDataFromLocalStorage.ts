import {
  cssPropertyType,
  FigureType,
  OnePropertyValueType,
} from "../page/Tools";
import { cssProperty as cssPropertyConstant } from "../constants/constants";

export type FigureTransform = { propertyName: "Figure"; value: FigureType };

export const transformDataFromLocalStorage = (key: string) => {
  let item!: Array<any>;
  try {
    const itemString = window.localStorage.getItem(key) as string;
    item = JSON.parse(itemString);
  } catch (error) {
    console.warn(`Error reading localStorage key “${key}”:`, error);
  }

  const figure: FigureTransform = item[0];
  const cssPropertyFromLocalStorage: cssPropertyType = item.slice(1);

  const cssProperty: cssPropertyType = [];

  cssPropertyConstant.forEach((elemConstant) => {
    cssProperty.push(elemConstant as OnePropertyValueType);
    cssPropertyFromLocalStorage.forEach((elemFromLocalStorage) => {
      if (elemConstant.propertyName === elemFromLocalStorage.propertyName) {
        const combinedElem = {
          ...elemConstant,
          ...elemFromLocalStorage,
          active: true,
        };
        cssProperty.pop();
        cssProperty.push(combinedElem as OnePropertyValueType);
      }
    });
  });

  return { figure, cssProperty };
};
