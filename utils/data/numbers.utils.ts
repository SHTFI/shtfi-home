export const round = (num: number, dp: number) => {
  let divBy: string | number = "1";
  for (let i = 0; i < dp; i++) {
    divBy += "0";
  }
  divBy = parseInt(divBy);
  return Math.round(num * divBy + Number.EPSILON) / divBy;
};
