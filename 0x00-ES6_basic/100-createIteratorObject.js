export default function createIteratorObject(report) {
  const arr = [];
  Object.entries(report.allEmployees).forEach(([key, value]) => {
    for (const ar of value) {
      if (key) {
        arr.push(ar);
      }
    }
  });
  return arr;
}
