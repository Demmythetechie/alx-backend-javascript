function getListStudentIds(arr) {
  let result = [];
  if (typeof arr !== 'object') {
    result = [];
  } else {
    result = arr.map((cursor) => cursor.id);
  }
  return result;
}

export default getListStudentIds;
