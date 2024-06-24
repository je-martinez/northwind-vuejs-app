const removeSpacesAndSpecialCharacters = (input: string): string => {
  // Use a regular expression to match all non-alphanumeric characters and spaces
  return input.replace(/[^a-zA-Z0-9]/g, "");
};

export { removeSpacesAndSpecialCharacters };
