import { BigNumber } from "@ethersproject/bignumber";
import { formatEther } from "@ethersproject/units";

export const round = (num: number, dp: number) => {
  let divBy: string | number = "1";
  for (let i = 0; i < dp; i++) {
    divBy += "0";
  }
  divBy = parseInt(divBy);
  return Math.round(num * divBy + Number.EPSILON) / divBy;
};

export const ethToNumber = (num: string | BigNumber | number): number => {
  let output: string | BigNumber;
  if (num instanceof BigNumber || typeof num === "string") {
    output = formatEther(num);
  } else {
    output = num.toString();
    output = BigNumber.from(num);
    output = formatEther(output);
  }
  return Number(output);
};
