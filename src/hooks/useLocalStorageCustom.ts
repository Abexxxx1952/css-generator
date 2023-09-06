import { transformDataToLocalStorageType } from "../utils/transformDataToLocalStorage";

export type useLocalStorageCustomType = ReturnType<
  typeof useLocalStorageCustom
>;

export type useLocalStorageOneCustomType = useLocalStorageCustomType[number];

export const useLocalStorageCustom = () => {
  const kayAndValueArr = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i) as string;
    let item!: transformDataToLocalStorageType;
    try {
      const itemString = window.localStorage.getItem(key) as string;
      item = JSON.parse(itemString);
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
    }

    kayAndValueArr[i] = [key, item];
  }
  return kayAndValueArr;
};
