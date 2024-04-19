function getStudentsByLocation(arr, city) {
  const result = arr.filter((cursor) => cursor.location === city);
  return result;
}

export default getStudentsByLocation;
