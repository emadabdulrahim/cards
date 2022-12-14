export const space = {
  0: "0px",
  1: "1px",
  2: "0.125rem",
  4: "0.25rem",
  6: "0.375rem",
  8: "0.5rem",
  10: "0.625rem",
  12: "0.75rem",
  14: "0.875rem",
  16: "1rem",
  20: "1.25rem",
  24: "1.5rem",
  28: "1.75rem",
  32: "2rem",
  36: "2.25rem",
  40: "2.5rem",
  44: "2.75rem",
  48: "3rem",
  56: "3.5rem",
  64: "4rem",
  80: "5rem",
  96: "6rem",
  112: "7rem",
  128: "8rem",
  144: "9rem",
  160: "10rem",
  176: "11rem",
  192: "12rem",
  208: "13rem",
  224: "14rem",
  240: "15rem",
  256: "16rem",
  288: "18rem",
  320: "20rem",
  384: "24rem",
} as const;

export const spaceAliases = {
  gutter: space[20],

  sm1: space[2],
  sm2: space[4],
  sm3: space[8],
  sm4: space[10],
  sm5: space[12],

  md1: space[16],
  md2: space[20],
  md3: space[24],
  md4: space[28],
  md5: space[32],

  lg1: space[40],
  lg2: space[48],
  lg3: space[56],
  lg4: space[64],
  lg5: space[80],
} as const;

export type SpaceToken =
  | `$${keyof typeof space}`
  | `$${keyof typeof spaceAliases}`;
