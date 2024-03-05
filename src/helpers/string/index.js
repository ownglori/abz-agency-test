export const phone = (string) => {
  const symbols = string.split("");

  return [...symbols.slice(0, 3), " (", ...symbols.slice(3, 6), ") ", ...symbols.slice(6, 9), " ", ...symbols.slice(9, 11), " ", ...symbols.slice(11, 13)].join("");
};
