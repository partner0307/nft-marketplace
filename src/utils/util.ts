export const tokillo = (n: number) =>
  Number(n) < 1000 ? String(n) : `${~~(Number(n) / 1000)}k`;
