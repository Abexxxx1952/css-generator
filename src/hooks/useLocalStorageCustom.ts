export const useLocalStorageCustom = () => {
  const kayAndValueArr = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i) as string;
    let item!: string;
    try {
      item = window.localStorage.getItem(key) as string;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
    }

    kayAndValueArr[i] = [key, item];
  }
  return kayAndValueArr;
};
