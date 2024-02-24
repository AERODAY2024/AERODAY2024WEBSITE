function getRandomElement(arr) {
  if (arr.length === 0) {
    return undefined; // Return undefined for an empty array
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export { getRandomElement };
