const getRandomColor = () => {
  // Define Tailwind CSS color palette
  const tailwindColors = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];

  // Select a random color from the palette
  const color =
    tailwindColors[Math.floor(Math.random() * tailwindColors.length)];

  // If the color is gray, select a shade between 100 and 900
  const shade =
    color === "gray"
      ? Math.floor(Math.random() * 9 + 1) * 100
      : Math.floor(Math.random() * 10) * 100;

  // Return the randomly generated color
  return `${color}-${shade}`;
};

export { getRandomColor };
