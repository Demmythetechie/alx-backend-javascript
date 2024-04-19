function getStudentIdsSum(arr) {
  const result = arr.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
  return result;
}

export default getStudentIdsSum;
