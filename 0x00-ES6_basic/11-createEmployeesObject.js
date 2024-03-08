export default function createEmployeesObject(departmentName, employees) {
  const format = { [`${departmentName}`]: `[ '${employees.join("', '")}' ]` };
  return format;
}
