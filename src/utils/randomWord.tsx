export function randomWord(): number {
  const min = 0;
  const max = 9;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
