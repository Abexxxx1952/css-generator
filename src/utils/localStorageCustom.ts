import { transformDataToLocalStorageType } from "./transformDataToLocalStorage";

type LocalStorageCustomReturnType = ReturnType<typeof localStorageCustom>;
export type SetLocalStorageCustomType = React.Dispatch<
  React.SetStateAction<LocalStorageCustomReturnType>
>;

export type LocalStorageOneCustomType = LocalStorageCustomReturnType[number];

export const localStorageCustom = () => {
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
