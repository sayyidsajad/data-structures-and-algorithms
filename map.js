const map = new Map([
  ["c", 6],
  ["a", 5],
  ["b", 4],
]);
console.log(map.has("c"));
for (const [item, value] of map) {
  console.log(item, value);
}
