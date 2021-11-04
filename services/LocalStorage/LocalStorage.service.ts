import { LocalStorageInterface } from "types";
// Expose getters and setters for local storage
export const LocalStorage: LocalStorageInterface = {
  get(key: string) {
    return window.localStorage.getItem(key);
  },
  set(key: string, value: string) {
    window.localStorage.setItem(key, value);
    return window.localStorage.getItem(key);
  },
  remove(key: string) {
    window.localStorage.removeItem(key);
  },
  clear() {
    window.localStorage.clear();
  },
};
