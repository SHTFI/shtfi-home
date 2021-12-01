export interface LocalStorageInterface {
  get: (key: string) => string | null;
  set: (key: string, value: string) => string | null;
  remove: (key: string) => void;
  clear: () => void;
}

type Colors =
  | "light-blue"
  | "blue"
  | "dark-blue"
  | "brown"
  | "dark-brown"
  | "light"
  | "dark";

type Sizes = "tiny" | "small" | "medium" | "large" | "full-width";

type CoinDistribution = {
  supply: number | string;
  devFund: number | string;
  preMine: number | string;
  marketing: number | string;
  farm: number | "percent";
};
